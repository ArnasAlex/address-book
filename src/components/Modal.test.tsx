import { mount } from "enzyme";
import React from "react";
import { Modal, ModalButtons } from "./Modal";

describe("Modal", () => {
  it("renders children", () => {
    const wrapper = mount(
      <Modal onClose={jest.fn()}>
        <div id="content">modal content</div>
      </Modal>
    );

    const content = wrapper.find("#content");
    expect(content.text()).toBe("modal content");
  });
});

describe("ModalButtons", () => {
  it("renders children", () => {
    const wrapper = mount(
      <ModalButtons>
        <div id="content">modal buttons</div>
      </ModalButtons>
    );

    const content = wrapper.find("#content");
    expect(content.text()).toBe("modal buttons");
  });
});
