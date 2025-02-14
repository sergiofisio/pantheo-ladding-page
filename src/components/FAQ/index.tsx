import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { FAQ } from "../../assets/FAQ/questions";
import ArrowIcon from "../../assets/icon/arrow.svg"; // Ícone do botão
import Title from "../title";

export default function FrequentQuestions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => {
    setExpanded(expanded === panel ? false : panel);
  };

  return (
    <section className="px-30 py-10 bg-gray-100 flex flex-col items-center gap-10">
      <Title text="FAQ" />
      <div className="w-full">
        {FAQ.map(({ question, answer }, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={() => handleChange(`panel${index}`)}
            sx={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "1rem",
              border: "1px solid #374151",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <AccordionSummary
              expandIcon={
                <img
                  src={ArrowIcon}
                  alt="Expandir"
                  className={`w-10 h-10 transition-transform duration-300 ${
                    expanded === `panel${index}` ? "rotate-180" : "rotate-0"
                  } text-blue-500`}
                />
              }
              sx={{
                padding: "1rem 1.5rem",
                borderRadius: "0.5rem",
                "&:hover": {
                  backgroundColor: "#1f2937",
                },
              }}
            >
              <Typography sx={{ fontSize: "1.25rem", fontWeight: "600" }}>
                {index + 1}. {question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{ padding: "1rem 1.5rem", borderTop: "1px solid #374151" }}
            >
              <Typography sx={{ color: "#D1D5DB" }}>{answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </section>
  );
}
