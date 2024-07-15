import { useEffect, useState } from "react";
import { HeaderInnerContainer, HeaderLangValue, HeaderLeftPart, HeaderLogo, HeaderOuterContainer, HeaderRightPart, TopBlackLine } from "./styled"
import MenuIcon from '@mui/icons-material/Menu';
import { Tab, Tabs, useMediaQuery } from "@mui/material";
import { useTabNavigation } from "../../storage/useTabNavigation";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { Close } from "@mui/icons-material";
import { ReactComponent as HomeIcon } from '../../resources/icons/home_icon.svg'
import { ReactComponent as AboutIcon } from '../../resources/icons/about_icon.svg'
import { ReactComponent as SkillsIcon } from '../../resources/icons/skills_icon.svg'
import { ReactComponent as ProjectsIcon } from '../../resources/icons/projects_icon.svg'
import { ReactComponent as ContactIcon } from '../../resources/icons/contact_icon.svg'
import '../MainScreenBottomBar/styles.scss';
import { ReactComponent as PauseIcon } from '../../resources/icons/pause_icon.svg'
import { ReactComponent as PlayIcon } from '../../resources/icons/play_icon.svg'

interface IProps {
    homeRef: any,
    aboutRef: any,
    skillsRef: any,
    projectsRef: any,
    contactRef: any,
    isBottom: boolean,
    isAutoSliding: boolean,
    setIsAutoSliding: any
}

export const AppHeader: React.FC<IProps> = ({
    homeRef,
    aboutRef,
    skillsRef,
    projectsRef,
    contactRef,
    isBottom,
    isAutoSliding,
    setIsAutoSliding
}) => {
    const [lang, setLang] = useState(() => window.localStorage.getItem('lang') || 'EN');
    const navigate = useNavigate();
    const { t } = useTranslation()

    const [showMobileNav, setShowMobileNav] = useState(false)

    useEffect(() => {
        const savedLang = window.localStorage.getItem('lang') || 'EN';
        const langCode = savedLang === 'EN' ? 'en' : 'fr';
        i18n.changeLanguage(langCode);
        setLang(savedLang); // Ensure internal state matches initial language
    }, []);

    const handleChangeLang = () => {
        const newLang = lang === "EN" ? "FR" : "EN";
        const newLangCode = newLang === "EN" ? 'en' : 'fr';
        i18n.changeLanguage(newLangCode).then(() => {
            window.localStorage.setItem('lang', newLang);
            setLang(newLang);
        });
    }


    useEffect(() => {
        const handleStorageChange = () => {
            const storedLang = window.localStorage.getItem('lang') || 'EN';
            if (storedLang !== lang) {
                setLang(storedLang);
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, [lang]); // Notice, no dependency here


    const mobile = useMediaQuery('(max-width: 1023px');

    // const [value, setValue] = useState(0);

    const { value, setValue } = useTabNavigation()

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        if (newValue == 0) {
            homeRef.current.scrollIntoView({ behavior: 'smooth' })
        }
        if (newValue == 1) {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' })
        }
        if (newValue == 2) {
            skillsRef.current.scrollIntoView({ behavior: 'smooth' })
        }
        if (newValue == 3) {
            projectsRef.current.scrollIntoView({ behavior: 'smooth' })
        }
        if (newValue == 4) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' })
        }
        setValue(newValue);
    };

    const [topScrollValue, setTopScrollValue] = useState(0);

    useEffect(() => {
        function getBodyScrollTop() {
            return document.documentElement && document.documentElement.scrollTop || (document.body && document.body.scrollTop);
        }

        getBodyScrollTop(); // Initial call to handleResize

        window.addEventListener("scroll", event => {
            let value = getBodyScrollTop();
            setTopScrollValue(value);
        })

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', getBodyScrollTop);
        };
    }, []);

    const smallMobile = useMediaQuery('(max-width: 767px)')

    return (
        <HeaderOuterContainer
            className="gradient-border"
            sx={{
                display: isBottom ? "none" : "block",
                borderBottom: topScrollValue > window.innerHeight ? '2px solid #4d1caf' : 'none',
            }}
        >
            <TopBlackLine
                sx={{
                    display: isBottom ? "none" : "block",
                    visibility: mobile ? 'visible' : topScrollValue == 0 ? "hidden" : "visible",
                    width: mobile ? '100%' : topScrollValue > window.innerHeight - 1 ? '100%' : '50%',
                }}
            ></TopBlackLine>
            <HeaderInnerContainer
                sx={{
                    justifyContent: isBottom ? "center" : "space-between",
                }}
            >
                <HeaderLeftPart
                    sx={{
                        display: isBottom ? "none" : smallMobile && showMobileNav ? "none" : "flex",
                    }}
                    onClick={() => homeRef.current.scrollIntoView({ behavior: 'smooth' })}
                >
                    {!mobile && (
                        <>
                            <HeaderLogo
                                sx={{ marginRight: 0 }}
                            >
                                V
                            </HeaderLogo>
                            <HeaderLogo>
                                R
                            </HeaderLogo>
                        </>
                    )}
                    {!showMobileNav && mobile && (
                        <>
                            <HeaderLogo
                                sx={{ marginRight: 0 }}
                            >
                                V
                            </HeaderLogo>
                            <HeaderLogo>
                                R
                            </HeaderLogo>
                        </>
                    )}
                </HeaderLeftPart>

                {mobile && value === 2 && !showMobileNav && (
                    // isAutoSliding ? (
                    //     <PauseIcon style={{
                    //         transform: 'scale(0.88) translateY(16px)',
                    //     }} onClick={() => setIsAutoSliding(false)} />
                    // ) : (
                    //     <PlayIcon onClick={() => setIsAutoSliding(true)} />
                    // )
                    <>
                        {isAutoSliding ? (
                            <PauseIcon
                                style={{
                                    fill: '#fff',
                                    width: "40px",
                                    height: '40px',
                                    transform: "translateY(4px) scale(0.88) translateX(-57%)",
                                    position: 'absolute',
                                    left: '50%',
                                }}
                                onClick={() => setIsAutoSliding(false)} />
                        ) : (
                            <PlayIcon
                                onClick={() => setIsAutoSliding(true)}
                                style={{
                                    fill: '#fff',
                                    width: "40px",
                                    height: '40px',
                                    transform: "translateY(4px) translateX(-50%)",
                                    position: 'absolute',
                                    left: '50%',
                                }} />
                        )}
                    </>

                )}

                {
                    !mobile && (
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            textColor="primary"
                            indicatorColor="secondary"
                            aria-label="secondary tabs example"
                            sx={{
                                height: '70px',
                                minWidth: '50%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                background: 'rgba(0, 0, 0, 1)',
                                ['& button']: {
                                    color: 'rgba(255, 255, 255, 0.6)',
                                    fontSize: '16px',
                                    fontFamily: 'Neuropol, sans-serif !important',

                                    ['@media (max-height: 799px) and (min-width: 1024px)']: {
                                        fontSize: '14px'
                                    }
                                },
                                ['& .MuiTabs-indicator']: {
                                    display: 'none'
                                },
                                ['& .Mui-selected']: {
                                    color: '#fff !important'
                                },
                                ['& .MuiTabs-scroller']: {
                                    display: 'flex',
                                    justifyContent: 'center'
                                },

                                ['@media (max-height: 799px) and (min-width: 1024px)']: {
                                    height: '50px',
                                }
                            }}
                        >
                            <Tab value={0} label={t('home')} />
                            <Tab value={1} label={t('about')} />
                            <Tab value={2} label={t('skills')} />
                            <Tab value={3} label={t('projects')} />
                            <Tab value={4} label={t('contact')} />
                        </Tabs>
                    )
                }

                {
                    showMobileNav && mobile && (
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            textColor="primary"
                            indicatorColor="secondary"
                            aria-label="secondary tabs example"
                            sx={{
                                height: '50px',
                                minWidth: '50%',
                                justifyContent: 'center',
                                alignItems: 'center',
                                background: 'rgba(0, 0, 0, 1)',
                                ['& button']: {
                                    color: 'rgba(255, 255, 255, 0.6)',
                                    fontSize: '14px',
                                    fontFamily: 'Neuropol, sans-serif !important',
                                    minWidth: '0',
                                    padding: smallMobile ? '12px' : '12px 16px'
                                },
                                ['svg']: {
                                    fill: 'rgba(255, 255, 255, 0.6)',
                                    width: smallMobile ? '30px' : '40px',
                                    height: '40px'
                                },
                                ['& .MuiTabs-indicator']: {
                                    display: 'none'
                                },
                                ['& .Mui-selected']: {
                                    color: '#fff !important',

                                    ['svg']: {
                                        fill: 'rgba(255, 255, 255)',
                                    },
                                },
                                ['& .MuiTabs-scroller']: {
                                    display: 'flex',
                                    justifyContent: 'center'
                                },
                            }}
                        >
                            <Tab value={0} label={<HomeIcon style={{ transform: smallMobile ? 'scale(0.9)' : 'scale(1)' }} />} />
                            <Tab value={1} label={<AboutIcon style={{ transform: smallMobile ? 'scale(1.1)' : 'scale(1.3)' }} />} />
                            <Tab value={2} label={<SkillsIcon style={{ transform: smallMobile ? 'scale(1.02)' : 'scale(1.15)' }} />} />
                            <Tab value={3} label={<ProjectsIcon style={{ transform: smallMobile ? 'scale(1.06)' : 'scale(1.18)' }} />} />
                            <Tab value={4} label={<ContactIcon style={{ transform: smallMobile ? 'scale(1.02)' : 'scale(1.15)' }} />} />
                        </Tabs>
                    )
                }

                <HeaderRightPart
                    sx={{
                        display: isBottom ? "none" : "flex",
                    }}
                >
                    {!showMobileNav && (
                        <>
                            {mobile && (
                                <>
                                    <MenuIcon onClick={() => setShowMobileNav(true)} />
                                    <HeaderLangValue
                                        onClick={() => handleChangeLang()}
                                        sx={{
                                            color: mobile ? '#fff' : topScrollValue > 0 ? '#fff' : '#090909'
                                        }}
                                    >
                                        {lang}
                                    </HeaderLangValue>
                                </>
                            )}
                        </>
                    )}

                    {!mobile && (
                        <HeaderLangValue
                            onClick={() => handleChangeLang()}
                            sx={{
                                color: mobile ? '#fff' : topScrollValue > 0 ? '#fff' : '#090909'
                            }}
                        >
                            {lang}
                        </HeaderLangValue>
                    )}
                    {showMobileNav && mobile && (
                        <>
                            <Close
                                onClick={() => setShowMobileNav(false)}
                                style={{ transform: smallMobile ? 'scale(1.1) translateY(-2px)' : 'scale(1.3)' }}
                            />
                        </>
                    )}
                    {/* <HeaderLangSwitch
                        open={open}
                        onClose={handleCloseLang}
                        onOpen={handleOpenLang}
                        value={lang}
                        onChange={handleChangeLang}
                    >
                        <MenuItem value={'EN'}>EN</MenuItem>
                        <MenuItem value={'FR'}>FR</MenuItem>
                    </HeaderLangSwitch> */}
                </HeaderRightPart>
            </HeaderInnerContainer>
        </HeaderOuterContainer>
    )
}