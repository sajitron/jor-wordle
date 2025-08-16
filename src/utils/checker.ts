type CharStatus = "correct" | "incorrect" | "misplaced";

interface ParsedGuess {
  status: CharStatus;
  letter: string;
}

export const checkGuess = (
  /** The correct answer */
  answer: string,
  /** The user's guess */
  guess?: string
): Record<number, ParsedGuess> | null => {
  const SOLVED_CHAR = "✅";

  if (!guess) return null;

  const answerChars = answer.split("");
  const guessChars = guess.split("");

  const result: Record<number, ParsedGuess> = {};

  // get correct matches
  guessChars.map((letter, index) => {
    if (answerChars[index] === letter) {
      result[index] = {
        status: "correct",
        letter,
      };
      // mark characters as solved
      answerChars[index] = SOLVED_CHAR;
      guessChars[index] = SOLVED_CHAR;
    }
  });

  // find misplaced matches
  guessChars.map((letter, index) => {
    if (letter === SOLVED_CHAR) return;

    let status: CharStatus = "incorrect";

    const misplacedIndex = answerChars.findIndex((char) => char === letter);

    if (misplacedIndex >= 0) {
      status = "misplaced";
      answerChars[misplacedIndex] = SOLVED_CHAR;
    }

    result[index] = {
      status,
      letter,
    };
  });

  return result;
};
