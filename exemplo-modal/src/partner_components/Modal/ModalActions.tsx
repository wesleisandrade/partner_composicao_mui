import { ReactNode } from "react";
import { DialogActions } from "@mui/material";

interface ModalActionsProps {
  children: ReactNode;
}

export function ModalActions({ children }: ModalActionsProps) {
  return (
    <DialogActions>
      {children}
    </DialogActions>
  );
}