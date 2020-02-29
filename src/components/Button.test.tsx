import { mount } from "enzyme";
import React from "react";
import { Button } from "./Button";

describe("Button", () => {
  it("renders button with label", () => {
    const wrapper = mount(<Button label="Save" onClick={jest.fn()} />);

    const label = wrapper.find("button").text();
    expect(label).toBe("Save");
  });
});
