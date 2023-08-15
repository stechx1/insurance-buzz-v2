import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { ExpandMore, ExpandLess } from "@material-ui/icons"; // Import arrow icons

export default function Faqs() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1}>
        <AccordionHeader className="text-base" onClick={() => handleOpen(1)}>
          <span>
            {open === 1 ? <ExpandLess /> : <ExpandMore />}
            What do we do?
          </span>
        </AccordionHeader>
        <AccordionBody>
          We're committed to safeguarding your present and future. Our comprehensive coverage and passionate professionals prioritize your protection.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader className="text-base" onClick={() => handleOpen(2)}>
          <span>
            {open === 2 ? <ExpandLess /> : <ExpandMore />}
            Getting started with InsuranceBuzz
          </span>
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader className="text-base" onClick={() => handleOpen(3)}>
          <span>
            {open === 3 ? <ExpandLess /> : <ExpandMore />}
            How does this works?
          </span>
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 4}>
        <AccordionHeader className="text-base" onClick={() => handleOpen(4)}>
          <span>
            {open === 4 ? <ExpandLess /> : <ExpandMore />}
            How to fill forms?
          </span>
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 5}>
        <AccordionHeader className="text-base" onClick={() => handleOpen(5)}>
          <span>
            {open === 5 ? <ExpandLess /> : <ExpandMore />}
            How do tickets work?
          </span>
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 6}>
        <AccordionHeader className="text-base" onClick={() => handleOpen(6)}>
          <span>
            {open === 6 ? <ExpandLess /> : <ExpandMore />}
            The messenger
          </span>
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>

      <Accordion open={open === 7}>
        <AccordionHeader className="text-base" onClick={() => handleOpen(7)}>
          <span>
            {open === 7 ? <ExpandLess /> : <ExpandMore />}
            Our next gen features
          </span>
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
    </>
  );
}