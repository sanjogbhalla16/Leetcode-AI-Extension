//We are using this condition to show the data in the popup
import React from "react";
import { CircularProgress, Box } from "@mui/material";
/**
 * A component that conditionally renders its children based on the `show` prop.
 * If `show` is false, it displays a loading spinner.
 */
interface ShowProps {
  show: boolean;
  children: React.ReactNode;
}

const Show: React.FC<ShowProps> = ({ show, children }) => {
  return show ? (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="100%"
    >
      <CircularProgress size={24} color="inherit" />
    </Box>
  ) : (
    children
  );
};

export default Show;
