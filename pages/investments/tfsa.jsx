import { ContactForm } from "@/components/ContactForm";
import { tfsaInsuranceItems } from "@/data/faqs/tfsa";
import { Collapse } from "antd";
import { HeroSection } from "@/components/HeroSection/HeroSection";
const TFSA = () => {
  return (
    <>
      <HeroSection
        heading={"Tax-Free Saving Account (TFSA)"}
        img={"/images/image6.png"}
        para={`A Tax-Free Savings Account (TFSA) is a registered savings account
            with tax advantages that allow you to earn money without incurring
            taxes. Imagine a TFSA as a container where you can hold eligible
            investments, potentially generating tax-free interest, capital
            gains, and dividends.`}
        color={"#9AB88CCC"}
      />

      <div className="relative top-[-165px]">
        <ContactForm />
      </div>

      <div
        id="tfsa"
        className="p-4"
        style={{ minHeight: "100vh", background: "#9AB88CCC" }}
      >
        <h1 className="text-white font-bold text-2xl">TFSA Insurance FAQs</h1>
        <Collapse
          ghost
          items={tfsaInsuranceItems}
          // defaultActiveKey={['1']}
        />
      </div>
    </>
  );
};

export default TFSA;
