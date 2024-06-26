import { styled } from "@mui/material";

export const StyledScreen = styled('div')(() => ({
    position: 'fixed',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20vh',
    zIndex: 999
}))