import gameController from "./game";

jest.mock("../services/game.js", () => ({
    getAll: () => [2]
}))

describe("Game Controller", () => {
  it("should create a game", async () => {
    const json = jest.fn();

    await gameController.getGames(
      {},
      {
        json,
      },
      () => {}
    );

    expect(json).toBeCalled();
    expect(Array.isArray(json.mock.calls[0][0])).toBe(true)
  });

  it("should throw an error", async () => {
    const next = jest.fn();

    await gameController.getGames(
      {},
      {},
      next
    );

    expect(next).toBeCalled();
  });
});
