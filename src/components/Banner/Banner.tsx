import { Button } from "../Button";
import type React from "react";

const Banner = ({
  children,
  status,
}: {
  children: React.ReactNode;
  status: "happy" | "sad";
}) => {
  const className = `${status} banner`;
  return <div className={className}>{children}</div>;
};

export const HappyBanner = ({
  noOfGuesses,
  onGameRestart,
}: {
  noOfGuesses: number;
  onGameRestart: () => void;
}) => {
  return (
    <Banner status="happy">
      <Button onClick={onGameRestart} />
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>
          {noOfGuesses === 1 ? "1 guess" : `${noOfGuesses} guesses`}
        </strong>
      </p>
    </Banner>
  );
};

export const SadBanner = ({
  answer,
  onGameRestart,
}: {
  answer: string;
  onGameRestart: () => void;
}) => {
  return (
    <Banner status="sad">
      <Button onClick={onGameRestart} />
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
};
