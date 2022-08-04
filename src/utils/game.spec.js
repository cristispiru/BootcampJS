import { computeBoardPosition, computeSymbol, verifyGame } from "./game";

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

  describe("compute symbol for owner", () => {
    it("should be 1", () => {
        const symbol = computeSymbol("id", "id", 1)

        expect(symbol).toBe(1);
    })

    it("should be 0", () => {
        const symbol = computeSymbol("id", "id", 0)

        expect(symbol).toBe(0);
    })
  })

  describe("compute symbol for player", () => {
    it("should be 0", () => {
        const symbol = computeSymbol("id", "non-id", 1)

        expect(symbol).toBe(0);
    })

    it("should be 1", () => {
        const symbol = computeSymbol("id", "non-id", 0)

        expect(symbol).toBe(1);
    })
  })

  describe("verify game", () => {
    it("should no be finished", () => {
        const result = verifyGame([-1, 0, 0, 0, 0, 0, 0, 0, 0], 1, "id", "playerId")

        expect(result.finished).toBeFalsy()
    })

    it("owner should win with 0 symbol", () => {
        const result = verifyGame([0, 0, 0, 0, 0, 0, 0, 0, 0], 0, "id", "playerId")

        expect(result.finished).toBe(true)
        expect(result.winner).toBe("id")
    })

    it("player should win with 0 symbol", () => {
        const result = verifyGame([1, 1, 1, 0, 0, 0, 0, 0, 0], 0, "id", "playerId")

        expect(result.finished).toBe(true)
        expect(result.winner).toBe("playerId")
    })
  })
});
