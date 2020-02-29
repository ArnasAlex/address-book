import { mount } from "enzyme";
import React from "react";
import { SettingsPage } from "./index";

describe("SettingsPage", () => {
  it("displays nationality", () => {
    const wrapper = mount(
      <SettingsPage nationality="GB" onUpdateNationality={jest.fn()} />
    );

    const nationalityValue = wrapper.find("select").props().value;

    expect(nationalityValue).toBe("GB");
  });

  it("calls onUpdateNationality when changing nationality", () => {
    const onUpdateNationality = jest.fn();

    const wrapper = mount(
      <SettingsPage
        nationality="GB"
        onUpdateNationality={onUpdateNationality}
      />
    );

    wrapper.find("select").simulate("change", { target: { value: "CH" } });

    expect(onUpdateNationality).toBeCalledWith("CH");
  });
});
