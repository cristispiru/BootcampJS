import gameController from "./game";

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
});
