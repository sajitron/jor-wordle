import { checkGuess } from "#utils/checker.ts";

import { it, expect, describe } from "vitest";

describe("word checker", () => {
  it("should return status 'correct' for each character", () => {
    expect(checkGuess("words", "words")).toMatchObject({
      "0": {
        letter: "w",
        status: "correct",
      },
      "1": {
        letter: "o",
        status: "correct",
      },
      "2": {
        letter: "r",
        status: "correct",
      },
      "3": {
        letter: "d",
        status: "correct",
      },
      "4": {
        letter: "s",
        status: "correct",
      },
    });
  });

  it.each([
    [
      "agent",
      "agile",
      {
        "0": {
          letter: "a",
          status: "correct",
        },
        "1": {
          letter: "g",
          status: "correct",
        },
        "2": {
          letter: "i",
          status: "incorrect",
        },
        "3": {
          letter: "l",
          status: "incorrect",
        },
        "4": {
          letter: "e",
          status: "misplaced",
        },
      },
    ],
    [
      "south",
      "donut",
      {
        "0": {
          letter: "d",
          status: "incorrect",
        },
        "1": {
          letter: "o",
          status: "correct",
        },
        "2": {
          letter: "n",
          status: "incorrect",
        },
        "3": {
          letter: "u",
          status: "misplaced",
        },
        "4": {
          letter: "t",
          status: "misplaced",
        },
      },
    ],
    [
      "laugh",
      "lluug",
      {
        "0": {
          letter: "l",
          status: "correct",
        },
        "1": {
          letter: "l",
          status: "incorrect",
        },
        "2": {
          letter: "u",
          status: "correct",
        },
        "3": {
          letter: "u",
          status: "incorrect",
        },
        "4": {
          letter: "g",
          status: "misplaced",
        },
      },
    ],
    [
      "homer",
      "marge",
      {
        "0": {
          letter: "m",
          status: "misplaced",
        },
        "1": {
          letter: "a",
          status: "incorrect",
        },
        "2": {
          letter: "r",
          status: "misplaced",
        },
        "3": {
          letter: "g",
          status: "incorrect",
        },
        "4": {
          letter: "e",
          status: "misplaced",
        },
      },
    ],
    [
      "sheldon",
      "leonard",
      {
        "0": {
          letter: "l",
          status: "misplaced",
        },
        "1": {
          letter: "e",
          status: "misplaced",
        },
        "2": {
          letter: "o",
          status: "misplaced",
        },
        "3": {
          letter: "n",
          status: "misplaced",
        },
        "4": {
          letter: "a",
          status: "incorrect",
        },
        "5": {
          letter: "r",
          status: "incorrect",
        },
        "6": {
          letter: "d",
          status: "misplaced",
        },
      },
    ],
  ])(
    "should validate guesses to answer - %s and guess - %s",
    (answer, guess, expected) => {
      expect(checkGuess(answer, guess)).toMatchObject(expected);
    }
  );
});
