import { mount } from "enzyme";
import React from "react";
import { User } from "../../redux/types";
import { UserRow } from "./UserRow";

describe("UserRow", () => {
  it("renders user full name", () => {
    const wrapper = mount(
      <UserRow
        user={
          {
            name: { first: "Tom", last: "Hanks", title: "Mr" },
            id: { value: "123", name: "bb" },
            login: { username: "gg" },
            picture: { thumbnail: "http://123" }
          } as User
        }
        onClick={jest.fn()}
      />
    );

    expect(wrapper.find(".name").text()).toBe("Mr Tom Hanks");
  });
});
