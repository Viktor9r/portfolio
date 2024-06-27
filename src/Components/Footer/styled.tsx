import { styled } from "@mui/material";

export const FooterOuterContainer = styled('div')(() => ({
    width: '100%',
    height: '160px',
    background: 'transparent',

    ['@media (max-height: 799px) and (min-width: 1024px)']: {
        height: '90px'
    },

    ['@media (max-width: 767px)']: {
        height: '90px'
    },
}))

export const FooterContent = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    gap: '40px',
    height: '100%'
}))

export const FooterLeft = styled('div')(() => ({
    display: 'flex',
    gap: '50px'
}))

export const FooterLogo = styled('div')(() => ({
    fontSize: '60px',
    letterSpacing: -5,
    fontFamily: 'Neuropol, sans-serif !important',
    cursor: 'pointer',

    ['@media (max-height: 799px) and (min-width: 1024px)']: {
        fontSize: '50px'
    },

    ['@media (max-width: 767px)']: {
        fontSize: '50px'
    },
}))

export const FooterName = styled('div')(() => ({
    fontSize: '28px',
    marginBottom: '18px',
    display: 'block',
    
    ['@media (max-height: 799px) and (min-width: 1024px)']: {
        fontSize: '22px'
    }
}))

export const FooterPositionTitle = styled('div')(() => ({
    fontSize: '18px',
    display: 'block',

    ['@media (max-height: 799px) and (min-width: 1024px)']: {
        fontSize: '14px'
    }
}))

export const FooterRight = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    gap: '60px',
    marginRight: '22px',

    ['@media (max-width: 767px)']: {
        gap: '24px',
        marginRight: 0
    },
}))

export const FooterIcon = styled('div')(() => ({
    width: '22px',
    height: '22px',
    color: 'rgba(255, 255, 255, 1)',
    marginRight: '12px',
    transform: 'scale(1.75)',

    ['@media (max-height: 799px) and (min-width: 1024px)']: {
        transform: 'scale(1.3)',
        marginRight: 0
    },

    ['@media (max-width: 767px)']: {
        transform: 'scale(1.3)',
        marginRight: 0
    },
}))