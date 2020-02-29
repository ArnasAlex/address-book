import { shallow } from "enzyme";
import React from "react";
import { User } from "../../redux/types";
import { UserGrid } from "./UserGrid";
import { UserRow } from "./UserRow";

describe("UserGrid", () => {
  it("renders user rows", () => {
    const wrapper = shallow(
      <UserGrid
        onOpenUser={jest.fn()}
        users={[
          {
            name: { first: "Tom", last: "Hanks", title: "Mr" },
            id: { value: "123", name: "bb" },
            login: { username: "gg" },
            picture: { thumbnail: "http://123" }
          } as User,
          {
            name: { first: "Tom2", last: "Hanks2", title: "Mr" },
            id: { value: "123", name: "bb" },
            login: { username: "gg" },
            picture: { thumbnail: "http://123" }
          } as User
        ]}
      />
    );

    expect(wrapper.find(UserRow)).toHaveLength(2);
  });
});
