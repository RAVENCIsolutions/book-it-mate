import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { FaChevronDown } from "react-icons/fa";
import Button from "@mui/material/Button";
import React from "react";

export default function FAQPage() {
  return (
    <main className={`container py-20`}>
      <h1 className={`mb-4 text-2xl md:text-3xl font-semibold`}>FAQ</h1>
      <Accordion>
        <AccordionSummary
          expandIcon={<FaChevronDown />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          How do I know I am getting the best rate?
        </AccordionSummary>
        <AccordionDetails>
          When you book with Book It MATE, it shows you the saving you'll make
          on the Best Available Daily Rate.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<FaChevronDown />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          Can I book my personal travel on this website?
        </AccordionSummary>
        <AccordionDetails>
          Absolutely! Book It MATE is available for your leisure travel. You
          have access to over 2000 properties across Australia.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<FaChevronDown />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          How quickly can I make bookings once my registration is complete?
        </AccordionSummary>
        <AccordionDetails>
          You'll be able to make bookings straight away once your registration
          is confirmed and you have received your login details.
        </AccordionDetails>
      </Accordion>
    </main>
  );
}
