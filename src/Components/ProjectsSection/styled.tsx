import { Button, styled } from "@mui/material";

export const StyledProjectsSection = styled('div')(() => ({
    minHeight: '100vh',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: '44px',

    ['@media(max-width: 1023px)']: {
        flexDirection: 'column',
        paddingTop: '180px'
    },

    ['@media(max-width: 767px)']: {
        flexDirection: 'column',
        paddingTop: '135px'
    },
}))

export const ProjectsTitle = styled('div')(() => ({
    fontFamily: 'Neuropol, sans-serif',
    fontSize: '110px',
    fontWeight: 'bold',
    lineHeight: '38px',
    letterSpacing: '4px',
    top: 100,
    right: 0,
    zIndex: 10,
    position: 'absolute',
    ['@media(max-width: 1200px)']: {
        fontSize: '78px',
    },

    ['@media (max-height: 799px) and (min-width: 1024px)']: {
        fontSize: '78px',
        top: 60
    },

    ['@media(max-width: 1023px)']: {
        fontSize: '50px',
        top: 100,
        right: 0
        // left: '50%',
        // transform: 'translateX(-50%)'
    },

    ['@media(max-width: 767px)']: {
        fontSize: '30px',
        lineHeight: '40px',
        textAlign: 'center',
        width: '100%',
        wordBreak: 'break-all',
        top: 64
    },
}))

export const ProjectsLeft = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: 'calc(40% - 44px)',
    fontFamily: 'Meragen, sans-serif',
    paddingTop: '0px',
    zIndex: 3,

    ['@media (max-height: 799px) and (min-width: 1024px)']: {
        width: 'calc(50% - 44px)',
    },

    ['@media (max-width: 1023px)']: {
        width: '100%',
    },
}))

export const ProjectTitle = styled('div')(() => ({
    fontSize: '44px',
    fontWeight: 'bold',
    marginBottom: "24px",

    ['@media (max-height: 799px) and (min-width: 1024px)']: {
        fontSize: '34px',
    },

    ['@media (max-width: 1023px)']: {
        fontSize: '28px'
    },

    ['@media(max-width: 767px)']: {
        fontSize: '22px'
    },
}))

export const ProjectAbout = styled('div')(() => ({
    fontSize: '18px',
    marginBottom: '24px',

    ['@media (max-height: 799px) and (min-width: 1024px)']: {
        fontSize: '14px',
    },

    ['@media (max-width: 1023px)']: {
        fontSize: '18px'
    },
    ['@media(max-width: 767px)']: {
        fontSize: '14px'
    },
}))

export const ArrowButtons = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: '24px'
}))

export const ProjectSkillsDivider = styled('div')(() => ({
    width: '100%',
    height: '2px',
    background: '#4d1caf',
    borderRadius: '50%',

    ['@media (max-width: 1023px)']: {
        borderRadius: 0,
        marginBottom: '16px'
    },
}))

export const ProjectSkills = styled('div')(() => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '18px 0',
    ['& div']: {
        borderRight: '2px solid #4d1caf'
    },
    ["& div:last-child"]: {
        borderRight: 'none !important'
    }
}))

export const ProjectSkillsItem = styled('div')(() => ({
    fontSize: '18px',
    lineHeight: 1.5,
    textAlign: 'center',
    padding: '0 18px',
    display: 'flex',
    alignItems: 'center',

    ['@media (max-height: 799px) and (min-width: 1024px)']: {
        fontSize: '14px',
    },

    ['@media(max-width: 767px)']: {
        fontSize: '12px'
    },
}))

export const ProjectLinkBlock = styled('a')(() => ({
    fontSize: '18px',
    marginBottom: '24px',
    width: '100%',
    color: '#fff',
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'flex-end',
    // textDecoration: 'underline 2px #4d1caf',
    // textUnderlineOffset: '6px',
}))

export const ProjectLink = styled('a')(() => ({
    fontSize: '18px',
    color: '#fff',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    width: 'fit-content',
    borderBottom: '2px solid #4d1caf',
    transition: '0.3s',
    ['svg']: {
        fill: '#fff',
        width: '14px'
    },
    // textDecoration: 'underline 2px #4d1caf',
    // textUnderlineOffset: '6px',

    ['@media (max-height: 799px) and (min-width: 1024px)']: {
        fontSize: '14px',
    },

    ['@media(max-width: 767px)']: {
        fontSize: '14px'
    },
}))

export const ArrowButton = styled(Button)(() => ({
    fontFamily: 'Neuropol, sans-serif',
    width: '50%',
    background: '#000',
    color: '#fff',
    padding: '0 30px 0 35px',
    position: 'relative',
    height: '50px',
    fontWeight: 'bold',
    fontSize: '14px',
    transition: '0.3s',
    ['&:after']: {
        content: '""',
        position: 'absolute',
        top: '-1px',
        left: '-1px',
        right: '-1px',
        bottom: '-1px',
        background: 'linear-gradient(60deg, #4d1caf, #fff, rgba(132, 136, 255, 1))',
        zIndex: -1,
        animation: 'animatedgradient 3s ease alternate infinite',
        backgroundSize: '300% 300%',
    },
    ['& span']: {
        transform: 'none',
    },
    ['& svg']: {
        fill: '#fff',
        marginRight: '6px',
        width: '30px'
    },
    ['& span:nth-of-type(2)']: {
        display: 'none'
    },
    ['&:hover']: {
        background: "#fff",
        color: '#000'
    },
    ['&:hover svg']: {
        fill: '#000',
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
    },

    ['@media (max-width: 767px)']: {
        padding: '0 40px 0 40px',
        height: '40px',
        fontWeight: 'bold',
        fontSize: '12px'
    }
}))

export const ProjectsRight = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 'calc(60%)',
    zIndex: 12,
    ['a']: {
        width: '90%'
    },

    ['@media (max-height: 799px) and (min-width: 1024px)']: {
        width: '50%',
    },

    ['@media (max-width: 1023px)']: {
        marginBottom: '24px',
        width: '100%',
    },
}))

export const ProjectImage = styled('img')(() => ({
    width: '100%',
}))