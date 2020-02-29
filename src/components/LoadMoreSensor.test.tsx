import { mount } from "enzyme";
import React from "react";
import * as utils from "../utils";
import { LoadMoreSensor } from "./LoadMoreSensor";

describe.only("LoadMoreSensor", () => {
  it("fires onTrigger when sensor is visible on the screen", () => {
    let scrollHandler;
    const winMock = {
      addEventListener: (_type, handler) => {
        scrollHandler = handler;
      }
    };

    jest.spyOn(utils, "win").mockReturnValue(winMock as any);
    jest.spyOn(utils, "elementInViewport").mockReturnValue(true);
    const onTrigger = jest.fn();

    mount(<LoadMoreSensor onTrigger={onTrigger} />);
    scrollHandler();

    expect(onTrigger).toBeCalled();
  });

  it("does not fire onTrigger when sensor is not visible", () => {
    let scrollHandler;
    const winMock = {
      addEventListener: (_type, handler) => {
        scrollHandler = handler;
      }
    };

    jest.spyOn(utils, "win").mockReturnValue(winMock as any);
    jest.spyOn(utils, "elementInViewport").mockReturnValue(false);
    const onTrigger = jest.fn();

    mount(<LoadMoreSensor onTrigger={onTrigger} />);
    scrollHandler();

    expect(onTrigger).not.toBeCalled();
  });
});
