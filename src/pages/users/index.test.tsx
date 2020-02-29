import { shallow } from "enzyme";
import React from "react";
import { User } from "../../redux/types";
import { UsersPage } from "./index";

describe("UsersPage", () => {
  it("renders search input", () => {
    const wrapper = shallow(
      <UsersPage
        cursor={5}
        users={[
          {
            name: { first: "Tom", last: "Hanks", title: "Mr" },
            id: { value: "123", name: "bb" },
            login: { username: "gg" },
            picture: { thumbnail: "http://123" }
          } as User
        ]}
        onCloseUser={jest.fn()}
        onLoadUsers={jest.fn()}
        onOpenUser={jest.fn()}
      />
    );

    const searchPlaceholder = wrapper.find("input").props().placeholder;

    expect(searchPlaceholder).toBe("Search by user name...");
  });
});
