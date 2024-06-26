import { Suspense, useState } from "react"
import { ContactsLeft, ContactsLeftInfo, ContactsLeftTitle, ContactsRight, ContactsTitle, ContanctMethodRow, StyledContactSection, StyledForm, StyledFormBlock, StyledFormButtons, StyledFormField } from "./styled"
import { ArrowButton, ProjectSkillsDivider } from "../ProjectsSection/styled"
import EmailIcon from '@mui/icons-material/Email';
import { ArrowRight, ArrowRightAlt, Clear, Phone, Send } from "@mui/icons-material";
import { Typography, useMediaQuery } from "@mui/material";
import { AppInnerContainer } from "../../styled";
import { EntryScreenRight } from "../EntryScreen/styled";
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from "@react-three/drei"
import Back from '../EntryScreen/RightPart/Back'
import { useTranslation } from "react-i18next";

interface IProps { }

export const ContactSection: React.FC<IProps> = () => {
    const { t } = useTranslation()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [error, setError] = useState('')
    const [isSucces, setIsSuccess] = useState(false)

    function onSubmit(e: any) {
        e.preventDefault();
        e.stopPropagation();

        fetch("https://formcarry.com/s/P2EIggoyDQd", {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, message })
        })
            .then(response => response.json())
            .then(response => {
                if (response.code === 200) {
                    alert("We received your submission, thank you!");
                    clearForm()
                }
                else if (response.code === 422) {
                    // Field validation failed
                    setError(response.message)
                }
                else {
                    // other error from formcarry
                    setError(response.message)
                }
            })
            .catch(error => {
                // request related error.
                setError(error.message ? error.message : error);
            });
    }

    const clearForm = () => {
        setName('')
        setEmail('')
        setMessage('')
    }

    const mobile = useMediaQuery('(max-width: 1023px)')
    const smallMobile = useMediaQuery('(max-width: 767px)')

    return (
        <AppInnerContainer id="contact">
            {/* <div style={{
                    minWidth: '100vw',
                    maxWidth: '100vw',
                    position: 'fixed',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 2,
                    background: 'rgba(0, 0, 0, 0.8)',
            }}>
            </div> */}
            <EntryScreenRight
                sx={{
                    minWidth: '100vw',
                    maxWidth: mobile ? 'fit-content' : '100vw',
                    position: 'absolute',
                    // top: 0,
                    // bottom: 0,
                    // left: 0,
                    // right: 0,
                    zIndex: 1,
                }}
            >
                <Canvas style={{ height: '100%' }}>
                    <ambientLight />
                    <OrbitControls autoRotate autoRotateSpeed={0.1} enableRotate={mobile ? false : true} enableZoom={false} rotateSpeed={1} />
                    <Suspense fallback={null}>
                        <Back />
                    </Suspense>
                    <Environment preset="sunset" />
                </Canvas>
            </EntryScreenRight>

            <StyledContactSection>
                {/* <ContactsTitle>Contact me</ContactsTitle> */}

                <ContactsLeft sx={{
                    height: !mobile ? document.getElementById('rightForm') ? document.getElementById('rightForm')!.clientHeight + 4 : '478px' : 'fit-content'
                }}>
                    <ContactsLeftTitle sx={{
                        boxShadow: '0px 0px 15px 10px #000000'
                    }}>
                        {t('contact_me')}
                    </ContactsLeftTitle>
                    <ContactsLeftInfo sx={{
                        boxShadow: '0px 0px 15px 10px #000000'
                    }}>
                        <div style={{ marginBottom: '24px' }}>
                            {smallMobile ?
                                t('reach_me_mobile') 
                                :
                                t('reach_me')
                            }:
                        </div>

                        <ProjectSkillsDivider sx={{ marginBottom: '24px' }} />

                        <ContanctMethodRow
                            to='javascript:void(0)'
                            onClick={() => window.location.href = 'mailto:viktor.riabokon.job@gmail.com'}
                        >
                            <EmailIcon />
                            <div>
                                viktor.riabokon.job@gmail.com
                            </div>
                        </ContanctMethodRow>

                        <ProjectSkillsDivider sx={{ marginBottom: '24px' }} />

                        <ContanctMethodRow
                            sx={{
                                marginBottom: smallMobile ? 0 : '24px'
                            }}
                            to='tel:6476414631'
                        >
                            <Phone />
                            <div>
                                + 1 (647) 641 - 4631
                            </div>
                        </ContanctMethodRow>

                        {!smallMobile && (
                            <>
                                <ProjectSkillsDivider sx={{ marginBottom: '24px' }} />

                                <div>{t('send_direct')} <ArrowRightAlt sx={{
                                    transform: 'scaleX(2.5) translateY(7px) translateX(8px)',
                                }} /></div>
                            </>
                        )}

                    </ContactsLeftInfo>
                </ContactsLeft>

                <ContactsRight
                    sx={{
                        boxShadow: smallMobile ? 'none' : '0px 0px 15px 10px #000000'
                    }}
                >
                    <StyledForm id="rightForm" onSubmit={(e) => onSubmit(e)}>
                        <StyledFormBlock>
                            {/* <label htmlFor="name">Full Name</label> */}
                            <StyledFormField
                                type="text"
                                value={name}
                                required
                                onChange={(e) => setName(e.target.value)}
                                id="name"
                                variant="outlined"
                                color="secondary"
                                placeholder={t('name')}
                                inputProps={
                                    {
                                        sx: {
                                            padding: smallMobile ? '10px 14px' : '16px 14px',
                                            '&::placeholder': {
                                                color: 'rgba(255, 255, 255, 0.8)',
                                                fontFamily: 'Meragen, sans-serif',
                                                fontSize: smallMobile ? '14px' : '16px',
                                                opacity: 1, // otherwise firefox shows a lighter color
                                            },
                                        },
                                    }
                                }
                            />
                        </StyledFormBlock>

                        <StyledFormBlock>
                            {/* <label htmlFor="email">Email</label> */}
                            <StyledFormField
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                                variant="outlined"
                                color="secondary"
                                placeholder="Email"
                                inputProps={
                                    {
                                        sx: {
                                            padding: smallMobile ? '10px 14px' : '16px 14px',
                                            '&::placeholder': {
                                                fontSize: smallMobile ? '14px' : '16px',
                                                color: 'rgba(255, 255, 255, 0.8)',
                                                fontFamily: 'Meragen, sans-serif',
                                                opacity: 1, // otherwise firefox shows a lighter color
                                            },
                                        },
                                    }
                                }
                            />
                        </StyledFormBlock>

                        <StyledFormBlock>
                            {/* <label htmlFor="message">Message</label> */}
                            <StyledFormField
                                type="email"
                                required
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                id="message"
                                variant="outlined"
                                color="secondary"
                                placeholder={t('type_message')}
                                multiline
                                minRows={smallMobile ? 3 : 5}
                                inputProps={
                                    {
                                        sx: {
                                            '&::placeholder': {
                                                fontSize: smallMobile ? '14px' : '16px',
                                                color: 'rgba(255, 255, 255, 0.8)',
                                                fontFamily: 'Meragen, sans-serif',
                                                opacity: 1, // otherwise firefox shows a lighter color
                                            },
                                        },
                                    }
                                }
                            />
                        </StyledFormBlock>

                        <StyledFormButtons>
                            <ArrowButton
                                sx={{
                                    borderBottomLeftRadius: '65px',
                                    width: 'fit-content',
                                    ['svg']: {
                                        transform: 'translateY(-1px)'
                                    },
                                    ['@media (max-width: 767px)']: {
                                        boxShadow: '0px 0px 15px 10px #000000',
                                        background: 'rgba(0, 0, 0, 0.9)',
                                        borderColor: '#4d1caf'
                                    },
                                }}
                                startIcon={<Clear />}
                                onClick={() => {
                                    clearForm()
                                }}
                            >
                                {t('clear')}
                            </ArrowButton>
                            <ArrowButton
                                type="submit"
                                endIcon={<Send />}
                                sx={{
                                    borderBottomRightRadius: '65px',
                                    width: 'fit-content',
                                    padding: '0 35px 0 30px',
                                    ['svg']: {
                                        transform: 'translateY(-1px)'
                                    },
                                    ['@media (max-width: 767px)']: {
                                        boxShadow: '0px 0px 15px 10px #000000',
                                        background: 'rgba(0, 0, 0, 0.9)',
                                        borderColor: '#4d1caf'
                                    },
                                }}
                            >
                                {t('send')}
                            </ArrowButton>
                        </StyledFormButtons>
                    </StyledForm>
                </ContactsRight>
            </StyledContactSection>
        </AppInnerContainer>
    )
}