import React from "react";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";

interface LoadingButtonProps {
  isLoading: boolean;
  onClick: (event?: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}
//we need to provide the spinner loader here also
const LoadingButtons: React.FC<LoadingButtonProps> = ({
  isLoading,
  onClick,
  children,
}) => {
  return (
    <Button
      variant="contained"
      disabled={isLoading}
      onClick={(e) => onClick(e)}
      color="primary"
      fullWidth
    >
      {isLoading ? <CircularProgress size={24} color="inherit" /> : children}
    </Button>
  );
};

export default LoadingButtons;
