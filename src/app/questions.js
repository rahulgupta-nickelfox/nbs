export const questions = [
    {
        id: 1,
        text: "General details",
        info: false,
        stepper: "General details",
        type: "general",
        fields: [
            { name: "project_title", title: "Title of the project", label: "Title", required: true, tooltip: "Please enter the title of the project (For example, ‘Mangrove restoration in Thane’)" },
            { name: "name_of_individual", title: "Name of the individual / organization implementing the project", label: "Name", required: true, tooltip: "Please enter the name of the individual/organisation implementing the project" },
            { name: "email", title: "Email ID", label: "Email", required: true, tooltip: "Please enter a valid email address" }
        ]
    },
    {
        id: 2,
        text: "Project details",
        info: false,
        stepper: "Project details",
        type: "project",
        fields: [
            { name: "beginning_year", title: "Beginning Year of Implementation", label: "Beginning Year", required: false },
            { name: "end_year", title: "End Year of Implementation", label: "End Year", required: false },
            { name: "location_of_project", title: "Location of Project", label: "Location of project", required: true },
            { name: "area_of_project", title: "Area of Project (in sq km)", label: "Area of project", required: true },
            { name: "description_of_project", title: "Brief Description of the Project (in 100 words)", required: false, multiline: true, maxLength: 100 }
        ]
    },
    {
        id: 3,
        text: "Nature-based Solutions Criteria",
        info: false,
        stepper: "NbS Criteria",
        type: "criteria",
        subquestions: [
            {
                id: 3.1,
                text: "Fitting in the definition",
                tooltip: "For both sub-indicators, you must select at least one option to meet the criteria.",
                subquestions: [
                    {
                        id: "3.1.1",
                        text: "Types of intervention",
                        options: [
                            "Protection",
                            "Restoration",
                            "Management",
                            "Sustainable Use",
                            "Conservation",
                            "Creation of Habitats"
                        ]
                    },
                    {
                        id: "3.1.2",
                        text: "Ecosystem Services provided by the intervention",
                        options: [
                            "Supporting",
                            "Cultural",
                            "Regulating",
                            "Provisioning",
                        ]
                    }
                ]
            },
            {
                id: 3.2,
                text: "Satisfying the symbiotic relationship",
                tooltip: "For both sub-indicators, you must select at least one option to meet the criteria.",
                subquestions: [
                    {
                        id: "3.2.1",
                        text: "The intervention has improved at least one of the following indicators based on Human Development Index",
                        options: [
                            "Life expectancy",
                            "Expected years of schooling",
                            "Mean years of schooling",
                            "Gross National Income (GNI) per capita",
                        ]
                    },
                    {
                        id: "3.2.2",
                        text: "The intervention ensures at least one of the following targets mentioned under the Kunming-Montreal Global Biodiversity Framework",
                        options: [
                            "Planning and Management of areas to reduce biodiversity loss",
                            "Restoration of degraded ecosystems",
                            "Conservation of terrestrial, inland water, coastal and marine areas",
                            "Reducing pollution to levels that are not harmful to biodiversity",
                            "Management of wild species to benefit people",
                            "Restoring, maintaining and enhancing nature's contributions to people",
                            "Integrate Biodiversity in Decision-Making at Every Level",
                            "Strengthening biosafety and distributing the benefits of biotechnology",
                            "Scaling of positive incentives for biodiversity",
                            "Mobilising finances for biodiversity",
                            "Creating knowledge that is available and accessible to guide biodiversity action",
                            "Reducing species extinction, protecting genetic diversity and managing human-wildlife conflicts",
                            "Sustainable, Safe and Legal Harvesting and Trade of Wild Species",
                            "Reducing the introduction of invasive alien species and minimising their impact",
                            "Minimising the impacts of climate change on biodiversity and building resilience",
                            "Enhancing biodiversity and sustainability in agriculture, aquaculture, fisheries and forestry",
                            "Enhancing green spaces and urban planning for human well-being and biodiversity",
                            "Increase the Sharing of Benefits From Genetic Resources, Digital Sequence Information and Traditional Knowledge",
                            "Supporting businesses to assess, disclose and reduce biodiversity-related risks and negative impacts",
                            "Enabling sustainable consumption choices To reduce waste and overconsumption",
                            "Strengthening capacity-building, technology transfer, and scientific and technical cooperation for biodiversity"
                        ]
                    }
                ]
            },
            {
                id: 3.3,
                text: "The following factors were taken into consideration during the implementation of the intervention",
                tooltip: "You must select all four options to meet the criteria.",
                subquestions: [
                    {
                        id: "",
                        text: "",
                        options: [
                            "Social",
                            "Cultural",
                            "Economic",
                            "Ecological"
                        ]
                    }
                ],
            },
            {
                id: 3.4,
                text: "The identified intervention should be inclusive, transparent and empower governance processes",
                tooltip: "You must select all five options to meet the criteria.",
                subquestions: [
                    {
                        id: "",
                        text: "",
                        options: [
                            "A defined and fully agreed upon feedback and grievance resolution mechanism is available to all stakeholders before an NbS intervention is initiated",
                            "Participation is based on mutual respect and equality, regardless of gender, age or social status, and upholds the right of Indigenous Peoples to Free, Prior and Informed Consent (FPIC) ",
                            "Stakeholders who are directly and indirectly affected by the NbS have been identified and involved in all processes of the NbS intervention",
                            "Decision-making processes document and respond to the rights and interests of all participating and affected stakeholders",
                            "Where the scale of the NbS extends beyond jurisdictional boundaries, mechanisms are established to enable joint decision making of the stakeholders in the affected jurisdictions "
                        ]
                    }
                ]
            },
            {
                id: 3.5,
                text: "The intervention provided at least one of the following benefits related to Green Jobs",
                tooltip: "You must select at least one option to meet the criteria.",
                subquestions: [
                    {
                        id: "",
                        text: "",
                        options: [
                            "Establish green jobs related to the intervention",
                            "Improve the existing local livelihoods",
                            "Increase in the number of green jobs in the region of implementation"
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        text: "Scope of Implementation",
        info: true,
        stepper: "Scope of Implementation",
        type: "scope",
        title: "Please choose the number which best describes the current state of the project based on the descriptions given below",
        subquestions: [
            {
                id: "4.1",
                header: ["", "Stage of implementation", "Description"],
                data: [
                    { value: ["1", "Pre-implementation", "Ideation Phase"] },
                    { value: ["2", "Implementation", "The implementation of the project on ground has started"] },
                    { value: ["3", "Post-implementation", "The implementation of the project has been completed. The project is now in the monitoring and evaluation phase"] }
                ],
                inputLabel: "Choose the stage of implementation"
            },
            {
                id: "4.2",
                header: ["", "Scale of intervention", "Description"],
                data: [
                    { value: ["1", "Very Small", "< 10 households"] },
                    { value: ["2", "Small", "10 < x < 100 households"] },
                    { value: ["3", "Medium", "100 < x < 1000 households"] },
                    { value: ["4", "Large", "> 1000 households"] }
                ],
                inputLabel: "Choose the scale of intervention"
            },
            {
                id: "4.3",
                header: ["", "Availability of resources", "Description"],
                data: [
                    { value: ["1", "Insufficient", "Less than 50% of the project cost available"] },
                    { value: ["2", "Adequate", "Between 50%-100% of project cost available"] },
                    { value: ["3", "High", "More than 100% of project cost available"] }
                ],
                inputLabel: "Select an option to highlight the current availability of financial resources"
            }
        ]
    },
    {
        id: 5,
        text: "Mapping Local Factors of Influence",
        info: true,
        stepper: "Local Factors of Influence",
        type: "mapping",
        title: "",
        subquests: [{
            title: "Have you conducted stakeholder consultation to identify Local Factors of Influence?",
            labels: [{ id: "5.1", text: "Please respond in Yes or No", type: "dropdown" },
                //  { id: "5.2", text: "If the response to the question above is yes, then please highlight the total number of people who were part of these consultations?", type: "input" }
            ],
        }],
        subquestions: [
            {
                id: "5.1.1",
                title: "Based on the stakeholder consultation, kindly fill the data for Local Factors of Influence in the table below",
                header: ["S.No.", "Category", "Factor of Influence", "Type of Influence", "Number of people who identified a positive relationship", "Number of people who identified a negative relationship", "IF NO CONSULTATIONS CONDUCTED: Please fill based on secondary literature review."],

            }
        ]
    },
    {
        id: 6,
        text: "Costs of the Activity",
        info: true,
        stepper: "Costs of the Activity",
        type: "costs",
        subquestions: [
            {
                id: "6.1", text: "Select the currency", type: "dropdown"
            }, {
                id: "6.2", text: "In case of other, please mention the currency used", type: "input"
            }
        ],
        title: "Please mention the costs associated with the project against each category mentioned below",
        note: "The costs must be caluclated for the entire period of implementation. Discounting must be taken into account. In case, the discount rate is not available or cannot be estimated, then a discount rate of 10 percent must be considered.",
        table: [{
            header: ["S.No.", "Category of Cost", "Costs", "Total Cost for the project (if already available)", "Value per year", "Duration (in months)", "Duration (in years)", "Discount Rate considered* (in percentage)", "Total Cost"],
        }]
    },
    {
        id: 7,
        text: "Benefits obtained from the Activity",
        info: true,
        stepper: "Benefits obtained from the Activity",
        type: "benefits",
        subquestions: [
            {
                id: "7.1", text: "Select the currency", type: "dropdown"
            }, {
                id: "7.2", text: "In case of other, please mention the currency used", type: "input"
            }
        ],
        note: "The period of benefits will vary during implementation. Discounting must be taken into account. In case, the discount rate is unavailable or cannot be estimated, then a discount rate of 10 per cent must be considered.",
        table: [{
            header: ["S.No.", "Category of Benefits", "Benefits*", "Identification of the Benefit", "Indicator*", "Ecosystem Valuation Method*", "Economic Value", "Duration (in months)", "Duration (in years)", "Discount Rate considered* (in percentage)", "Total Benefits"],
        }]
    }
];

export const answer = {
    total_cost_available_1_1: "",
    total_cost_available_1_2: "",
    total_cost_available_1_3: "",
    total_cost_available_1_4: "",
    total_cost_available_1_5: "",
    total_cost_available_1_6: "",
    total_cost_available_1_7: "",
    total_cost_available_1_8: "",

    total_cost_available_2_1: "",
    total_cost_available_2_2: "",
    total_cost_available_2_3: "",
    total_cost_available_2_4: "",
    total_cost_available_2_5: "",
    total_cost_available_2_6: "",
    total_cost_available_2_7: "",
    total_cost_available_2_8: "",

    total_cost_available_3_1: "",
    total_cost_available_3_2: "",
    total_cost_available_3_3: "",
    total_cost_available_3_4: "",
    total_cost_available_3_5: "",
    total_cost_available_3_6: "",

    total_cost_available_4_1: "",
    total_cost_available_4_2: "",
    total_cost_available_4_3: "",
    total_cost_available_4_4: "",
    total_cost_available_4_5: "",
    total_cost_available_4_6: "",

    clmtchg_miteff_1_ecosystem: "Benefit Transfer Method",
    clmtchg_miteff_2_ecosystem: "Benefit Transfer Method",
    clmtchg_miteff_3_ecosystem: "Benefit Transfer Method",

    clmtchg_disres_1_ecosystem: "Avoided Cost Method",
    clmtchg_disres_2_ecosystem: "Avoided Cost Method",
    clmtchg_disres_3_ecosystem: "Avoided Cost Method",

    clmtchg_tempreg_1_ecosystem: "Benefit Transfer Method",
    clmtchg_tempreg_2_ecosystem: "Benefit Transfer Method",
    clmtchg_tempreg_3_ecosystem: "Benefit Transfer Method",

    clmtchg_bftppl_1_ecosystem: "Market Price Method",
    water_qlt_drinking_water_1_ecosystem: "Market Price Method",

    water_impvd_disres_1_ecosystem: "Avoided Cost Method",
    water_impvd_disres_2_ecosystem: "Avoided Cost Method",

    water_qltgrdwater_1_ecosystem: "Market Price Method",

    water_waterforagri_1_ecosystem: "Production Function Method",
    water_waterforagri_2_ecosystem: "Production Function Method",

    green_infra_1_ecosystem: "Contingent Valuation Method",
    green_infra_2_ecosystem: "Production Function Method",
    green_infra_3_ecosystem: "Travel Cost Method",

    green_bftclmtenv_1_ecosystem: "Benefit Transfer Method",
    green_bftclmtenv_2_ecosystem: "Benefit Transfer Method",
    green_bftclmtenv_3_ecosystem: "Contingent Valuation Method",
    green_bftclmtenv_4_ecosystem: "Market Price Method",

    green_bft2ppl_1_ecosystem: "Travel Cost Method",
    green_bft2ppl_2_ecosystem: "Production Function Method",
    green_bft2ppl_3_ecosystem: "Contingent Valuation Method",

    airqlt_redpoll_1_ecosystem: "Benefit Transfer Method",
    airqlt_redpoll_2_ecosystem: "Avoided Cost Method",
    airqlt_redpoll_3_ecosystem: "Benefit Transfer Method",

    airqlt_redemi_1_ecosystem: "Benefit Transfer Method",

    airqlt_bft3ppl_1_ecosystem: "Avoided Cost Method",
    airqlt_bft3ppl_2_ecosystem: "Production Function Method",
    airqlt_bft3ppl_3_ecosystem: "Avoided Cost Method",
    airqlt_bft3ppl_4_ecosystem: "Avoided Cost Method",

    phealth_poshlthimp_1_ecosystem: "Production Function Method",
    phealth_poshlthimp_2_ecosystem: "Production Function Method",
    phealth_poshlthimp_3_ecosystem: "Production Function Method",

    phealth_detrieff_1_ecosystem: "Production Function Method",
    phealth_detrieff_2_ecosystem: "Avoided Cost Method",
    phealth_detrieff_3_ecosystem: "Avoided Cost Method",
    phealth_detrieff_4_ecosystem: "Avoided Cost Method",

    phealth_improvimmchild_1_ecosystem: "Production Function Method",
    phealth_improvimmchild_2_ecosystem: "Production Function Method",

    phealth_reddis_1_ecosystem: "Avoided Cost Method",
    phealth_reddis_2_ecosystem: "Avoided Cost Method",

    poteco_employment_1_ecosystem: "Market Price Method",
    poteco_employment_2_ecosystem: "Market Price Method",
    poteco_employment_3_ecosystem: "Market Price Method",
    poteco_employment_4_ecosystem: "Market Price Method",

    poteco_improvineco_1_ecosystem: "Market Price Method",
    poteco_improvineco_2_ecosystem: "Market Price Method",
    poteco_improvineco_3_ecosystem: "Market Price Method",
    poteco_improvineco_4_ecosystem: "Market Price Method",
    poteco_improvineco_5_ecosystem: "Market Price Method",

    poteco_indvecogrowth_1_ecosystem: "Production Function Method",
    poteco_indvecogrowth_2_ecosystem: "Market Price Method",
    poteco_indvecogrowth_3_ecosystem: "Market Price Method",
    poteco_indvecogrowth_4_ecosystem: "Market Price Method",


}