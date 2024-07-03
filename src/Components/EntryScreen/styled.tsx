import { Button, Grid, styled } from "@mui/material";

export const StyledEntryScreen = styled('div')(() => ({
    minHeight: '100vh',
    maxHeight: '100vh',
    maxWidth: '1440px',
    padding: '0 30px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',

    ['@media (max-width: 1023px)']: {
        padding: '0 16px'
    }
}))

export const EntryScreenLeft = styled('div')(() => ({
    paddingRight: '10%',
    maxWidth: '45%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    zIndex: 2,

    ['@media (max-width: 1023px)']: {
        maxWidth: '100%',
        minWidth: '100%',
        paddingRight: 0
    }
}))

export const EntryScreenRight = styled('div')(() => ({
    background: 'transparent',
    position: 'absolute',
    height: '100vh',
    right: 0,
}))

export const EntryScreenLeftContent = styled('div')(() => ({
    fontSize: '52px',
    fontWeight: 'bold',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    lineHeight: '60px',
    alignItems: 'flex-start',
    justifyContent: 'center',
    wordBreak: 'break-word',

    ['@media (max-height: 799px) and (min-width: 1024px)']: {
        fontSize: '36px',
        lineHeight: '48px',
    },

    ['@media (max-width: 1023px)']: {
        background: 'rgba(0, 0, 0, 0.9)',
        padding: '36px',
        border: '2px solid #4d1caf',
        boxShadow: '0px 0px 15px 10px #000000',
        transform: 'translateX(-18px)'
    },

    ['@media (max-width: 767px)']: {
        fontSize: '24px',
        lineHeight: '36px'
    },
}))

export const EntryContactButton = styled(Button)(() => ({
    borderRadius: '40px',
    border: '2px solid #fff',
    background: 'transparent',
    minWidth: '100px',
    maxWidth: 'fit-content',
    marginTop: '24px',
    fontWeight: 600,
    color: '#fff',
    padding: '16px 24px',
}))