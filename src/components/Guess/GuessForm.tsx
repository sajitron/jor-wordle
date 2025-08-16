import type { GameStatus } from "#utils/constants.ts";
import { useState, useCallback, type FormEvent } from "react";

interface GuessFormProps {
  onGuess: (guess: string) => void;
  gameStatus: GameStatus;
}

export const GuessForm = ({ onGuess, gameStatus }: GuessFormProps) => {
  const [guess, setGuess] = useState("");

  const onSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      onGuess(guess);
      setGuess("");
    },
    [guess, onGuess]
  );

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter Guess:</label>
      <input
        id="guess-input"
        disabled={gameStatus !== "running"}
        type="text"
        value={guess}
        pattern="[a-zA-Z]{5}"
        title="Please enter a 5-letter character"
        onChange={(e) => setGuess(e.target.value.toUpperCase())}
      />
    </form>
  );
};
