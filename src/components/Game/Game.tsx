import { MAX_GUESSES, type GameStatus } from "#utils/constants.ts";
import { ANSWERS } from "#utils/data.ts";
import { getRandomWord } from "#utils/utils.ts";
import { useState, useCallback } from "react";
import { GuessForm, GuessList } from "../Guess";
import { HappyBanner, SadBanner } from "../Banner";

export const Game = () => {
  const [guesses, setGuesses] = useState<string[]>([]);
  const [gameStatus, setGameStatus] = useState<GameStatus>("running");
  const [answer, setAnswer] = useState(getRandomWord(ANSWERS));

  console.info({ answer });

  const onGuess = useCallback(
    (userGuess: string) => {
      const latestGuesses = [...guesses, userGuess];
      setGuesses(latestGuesses);

      if (userGuess === answer) {
        setGameStatus("won");
      } else if (latestGuesses.length >= MAX_GUESSES) {
        setGameStatus("lost");
      }
    },
    [answer, guesses]
  );

  const restartGame = useCallback(() => {
    setGuesses([]);
    setGameStatus("running");
    setAnswer(getRandomWord(ANSWERS));
  }, []);

  return (
    <>
      {gameStatus}
      <GuessList answer={answer} guesses={guesses} />
      <GuessForm onGuess={onGuess} gameStatus={gameStatus} />
      {gameStatus === "won" && (
        <HappyBanner noOfGuesses={guesses.length} onGameRestart={restartGame} />
      )}
      {gameStatus === "lost" && (
        <SadBanner answer={answer} onGameRestart={restartGame} />
      )}
    </>
  );
};
