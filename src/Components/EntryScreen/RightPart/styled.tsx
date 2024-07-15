import { styled } from '@mui/material'

export const EntryScreenBottomGradient = styled('div')(() => ({
    height: '140px',
    position: 'absolute',
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to bottom, transparent, black)',
    borderBottomLeftRadius: '90px',
    ['@media (max-width: 1023px)']: {
        height: '70px',
        borderBottomLeftRadius: '0',
    }
}))

export const EntryScreenSideGradient = styled('div')(() => ({
    height: '100vh',
    width: '140px',
    position: 'absolute',
    bottom: 0,
    background: 'linear-gradient(to left, transparent 0%, black 100%)',
    borderBottomLeftRadius: '90px',
    ['@media (max-width: 1023px)']: {
        width: '70px',
    }
}))