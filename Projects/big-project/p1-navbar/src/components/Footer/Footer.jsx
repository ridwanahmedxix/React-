import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#f7f7f7] mt-5 py-12 pl-8 sm:pl-0 ">
        <div className=" text-gray-600 grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 px-4 sm:text-center sm:px-7 lg:px-10 ">
          <div className="mt-5">
            <h2 className="font-bold text-2xl pb-2 text-gray-700 ">Shopify</h2>
            <p className="text-[12px] pb-1"> © 2026 Shopify. </p>
            <p className="text-[12px] font-medium "> All Rights Reserved </p>
          </div>

          <div className="mt-5">
            <h3 className="font-medium text-[14px] "> ABOUT US </h3>
            <p className="text-[12px] pt-2 "> About us </p>
            <p className="text-[12px] pt-2 "> Store location </p>
            <p className="text-[12px] pt-2 "> Contact </p>
            <p className="text-[12px] pt-2 "> Orders tracking</p>
          </div>

          <div className="mt-5">
            <h3 className="font-medium text-[14px] "> USEFUL LINKS </h3>
            <p className="text-[12px] pt-2 "> Returns </p>
            <p className="text-[12px] pt-2 "> Support Policy </p>
            <p className="text-[12px] pt-2 "> Size guide </p>
            <p className="text-[12px] pt-2 "> FAQs </p>
          </div>

          <div className="mt-5">
            <h3 className="font-medium text-[14px] "> FOLLOW US </h3>
            <p className="text-[12px] pt-2 "> Facebook </p>
            <p className="text-[12px] pt-2 "> Twitter </p>
            <p className="text-[12px] pt-2 "> Instagram </p>
            <p className="text-[12px] pt-2 "> Youtube </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
