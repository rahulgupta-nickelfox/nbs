import { answer } from "../questions";

export const yearDifference = (startYear, endYear) => {
    const difference = Math.abs(endYear - startYear);
    return difference
}

export const convertToTitleCase = (str) => {
    return str
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
}

export const convertToOriginalCase = (str) => {
    return str
      .split(' ')
      .map(word => word.charAt(0).toLowerCase() + word.slice(1))
      .join('_');
}

export const isPositive = (num1, num2) => {
    if (Number(num1) > Number(num2)) {
        return { sign: "Positive", color: "#86BE40" };
    } else if (Number(num1) <= Number(num2)) {
        return { sign: "Negative", color: "#F26226" };
    }
    else {
        return { sign: "", color: "#FFF" };
    }
}

export const convertToYear = (months) => {
    if (months < 12) {
        return 0
    } else {
        return Math.floor(months / 12)
    }
}

export const convertToYearBenefit = (months) => {
    if (months <= 12) {
        return 0
    } else {
        return Math.floor(months / 12)
    }
}

export const getTotalCost = (value_per_year, discount_rate, months) => {
    const years = convertToYear(months);
    const cost = (value_per_year * (1 - (1 - (discount_rate / 100)) ** (years))) / (1 - (1 - (discount_rate / 100)));
    return cost.toFixed(2);
}

export const getTotalCostBenefit = (value_per_year, discount_rate, months) => {
    const years = convertToYearBenefit(months);
    const cost = (value_per_year * (1 - (1 - (discount_rate / 100)) ** (years))) / (1 - (1 - (discount_rate / 100)));
    return cost.toFixed(2);
}

export const checkCriteria = (answers) => {
    const result = {};
    const prefixes = {
        "3.1.1": 6,
        "3.1.2": 4,
        "3.2.1": 4,
        "3.2.2": 21,
        3.3: 4,
        3.4: 5,
        3.5: 3,
    };
    const answer = answers.answer;

    if (Object.keys(answers).length > 0) {
        for (const prefix in prefixes) {
            const totalCount = prefixes[prefix];
            let trueCount = 0;
            let falseCount = 0;

            for (const key in answer) {
                if (key.startsWith(prefix)) {
                    answer[key] ? trueCount++ : falseCount++;
                }
            }
            falseCount = totalCount - trueCount;

            result[prefix] = { true: trueCount, false: falseCount };
        }
    }
    return result
}

export const criteria1 = (answers) => {
    const result = checkCriteria(answers)

    const trueCount1 = result["3.1.1"] ? result["3.1.1"].true : 0;
    const trueCount2 = result["3.1.2"] ? result["3.1.2"].true : 0;

    if ((trueCount1 + trueCount2) >= 2) {
        return { text: "Yes", color: "#86BE40" }
    }
    return { text: "No", color: "#F26226" }
}

export const criteria2 = (answers) => {
    const result = checkCriteria(answers)

    const trueCount1 = result["3.2.1"] ? result["3.2.1"].true : 0;
    const trueCount2 = result["3.2.2"] ? result["3.2.2"].true : 0;

    if ((trueCount1 + trueCount2) >= 2) {
        return { text: "Yes", color: "#86BE40" }
    }
    return { text: "No", color: "#F26226" }
}

export const criteria3 = (answers) => {
    const result = checkCriteria(answers)

    const trueCount = result["3.3"] ? result["3.3"].true : 0;

    if ((trueCount) == 4) {
        return { text: "Yes", color: "#86BE40" }
    }
    return { text: "No", color: "#F26226" }
}

export const criteria4 = (answers) => {
    const result = checkCriteria(answers)

    const trueCount = result["3.4"] ? result["3.4"].true : 0;

    if ((trueCount) == 5) {
        return { text: "Yes", color: "#86BE40" }
    }
    return { text: "No", color: "#F26226" }
}

export const criteria5 = (answers) => {
    const result = checkCriteria(answers)

    const trueCount = result["3.5"] ? result["3.5"].true : 0;

    if ((trueCount) > 0) {
        return { text: "Yes", color: "#86BE40" }
    }
    return { text: "No", color: "#F26226" }
}

export const projectStatus = (answers) => {
    if (criteria1(answers).text == "Yes" && criteria2(answers).text == "Yes" && criteria3(answers).text == "Yes" && criteria4(answers).text == "Yes" && criteria5(answers).text == "Yes") {
        return { text: "Project is a Nature-based Solution", color: "#86BE40" }
    }
    return { text: "Project is not a Nature-based Solution", color: "#F26226" }
}

export const getBenefit = (answers) => {
    const suffix = "_identification";
    const answer = answers.answer;
    let count = 0;
    for (const key in answer) {
        if (key.endsWith(suffix)) {
            if (answer[key]) {
                count++;
            }
        }
    }
    return count;
};

export const buildDataItem = (positive, negative) => {
    const item = {};
    if (positive !== undefined) item.positive = positive;
    if (negative !== undefined) item.negative = negative;
    return item;
};

export const getSeries = (data) => {
    const filteredData = data?.filter(
        (item) =>
            (Number(item.positive) || 0) > 0 || (Number(item.negative) || 0) > 0
    );

    if (filteredData?.length === 0) return [];
    return [
        {
            name: "Positive",
            data: data?.map((item) => {
                const positive = Number(item.positive) || 0;
                const negative = Number(item.negative) || 0;
                const total = positive + negative;
                const percent =
                    total === 0 ? 0 : Math.round((item.positive / total) * 100);
                return {
                    x: "",
                    y: percent,
                    actual: positive,
                    label: `${percent}%`,
                };
            }),
        },
        {
            name: "Negative",
            data: data?.map((item) => {
                const positive = Number(item.positive) || 0;
                const negative = Number(item.negative) || 0;
                const total = positive + negative;
                const percent =
                    total === 0 ? 0 : Math.round((item.negative / total) * 100);
                return {
                    x: "",
                    y: percent,
                    actual: negative,
                    label: `${percent}%`,
                };
            }),
        },
    ];
};

export const isSocialData = (answer) => {
    if (
        answer?.answer?.social_gender_influence ||
        isPositive(
            answer?.answer?.social_gender_positive,
            answer?.answer?.social_gender_negative
        ).sign ||
        answer?.answer?.social_caste_influence ||
        isPositive(
            answer?.answer?.social_caste_positive,
            answer?.answer?.social_caste_negative
        ).sign ||
        answer?.answer?.social_race_influence ||
        isPositive(
            answer?.answer?.social_race_positive,
            answer?.answer?.social_race_negative
        ).sign ||
        answer?.answer?.social_other_influence ||
        isPositive(
            answer?.answer?.social_other_positive,
            answer?.answer?.social_other_negative
        ).sign ||
        answer?.answer?.social_social_additional_1_influence ||
        isPositive(
            answer?.answer?.social_social_additional_1_positive,
            answer?.answer?.social_social_additional_1_negative
        ).sign ||
        answer?.answer?.social_social_additional_2_influence ||
        isPositive(
            answer?.answer?.social_social_additional_2_positive,
            answer?.answer?.social_social_additional_2_negative
        ).sign ||
        answer?.answer?.social_social_additional_3_influence ||
        isPositive(
            answer?.answer?.social_social_additional_3_positive,
            answer?.answer?.social_social_additional_3_negative
        ).sign
    ) {
        return true;
    }
    return false;
};

export const isEconomicData = (answer) => {
    if (
        answer?.answer?.economic_income_influence ||
        isPositive(
            answer?.answer?.economic_income_positive,
            answer?.answer?.economic_income_negative
        ).sign ||
        answer?.answer?.economic_budget_influence ||
        isPositive(
            answer?.answer?.economic_budget_positive,
            answer?.answer?.economic_budget_negative
        ).sign ||
        answer?.answer?.economic_external_influence ||
        isPositive(
            answer?.answer?.economic_external_positive,
            answer?.answer?.economic_external_negative
        ).sign ||
        answer?.answer?.economic_production_influence ||
        isPositive(
            answer?.answer?.economic_production_positive,
            answer?.answer?.economic_production_negative
        ).sign ||
        answer?.answer?.economic_access_influence ||
        isPositive(
            answer?.answer?.economic_access_positive,
            answer?.answer?.economic_access_negative
        ).sign ||
        answer?.answer?.economic_other_influence ||
        isPositive(
            answer?.answer?.economic_other_positive,
            answer?.answer?.economic_other_negative
        ).sign ||
        answer?.answer?.economic_economic_additional_1_influence ||
        isPositive(
            answer?.answer?.economic_economic_additional_1_positive,
            answer?.answer?.economic_economic_additional_1_negative
        ).sign ||
        answer?.answer?.economic_economic_additional_2_influence ||
        isPositive(
            answer?.answer?.economic_economic_additional_2_positive,
            answer?.answer?.economic_economic_additional_2_negative
        ).sign ||
        answer?.answer?.economic_economic_additional_3_influence ||
        isPositive(
            answer?.answer?.economic_economic_additional_3_positive,
            answer?.answer?.economic_economic_additional_3_negative
        ).sign
    ) {
        return true;
    }
    return false;
};

export const isCulturalData = (answer) => {
    if (
        answer?.answer?.cultural_religious_influence ||
        isPositive(
            answer?.answer?.cultural_religious_positive,
            answer?.answer?.cultural_religious_negative
        ).sign ||
        answer?.answer?.cultural_cultural_influence ||
        isPositive(
            answer?.answer?.cultural_cultural_positive,
            answer?.answer?.cultural_cultural_negative
        ).sign ||
        answer?.answer?.cultural_other_influence ||
        isPositive(
            answer?.answer?.cultural_other_positive,
            answer?.answer?.cultural_other_negative
        ).sign ||
        answer?.answer?.cultural_cultural_additional_1_influence ||
        isPositive(
            answer?.answer?.cultural_cultural_additional_1_positive,
            answer?.answer?.cultural_cultural_additional_1_negative
        ).sign ||
        answer?.answer?.cultural_cultural_additional_2_influence ||
        isPositive(
            answer?.answer?.cultural_cultural_additional_2_positive,
            answer?.answer?.cultural_cultural_additional_2_negative
        ).sign ||
        answer?.answer?.cultural_cultural_additional_3_influence ||
        isPositive(
            answer?.answer?.cultural_cultural_additional_3_positive,
            answer?.answer?.cultural_cultural_additional_3_negative
        ).sign

    ) {
        return true;
    }
    return false;
};

export const isEnvironmentalData = (answer) => {
    if (
        answer?.answer?.environmental_temperature_influence ||
        isPositive(
            answer?.answer?.environmental_temperature_positive,
            answer?.answer?.environmental_temperature_negative
        ).sign ||
        answer?.answer?.environmental_rainfall_influence ||
        isPositive(
            answer?.answer?.environmental_rainfall_positive,
            answer?.answer?.environmental_rainfall_negative
        ).sign ||
        answer?.answer?.environmental_other_influence ||
        isPositive(
            answer?.answer?.environmental_other_positive,
            answer?.answer?.environmental_other_negative
        ).sign ||
        answer?.answer?.environmental_environmental_additional_1_influence ||
        isPositive(
            answer?.answer?.environmental_environmental_additional_1_positive,
            answer?.answer?.environmental_environmental_additional_1_negative
        ).sign ||
        answer?.answer?.environmental_environmental_additional_2_influence ||
        isPositive(
            answer?.answer?.environmental_environmental_additional_2_positive,
            answer?.answer?.environmental_environmental_additional_2_negative
        ).sign ||
        answer?.answer?.environmental_environmental_additional_3_influence ||
        isPositive(
            answer?.answer?.environmental_environmental_additional_3_positive,
            answer?.answer?.environmental_environmental_additional_3_negative
        ).sign
    ) {
        return true;
    }
    return false;
};

export const isSpeciesData = (answer) => {
    if (
        answer?.answer?.species_invasive_influence ||
        isPositive(
            answer?.answer?.species_invasive_positive,
            answer?.answer?.species_invasive_negative
        ).sign ||
        answer?.answer?.species_native_influence ||
        isPositive(
            answer?.answer?.species_native_positive,
            answer?.answer?.species_native_negative
        ).sign ||
        answer?.answer?.species_other_influence ||
        isPositive(
            answer?.answer?.species_other_positive,
            answer?.answer?.species_other_negative
        ).sign ||
        answer?.answer?.species_species_additional_1_influence ||
        isPositive(
            answer?.answer?.species_species_additional_1_positive,
            answer?.answer?.species_species_additional_1_negative
        ).sign ||
        answer?.answer?.species_species_additional_2_influence ||
        isPositive(
            answer?.answer?.species_species_additional_2_positive,
            answer?.answer?.species_species_additional_2_negative
        ).sign ||
        answer?.answer?.species_species_additional_3_influence ||
        isPositive(
            answer?.answer?.species_species_additional_3_positive,
            answer?.answer?.species_species_additional_3_negative
        ).sign
    ) {
        return true;
    }
    return false;
};

export const isLivelihoodData = (answer) => {
    if (
        answer?.answer?.livelihood_overexploitation_influence ||
        isPositive(
            answer?.answer?.livelihood_overexploitation_positive,
            answer?.answer?.livelihood_overexploitation_positive,
            answer?.answer?.livelihood_overexploitation_negative
        ).sign ||
        answer?.answer?.livelihood_incomeLivelihood_influence ||
        isPositive(
            answer?.answer?.livelihood_incomeLivelihood_positive,
            answer?.answer?.livelihood_incomeLivelihood_negative
        ).sign ||
        answer?.answer?.livelihood_landUse_influence ||
        isPositive(
            answer?.answer?.livelihood_landUse_positive,
            answer?.answer?.livelihood_landUse_negative
        ).sign ||
        answer?.answer?.livelihood_other_influence ||
        isPositive(
            answer?.answer?.livelihood_other_positive,
            answer?.answer?.livelihood_other_negative
        ).sign ||
        answer?.answer?.livelihood_livelihood_additional_1_influence ||
        isPositive(
            answer?.answer?.livelihood_livelihood_additional_1_positive,
            answer?.answer?.livelihood_livelihood_additional_1_negative
        ).sign ||
        answer?.answer?.livelihood_livelihood_additional_2_influence ||
        isPositive(
            answer?.answer?.livelihood_livelihood_additional_2_positive,
            answer?.answer?.livelihood_livelihood_additional_2_negative
        ).sign ||
        answer?.answer?.livelihood_livelihood_additional_3_influence ||
        isPositive(
            answer?.answer?.livelihood_livelihood_additional_3_positive,
            answer?.answer?.livelihood_livelihood_additional_3_negative
        ).sign
    ) {
        return true;
    }
    return false;
};

export function createMitigationMap(data) {
    const mitigationMap = new Map();
    data.forEach(item => {
        mitigationMap.set(item.indicatorIndex, item);
    });
    return mitigationMap;
}