import { checkGuess } from "#utils/checker.ts";
import { range } from "#utils/utils.ts";

interface GuessProps {
  guess: string;
  answer: string;
}

export const Guess = ({ guess, answer }: GuessProps) => {
  const checkedWord = checkGuess(answer, guess);

  return (
    <p className="guess">
      {range(5).map((num) => {
        const char = checkedWord?.[num];
        return (
          <span key={num} className={`cell ${char ? char.status : undefined}`}>
            {char ? char.letter : undefined}
          </span>
        );
      })}
    </p>
  );
};
