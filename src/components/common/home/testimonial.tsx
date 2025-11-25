import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

// Import required modules
import { FreeMode, Navigation } from "swiper/modules";
import { COOIcon } from "@/icon";
import Image from "next/image";

// Array of subjects
const testimonialData = [
  {
    id: 1,
    message:
      "I've been consistently impressed with the quality of service provided by this website. They have exceeded my expectations and delivered exceptional results. Highly recommended!",
    name: "John D.",
    position: "Project Manager",
    image: "/images/logo.png",
  },
  {
    id: 2,
    message:
      "I've been consistently impressed with the quality of service provided by this website. They have exceeded my expectations and delivered exceptional results. Highly recommended!",
    name: "John D.",
    position: "Company CEO",
    image: "/images/logo.png",
  },
  {
    id: 3,
    message:
      "I've been consistently impressed with the quality of service provided by this website. They have exceeded my expectations and delivered exceptional results. Highly recommended!",
    name: "John D.",
    position: "Company CEO",
    image: "/images/logo.png",
  },
  {
    id: 4,
    message:
      "I've been consistently impressed with the quality of service provided by this website. They have exceeded my expectations and delivered exceptional results. Highly recommended!",
    name: "John D.",
    position: "Company CEO",
    image: "/images/logo.png",
  },
  {
    id: 5,
    message:
      "I've been consistently impressed with the quality of service provided by this website. They have exceeded my expectations and delivered exceptional results. Highly recommended!",
    name: "John D.",
    position: "Company CEO",
    image: "/images/logo.png",
  },
];

const SliderOne = () => {
  return (
    <section className="container px-4">
      <h1 className="font-semibold text-4xl text-center mb-8">
        Most popular <span className="text-primary">Subjects</span> for building
        your Future
      </h1>

      <Swiper
        loop={true}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 1,
          },
        }}
      >
        {testimonialData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              key={index}
              className=" bg-[#F8F8F8] shadow-md space-y-4  rounded-[16px]"
            >
              <div className="bg-white flex flex-col gap-4 py-8 p-8">
                <span>{<COOIcon />}</span>
                <p className="font-medium text-[16px] text-[#535353]">
                  {item.message}
                </p>
              </div>

              <div className="flex justify-between py-4 px-8">
                <div>
                  <h1 className="text-[#000000] font-bold text-[16px] xl:text-[20px]">
                    {item.name}
                  </h1>
                  <span className="text-[#777777] text-[14px]">
                    {item.position}
                  </span>
                </div>
                <div>
                  <Image
                    src={item.image}
                    alt="Photo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Styling for Navigation Buttons */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          background-color: #ffff;
          border-radius: 9999px;
          transition:
            background-color 0.3s ease,
            color 0.3s ease;
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          color: black;
          transition: color 0.3s ease;
        }

        .swiper-button-next,
        .swiper-button-prev {
          width: 40px;
          height: 40px;
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px;
        }

        @media (min-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            width: 50px;
            height: 50px;
          }
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 24px;
          }
        }

        @media (min-width: 1024px) {
          .swiper-button-next,
          .swiper-button-prev {
            width: 50px;
            height: 50px;
          }
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 26px;
          }
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: #0a8375;
        }

        .swiper-button-next:hover::after,
        .swiper-button-prev:hover::after {
          color: white;
        }
      `}</style>
    </section>
  );
};

export default SliderOne;
