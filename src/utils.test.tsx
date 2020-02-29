import { User } from "./redux/types";
import { filterUsers, getUserFullName } from "./utils";

describe("utils", () => {
  describe("getUserFullName", () => {
    it("returns concatinated title, first and last names", () => {
      const user = {
        name: { first: "First", last: "Last", title: "Title" }
      } as User;

      const result = getUserFullName(user);

      expect(result).toStrictEqual("Title First Last");
    });
  });

  describe("filterUsers", () => {
    const users = () => {
      return [
        {
          name: { first: "John", last: "Smith" }
        },
        {
          name: { first: "Johnina", last: "Smithson" }
        },
        {
          name: { first: "Ron", last: "Davidson" }
        }
      ] as User[];
    };

    it("returns all users when filter is empty", () => {
      const result = filterUsers(users(), "");

      expect(result.length).toBe(3);
    });

    it("filters by first name", () => {
      const result = filterUsers(users(), "Joh");

      expect(result.length).toBe(2);
      expect(result[0].name.first).toBe("John");
      expect(result[1].name.first).toBe("Johnina");
    });

    it("filters by last name", () => {
      const result = filterUsers(users(), "Davi");

      expect(result.length).toBe(1);
      expect(result[0].name.first).toBe("Ron");
    });

    it("filters by first and last name case insensitive combination", () => {
      const result = filterUsers(users(), "nina smi");

      expect(result.length).toBe(1);
      expect(result[0].name.first).toBe("Johnina");
    });
  });
});
