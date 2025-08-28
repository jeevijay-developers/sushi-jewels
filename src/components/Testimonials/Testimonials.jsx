import React from "react";
import { FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Abhishek Yadav",
    img: "/people/1.jpg",
    text: "The craftsmanship at Sushi-Jewelry is stunning. Every piece feels thoughtfully designed and carries such elegant detail—perfect for daily wear or a special occasion.",
  },
  {
    name: "Vishal",
    img: "/people/2.jpg",
    text: "I recently gifted a bracelet from Sushi-Jewelry, and it was a total hit. Beautiful packaging and the piece looked even better in person!",
  },
  {
    name: "Ajit Singh",
    img: "/people/3.jpg",
    text: "Finding unique and high-quality jewelry isn’t easy, but Sushi-Jewelry has nailed it. I wear their ring daily and constantly get compliments.",
  },
  {
    name: "Keshav Kumar",
    img: "/people/4.jpg",
    text: "What I love about Sushi-Jewelry is the minimal yet luxurious feel. It’s refined without being too flashy—exactly my style.",
  },
  {
    name: "Lakshay Saxena",
    img: "/people/5.jpg",
    text: "The Sushi-Jewelry watch is the perfect blend of style and function. It adds a sharp touch to my look and feels solid without being bulky — I wear it every day.",
  },
  
  
  {
    name: "George",
    img: "/people/6.jpg",
    text: "Sushi-Jewelry brings a sense of individuality and class. Their customer service was top-notch, and the piece I got feels truly one-of-a-kind.",
  },
];


const Testimonials = () => {
  return (
    <div className="w-full bg-gradient-to-b from-neutral-50 to-slate-100 py-16 text-center">
      <div className="flex items-center justify-center gap-x-4 md:gap-x-7">
        {[...Array(5)].map((_, idx) => (
          <FaStar
            className="text-2xl md:text-3xl lg:text-5xl "
            key={idx}
            style={{ color: "#ffd319"}}
          />
        ))}
      </div>
      <div className="px-6 font-[lora] text-[1.75rem] md:text-[2.25rem] lg:text-[3rem] text-center">
        Testimonials
      </div>

      <div className="mt-10 px-4 md:px-20">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500 }}
          loop={true}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="h-full flex flex-col justify-between rounded-lg border border-slate-200 bg-white p-7 text-left shadow-sm">
                <h4 className="mb-4 font-lexend font-normal leading-relaxed text-slate-600 line-clamp-3">
                  "{t.text}"
                </h4>
                <div className="mt-4 flex items-center space-x-3">
                  <figure className="h-10 w-10 overflow-hidden rounded-full">
                    <img src={t.img} className="h-full w-full object-cover" alt={t.name} />
                  </figure>
                  <p className="font-lexend text-xl font-medium text-blue-950">
                    {t.name}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <style>{`
        .swiper-pagination {
          bottom: 10px;
        }
      `}</style>
    </div>
  );
};

export default Testimonials;
