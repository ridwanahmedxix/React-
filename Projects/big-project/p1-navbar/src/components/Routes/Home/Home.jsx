import React from "react";
import {
  TbTruckDelivery,
  TbArrowForwardUpDouble,
  TbDiscountFilled,
} from "react-icons/tb";
import { MdSupportAgent } from "react-icons/md";

const Home = () => {
  return (
    <div>
      <div className=" bg-[#E6F4F1] text-center md:text-left block pt-10 sm:pt-5 md:pt-10 lg:pt-0 sm:flex items-center sm:justify-between pb-8 px-10 ">
        <div>
          <p className=" font-bold pb-2">Starting At 999dt</p>
          <h2 className="  sm:text-4xl font-bold pb-3 ">
            The best notebook <br /> collection 2025
          </h2>
          <p className=" sm:text-2xl font-medium">
            Exclusive offer <span className="text-red-500">-50%</span> off this
            week
          </p>
          <button className="bg-white p-3 font-medium my-3 rounded-[10px] hover:bg-blue-400 hover:text-white ">
            Grab the opportunity Now
          </button>
        </div>
        <div>
          <img
            className=" max-w-[600px] w-[100%] "
            src="/photo/still-life-technology-device-minimal-display.png"
            alt=""
          />
        </div>
      </div>

      {/* 2ND SECTION CODE START  */}
      <section className="my-8">
        <div className=" block  sm:flex sm:justify-around">
          <div className="bg-[#F1F1F1] py-4 px-5 ">
            <div>
              <span>
                <TbTruckDelivery />
              </span>
              <h3> Free Delivery </h3>
            </div>
            <p> Orders from all items</p>
          </div>

          <div>
            <div>
              <span>
                <TbArrowForwardUpDouble />
              </span>
              <h3> Return & Refund </h3>
            </div>
            <p> Money back guarantee</p>
          </div>

          <div>
            <div>
              <span>
                <TbDiscountFilled />
              </span>
              <h3> Member Discount </h3>
            </div>
            <p> On order over $99</p>
          </div>

          <div>
            <div>
              <span>
                <MdSupportAgent />
              </span>
              <h3>Support 24/7 </h3>
            </div>
            <p> Contact us 24 hours a day </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
