import { Button, Grid, styled } from "@mui/material";
import me from '../../resources/images/me2-min.png'

export const StyledAboutSection = styled('div')(() => ({
    minHeight: '100vh',
    maxHeight: '100vh',
    display: 'flex',
    gap: '65px',
    position: 'relative',
    alignItems: 'center',

    ['@media (max-width: 1023px)']: {
        flexDirection: 'column-reverse',
        justifyContent: 'center',
        paddingTop: '80px',
        gap: '8em',
    },

    ['@media (max-width: 767px)']: {
        gap: '55px',
        paddingTop: '80px'
    }
}))

export const AboutLeftPart = styled('div')(() => ({
    height: 'calc(100vh - 70px)',
    display: 'flex',
    flexDirection: "column",
    alignItems: 'flex-start',
    justifyContent: 'center',
    fontSize: '18px',
    lineHeight: '24px',
    fontFamily: 'Meragen',
    maxWidth: '38%',
    minWidth: '38%',
    zIndex: 2,

    ['@media (max-width: 1023px)']: {
        minWidth: '80%',
        maxWidth: '80%',
        height: 'fit-content',
        alignItems: 'center',
        textAlign: 'center'
    },

    ['@media (max-width: 767px)']: {
        minWidth: '100%',
        maxWidth: '100%',
    }
}))

export const AboutTopText = styled('div')(() => ({
    position: 'absolute',
    fontFamily: 'Neuropol, sans-serif',
    right: 0,
    top: 100,
    fontSize: '110px',
    fontWeight: 'bold',
    lineHeight: '38px',
    letterSpacing: '4px',
    zIndex: 10,

    ['@media (max-height: 799px) and (min-width: 1024px)']: {
        fontSize: '78px',
        top: 100
    },

    ['@media (max-width: 1023px)']: {
        fontSize: '50px',
        top: 100
    },

    ['@media (max-width: 767px)']: {
        fontSize: '40px',
        top: 100
    }
}))

export const DownloadButton = styled(Button)(() => ({
    marginTop: '24px',
    fontFamily: 'Neuropol, sans-serif',
    width: 'fit-content',
    color: '#fff',
    padding: '0 40px 0 35px',
    background: '#000',
    height: '50px',
    fontWeight: 'bold',
    borderBottomRightRadius: '65px',
    transition: '0.3s',
    ['&:after']: {
        content: '""',
        position: 'absolute',
        top: '-1px',
        left: '-1px',
        right: '-1px',
        bottom: '-1px',
        background: 'linear-gradient(60deg, #4d1caf, #fff, rgba(132, 136, 255, 1))',
        borderBottomRightRadius: '46px',  // Adjust border radius with additional border width
        zIndex: -1,
        animation: 'animatedgradient 3s ease alternate infinite',
        backgroundSize: '300% 300%',

        ['@media (max-height: 799px) and (min-width: 1024px)']: {
            borderBottomRightRadius: '40px',
        },

        ['@media (max-width: 1023px)']: {
            borderBottomRightRadius: '0px',
        },
    },
    ['& span']: {
        transform: 'none',
    },
    ['& svg']: {
        marginRight: '6px',
        transform: 'scale(1.1)',
        ['@media (max-width: 767px)']: {
            transform: 'scale(0.9)',
        }
    },
    ['& span:nth-of-type(2)']: {
        display: 'none'
    },
    ['&:hover']: {
        background: "#fff",
        color: '#000'
    },

    ['@media (max-height: 799px) and (min-width: 1024px)']: {
        padding: '0 34px 0 28px',
        height: '42px',
        fontSize: '12px'
    },

    ['@media (max-width: 1023px)']: {
        padding: '0 40px 0 40px',
        height: '50px',
        fontWeight: 'bold',
        borderBottomRightRadius: '0px',
    },

    ['@media (max-width: 767px)']: {
        padding: '0 30px 0 30px',
        height: '40px',
        fontWeight: 'bold',
        borderBottomRightRadius: '0px',
        fontSize: '12px'
    }

}))

export const AboutRightPart = styled('div')(() => ({
    overflow: 'hidden',
    width: '45%',
    // height: 'calc(100vh - 70px)',
    zIndex: 9,
    boxShadow: '0px 0px 30px 30px #4d1caf',
    borderRadius: '50%',
    aspectRatio: '1/1',
    position: 'relative',

    ['@media (max-width: 1023px)']: {
        minWidth: '48%',
        maxWidth: '48%',
        boxShadow: '0px 0px 20px 20px #4d1caf',
    },

    ['@media (max-width: 767px)']: {
        minWidth: '65%',
        maxWidth: '65%',
    }
}))

export const AboutRightPartShadow = styled('div')(() => ({
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    aspectRatio: '1/1',
    boxShadow: 'inset 0px 0px 30px 30px #4d1caf',
    zIndex: 90,
    ['@media (max-width: 1023px)']: {
        boxShadow: 'inset 0px 0px 20px 20px #4d1caf',
    },
}))

export const AboutImageOuterMobileContainer = styled('div')(() => ({
    width: '48%',
    height: '100%',
    margin: 'auto',
    aspectRatio: '1/1',
    borderRadius: '50%',
    border: '1px solid #4d1caf',
    padding: '4px',
    boxShadow: '0px 0px 15px 10px #4d1caf',
    overflow: 'hidden',

    ['@media (max-width: 767px)']: {
        width: '65%'
    }
}))

export const AboutImage = styled('div')(() => ({
    width: '100%',
    height: '100%',
    margin: 'auto',
    background: `url(${me})`,
    backgroundSize: '84%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top',
    zIndex: 11,
    position: 'absolute',

    // ['@media (max-width: 1023px)']: {
    //     width: '48%',
    //     aspectRatio: '1/1',
    //     borderRadius: '50%',
    // }
}))