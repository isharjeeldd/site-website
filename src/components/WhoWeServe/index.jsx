import React from "react";
import { container, paragraph } from "../../styles/globals";
import businessLAi from "../../assets/Images/buisness.jpg";
import govAgencies from "../../assets/Images/gov.jpg";
import nonProfitOrg from "../../assets/Images/nonprofit.jpg";
import educationIns from "../../assets/Images/education.jpg";
import securityOrg from "../../assets/Images/security.jpg";

const WhoWeServe = () => {
  return (
    <div className={`${container} my-[150px]`}>
      <div className="text-start lg:text-center">
        <h1 className="text-[42px] text-black font-[700]">Who We Serve</h1>
        <p className={`${paragraph} sm:w-[50%] w-[100%] mt-4 mx-auto`}>
          In today's rapidly evolving technological environment, responsible AI
          integration is crucial. SITE provides essential expertise for:
        </p>
      </div>
      <div className="mt-4">
        <div className="flex flex-wrap gap-4 justify-center w-full">
          <div className="bg-[#F9FAFB] p-4 w-fit">
            <img
              className="h-[400px] w-[500px] rounded-sm"
              src={businessLAi}
              alt="Business"
            />
            <h2 className="text-center text-gray-500 font-semibold mt-4 text-[14px]">
              Businesses leveraging AI for competitive advantage
            </h2>
          </div>
          <div className="bg-[#F9FAFB] p-4 w-fit">
            <img
              className="h-[400px] w-[350px] rounded-sm"
              src={govAgencies}
              alt="Government agencies"
            />
            <h2 className="text-center text-gray-500 font-semibold mt-4 w-[200px] mx-auto text-[14px]">
              Government agencies shaping AI policy and regulation
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 justify-center w-full mt-6">
          <div className="bg-[#F9FAFB] p-4 w-fit">
            <img
              className="h-[400px] w-[500px] rounded-sm"
              src={nonProfitOrg}
              alt="non profit org"
            />
            <h2 className="text-center text-gray-500 font-semibold mt-4 text-[14px]">
              Nonprofit organizations advocating for ethical AI deployment
            </h2>
          </div>
          <div className="bg-[#F9FAFB] p-4 w-fit">
            <img
              className="h-[400px] w-[350px] rounded-sm"
              src={educationIns}
              alt="educational institutes"
            />
            <h2 className="text-center text-gray-500 font-semibold mb-4 w-[200px] mx-auto text-[14px]">
              Educational institutions advancing AI ethics research
            </h2>
          </div>
          <div className="bg-[#F9FAFB] p-4 w-fit">
            <img
              className="h-[400px] w-[350px] rounded-sm"
              src={securityOrg}
              alt="security agencies"
            />
            <h2 className="text-center text-gray-500 font-semibold mt-4 w-[200px] mx-auto text-[14px]">
              Security organizations countering AI-driven threats
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeServe;
