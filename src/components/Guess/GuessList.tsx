import { MAX_GUESSES } from "#utils/constants.ts";
import { range } from "#utils/utils.ts";
import { Guess } from "./Guess";

interface GuessListProps {
  answer: string;
  guesses: string[];
}

export const GuessList = ({ answer, guesses }: GuessListProps) => {
  return (
    <div className="guess-results">
      {range(MAX_GUESSES).map((num) => (
        <Guess key={num} answer={answer} guess={guesses[num]} />
      ))}
    </div>
  );
};
