import { styled } from "@mui/material";
import { BACKGROUND_COLOR } from "./resources/colors";

export const AppOuterContainer = styled('div')(() => ({
    color: "#fff",
    fontFamily: 'Neuropol, sans-serif !important'
}))

export const AppInnerContainer = styled('div')(() => ({
    maxWidth: '1440px',
    padding: '0 30px',
    margin: '0 auto',
    height: '100%',
    scrollSnapType: 'y mandatory',
    ['& div']: {
        scrollSnapAlign: 'start'
    },

    ['@media (max-width: 1023px)']: {
        padding: '0 16px',
        height: 'fit-content'
    }
}))