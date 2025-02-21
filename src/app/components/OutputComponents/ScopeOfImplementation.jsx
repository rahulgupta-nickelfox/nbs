import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";

const ScopeOfImplementation = ({ answer }) => {
  const scope = (answer) => {
    const keysToInclude = [
      "1_stage_of_implementation",
      "2_scale_of_intervention",
      "3_availability_of_resources",
    ];

    return keysToInclude.map((key) => answer?.[key]).join("");
  };

  const suggestionString = (answer) => {
    const key = scope(answer);
    const suggestion = {
      111: "Since the amount of resources available for the project is less, the project should prioritise more on identifying and estimating the benefits which may further support in gathering more funds. Since the number of households is very small, it is advised that the project implementation agency should focus more on highlighting livelihood-related benefits. Mapping Local Factors of Influence may not be possible due to unavailability of resources. ",
      112: "Since the project is in the ideation phase and has an adequate amount of resources, the project implementation agency should develop the objectives of the project by identifying the Local Factors of Influence. These factors could be highlighted through consultations with local experts and community members. The project implementation agency must also highlight benefits across multiple categories. However, since the amount of resources available is adequate, it might be difficult to employ the tool in the monitoring phase.",
      113: "Since the project is in the ideation phase and has a high amount of resources, the project implementation agency should develop the objectives of the project by identifying the Local Factors of Influence. These factors could be highlighted through consultations with local experts and community members. The project must also highlight benefits across multiple categories. Since the amount of resources available is high, the project implementation agency must also employ the tool in the monitoring and evaluation phase to ensure that maladaptation does not take place in the future and the project is able to cater to the future needs of the communities and nature.",
      121: "Since the amount of resources available for the project is less, the project should prioritise more on identifying and estimating the benefits which may further support in gathering more funds. Since the number of households is small, it is advised that the project implementation agency should focus more on highlighting livelihood-related benefits. Mapping Local Factors of Influence may not be possible due to unavailability of resources. ",
      122: "Since the project is in the ideation phase and has an adequate amount of resources, the project implementation agency should develop the objectives of the project by identifying the Local Factors of Influence. These factors could be highlighted through consultations with local experts and community members. The project must also highlight benefits across multiple categories. However, since the amount of resources available is adequate, it might be difficult to employ the tool in the monitoring phase.",
      123: "Since the project is in the ideation phase and has a high amount of resources, the project implementation agency should develop the objectives of the project by identifying the Local Factors of Influence. These factors could be highlighted through consultations with local experts and community members. The project must also highlight benefits across multiple categories. Since the amount of resources available is high, the project implementation agency must also employ the tool in the monitoring and evaluation phase to ensure that maladaptation does not take place in the future and the project is able to cater to the future needs of the communities and nature.",
      131: "Since the amount of resources available for the project is less, the project should prioritise more on identifying and estimating the benefits which may further support in gathering more funds. Since the number of households is medium, it is advised that the project implementation agency should focus more on highlighting benefits related to livelihood, local water quality, local green cover, etc. These benefits could be mapped at a village level. Benefits at a larger scale might be difficult to map given the unavailability of resources. Mapping Local Factors of Influence may not be possible due to unavailability of resources. ",
      132: "Since the project is in the ideation phase and has an adequate amount of resources, the project implementation agency should develop the objectives of the project by identifying the Local Factors of Influence. These factors could be highlighted through consultations with local experts. It is advised that the community members should also be included during the process of identifying Local Factors of Influence, however, due to a medium number of households, the costs may be too high. The project must also highlight benefits across multiple categories. However, since the amount of resources available is adequate, it might be difficult to employ the tool in the monitoring phase.",
      133: "Since the project is in the ideation phase and has a high amount of resources, the project implementation agency should develop the objectives of the project by identifying the Local Factors of Influence. These factors could be highlighted through consultations with local experts and community members. The project must also highlight benefits across multiple categories. Since the amount of resources available is high, the project implementation agency must also employ the tool in the monitoring and evaluation phase to ensure that maladaptation does not take place in the future and the project is able to cater to the future needs of the communities and nature.",
      141: "Since the amount of resources available for the project is less, the project should prioritise more on identifying and estimating the benefits which may further support in gathering more funds. Since the number of households is large, it is advised that the project implementation agency should focus more on highlighting benefits related to livelihood, change in climate and biodiversity, etc. These benefits could be mapped at a district level. Benefits related to changes in the local climate might be difficult to map given the unavailability of resources. Mapping Local Factors of Influence may not be possible due to unavailability of resources. ",
      142: "Since the project is in the ideation phase and has an adequate amount of resources, the project implementation agency should develop the objectives of the project by identifying the Local Factors of Influence. These factors could be highlighted through consultations with local experts. It is advised that the community members should also be included during the process of identifying Local Factors of Influence, however, due to a medium number of households, the costs may be too high. The project must also highlight benefits across multiple categories. However, since the amount of resources available is adequate, it might be difficult to employ the tool in the monitoring phase.",
      143: "Since the project is in the ideation phase and has a high amount of resources, the project implementation agency should develop the objectives of the project by identifying the Local Factors of Influence. These factors could be highlighted through consultations with local experts and community members. The project must also highlight benefits across multiple categories. Since the amount of resources available is high, the project implementation agency must also employ the tool in the monitoring and evaluation phase to ensure that maladaptation does not take place in the future and the project is able to cater to the future needs of the communities and nature. The use of the tool during the monitoring and evaluation phase across a large-scale intervention might be costly, hence, it is advised that the project implementation agency builds the capacity of the local communities to self-monitor and use the tool to ensure that the principles of Nature-based Solutions are followed.",
      211: "Since the amount of resources available for the project is less, the project should prioritise more on identifying and estimating the benefits which may further support in gathering more funds. Since the number of households is very small, it is advised that the project implementation agency should focus more on highlighting livelihood-related benefits. Mapping Local Factors of Influence may not be possible due to unavailability of resources. ",
      212: "Since the project is in the middle of implementation, it is advised that the project implementation agency identifies the Local Factors which are influenced by the implementation of the Nature-based Solutions project. It is necessary to gather the feedback of the community and local experts continuously during implementation and make necessary changes since it might be difficult to deter maladaptation in the monitoring and evaluation phase. The project implementation agency must also highlight benefits across multiple categories. However, since the amount of resources available is adequate, it might be difficult to employ the tool in the monitoring phase. ",
      213: "Since the project is in the middle of implementation, it is advised that the project implementation agency identifies the Local Factors which are influenced by the implementation of the Nature-based Solutions project. It is necessary to gather the feedback of the community continuously during implementation and make necessary changes since it might be difficult to deter maladaptation in the monitoring and evaluation phase. Since the amount of resources available is high, the project implementation agency must also employ the tool in the monitoring and evaluation phase to ensure that maladaptation does not take place in the future and the project is able to cater to the future needs of the communities and nature.",
      221: "Since the amount of resources available for the project is less, the project should prioritise more on identifying and estimating the benefits which may further support in gathering more funds. Since the number of households is very small, it is advised that the project implementation agency should focus more on highlighting livelihood-related benefits. Mapping Local Factors of Influence may not be possible due to unavailability of resources.                                         ",
      222: "Since the project is in the middle of implementation, it is advised that the project implementation agency identifies the Local Factors which are influenced by the implementation of the Nature-based Solutions project. It is necessary to gather the feedback of the community and local experts continuously during implementation and make necessary changes since it might be difficult to deter maladaptation in the monitoring and evaluation phase. The project implementation agency must also highlight benefits across multiple categories. However, since the amount of resources available is adequate, it might be difficult to employ the tool in the monitoring phase. ",
      223: "Since the project is in the middle of implementation, it is advised that the project implementation agency identifies the Local Factors which are influenced by the implementation of the Nature-based Solutions project. It is necessary to gather the feedback of the community and local experts continuously during implementation and make necessary changes since it might be difficult to deter maladaptation in the monitoring and evaluation phase. The project implementation agency must also highlight benefits across multiple categories. Since the amount of resources available is high, the project implementation agency must also employ the tool in the monitoring and evaluation phase to ensure that maladaptation does not take place in the future and the project is able to cater to the future needs of the communities and nature.",
      231: "Since the amount of resources available for the project is less, the project should prioritise more on identifying and estimating the benefits which may further support in gathering more funds. Since the number of households is medium, it is advised that the project implementation agency should focus more on highlighting benefits related to livelihood, local water quality, local green cover, etc. These benefits could be mapped at a village level. Benefits at a larger scale might be difficult to map given the unavailability of resources. Mapping Local Factors of Influence may not be possible due to unavailability of resources. ",
      232: "Since the project is in the middle of implementation, it is advised that the project implementation agency identifies the Local Factors which are influenced by the implementation of the Nature-based Solutions project. It is necessary to gather the feedback of the community and local experts continuously during implementation and make necessary changes since it might be difficult to deter maladaptation in the monitoring and evaluation phase. However, since the scale of intervention is medium, the costs of including community members in the identification of Local Factors of Influence might be large. The project implementation agency must also highlight benefits across multiple categories. However, since the amount of resources available is adequate, it might be difficult to employ the tool in the monitoring phase. ",
      233: "Since the project is in the middle of implementation, it is advised that the project implementation agency identifies the Local Factors which are influenced by the implementation of the Nature-based Solutions project. It is necessary to gather the feedback of the community and local experts continuously during implementation and make necessary changes since it might be difficult to deter maladaptation in the monitoring and evaluation phase. The project implementation agency must also highlight benefits across multiple categories. Since the amount of resources available is high, the project implementation agency must also employ the tool in the monitoring and evaluation phase to ensure that maladaptation does not take place in the future and the project is able to cater to the future needs of the communities and nature.",
      241: "Since the amount of resources available for the project is less, the project should prioritise more on identifying and estimating the benefits which may further support in gathering more funds. Since the number of households is large, it is advised that the project implementation agency should focus more on highlighting benefits related to livelihood, change in climate and biodiversity, etc. These benefits could be mapped at a district level. Benefits related to changes in the local climate might be difficult to map given the unavailability of resources. Mapping Local Factors of Influence may not be possible due to unavailability of resources. ",
      242: "Since the project is in the middle of implementation, it is advised that the project implementation agency identifies the Local Factors which are influenced by the implementation of the Nature-based Solutions project. It is necessary to gather the feedback of the community and local experts continuously during implementation and make necessary changes since it might be difficult to deter maladaptation in the monitoring and evaluation phase. However, since the scale of intervention is large, the costs of including community members in the identification of Local Factors of Influence might be very high. The project implementation agency must also highlight benefits across multiple categories. However, since the amount of resources available is adequate, it might be difficult to employ the tool in the monitoring phase. ",
      243: "Since the project is in the middle of implementation, it is advised that the project implementation agency identifies the Local Factors which are influenced by the implementation of the Nature-based Solutions project. It is necessary to gather the feedback of the community and local experts continuously during implementation and make necessary changes since it might be difficult to deter maladaptation in the monitoring and evaluation phase. The project implementation agency must also highlight benefits across multiple categories. Since the amount of resources available is high, the project implementation agency must also employ the tool in the monitoring and evaluation phase to ensure that maladaptation does not take place in the future and the project is able to cater to the future needs of the communities and nature. The use of the tool during the monitoring and evaluation phase across a large-scale intervention might be costly, hence, it is advised that the project implementation agency builds the capacity of the local communities to self-monitor and use the tool to ensure that the principles of Nature-based Solutions are followed.",
      311: "Since the project is in the post-implementation phase and has low funds, it is advised that more priority is given to monitoring and evaluation of benefits which may have been attained from the project. The identification of benefits might support in achieving more funds which will help scale the implementation of the activity",
      312: "Since the project is in the post-implementation phase and has some funds available, it is advised to identify the benefits which may have been attained from the project and to identify the Local Factors of Influence, which may have been influenced by the implementation of the project. The identification of benefits and local changes might support achieving more funds which will help scale the implementation of the activity. However, since the funds are limited, it is advised that no external agencies are involved in mapping the benefits and local changes. ",
      313: "Since the project is in the post-implementation phase and has some funds available, it is advised to identify the benefits which may have been attained from the project and to identify the Local Factors of Influence, which may have been influenced by the implementation of the project. The identification of benefits and local changes might support achieving more funds which will help scale the implementation of the activity. Since, a large amount of funds is still available, it is recommended that community members are assigned the task to monitor and identify the benefits as well as the changes. ",
      321: "Since the project is in the post-implementation phase and has low funds, it is advised that more priority is given to monitoring and evaluation of benefits which may have been attained from the project. The identification of benefits might support in achieving more funds which will help scale the implementation of the activity",
      322: "Since the project is in the post-implementation phase and has some funds available, it is advised to identify the benefits which may have been attained from the project and to identify the Local Factors of Influence, which may have been influenced by the implementation of the project. The identification of benefits and local changes might support achieving more funds which will help scale the implementation of the activity. However, since the funds are limited, it is advised that no external agencies are involved in mapping the benefits and local changes. ",
      323: "Since the project is in the post-implementation phase and has some funds available, it is advised to identify the benefits which may have been attained from the project and to identify the Local Factors of Influence, which may have been influenced by the implementation of the project. The identification of benefits and local changes might support achieving more funds which will help scale the implementation of the activity. Since, a large amount of funds is still available, it is recommended that community members are assigned the task to monitor and identify the benefits as well as the changes. ",
      331: "Since the project is in the post-implementation phase and has adequate funds available, it is suggested that a few community champions be trained to self-monitor the benefits and Local Factors of Influence. The ownership of the project by the community members will reduce future costs and generate some livelihoods.					",
      332: "Since the project is in the post-implementation phase and has adequate funds available, it is suggested that community members be trained to self-monitor the benefits and Local Factors of Influence at a regional level. The ownership of the project by the community members will reduce future costs and generate livelihoods.",
      333: "Since the project is in the post-implementation phase and has considerable funds available, it is suggested that community members be trained to self-monitor the benefits and Local Factors of Influence at a granular level. The ownership of the project by the community members will reduce future costs and generate livelihoods. Given that resources are available, the community may also be trained to conduct risk analysis by providing them with training sessions and technology to ensure that future climate risks are addressed and that both infrastructure and livelihoods are not affected in the future.",
      341: "Since the project is in the post-implementation phase and has adequate funds available, it is suggested that a few community champions be trained to self-monitor the benefits and Local Factors of Influence. The ownership of the project by the community members will reduce future costs and generate some livelihoods.					",
      342: "Since the project is in the post-implementation phase and has adequate funds available, it is suggested that community members be trained to self-monitor the benefits and Local Factors of Influence at a regional level. The ownership of the project by the community members will reduce future costs and generate livelihoods.",
      343: "Since the project is in the post-implementation phase and has considerable funds available, it is suggested that community members be trained to self-monitor the benefits and Local Factors of Influence at a granular level. The ownership of the project by the community members will reduce future costs and generate livelihoods. Given that resources are available, the community may also be trained to conduct risk analysis by providing them with training sessions and technology to ensure that future climate risks are addressed and that both infrastructure and livelihoods are not affected in the future.",
    };
    return suggestion[key];
  };

  return (
    <Box sx={{ p: { xs: "12px 12px 0px 12px", md: "40px 120px" } }}>
      <Grid container borderRadius={"9px"} border="8px solid #C3E6F5">
        <Grid item xs={12} p={2} bgcolor={"#C3E6F5"}>
          <Typography variant="outputBody1" color="#0E0E0E">
            Checklist for the Implementation of the Identified Solution
          </Typography>
        </Grid>

        {/* Scope of Implementation */}
        <Grid item xs={12} p={2}>
          <Typography variant="outputBody1" color="#0E0E0E">
            Scope of Implementation
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          p={2}
        >
          <Grid item xs={4} display="flex" flexDirection={"column"}>
            <Typography variant="outputBody4" color="#969696">
              Stage of Implementation:
            </Typography>
            <Typography variant="outputBody4">
              {answer?.answer?.["1_stage_of_implementation"] === "1"
                ? "Pre-implmentation Phase"
                : answer?.answer?.["1_stage_of_implementation"] === "2"
                ? "Implementation Phase"
                : answer?.answer?.["1_stage_of_implementation"] === "3"
                ? "Post-implementation Phase"
                : "NA"}
            </Typography>
          </Grid>
          <Grid item xs={4} display="flex" flexDirection={"column"}>
            <Typography variant="outputBody4" color="#969696">
              Scale of Intervention:
            </Typography>
            <Typography variant="outputBody4">
              {answer?.answer?.["2_scale_of_intervention"] === "1"
                ? "Very Small"
                : answer?.answer?.["2_scale_of_intervention"] === "2"
                ? "Small"
                : answer?.answer?.["2_scale_of_intervention"] === "3"
                ? "Medium"
                : answer?.answer?.["2_scale_of_intervention"] === "4"
                ? "Large"
                : "NA"}
            </Typography>
          </Grid>
          <Grid item xs={4} display="flex" flexDirection={"column"}>
            <Typography variant="outputBody4" color="#969696">
              Availability of Resources:
            </Typography>
            <Typography variant="outputBody4">
              {answer?.answer?.["3_availability_of_resources"] === "1"
                ? "Insufficient"
                : answer?.answer?.["3_availability_of_resources"] === "2"
                ? "Adequate"
                : answer?.answer?.["3_availability_of_resources"] === "3"
                ? "High"
                : "NA"}
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12} mt={"16px"} mb={"20px"}>
          <Divider />
        </Grid>

        <Grid
          item
          xs={12}
          display="flex"
          flexDirection={"column"}
          gap={2}
          p={2}
        >
          <Typography variant="outputBody1" color="#0E0E0E">
            Suggestion
          </Typography>
          <Typography variant="outputBody2">
            {suggestionString(answer?.answer)
              ? suggestionString(answer?.answer)
              : "NA"}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ScopeOfImplementation;
