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
      <div className=" bg-[#E6F4F1]  text-left block pt-10 sm:pt-5 md:pt-10 lg:pt-0 sm:flex items-center sm:justify-between pb-8 px-10 ">
        <div>
          <p className=" font-bold pb-2">Starting At 999dt</p>
          <h2 className=" text-3xl sm:text-4xl font-bold pb-3 ">
            The best notebook <br /> collection 2025
          </h2>
          <p className=" text-2xl font-medium">
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
        <div className="container mx-auto grid grid-cols-1 gap-3 justify-items-center sm:grid-cols-2 md:grid-cols-4">
          <div className="bg-[#F1F1F1]  max-w-[300px] w-[100%] py-4 px-5 ">
            <div className="flex items-center">
              <span className="text-2xl mr-2">
                <TbTruckDelivery />
              </span>
              <h3 className="font-medium"> Free Delivery </h3>
            </div>
            <p> Orders from all items</p>
          </div>

          <div className="bg-[#F1F1F1] max-w-[300px] w-[100%] py-4 px-5 ">
            <div className="flex items-center">
              <span className="text-2xl mr-2">
                <TbArrowForwardUpDouble />
              </span>
              <h3 className="font-medium"> Return & Refund </h3>
            </div>
            <p> Money back guarantee</p>
          </div>

          <div className="bg-[#F1F1F1] max-w-[300px] w-[100%] py-4 px-5 ">
            <div className="flex items-center">
              <span className="text-2xl mr-2">
                <TbDiscountFilled />
              </span>
              <h3 className="font-medium"> Member Discount </h3>
            </div>
            <p> On order over $99</p>
          </div>

          <div className="bg-[#F1F1F1] max-w-[300px] w-[100%] py-4 px-5 ">
            <div className="flex items-center">
              <span className="text-2xl mr-2">
                <MdSupportAgent />
              </span>
              <h3 className="font-medium">Support 24/7 </h3>
            </div>
            <p> Contact us 24 hours a day </p>
          </div>
        </div>
      </section>

      {/* THIRD SECTION CODE START   */}

      <section className="mt-10 my-16 text-center ">
        <div>
          <h2 className="font-bold text-3xl py-3">Latest News</h2>
          <p className="text-[15px] text-gray-600 pb-8 ">
            But I must explain to you how all this mistaken idea of denouncing.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 px-5 sm:px-8 place-content-center mx-auto  ">
            <div>
              <img
                className="max-w-[300px] w-full mx-auto overflow-hidden transition-transform duration-300 hover:scale-110"
                src="/photo/blog-1.jpg"
                alt=""
              />
              <div className=" max-w-[300px] w-[100%] mx-auto bg-[#f7f7f7] py-4 mt-2 mb-8 ">
                <h3 className="font-medium text-[17px] pt-2 pb-1 ">
                  A guide to latest trends
                </h3>
                <p>By Admin</p>
              </div>
            </div>

            <div>
              <img
                className="max-w-[300px] w-full mx-auto overflow-hidden transition-transform duration-300 hover:scale-110"
                src="/photo/blog-2.jpg"
                alt=""
              />
              <div className=" max-w-[300px] w-[100%] mx-auto bg-[#f7f7f7] py-4 mt-2 mb-8 ">
                <h3 className="font-medium text-[17px] pt-2 pb-1 ">
                  Five ways to lead a happy life
                </h3>
                <p>By Admin</p>
              </div>
            </div>

            <div>
              <img
                className="max-w-[300px] w-full mx-auto overflow-hidden transition-transform duration-300 hover:scale-110"
                src="/photo/blog-3.jpg"
                alt=""
              />
              <div className=" max-w-[300px] w-[100%] mx-auto bg-[#f7f7f7] py-4 mt-2 mb-8 ">
                <h3 className="font-medium text-[17px] pt-2 pb-1 ">
                  Tips on having a happy life
                </h3>
                <p>By Admin</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
