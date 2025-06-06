import { shirts } from "@components/categoryLinks/categoryLinks";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const ClassicShirtCard = () => {
  return (
    <div className="px-6 py-6">
      <div className="flex flex-wrap justify-center gap-4">
        {shirts.map((shirt, index) => (
          <Link href={shirt.link} key={index} passHref>
            <div
              data-aos="fade-up"
              className="relative w-full sm:w-[22rem] md:w-[26rem] lg:w-[30rem] group overflow-hidden shadow-md cursor-pointer"
            >
              <img
                src={shirt.image}
                alt={shirt.alt}
                className="w-full h-72 sm:h-80 md:h-96 lg:h-[30rem] object-contain transform transition-transform duration-700 group-hover:scale-105 rounded-lg"
              />
              <div className="absolute inset-0 transition duration-300" />
              <div className="absolute bottom-4 left-4 text-white text-xl sm:text-2xl font-[Roboto] px-2 py-1 group">
                <span className="relative font-light after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full">
                  {shirt.title}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ClassicShirtCard;
