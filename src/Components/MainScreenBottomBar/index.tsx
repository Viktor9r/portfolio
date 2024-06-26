import { Button, useMediaQuery } from "@mui/material";
import { BottomBarEmailLink, BottomBarIcon, BottomBarInnerContainer, BottomBarLeftPart, BottomBarOuterContainer, BottomBarRightPart, BottomBlackLine } from "./styled"
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface IProps {
    isBottom: boolean
}

export const MainScreenBottomBar: React.FC<IProps> = ({ isBottom }) => {
    const [topScrollValue, setTopScrollValue] = useState(0);
    const [rightPartWidth, setRightPartWidth] = useState<number>(0);
    const { t } = useTranslation()
    
    useEffect(() => {
        function handleResize() {
            const rightPart = document.getElementById('right');
            if (rightPart) {
                const width = rightPart.getBoundingClientRect().left;
                setRightPartWidth(width);
            }
        }

        handleResize(); // Initial call to handleResize

        window.addEventListener('resize', handleResize); // Attach event listener

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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

    const mobile = useMediaQuery('(max-width: 1023px');

    return (
        <BottomBarOuterContainer
            sx={{
                display: isBottom ? 'none' : 'block',
                zIndex: topScrollValue > 0 ? 1 : 2
            }}
        >
            <BottomBlackLine
                sx={{
                    width: mobile ? '100%' : `calc(100% - ${rightPartWidth}px)`,
                    transform: mobile ? "none" : topScrollValue > 0 ? 'translateY(calc(-100vh + 70px)) scaleX(1.1)' : 'none',

                    ['@media (max-height: 799px) and (min-width: 1024px)']: {
                        transform: topScrollValue > 0 ? 'translateY(calc(-100vh + 50px)) scaleX(1.1)' : 'none',
                    },

                    visibility: topScrollValue > 0 ? mobile ? 'hidden' : 'visible' : 'visible'
                }}
            ></BottomBlackLine>
            <BottomBarInnerContainer sx={{
                visibility: topScrollValue > 1 ? "hidden" : "visible",
                zIndex: topScrollValue > 1 ? -1 : 1
            }}>
                <BottomBarLeftPart sx={{
                    transform: topScrollValue > 1 ? "scale(0)" : "none",
                }}>
                    <BottomBarEmailLink
                        to='javascript:void(0)'
                        onClick={() => window.location.href = 'mailto:viktor.riabokon.job@gmail.com'}
                    >
                        <BottomBarIcon sx={{
                            mr: 0, color: 'rgba(255, 255, 255, 0.6)',

                            ['@media (max-height: 799px) and (min-width: 1024px)']: {
                                mr: 1
                            }
                        }}>
                            <EmailIcon />
                        </BottomBarIcon>
                        {t('email_me')}
                    </BottomBarEmailLink>
                </BottomBarLeftPart>
                <BottomBarRightPart id="right" sx={{
                    transform: topScrollValue > 1 ? "scale(0)" : "none",
                }}>
                    <Link to="https://www.linkedin.com/in/viktor-riabokon/" target="new">
                        <BottomBarIcon>
                            <LinkedInIcon />
                        </BottomBarIcon>
                    </Link>
                    <Link to="https://www.facebook.com/profile.php?id=100008895454946&mibextid=LQQJ4d" target="new">
                        <BottomBarIcon>
                            <FacebookIcon />
                        </BottomBarIcon>
                    </Link>
                    <Link to="https://github.com/Viktor9r" target="new">
                        <BottomBarIcon sx={{ mr: 0 }}>
                            <GitHubIcon />
                        </BottomBarIcon>
                    </Link>
                </BottomBarRightPart>
            </BottomBarInnerContainer>
        </BottomBarOuterContainer>
    )
}