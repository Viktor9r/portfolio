import { MobileSkillsContainer, SideNavItem, SideNavigation, SkillItem, SkillsBlock, SkillsMiniBlock, SkillsMiniBlockContent, SkillsMiniBlockHeader, SkillsMiniBlockItem, SkillsMiniBlockLeft, SkillsMiniBlockRight, SkillsTitle, StyledSkillsSection } from "./styled"
import { Canvas } from "@react-three/fiber";

import { ReactComponent as FrontendIcon } from '../../resources/icons/frontend.svg'
import { ReactComponent as BackendIcon } from '../../resources/icons/backend.svg'
import { ReactComponent as SoftSkillsIcon } from '../../resources/icons/softskills.svg'
import { ReactComponent as ProgrammingIcon } from '../../resources/icons/programming.svg'

import { ReactComponent as JavaScriptIcon } from '../../resources/icons/javascript.svg'
import { ReactComponent as OopIcon } from '../../resources/icons/oop.svg'
import { ReactComponent as TypeScriptIcon } from '../../resources/icons/typescript.svg'
import { ReactComponent as SQLIcon } from '../../resources/icons/sql.svg'
import { ReactComponent as FlutterIcon } from '../../resources/icons/flutter.svg'
import { ReactComponent as PHPIcon } from '../../resources/icons/php.svg'
import { ReactComponent as HTMLIcon } from '../../resources/icons/html.svg'
import { ReactComponent as CSSIcon } from '../../resources/icons/css.svg'
import { ReactComponent as SCSSIcon } from '../../resources/icons/scss.svg'
import { ReactComponent as AngularIcon } from '../../resources/icons/angular.svg'
import { ReactComponent as ReduxIcon } from '../../resources/icons/redux.svg'
import { ReactComponent as BootstrapIcon } from '../../resources/icons/bootstrap.svg'
import { ReactComponent as ThreeIcon } from '../../resources/icons/threejs.svg'
import { ReactComponent as MUIIcon } from '../../resources/icons/mui.svg'
import { ReactComponent as AccessIcon } from '../../resources/icons/accessebility.svg'
import { ReactComponent as DebugIcon } from '../../resources/icons/debug.svg'
import { ReactComponent as MVVMIcon } from '../../resources/icons/mvvm.svg'
import { ReactComponent as NodeIcon } from '../../resources/icons/node.svg'
import { ReactComponent as WebSocketIcon } from '../../resources/icons/websocket.svg'
import { ReactComponent as AWSIcon } from '../../resources/icons/aws.svg'
import { ReactComponent as APIIcon } from '../../resources/icons/api.svg'
import { ReactComponent as MySQLIcon } from '../../resources/icons/mysql.svg'
import { ReactComponent as PostgreSQLIcon } from '../../resources/icons/postgresql.svg'
import { ReactComponent as PrismaIcon } from '../../resources/icons/prisma.svg'
import { ReactComponent as CriticalThinkingIcon } from '../../resources/icons/critical-thinking.svg'
import { ReactComponent as OrganizedIcon } from '../../resources/icons/organized.svg'
import { ReactComponent as StraightIcon } from '../../resources/icons/straight.svg'
import { ReactComponent as AnalyticsIcon } from '../../resources/icons/analytics.svg'
import { ReactComponent as DetailIcon } from '../../resources/icons/detail.svg'
import { ReactComponent as TeamIcon } from '../../resources/icons/teamwork.svg'
import { ReactComponent as AdaptabilityIcon } from '../../resources/icons/adaptability.svg'
import { ReactComponent as CooperationIcon } from '../../resources/icons/cooperation.svg'
import { ReactComponent as DedicationIcon } from '../../resources/icons/dedication.svg'
import { ReactComponent as PlanningIcon } from '../../resources/icons/planning.svg'
import { ReactComponent as PauseIcon } from '../../resources/icons/pause_icon.svg'
import { ReactComponent as PlayIcon } from '../../resources/icons/play_icon.svg'
import { ReactComponent as TailwindIcon } from '../../resources/icons/tailwind-css.svg'
import { ReactComponent as ExpressJSIcon } from '../../resources/icons/expressjs.svg'
import { ReactComponent as MongoDBIcon } from '../../resources/icons/mongodb.svg'
import { ReactComponent as NoSQLIcon } from '../../resources/icons/nosql.svg'
import { ReactComponent as SupabaseIcon } from '../../resources/icons/supabase.svg'
import { ReactComponent as GitIcon } from '../../resources/icons/git.svg'
import { ReactComponent as WebpackIcon } from '../../resources/icons/webpack.svg'
import { ReactComponent as JiraIcon } from '../../resources/icons/jira.svg'
import { ReactComponent as ContentfulIcon } from '../../resources/icons/contentful.svg'
import { ReactComponent as WordpressIcon } from '../../resources/icons/wordpress.svg'
import { ReactComponent as BigCommerceIcon } from '../../resources/icons/bigcommerce.svg'
import { ReactComponent as FigmaIcon } from '../../resources/icons/figma.svg'

import { ReactComponent as ReactIcon } from '../../resources/icons/react.svg'
import { ReactComponent as NextIcon } from '../../resources/icons/next-js.svg'
import { useEffect, useState } from "react"
import { SkillsCube } from "./SkillsCube";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "@mui/material";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ResetTv, Stop } from "@mui/icons-material";

interface IProps {
    isAutoSliding: boolean,
    setIsAutoSliding: any
}

export const SkillsSection: React.FC<IProps> = ({ isAutoSliding, setIsAutoSliding }) => {
    const { t } = useTranslation()

    const skillsArray = [
        {
            id: 1,
            type: t('programming'),
            icon: <ProgrammingIcon />,
            skills: [
                {
                    title: 'JavaScript',
                    icon: <JavaScriptIcon />
                },
                {
                    title: 'TypeScript',
                    icon: <TypeScriptIcon />
                },
                // {
                //     title: 'OOP',
                //     icon: <OopIcon />
                // },
                {
                    title: 'SQL',
                    icon: <SQLIcon />
                },
                {
                    title: 'Flutter',
                    icon: <FlutterIcon />
                },
                {
                    title: 'PHP',
                    icon: <PHPIcon />
                },
                {
                    title: 'Git',
                    icon: <GitIcon />
                },
                {
                    title: 'Webpack',
                    icon: <WebpackIcon />
                },
                {
                    title: 'Jira',
                    icon: <JiraIcon />
                },
                {
                    title: 'Contentful',
                    icon: <ContentfulIcon />
                },
                {
                    title: 'Wordpress',
                    icon: <WordpressIcon />
                },
                {
                    title: 'Bigcommerce',
                    icon: <BigCommerceIcon />
                },
                {
                    title: 'Figma',
                    icon: <FigmaIcon />
                },
            ]
        },
        {
            id: 2,
            type: 'Frontend',
            icon: <FrontendIcon />,
            skills: [
                {
                    title: 'React',
                    icon: <ReactIcon />
                },
                {
                    title: 'Next.js',
                    icon: <NextIcon />
                },
                {
                    title: 'Angular',
                    icon: <AngularIcon />
                },
                {
                    title: 'Redux',
                    icon: <ReduxIcon />
                },
                {
                    title: 'HTML',
                    icon: <HTMLIcon />
                },
                {
                    title: 'CSS',
                    icon: <CSSIcon />
                },
                {
                    title: 'SCSS',
                    icon: <SCSSIcon />
                },
                {
                    title: 'Bootstrap',
                    icon: <BootstrapIcon />
                },
                {
                    title: 'Tailwind CSS',
                    icon: <TailwindIcon />
                },
                {
                    title: 'Material UI',
                    icon: <MUIIcon />
                },
                // {
                //     title: 'Zustand'
                // },
                
                {
                    title: 'Three.js',
                    icon: <ThreeIcon />
                },
                // {
                //     title: 'Jest'
                // },
                // {
                //     title: 'Styled Components'
                // },
                {
                    title: t('accessebility'),
                    icon: <AccessIcon />
                },
                {
                    title: t('debugging'),
                    icon: <DebugIcon />
                },
                {
                    title: 'MVVM',
                    icon: <MVVMIcon />
                },
            ]
        },
        {
            id: 3,
            type: 'Backend',
            icon: <BackendIcon />,
            skills: [
                {
                    title: 'Node.js',
                    icon: <NodeIcon />
                },
                {
                    title: 'WebSocket',
                    icon: <WebSocketIcon />
                },
                {
                    title: 'AWS',
                    icon: <AWSIcon />
                },
                {
                    title: 'REST API',
                    icon: <APIIcon />
                },
                {
                    title: 'MySQL',
                    icon: <MySQLIcon />
                },
                {
                    title: 'NoSQL',
                    icon: <NoSQLIcon />
                },
                {
                    title: 'MongoDB',
                    icon: <MongoDBIcon />
                },
                {
                    title: 'PostgreSQL',
                    icon: <PostgreSQLIcon />
                },
                {
                    title: 'Supabase',
                    icon: <SupabaseIcon />
                },
                {
                    title: 'Prisma',
                    icon: <PrismaIcon />
                },
            ]
        },
        {
            id: 4,
            type: t('soft_skills'),
            icon: <SoftSkillsIcon />,
            skills: [
                {
                    title: t('critical_thinking'),
                    icon: <CriticalThinkingIcon />
                },
                {
                    title: t('organized'),
                    icon: <OrganizedIcon />
                },
                // {
                //     title: 'Straightforward',
                //     icon: <StraightIcon />
                // },
                {
                    title: t('analytics'),
                    icon: <AnalyticsIcon />
                },
                {
                    title: t('detail_oriented'),
                    icon: <DetailIcon />
                },
                {
                    title: t('team_player'),
                    icon: <TeamIcon />
                },
                {
                    title: t('adaptability'),
                    icon: <AdaptabilityIcon />
                },
                {
                    title: t('cooperation'),
                    icon: <CooperationIcon />
                },
                {
                    title: t('dedication'),
                    icon: <DedicationIcon />
                },
                {
                    title: t('planning'),
                    icon: <PlanningIcon />
                },
            ]
        },
    ]

    const mobile = useMediaQuery('(max-width: 1023px');
    const smallMobile = useMediaQuery('(max-width: 767px');

    const [hoveredId, setHoveredId] = useState(0);
    const [selectedId, setSelectedId] = useState(mobile ? 1 : 0);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;
        if (isAutoSliding) {
            interval = setInterval(() => {
                setSelectedId((prevId) => (prevId >= 4 ? 1 : prevId + 1));
            }, 5000);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isAutoSliding]);

    return (
        <StyledSkillsSection>
            <SkillsTitle>
                {
                    selectedId == 1 && mobile && t('programming')
                }
                {
                    selectedId == 2 && mobile && 'Frontend'
                }
                {
                    selectedId == 3 && mobile && 'Backend'
                }
                {
                    selectedId == 4 && mobile && t('soft_skills')
                }
                <br />
                {selectedId !== 4 && mobile && (
                    t('skills')
                )}

                {!mobile && !smallMobile &&  (
                    t('skills')
                )}

                {/* {mobile && (
                    isAutoSliding ? (
                        <PauseIcon style={{
                            transform: 'scale(0.88) translateY(16px)',
                        }} onClick={() => setIsAutoSliding(false)} />
                    ) : (
                        <PlayIcon onClick={() => setIsAutoSliding(true)} />
                    )
                )} */}
            </SkillsTitle>

            {!smallMobile && (
                <SkillsCube
                    selectedId={selectedId}
                    setSelectedId={setSelectedId}
                    skills={skillsArray}
                />
            )}

            {smallMobile && (

                <MobileSkillsContainer>
                    {skillsArray[selectedId - 1].skills.map((item) => (
                        <SkillItem
                            key={item.title}
                            sx={{
                                width: 'calc(100% / 5)'
                            }}
                        >
                            {item.icon}
                            {item.title}
                        </SkillItem>
                    ))}
                </MobileSkillsContainer>
            )}

            <SideNavigation>
                {!mobile && !smallMobile && (
                    <SideNavItem
                        sx={{
                            fill: '#fff',
                            color: '#fff',
                            borderBottom: "1px solid #fff",
                            paddingBottom: '18px'
                        }}
                        onClick={() => {
                            setIsAutoSliding(!isAutoSliding)
                        }
                        }
                    >
                        {
                            isAutoSliding ? (
                                <>
                                    <PauseIcon style={{
                                        transform: 'scale(0.88)'
                                    }} onClick={() => setIsAutoSliding(false)} />
                                    <div>{t('pause')}</div>
                                </>
                            ) : (
                                <>
                                    <PlayIcon onClick={() => setIsAutoSliding(true)} />
                                    <div>{t('continue')}</div>
                                </>
                            )
                        }
                    </SideNavItem>
                )}
                {skillsArray.map((item) => (
                    <>
                        <SideNavItem
                            onMouseOver={() => setHoveredId(0)}
                            onMouseOut={() => setHoveredId(item.id)}
                            key={item.id}
                            sx={{
                                fill: selectedId == item.id ? '#fff' : 'rgba(255, 255, 255, 0.6)',
                                color: selectedId == item.id ? '#fff' : 'rgba(255, 255, 255, 0.6)'
                            }}
                            onClick={() => {
                                setSelectedId(item.id)
                                setIsAutoSliding(false)
                            }}
                        >
                            {item.icon}
                            {!smallMobile && (
                                <div>{item.type}</div>
                            )}
                        </SideNavItem>
                    </>
                ))}
            </SideNavigation>
            {/* <Canvas style={{width: '100%', height: 'calc(100vh - 140px)'}}>
                <SkillsCube />
            </Canvas> */}

            {/* <SkillsBlock>
                {skillsArray.map((item) => (
                    <SkillsMiniBlock
                        onMouseOver={() => setHoveredId(item.id)}
                        sx={{
                            borderRight: item.id !== 4 ? '4px solid rgba(255, 255, 255, 0.6)' : 'none',
                            flex: hoveredId == item.id ? 1 : 0
                        }}
                    >
                        <SkillsMiniBlockHeader>
                            {item.icon}
                            <div
                                style={{
                                    transition: '0.5s',
                                    display: hoveredId == item.id ? 'block' : 'none'
                                }}
                            >
                                {item.type}
                            </div>
                        </SkillsMiniBlockHeader>

                        <SkillsMiniBlockContent
                            sx={{
                                display: hoveredId !== item.id ? 'none' : 'flex'
                            }}
                        >
                            <SkillsMiniBlockRight>

                                {item.skills.map((skill: any) => (
                                    <SkillsMiniBlockItem key={skill.title}>
                                        {'<li>'} {skill.title} {'</li>'}
                                    </SkillsMiniBlockItem>
                                ))}

                            </SkillsMiniBlockRight>
                        </SkillsMiniBlockContent>
                    </SkillsMiniBlock>
                ))}
            </SkillsBlock> */}
        </StyledSkillsSection>
    )
}