import { ReactNode } from 'react';
import Dialog from '@mui/material/Dialog';

interface ModalRootProps {
	children: ReactNode;
	handleClose: (value: boolean) => void;
	open: boolean;
}

export function ModalRoot({ children, open, handleClose }: ModalRootProps) {
	return (
		<Dialog
			onClose={handleClose}
			aria-labelledby="customized-dialog-title"
			open={open}
		>
			{children}
		</Dialog>
	)
}