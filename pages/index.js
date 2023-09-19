import InsuranceSolutions from "@/components/InsuranceSolutions";
import Coverages from "@/components/Coverages/Coverages";
import Process from "@/components/Process/Process";
import GoalsAndMissions from "@/components/Goals/GoalsAndMissions";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import Hero from "@/components/Hero";
import Head from "next/head";
import TravelSlider from "@/components/TravelSlider";
import LifeSlider from "@/components/LifeSlider";
import { Testimonials } from "@/components/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Head>
        <title>Insurance Buzz</title>
      </Head>
      <div
        className=" relative top-[-165px] z-0 "
        style={{
          background: `url(${"/images/home.jpg"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Hero />
      </div>

      <div
        style={{
          background: `url(${"/images/new/life-insurance.jpeg"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative top-[-165px]"
      >
        <Process />
      </div>

      <div
        style={{
          background: `url(${"/images/sub/mission.jpg"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative top-[-165px]"
      >
        <GoalsAndMissions />
      </div>

      <div
        style={{
          background: `url(${"/images/new/team-trust.jpg"})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative top-[-165px]"
      >
        <WhyChoose />
      </div>

      <div className="flex flex-col relative top-[-125px] bg-[white] p-10 pt-10 gap-4">
        <span className=" text-center my-4 text-2xl text-black font-bold">
          Travel Insurance Providers
        </span>
        <TravelSlider />

        <span className="mt-5 text-center my-4 text-2xl text-black font-bold">
          Life Insurance Providers
        </span>
        <LifeSlider />
      </div>
      <div className="px-5 relative top-[-135px] xl:px-0 mt-16 bg-[#FFDB58] py-20">
        <div
          style={{ boxShadow: "0px 5px 7px 0px rgb(114 114 114 / 25%)" }}
          className=" px-5 py-6  xl:max-w-7xl max-w-screen-lg rounded-xl bg-white m-auto"
        >
          <div className="">
            <span className="text-black text-center text-xl mb-4 font-bold">
              Reliable Insurance Solutions
            </span>
          </div>
          <div className="grid mt-4 md:grid-cols-3 grid-cols-1 gap-5">
            <InsuranceSolutions
              image={"/images/insurancesol1.png"}
              text1={"30+"}
              text2={"Insurance Companies"}
            />
            <InsuranceSolutions
              image={"/images/insurancesol2.png"}
              text1={"12K+"}
              text2={"Insurance Policies"}
            />
            <InsuranceSolutions
              image={"/images/insurancesol2.png"}
              text1={"8+"}
              text2={"Insurance Types"}
            />
          </div>
        </div>
      </div>
      <div className="">
        <p className="bg-[#FFDB58] w-fit text-black p-[0.35rem] container mx-auto mb-10">
          Testimonials
        </p>
        <Testimonials />
      </div>
    </>
  );
}
