import { computeBoardPosition } from "./game";

describe("Game utils methods", () => {
  describe("computeBoardPosition", () => {
    it("should be 0", () => {
      const pos = computeBoardPosition(0, 0);

      expect(pos).toBe(0);
    });
    it("should be 4", () => {
        const pos = computeBoardPosition(1, 1);

        expect(pos).toBe(4);
    })
    it("returns NaN", () => {
        const pos = computeBoardPosition(NaN, 0);

        expect(pos).toBeNaN();
    })
  });
});
