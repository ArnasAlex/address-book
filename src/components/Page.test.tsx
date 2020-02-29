import { mount } from "enzyme";
import React from "react";
import { Page } from "./Page";

describe("Page", () => {
  it("renders children", () => {
    const wrapper = mount(
      <Page>
        <div id="content">page content</div>
      </Page>
    );

    const content = wrapper.find("#content");
    expect(content.text()).toBe("page content");
  });
});
