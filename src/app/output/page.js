"use client";

import React, { useEffect, useRef, useState } from "react";
import LocationInfo from "../components/OutputComponents/LocationInfo";
import ScopeOfImplementation from "../components/OutputComponents/ScopeOfImplementation";
import CostBenefitAnalysis from "../components/OutputComponents/CostBenefitAnalysis";
import Benefits from "../components/OutputComponents/Benefits";
import Analysis from "../components/OutputComponents/Analysis";
import Header from "../components/LandingComponents/Header";
import { Backdrop, Box, Button, Grid, Stack } from "@mui/material";
import Lottie from "lottie-web";
import loader from "../utils/loader.json";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import Head from "next/head";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const MatchingCriteria = dynamic(() => import("../components/OutputComponents/MatchingCriteria"), { ssr: false });
const html2pdf = typeof window !== "undefined" ? require("html2pdf.js") : null;


export default function OutputScreen() {
    const [totalBenefit, setTotalBenefit] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
    const [responses, setResponses] = useState({});
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    const printRef = useRef();
    const { push } = useRouter();

    useEffect(() => {
        const sessionAnswer = sessionStorage.getItem("answers");
        if (sessionAnswer) {
            const data = JSON.parse(sessionAnswer);
            setIsDataLoaded(true);
            setResponses({ ...data });
        } else {
            push("/survey")
        }
    }, []);


    const currentTimestamp = Date.now();
    const formattedTime = new Date(currentTimestamp).toLocaleString();
    const formattedFileName = `ceew_nbs_${formattedTime}.pdf`;

    // const handleGeneratePDF = async () => {
    //     if (html2pdf && printRef.current) {
    //         const element = printRef.current;
    //         const filename = formattedFileName;
    //         const isMobile = window.innerWidth <= 768;

    //         const excludedElements = document.querySelectorAll('.exclude-from-pdf');
    //         excludedElements.forEach(el => el.style.display = 'none');

    //         const opt = {
    //             margin: 0.5,
    //             filename: filename,
    //             image: { type: "webp", quality: 0.98 },
    //             html2canvas: {
    //                 scale: 1.5, scrollY: 0, scrollX: 0,
    //                 // windowWidth: 1920, windowHeight: 1080 
    //             },
    //             jsPDF: { unit: 'in', format: isMobile ? 'A4' : 'A3', orientation: isMobile ? 'portrait' : 'landscape' },
    //             pagebreak: {
    //                 mode: ['css', 'avoid-all', 'before'],
    //                 before: '.page-break',
    //                 avoid: ['tr', 'td', 'th']
    //             }
    //         };

    //         html2pdf().from(element).set(opt).outputPdf('blob').then((pdfBlob) => {
    //             const downloadUrl = URL.createObjectURL(pdfBlob);
    //             const link = document.createElement("a");
    //             link.href = downloadUrl;
    //             link.download = filename;
    //             link.click();
    //             URL.revokeObjectURL(downloadUrl);

    //             const pdfUrl = URL.createObjectURL(pdfBlob);
    //             sessionStorage.setItem("pdfBlob", pdfUrl);

    //             handleUploadFile(pdfBlob);
    //         });
    //     }
    // };

    const contentRef = useRef(null);
    const [isGenerating, setIsGenerating] = useState(false);

    const handleGeneratePDF = async () => {
        if (!contentRef.current) return;

        try {
            setIsGenerating(true);

            const excludeElements = contentRef.current.getElementsByClassName('exclude-from-pdf');

            Array.from(excludeElements).forEach(el => {
                el.style.visibility = 'hidden';
            });

            const element = contentRef.current;
            const canvas = await html2canvas(element, {
                scale: 2,
                useCORS: true,
                logging: false,
                allowTaint: true,
                scrollY: -window.scrollY,
                windowWidth: element.scrollWidth,
                windowHeight: element.scrollHeight,
            });

            Array.from(excludeElements).forEach(el => {
                el.style.visibility = 'visible';
            });

            const imgData = canvas.toDataURL('image/jpeg', 1.0);

            const pageWidth = 210;
            const pageHeight = 297;
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;

            const ratio = imgWidth / imgHeight;
            const pdfWidth = pageWidth;
            const pdfHeight = pdfWidth / ratio;

            const pdf = new jsPDF({
                orientation: 'portrait',
                unit: 'mm',
                format: 'a4'
            });

            pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);

            if (pdfHeight > pageHeight) {
                let remainingHeight = pdfHeight;
                let currentPosition = -pageHeight;

                while (remainingHeight > pageHeight) {
                    pdf.addPage();
                    pdf.addImage(imgData, 'JPEG', 0, currentPosition, pdfWidth, pdfHeight);
                    remainingHeight -= pageHeight;
                    currentPosition -= pageHeight;
                }
            }

            const pdfBlob = pdf.output('blob');
            const downloadUrl = URL.createObjectURL(pdfBlob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.download = `ceew_nbs-${Date.now()}.pdf`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(downloadUrl);

            sessionStorage.setItem('pdfBlob', downloadUrl);

            if (typeof handleUploadFile === 'function') {
                await handleUploadFile(pdfBlob);
            }

        } catch (error) {
            console.error('PDF generation failed:', error);
        } finally {
            setIsGenerating(false);
        }
    };

    const handleUploadFile = async (pdfBlob) => {
        setLoading(true);
        setMessage("");

        const formData = new FormData();
        formData.append("file", new File([pdfBlob], "ceew_nbs.pdf", { type: "application/pdf" }));

        try {
            const response = await fetch("/api/drive", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            setMessage(data.message);

        } catch (error) {
            console.error("Error uploading file:", error);
            setMessage("Error uploading file");

        } finally {
            setLoading(false);

        }
    };

    useEffect(() => {
        let animation;
        if (loading) {
            animation = Lottie.loadAnimation({
                container: document.getElementById('lottie-loader'),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: loader,
            });
        }

        return () => {
            if (animation) {
                animation.destroy();
            }
        };
    }, [loading]);

    useEffect(() => {
        if (typeof window !== undefined) { document.title = "CEEW NBS | Result" }
    }, [])

    return (
        !isDataLoaded ?
            <Box id="lottie-loader" sx={{ width: 150, height: 150 }}></Box>
            :
            <React.Fragment>
                <Head>
                    <title>{document.title}</title>
                </Head>

                <Stack ref={contentRef} >
                    <Header />
                    <Box
                        width={"20%"}
                        alignSelf={{ xs: "center", lg: "flex-end" }} className="exclude-from-pdf">

                        <Button
                            variant="contained"
                            onClick={handleGeneratePDF}
                            sx={{ marginBottom: { xs: 0, lg: 2 }, marginRight: { xs: 0, lg: 2 } }}
                        >
                            Download PDF
                        </Button>
                    </Box>
                    <LocationInfo answer={responses} />
                    <ScopeOfImplementation answer={responses} />
                    <MatchingCriteria answer={responses} />
                    <Box sx={{ m: { xs: "16px", md: "16px 120px" }, pb: 2 }} borderRadius={"9px"} border="8px solid #C3E6F5" >
                        <CostBenefitAnalysis setTotalCost={setTotalCost} answer={responses} />
                        <Benefits setTotalBenefit={setTotalBenefit} answer={responses} />
                    </Box>
                    <Analysis totalCost={totalCost} totalBenefit={totalBenefit} answer={responses} />
                </Stack>


                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={loading}
                >
                    {loading ? (
                        <Box id="lottie-loader" sx={{ width: 150, height: 150 }}></Box>
                    ) : ""}
                </Backdrop>
            </React.Fragment>
    );
}