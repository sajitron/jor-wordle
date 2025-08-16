const ButtonStyle: React.CSSProperties = {
  background: "white",
  padding: "4px 8px",
  color: "green",
};

export const Button = ({ onClick }: { onClick: () => void }) => (
  <button type="reset" style={ButtonStyle} onClick={onClick}>
    Restart Game
  </button>
);
