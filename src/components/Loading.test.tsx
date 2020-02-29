import { mount } from "enzyme";
import React from "react";
import { Loading } from "./Loading";

describe("Loading", () => {
  it("renders loading text", () => {
    const wrapper = mount(<Loading />);

    const label = wrapper.text();
    expect(label).toBe("Loading...");
  });
});
