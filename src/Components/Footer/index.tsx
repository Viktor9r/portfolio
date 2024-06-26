import { Link } from "react-router-dom"
import { AppInnerContainer } from "../../styled"
import { FooterContent, FooterIcon, FooterLeft, FooterLogo, FooterName, FooterOuterContainer, FooterPositionTitle, FooterRight } from "./styled"
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import { useMediaQuery } from "@mui/material";

interface IProps { }

export const Footer: React.FC<IProps> = () => {
    const mobile = useMediaQuery('(max-width: 1023px)')

    return (
        <FooterOuterContainer>
            <AppInnerContainer
                sx={{
                    padding: '30px',
                    ['@media (max-width: 1023px)']: {
                        height: '100%'
                    }
                }}
            >
                <FooterContent>
                    <FooterLeft>
                        <FooterLogo
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            VR
                        </FooterLogo>
                        {!mobile && (
                            <div>
                                <FooterName>Viktor Riabokon</FooterName>
                                <FooterPositionTitle>Frontend/Web Developer</FooterPositionTitle>
                            </div>
                        )}
                    </FooterLeft>

                    <FooterRight>
                        <Link to="https://www.linkedin.com/in/viktor-riabokon/" target="new">
                            <FooterIcon>
                                <LinkedInIcon />
                            </FooterIcon>
                        </Link>
                        <Link to="https://www.facebook.com/profile.php?id=100008895454946&mibextid=LQQJ4d" target="new">
                            <FooterIcon>
                                <FacebookIcon />
                            </FooterIcon>
                        </Link>
                        <Link to="https://github.com/Viktor9r" target="new">
                            <FooterIcon sx={{ mr: 0 }}>
                                <GitHubIcon />
                            </FooterIcon>
                        </Link>
                    </FooterRight>
                </FooterContent>
            </AppInnerContainer>
        </FooterOuterContainer>
    )
}