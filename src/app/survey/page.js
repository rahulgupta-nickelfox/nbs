'use client'

import React, { useEffect, useState } from 'react';
import {
    Button,
    Typography,
    Container,
    Box,
    Backdrop,
    Grid,
    Tooltip,
    DialogContent,
    Stepper,
    StepLabel,
    Step,
    styled,
    useMediaQuery,
} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { Dialog, IconButton } from '@mui/material';

import { answer, questions } from '../questions';
import General from '../components/Questionnaire/General';
import ProjectDetails from '../components/Questionnaire/ProjectDetails';
import Criteria from '../components/Questionnaire/Criteria';
import Scope from '../components/Questionnaire/Scope';
import Mapping from '../components/Questionnaire/Mapping';
import Costs from '../components/Questionnaire/Costs';
import Benefits from '../components/Questionnaire/Benefits';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import loader from "../utils/loader.json";
import Lottie from 'lottie-web';
import Head from 'next/head';
import GeneralInstruction from '../components/InstructionComponents/GeneralInstruction';
import MatchingInstruction from '../components/InstructionComponents/MatchingInstruction';
import ScopeInstruction from '../components/InstructionComponents/ScopeInstruction';
import MappingInstruction from '../components/InstructionComponents/MappingInstruction';
import CostInstruction from '../components/InstructionComponents/CostInstruction';
import ProjectDetailsInstruction from '../components/InstructionComponents/ProjectDetailsInstruction';
import BenefitInstruction from '../components/InstructionComponents/BenefitInstruction';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { useTheme } from '@emotion/react';

export default function SurveyPage() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({ answer });
    const [error, setError] = useState({});
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const { push } = useRouter();

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const Transition = React.forwardRef(function Transition(props, ref) {
        return <Slide direction="up" ref={ref} {...props} />;
    });

    useEffect(() => {
        let animation;
        if (loading) {
            animation = Lottie.loadAnimation({
                container: document.getElementById('lottie-loader'),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: loader
            });
        }
    }, [loading])

    const validateCurrentQuestion = () => {
        const question = questions[currentQuestion];
        let isValid = true;
        let newErrors = {};

        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

        switch (question.type) {
            case "general":
            case "project":
                for (const field of question.fields) {
                    const fieldValue = answers.answer[field.name];

                    if (field.required) {
                        if (fieldValue === undefined || fieldValue === null || fieldValue === '') {
                            newErrors[field.name] = `${field.label} is required.`;
                            isValid = false;
                            continue;
                        }
                    }

                    if (field.name === "email" && fieldValue) {
                        if (!emailRegex.test(fieldValue)) {
                            newErrors[field.name] = 'Please enter a valid email address.';
                            isValid = false;
                        }
                    }

                    if (!newErrors[field.name]) {
                        newErrors[field.name] = null;
                    }
                }
                break;

            case "criteria":
                if (question.required && (!answers.answer || Object.keys(answers.answer).length === 0)) {
                    newErrors.criteria = 'Please select at least one option.';
                    isValid = false;
                }
                break;

            default:
                console.warn(`Unknown question type: ${question.type}`);
                return true;
        }

        setError(prev => ({
            ...prev,
            ...newErrors
        }));

        return isValid;
    };


    const handleNext = () => {
        window.scrollTo(0, 0);
        const isValid = validateCurrentQuestion()
        if (isValid) {
            setCurrentQuestion(currentQuestion + 1);
            setError("");
        }
    };

    const handlePrev = () => {
        window.scrollTo(0, 0);
        setCurrentQuestion(currentQuestion - 1);
        setError("");
    };

    const handleSubmit = async (e, questionId) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch("/api/excel", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(answers.answer),
            });

            if (validateCurrentQuestion()) {
                sessionStorage.setItem("answers", JSON.stringify(answers));
                push("/output", { answer: answers }, { shallow: true })
            }

            const data = await response.json();
            setMessage(data.message || data.error);
        } catch (error) {
            setMessage("An error occurred while saving the data.");
        } finally {
            setLoading(false);
        }
    };

    const renderQuestion = () => {

        const question = questions[currentQuestion];

        switch (question.type) {
            case "general":
                return (
                    <General
                        question={question}
                        answers={answers}
                        setAnswers={setAnswers}
                        setError={setError}
                        errors={error}
                    />
                );
            case "project":
                return (
                    <ProjectDetails
                        question={question}
                        answers={answers}
                        setAnswers={setAnswers}
                        errors={error}
                        setError={setError}
                    />
                );
            case "criteria":
                return (
                    <Criteria
                        question={question}
                        answers={answers}
                        setAnswers={setAnswers}
                    />
                )
            case "scope":
                return (
                    <Scope
                        question={question}
                        answers={answers}
                        setAnswers={setAnswers}
                    />
                )
            case "mapping":
                return (
                    <Mapping
                        question={question}
                        currentQuestion={currentQuestion}
                        setCurrentQuestion={setCurrentQuestion}
                        answers={answers}
                        setAnswers={setAnswers}
                        setError={setError}
                    />
                )
            case "costs":
                return (
                    <Costs
                        question={question}
                        answers={answers}
                        setAnswers={setAnswers}
                    />
                )
            case "benefits":
                return (
                    <Benefits
                        question={question}
                        answers={answers}
                        setAnswers={setAnswers}
                    />
                )
            default:
                return null;
        }
    };

    const renderInfo = () => {
        const question = questions[currentQuestion]

        switch (question.type) {
            case "general":
                return (
                    <GeneralInstruction />
                )
            case "project":
                return (
                    <ProjectDetailsInstruction />
                )
            case "criteria":
                return (
                    <MatchingInstruction />
                )
            case "scope":
                return (
                    <ScopeInstruction />
                )
            case "mapping":
                return (
                    <MappingInstruction />
                )
            case "costs":
                return (
                    <CostInstruction />
                )
            case "benefits":
                return (
                    <BenefitInstruction />
                )
            default:
                return null
        }
    }

    const stepLabels = questions.map((q) => q.stepper);
    const CustomConnector = styled(StepConnector)(({ theme }) => ({
        [`&.${stepConnectorClasses.alternativeLabel}`]: {
            top: 19,
        },
        [`&.${stepConnectorClasses.active}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                backgroundColor: '#F26226',
            },
        },
        [`&.${stepConnectorClasses.completed}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                backgroundColor: '#F26226',
            },
        },
        [`& .${stepConnectorClasses.line}`]: {
            height: 1.4,
            border: 0,
            backgroundColor: '#C4C4C4',
            borderRadius: 1,
        },
    }));

    const CustomStepIcon = (props) => {
        const { active, completed, icon } = props;
        const iconSrc = isMobile
            ? active
                ? `/step-${icon}-active.png`
                : ""
            : active
                ? `/step-${icon}-active.png`
                : `/step-${icon}.png`;
        return (
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: active ? '#F26226' : '#C4C4C4',
                    borderRadius: '50%',
                    width: isMobile ? 28 : 34,
                    height: isMobile ? 28 : 34,
                }}
            >
                <Image src={iconSrc} alt={`Step ${icon}`} width={isMobile ? 18 : 20} height={isMobile ? 18 : 20} />
            </Box>

        );
    };

    useEffect(() => {
        if (typeof window !== undefined) { document.title = "CEEW NBS | Toolkit" }
    }, [])

    return (
        <React.Fragment>
            <Head>
                <title>CEEW NBS | Toolkit</title>
            </Head>
            <Container sx={{
                // boxShadow: 1,
                backgroundColor: '#fff',
                width: '100%'
            }}>
                <Box sx={{ my: 2, p: 1 }}>
                    <Image src="/ceew.svg" alt="Logo" width={77.11} height={41} />

                    <Box
                        sx={{
                            mt: 1,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        {isMobile ? (
                            <Stepper
                                activeStep={currentQuestion}
                                alternativeLabel
                                connector={<CustomConnector />}
                            >
                                <Step>
                                    <StepLabel
                                        StepIconComponent={(props) => <CustomStepIcon {...props}
                                            active={true}
                                            completed={false}
                                            icon={currentQuestion + 1} />
                                        }
                                        sx={{
                                            "& .MuiStepLabel-label": {
                                                fontSize: 14,
                                                fontWeight: 700,
                                                transition: "font-weight 0.3s ease",
                                            },
                                        }}
                                    >
                                        {stepLabels[currentQuestion]}
                                    </StepLabel>
                                </Step>
                            </Stepper>
                        ) : (
                            <Stepper
                                activeStep={currentQuestion}
                                alternativeLabel
                                connector={<CustomConnector />}
                            >
                                {stepLabels.map((label, index) => (
                                    <Step key={index}>
                                        <StepLabel
                                            StepIconComponent={(props) => <CustomStepIcon {...props} />}
                                            sx={{
                                                "& .MuiStepLabel-label": {
                                                    fontSize: 14,
                                                    fontWeight: index === currentQuestion ? 700 : 500,
                                                    transition: "font-weight 0.3s ease",
                                                },
                                            }}
                                        >
                                            {label}
                                        </StepLabel>
                                    </Step>
                                ))}
                            </Stepper>
                        )}
                    </Box>


                    <Box sx={{ mb: 4, mt: 1 }}>
                        <Grid item xs={12} display={"flex"} alignItems={"center"}
                        >
                            <Typography variant="title" >
                                {questions[currentQuestion].text}
                            </Typography>
                            {questions[currentQuestion].info && (
                                <Tooltip title="Instructions" arrow>
                                    <IconButton
                                        onClick={handleOpen}
                                        aria-label="info">
                                        <InfoIcon fontSize='small' />
                                    </IconButton>
                                </Tooltip>
                            )}

                            <Dialog open={open} onClose={handleClose} >
                                <IconButton aria-label="close"
                                    onClick={handleClose}
                                    sx={{
                                        position: 'absolute',
                                        right: 16,
                                        top: 46,
                                    }}>
                                    <CloseIcon />
                                </IconButton>
                                <DialogContent>

                                    {renderInfo()}
                                </DialogContent>
                            </Dialog>
                        </Grid>
                        {renderQuestion()}
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {currentQuestion > 0 && (
                            <Button variant="contained" onClick={handlePrev} sx={{ mr: 2 }}>
                                Previous
                            </Button>
                        )}
                        {currentQuestion < questions.length - 1 ? (
                            <>
                                <Box></Box>
                                <Button variant="contained" onClick={handleNext}>
                                    Next
                                </Button>
                            </>
                        ) : (
                            <Button variant="contained" href='/output' onClick={(e) => handleSubmit(e, questions[currentQuestion].id)}>
                                Preview
                            </Button>
                        )}
                    </Box>
                </Box>

                <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
                    <Box id="lottie-loader" sx={{ width: 150, height: 150 }}></Box>
                </Backdrop>
            </Container>
        </React.Fragment>
    );
}