import React from "react";
import { IoStarHalf } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
    <div>
      {/* 1 SECTION CODE START  */}

      <section>
        <div class="min-h-screen bg-gradient-to-br from-[#0D9488] via-[#1E40AF] to-[#1E3A8A]">
          <div>
            <div>
              <div>
                <IoStarHalf />
                <button>AI-Powered Care Management</button>
              </div>

              <h2>
                CareVue <br />
                Intelligent Care
              </h2>
              <p>
                The modern operating system for residential care homes. Replace
                paper workflows with intelligent digital tools designed for CQC
                compliance and outstanding care.
              </p>

              <div>
                <div>
                  <button>Book a Demo</button>
                  <FaArrowRight />
                </div>
                <div>
                  <button>See How It Works</button>
                  <FaArrowRight />
                </div>
              </div>
            </div>

            <div>
              <img
                className="max-w-[400px] w-[100%] "
                src="/public/Images/"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
