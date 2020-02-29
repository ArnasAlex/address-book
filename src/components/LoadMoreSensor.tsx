import React from "react";
import { elementInViewport, win } from "../utils";

const DEFAULT_THROTTLE = 300;
const DEFAULT_THRESHOLD = 300;

interface LoadMoreSensorProps {
  threshold?: number;
  throttle?: number;
  triggerValue?: string;
  onTrigger: () => void;
}

/**
 * Component listens to window scroll event and fires onTrigger prop when component is visible in the browser viewport
 */
export class LoadMoreSensor extends React.Component<LoadMoreSensorProps, {}> {
  private element?: HTMLElement | null;
  private triggeredOn?: number;

  render() {
    return (
      <div
        ref={ref => {
          this.element = ref;
        }}
      />
    );
  }

  componentDidMount() {
    this.attachScrollListener();
  }

  componentWillUnmount() {
    this.deattachScrollListener();
  }

  componentDidUpdate(prevProps: LoadMoreSensorProps) {
    if (prevProps.triggerValue !== this.props.triggerValue) {
      this.process();
    }
  }

  private attachScrollListener() {
    const scrollEl = win();
    scrollEl.addEventListener("scroll", this.process);
  }

  private deattachScrollListener() {
    const scrollEl = win();
    scrollEl.removeEventListener("scroll", this.process);
  }

  private process = () => {
    const el = this.element;
    if (!el) {
      return;
    }

    const { onTrigger, throttle = DEFAULT_THROTTLE } = this.props;
    const visible = this.checkVisible();
    if (!visible) {
      return;
    }

    const now = Date.now();
    if (this.triggeredOn != null && this.triggeredOn + throttle > now) {
      return;
    }

    this.triggeredOn = now;
    onTrigger();

    setTimeout(() => {
      this.process();
    }, DEFAULT_THROTTLE);
  };

  private checkVisible() {
    const el = this.element;
    if (!el) {
      return;
    }

    return elementInViewport(el, DEFAULT_THRESHOLD);
  }
}
