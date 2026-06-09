import { describe, it, expect } from "vitest";
import { getAllMembers } from "../members";

describe("getAllMembers", () => {
  it("returns faculty advisor as first member", () => {
    const members = getAllMembers();
    expect(members[0].name).toBe("Dr. Nitha P.K");
    expect(members[0].role).toBe("Faculty Advisor");
    expect(members[0].year).toBe("Faculty");
  });

  it("flattens all committee members including faculty advisor", () => {
    const members = getAllMembers();
    expect(members.length).toBe(15);
    expect(members[1].name).toBe("Sriman Rakshan N");
    expect(members[1].role).toBe("Chair");
  });

  it("all members have required fields", () => {
    const members = getAllMembers();
    for (const member of members) {
      expect(member.id).toBeTruthy();
      expect(member.name).toBeTruthy();
      expect(member.department).toBeTruthy();
      expect(member.role).toBeTruthy();
    }
  });
});
