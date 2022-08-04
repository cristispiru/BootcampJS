import { computeBoardPosition } from "./game";

describe("Game utils methods", () => {
  describe("computeBoardPosition", () => {
    it("should be 0", () => {
      const pos = computeBoardPosition(0, 0);

      expect(pos).toBe(0);
    });
  });
});
