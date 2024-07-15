import { styled } from "@mui/material";

export const StyledSkillsSection = styled('div')(() => ({
    minHeight: '100vh',
    gap: '45px',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '180px',
    justifyContent: 'flex-start',
    alignItems: 'center',
    ['@media(max-width: 1200px)']: {
        gap: '24px'
    },

    ['@media(max-width: 767px)']: {
        justifyContent: 'center',
        paddingTop: 0
    }
}))

export const SkillsTitle = styled('div')(() => ({
    fontFamily: 'Neuropol, sans-serif',
    fontSize: '110px',
    fontWeight: 'bold',
    lineHeight: '1',
    letterSpacing: '4px',
    top: 0,
    left: 0,
    zIndex: 10,
    position: 'absolute',
    textAlign: 'center',
    
    ['@media(max-width: 1200px)']: {
        fontSize: '70px',
        top: 50,
    },

    ['@media(max-width: 1023px)']: {
        fontSize: '50px',
        top: 100,
        left: '50%',
        transform: 'translateX(-50%)'
    },

    ['@media(max-width: 767px)']: {
        fontSize: '30px',
        lineHeight: '40px',
        textAlign: 'center',
        width: '100%',
        wordBreak: 'break-all',
        top: 54
    },

    ['& svg']: {
        width: "50px",
        height: '50px',
        fill: "#fff",
        marginRight: '10px',
        transform: "translateY(15px)",

        ['@media(max-width: 767px)']: {
            width: "40px",
            height: '40px',
            transform: "translateY(15px)",
        },
    }
}))

export const SkillsBlock = styled('div')(() => ({
    border: '4px solid rgba(255, 255, 255, 0.6)',
    width: '80%',
    display: 'flex',
    height: 'fit-content',
    fontFamily: 'Meragen, sans-serif',
    minHeight: 'calc(100vh - 115px - 40vh)',
    maxHeight: 'calc(100vh - 115px - 40vh)',
    overflow: 'hidden',
    ['@media(max-width: 1200px)']: {
        minHeight: 'calc(100vh - 54px - 40vh)',
        maxHeight: 'calc(100vh - 54px - 40vh)',
    }
}))

export const SkillsMiniBlock = styled('div')(() => ({
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    transition: '0.5s'
}))

export const SkillsMiniBlockHeader = styled('div')(() => ({
    display: 'flex',
    gap: '24px',
    alignItems: 'center',
    fontSize: '28px',
    height: '48px',
    fontWeight: 'bold',
    transition: '0.3s',
    ['svg']: {
        fill: '#fff',
        width: '50px'
    }
}))

export const SkillsMiniBlockContent = styled('div')(() => ({
    display: 'flex',
    marginTop: '12px',
    transition: '0.3s',
    minHeight: 'calc(100% - 36px - 24px)',
    maxHeight: 'calc(100% - 36px - 24px)',
    overflow: 'scroll'
}))

export const SkillsMiniBlockLeft = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'space-between',
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '18px'
}))

export const SkillsMiniBlockRight = styled('div')(() => ({
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    fontSize: '18px',
    gap: '2px'
}))

export const SkillsMiniBlockItem = styled('div')(() => ({
    display: 'flex',
    gap: '4px',
    alignItems: 'center',
    fontSize: '18px',
    ['svg']: {
        width: '18px',
        height: '18px',
        fill: '#fff'
    }
}))

export const SideNavigation = styled('div')(() => ({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-60%)',
    right: 0,
    display: 'flex',
    gap: '18px',
    flexDirection: 'column',
    color: '#fff',
    zIndex: 2,
    maxWidth: '100px',
    alignItems: 'center',

    ['@media (max-width: 1023px)']: {
        bottom: 0,
        right: '50%',
        flexDirection: 'row',
        transform: 'translateX(50%) translateY(0)',
        maxWidth: '100%',
        minWidth: '100%',
        justifyContent: 'center',
    },

    ['@media (max-width: 767px)']: {
        bottom: 0,
        top: '80%'
    }
}))

export const SideNavItem = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    color: 'rgba(255, 255, 255, 0.6)',
    fill: 'rgba(255, 255, 255, 0.6)',
    transition: '0.3s',
    alignItems: 'center',
    ['svg']: {
        width: '64px',
        height: '64px',

        ['@media (max-height: 799px) and (min-width: 1024px)']: {
            width: '50px',
            height: '50px'
        },

        ['@media (max-width: 767px)']: {
            width: '50px',
            height: '50px'
        }
    },
    ['&:hover']: {
        fill: 'rgba(255, 255, 255, 0.8)',
        color: 'rgba(255, 255, 255, 0.8)',
        cursor: 'pointer'
    },

    ['@media (max-height: 799px) and (min-width: 1024px)']: {
        fontSize: '14px',
    },

    ['@media (max-width: 1023px)']: {
        marginRight: '10px'
    }
}))

export const CubeSideContainer = styled('div')(() => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    height: 'fit-content',
    gap: '12px',
    width: '100%',
    ['@media (max-height: 799px) and (min-width: 1024px)']: {
        gap: '2px',
    },

    ['@media (max-width: 767px)']: {
        gap: '4px'
    },

    ['@media (max-width: 767px) and (max-height: 760px)']: {
        gap: '0px'
    }
}))

export const MobileSkillsContainer = styled('div')(() => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    height: 'fit-content',
    gap: '12px',
    width: 'calc(100% - 46px)',
    boxShadow: '0px 0px 10px 4px rgba(132, 136, 255, 1)',
    padding: '24px',
    transition: '0.3s',

    ['@media (max-width: 767px) and (max-height: 760px)']: {
        padding: '4px'
    }
}))

export const SkillItem = styled('div')(() => ({
    display: 'flex',
    padding: '12px',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '16px',
    fontFamily: 'Meragen, sans-serif',
    width: 'calc(100% / 5)',
    maxHeight: '100px',
    ['svg']: {
        width: '58px',
        height: '58px',
        fill: '#fff',

        ['@media (max-height: 799px) and (min-width: 1024px)']: {
            width: '38px',
            height: '38px',
        },

        ['@media (max-width: 767px)']: {
            width: '38px',
            height: '38px'
        },

        ['@media (max-width: 767px) and (max-height: 760px)']: {
            width: '30px',
            height: '30px'
        }
    },

    ['@media (max-height: 799px) and (min-width: 1024px)']: {
        fontSize: '12px',
    },

    ['@media (max-width: 767px)']: {
        fontSize: '12px'
    }
}))
