"use client";

import Link from "next/link";
import { SyntheticEvent, useState } from "react";

import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { FaChevronDown } from "react-icons/fa";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  "&::before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({}));

export default function FAQPage() {
  const [expanded, setExpanded] = useState<string | false>("panel1");

  const handleChange =
    (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <main className={`container py-20 px-0`}>
      <h1 className={`px-4 mb-4 text-2xl md:text-3xl font-semibold`}>FAQ</h1>
      <div>
        <Accordion
          className={`border-t-0 dark:border-t border-neutral-200 dark:border-neutral-700`}
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary
            className={`p-4 pr-6 bg-neutral-100 dark:bg-neutral-800 shadow-xl shadow-neutral-900/10 text-neutral-800 dark:text-neutral-200 text-sm sm:text-base font-semibold`}
            expandIcon={
              <FaChevronDown
                className={`text-neutral-800 dark:text-neutral-200`}
              />
            }
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <p>How do I know I am getting the best rate?</p>
          </AccordionSummary>
          <AccordionDetails
            className={`p-4 sm:p-6 pl-6 sm:pl-8 pb-8 sm:pb-10 bg-transparent dark:bg-neutral-900 text-sm text-neutral-400`}
          >
            <p>
              When you book with Book It MATE, it shows you the saving you'll
              make on the Best Available Daily Rate.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={`border-t border-neutral-200 dark:border-neutral-700`}
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary
            className={`p-4 pr-6 bg-neutral-100 dark:bg-neutral-800 shadow-xl shadow-neutral-900/10 text-neutral-800 dark:text-neutral-200 text-sm sm:text-base font-semibold`}
            expandIcon={
              <FaChevronDown
                className={`text-neutral-800 dark:text-neutral-200`}
              />
            }
            aria-controls="panel2d-content"
            id="panel2d-header"
          >
            <p>Can I book my personal travel on this website?</p>
          </AccordionSummary>
          <AccordionDetails
            className={`p-4 sm:p-6 pl-6 sm:pl-8 pb-8 sm:pb-10 bg-transparent dark:bg-neutral-900 text-sm text-neutral-400`}
          >
            <p>
              Absolutely! Book It MATE is available for your leisure travel. You
              have access to over 2000 properties across Australia.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={`border-t border-neutral-200 dark:border-neutral-700`}
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary
            className={`p-4 pr-6 bg-neutral-100 dark:bg-neutral-800 shadow-xl shadow-neutral-900/10 text-neutral-800 dark:text-neutral-200 text-sm sm:text-base font-semibold`}
            expandIcon={
              <FaChevronDown
                className={`text-neutral-800 dark:text-neutral-200`}
              />
            }
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <p>
              How quickly can I make bookings once my registration is complete?
            </p>
          </AccordionSummary>
          <AccordionDetails
            className={`p-4 sm:p-6 pl-6 sm:pl-8 pb-8 sm:pb-10 bg-transparent dark:bg-neutral-900 text-sm text-neutral-400`}
          >
            <p>
              You'll be able to make bookings straight away once your
              registration is confirmed and you have received your login
              details.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={`border-t border-neutral-200 dark:border-neutral-700`}
          expanded={expanded === "panel4"}
          onChange={handleChange("panel4")}
        >
          <AccordionSummary
            className={`p-4 pr-6 bg-neutral-100 dark:bg-neutral-800 shadow-xl shadow-neutral-900/10 text-neutral-800 dark:text-neutral-200 text-sm sm:text-base font-semibold`}
            expandIcon={
              <FaChevronDown
                className={`text-neutral-800 dark:text-neutral-200`}
              />
            }
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <p>I have to sign a contract?</p>
          </AccordionSummary>
          <AccordionDetails
            className={`p-4 sm:p-6 pl-6 sm:pl-8 pb-8 sm:pb-10 bg-transparent dark:bg-neutral-900 text-sm text-neutral-400`}
          >
            <p>No, you are not committed to any contracts.</p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={`border-t border-neutral-200 dark:border-neutral-700`}
          expanded={expanded === "panel5"}
          onChange={handleChange("panel5")}
        >
          <AccordionSummary
            className={`p-4 pr-6 bg-neutral-100 dark:bg-neutral-800 shadow-xl shadow-neutral-900/10 text-neutral-800 dark:text-neutral-200 text-sm sm:text-base font-semibold`}
            expandIcon={
              <FaChevronDown
                className={`text-neutral-800 dark:text-neutral-200`}
              />
            }
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <p>
              Can I call your Central Reservations number to make a booking?
            </p>
          </AccordionSummary>
          <AccordionDetails
            className={`p-4 sm:p-6 pl-6 sm:pl-8 pb-8 sm:pb-10 bg-transparent dark:bg-neutral-900 text-sm text-neutral-400`}
          >
            <p>No, Book It MATE rates are only available online.</p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={`border-t border-neutral-200 dark:border-neutral-700`}
          expanded={expanded === "panel6"}
          onChange={handleChange("panel6")}
        >
          <AccordionSummary
            className={`p-4 pr-6 bg-neutral-100 dark:bg-neutral-800 shadow-xl shadow-neutral-900/10 text-neutral-800 dark:text-neutral-200 text-sm sm:text-base font-semibold`}
            expandIcon={
              <FaChevronDown
                className={`text-neutral-800 dark:text-neutral-200`}
              />
            }
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <p>Which email address will the confirmation be sent to?</p>
          </AccordionSummary>
          <AccordionDetails
            className={`p-4 sm:p-6 pl-6 sm:pl-8 pb-8 sm:pb-10 bg-transparent dark:bg-neutral-900 text-sm text-neutral-400`}
          >
            <p>
              It will be sent to the email address supplied in the booking
              process.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={`border-t border-neutral-200 dark:border-neutral-700`}
          expanded={expanded === "panel7"}
          onChange={handleChange("panel7")}
        >
          <AccordionSummary
            className={`p-4 pr-6 bg-neutral-100 dark:bg-neutral-800 shadow-xl shadow-neutral-900/10 text-neutral-800 dark:text-neutral-200 text-sm sm:text-base font-semibold`}
            expandIcon={
              <FaChevronDown
                className={`text-neutral-800 dark:text-neutral-200`}
              />
            }
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <p>When will my credit card be charged?</p>
          </AccordionSummary>
          <AccordionDetails
            className={`p-4 sm:p-6 pl-6 sm:pl-8 pb-8 sm:pb-10 bg-transparent dark:bg-neutral-900 text-sm text-neutral-400`}
          >
            <p>
              It will be charged by the property supplier on or after time of
              booking.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={`border-t border-neutral-200 dark:border-neutral-700`}
          expanded={expanded === "panel8"}
          onChange={handleChange("panel8")}
        >
          <AccordionSummary
            className={`p-4 pr-6 bg-neutral-100 dark:bg-neutral-800 shadow-xl shadow-neutral-900/10 text-neutral-800 dark:text-neutral-200 text-sm sm:text-base font-semibold`}
            expandIcon={
              <FaChevronDown
                className={`text-neutral-800 dark:text-neutral-200`}
              />
            }
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <p>How do I amend or cancel a booking?</p>
          </AccordionSummary>
          <AccordionDetails
            className={`p-4 sm:p-6 pl-6 sm:pl-8 pb-8 sm:pb-10 bg-transparent dark:bg-neutral-900 text-sm text-neutral-400`}
          >
            <p>
              All amendments & cancellations can be made directly to the
              Property Supplier.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={`border-t border-neutral-200 dark:border-neutral-700`}
          expanded={expanded === "panel9"}
          onChange={handleChange("panel9")}
        >
          <AccordionSummary
            className={`p-4 pr-6 bg-neutral-100 dark:bg-neutral-800 shadow-xl shadow-neutral-900/10 text-neutral-800 dark:text-neutral-200 text-sm sm:text-base font-semibold`}
            expandIcon={
              <FaChevronDown
                className={`text-neutral-800 dark:text-neutral-200`}
              />
            }
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <p>Will I receive a refund if the booking is cancelled?</p>
          </AccordionSummary>
          <AccordionDetails
            className={`p-4 sm:p-6 pl-6 sm:pl-8 pb-8 sm:pb-10 bg-transparent dark:bg-neutral-900 text-sm text-neutral-400`}
          >
            <p>
              Yes, if you cancel within the agreed cancellation period. All
              refunds will be issued from the Property Supplier directly.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={`border-t border-neutral-200 dark:border-neutral-700`}
          expanded={expanded === "panel10"}
          onChange={handleChange("panel10")}
        >
          <AccordionSummary
            className={`p-4 pr-6 bg-neutral-100 dark:bg-neutral-800 shadow-xl shadow-neutral-900/10 text-neutral-800 dark:text-neutral-200 text-sm sm:text-base font-semibold`}
            expandIcon={
              <FaChevronDown
                className={`text-neutral-800 dark:text-neutral-200`}
              />
            }
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <p>
              I do not want to pre-pay - can I still make a booking and pay on
              departure?
            </p>
          </AccordionSummary>
          <AccordionDetails
            className={`p-4 sm:p-6 pl-6 sm:pl-8 pb-8 sm:pb-10 bg-transparent dark:bg-neutral-900 text-sm text-neutral-400`}
          >
            <p>
              No, to take advantage of Book It MATE rates, payment will be taken
              from Property Supplier on or after time of booking.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={`border-t border-neutral-200 dark:border-neutral-700`}
          expanded={expanded === "panel11"}
          onChange={handleChange("panel11")}
        >
          <AccordionSummary
            className={`p-4 pr-6 bg-neutral-100 dark:bg-neutral-800 shadow-xl shadow-neutral-900/10 text-neutral-800 dark:text-neutral-200 text-sm sm:text-base font-semibold`}
            expandIcon={
              <FaChevronDown
                className={`text-neutral-800 dark:text-neutral-200`}
              />
            }
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <p>Can I book directly with the property I wish to stay at?</p>
          </AccordionSummary>
          <AccordionDetails
            className={`p-4 sm:p-6 pl-6 sm:pl-8 pb-8 sm:pb-10 bg-transparent dark:bg-neutral-900 text-sm text-neutral-400`}
          >
            <p>
              No, Book It MATE rates are only available on the Book It MATE
              website. No bookings can be made directly with the property.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={`border-t border-neutral-200 dark:border-neutral-700`}
          expanded={expanded === "panel12"}
          onChange={handleChange("panel12")}
        >
          <AccordionSummary
            className={`p-4 pr-6 bg-neutral-100 dark:bg-neutral-800 shadow-xl shadow-neutral-900/10 text-neutral-800 dark:text-neutral-200 text-sm sm:text-base font-semibold`}
            expandIcon={
              <FaChevronDown
                className={`text-neutral-800 dark:text-neutral-200`}
              />
            }
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <p>Can other staff who book travel in my company use this login?</p>
          </AccordionSummary>
          <AccordionDetails
            className={`p-4 sm:p-6 pl-6 sm:pl-8 pb-8 sm:pb-10 bg-transparent dark:bg-neutral-900 text-sm text-neutral-400`}
          >
            <p>
              An individual login, under your company's profile, can be set up
              by your company administrator.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={`border-t border-b-0 dark:border-b border-neutral-200 dark:border-neutral-700`}
          expanded={expanded === "panel13"}
          onChange={handleChange("panel13")}
        >
          <AccordionSummary
            className={`p-4 pr-6 bg-neutral-100 dark:bg-neutral-800 shadow-xl shadow-neutral-900/10 text-neutral-800 dark:text-neutral-200 text-sm sm:text-base font-semibold`}
            expandIcon={
              <FaChevronDown
                className={`text-neutral-800 dark:text-neutral-200`}
              />
            }
            aria-controls="panel3d-content"
            id="panel3d-header"
          >
            <p>Who do I contact if I need further assistance?</p>
          </AccordionSummary>
          <AccordionDetails
            className={`p-4 sm:p-6 pl-6 sm:pl-8 pb-8 sm:pb-10 bg-transparent dark:bg-neutral-900 text-sm text-neutral-400`}
          >
            <p>
              Simply email{" "}
              <Link
                href={`mailto:info@bookitmate.com.au`}
                className={`text-secondary-500 hover:underline transition-all duration-300`}
              >
                info@bookitmate.com.au
              </Link>{" "}
              and we will get back to you within 24 business hours.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </main>
  );
}
