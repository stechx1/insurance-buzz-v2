import { ContactForm } from "@/components/ContactForm";
import { CoverageDetail } from "@/components/CoverageDetail";
import { HeroSection } from "@/components/HeroSection/HeroSection";
import { rrspInsuranceItems } from "@/data/faqs/rrsp";
import { Collapse } from "antd";
const RRSP = () => {
  return (
    <>
      <HeroSection
        heading={"Registered Retirement Saving Plan (RRSP)"}
        para={`  A Registered Retirement Savings Plan (RRSP) is a Canadian retirement
            savings and investment tool available to both employees and
            self-employed individuals. Contributions made to an RRSP are
            deducted from your pre-tax income and the funds grow tax-free until
            withdrawal. Upon withdrawal, the amount is subject to taxation at
            the applicable marginal rate.`}
        img={"/images/sub/RRSP.jpeg"}
        color={"#256c18CC"}
      />

      <div className="relative top-[-165px]">
        <ContactForm />
      </div>

      <div
        id="rrsp"
        className="p-4"
        style={{ minHeight: "100vh", background: "#256c18CC" }}
      >
        <h1 className="text-white font-bold text-2xl">RRSP Insurance FAQs</h1>
        <Collapse
          ghost
          items={rrspInsuranceItems}
          // defaultActiveKey={['1']}
        />
      </div>
    </>
  );
};

export default RRSP;
