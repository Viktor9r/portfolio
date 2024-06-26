import { Button, FormControl, TextField, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledContactSection = styled('div')(() => ({
    minHeight: '100vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '56px',

    ['@media (max-width: 1023px)']: {
        flexDirection: 'column'
    },

    ['@media (max-width: 767px)']: {
        height: 'fit-content',
        gap: '24px'
    },
}))

export const ContactsTitle = styled('div')(() => ({
    fontFamily: 'Neuropol, sans-serif',
    fontSize: '110px',
    fontWeight: 'bold',
    lineHeight: '38px',
    letterSpacing: '4px',
    top: 120,
    right: 0,
    left: 0,
    zIndex: 10,
    position: 'absolute',
    ['@media(max-width: 1200px)']: {
        fontSize: '70px',
    }
}))

export const ContactsLeft = styled('div')(() => ({
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Meragen, sans-serif',
    fontSize: '20px',
    justifyContent: 'space-between',
    zIndex: 2,

    ['@media (max-height: 799px) and (min-width: 1024px)']: {
        fontSize: '14px'
    },

    ['@media (max-width: 1023px)']: {
        width: '100%',
        fontSize: '14px'
    },
}))

export const ContactsLeftInfo = styled('div')(() => ({
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Meragen, sans-serif',
    fontSize: '20px',
    border: '2px solid #4d1caf',
    background: 'rgba(0, 0, 0, 0.9)',
    boxSizing: 'border-box',

    ['@media (max-height: 799px) and (min-width: 1024px)']: {
        fontSize: '16px',
        padding: '16px'
    },

    ['@media (max-width: 1023px)']: {
        fontSize: '16px',
        padding: '16px'
    },

    ['@media (max-width: 767px)']: {
        fontSize: '14px'
    },
}))

export const ContactsLeftTitle = styled('div')(() => ({
    padding: '24px',
    fontSize: '30px',
    border: '2px solid #4d1caf',
    background: 'rgba(0, 0, 0, 0.9)',

    ['@media (max-height: 799px) and (min-width: 1024px)']: {
        fontSize: '22px',
        padding: '16px',
    },

    ['@media (max-width: 1023px)']: {
        marginBottom: '36px',
        padding: '16px'
    },

    ['@media (max-width: 767px)']: {
        marginBottom: '24px',
        fontSize: '18px',
    },
}))

export const ContactsRight = styled('div')(() => ({
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Meragen, sans-serif',
    fontSize: '20px',
    zIndex: 998,
    boxSizing: 'border-box',

    ['@media (max-height: 799px) and (min-width: 1024px)']: {
        fontSize: '16px'
    },

    ['@media (max-width: 1023px)']: {
        fontSize: '16px',
        width: '100%'
    },

    ['@media (max-width: 767px)']: {
        border: 'none',
        padding: 0,
        fontSize: '14px'
    },
}))

export const ContanctMethodRow = styled(Link)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: "#fff",
    textDecoration: 'none',
    lineHeight: 1,
    marginBottom: '24px',
    ['& svg']: {
        width: '24px',
        height: '24px',

        ['@media (max-height: 799px) and (min-width: 1024px)']: {
            width: '18px',
            height: '18px'
        }
    }
}))

export const StyledForm = styled('form')(() => ({
    background: 'rgba(0, 0, 0, 0.9)',
    padding: '36px',
    border: '2px solid #4d1caf',

    ['@media (max-width: 1023px)']: {
        padding: '16px'
    },

    ['@media (max-width: 767px)']: {
        border: 'none',
        padding: 0,
        fontSize: '14px',
        background: 'transparent',
    },
}))

export const StyledFormBlock = styled('div')(() => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '24px'
}))

export const StyledFormField = styled(TextField)(() => ({
    border: '2px solid #4d1caf',
    borderRadius: '4px',
    color: '#fff !important',
    ['& input']: {
        color: '#fff',
        fontFamily: 'Meragen, sans-serif',
    },
    ['& textarea']: {
        color: '#fff',
        fontFamily: 'Meragen, sans-serif',
    },

    ['@media (max-width: 767px)']: {
        fontSize: '14px',
        boxShadow: '0px 0px 15px 10px #000000',
        background: 'rgba(0, 0, 0, 0.9)',
    },
    // ['& input::-webkit-input-placeholder']: {
    //     color: '#fff !important'
    // },
}))

export const StyledFormButtons = styled('div')(() => ({
    width: '100%',
    gap: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '32px'
}))