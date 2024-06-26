import { Download, Save } from "@mui/icons-material";
import { AboutImage, AboutImageOuterMobileContainer, AboutLeftPart, AboutRightPart, AboutTopText, DownloadButton, StyledAboutSection } from "./styled"
import me from '../../resources/images/MePr.jpg'
import { Grid, useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";

interface IProps {}

export const AboutSection: React.FC<IProps> = () => {
    const { t } = useTranslation()

    const onSaveButtonClick = () => {
        const pdfUrl = "/documents/CV.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Viktor_Riabokon_CV.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const smallDesktop = useMediaQuery('(max-height: 799px) and (min-width: 1024px)')
    const mobile = useMediaQuery('(max-width: 1023px)')
    const smallMobile = useMediaQuery('(max-width: 767px)')

    return (
        <>
            <StyledAboutSection>
                <AboutTopText>
                    {t('about')}
                </AboutTopText>
                <AboutLeftPart>
                    <div>
                        <b style={{
                            fontSize: smallMobile ? '16px' : smallDesktop ? '18px' : mobile ? '18px' : '24px'
                        }}>
                            {t('about_first')}
                        </b>
                        <br /><br />
                        <div style={{
                            fontSize: smallMobile ? '12px' : smallDesktop ? '14px' : mobile ? '14px' : '18px'
                        }}>
                            {t('about_second')}
                        </div>
                    </div>

                    <DownloadButton
                        onClick={onSaveButtonClick}
                        startIcon={<Download />}
                    >
                        {t('download_cv')}
                    </DownloadButton>
                </AboutLeftPart>

                <AboutRightPart>
                    {mobile ? (
                        <AboutImageOuterMobileContainer>
                            <AboutImage />
                        </AboutImageOuterMobileContainer>
                    ) : (
                        <AboutImage />
                    )}

                </AboutRightPart>
            </StyledAboutSection>
        </>
    )
}