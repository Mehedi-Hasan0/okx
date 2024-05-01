import { motion } from "framer-motion";
import Image from "next/image";
import FullWidthBorder from "../shared/FullWidthBorder";

export default function BabydogeCards() {
  const textVariant = {
    initial: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.75 },
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.75 },
    },
  };
  const leftCardsVariant = {
    initial: {
      opacity: 0,
      x: -30,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
    animate: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.75,
        delay: 0.15 * i,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
  };
  return (
    <section className="text-white overflow-hidden bg-[url('/assets/images/banner-bg-3.webp')]  lg:bg-[url('/assets/images/3rd-sec-banner.webp')] bg-cover bg-center lg:pt-10 relative mt-12 sm:mt-16">
      {/* left side lines */}
      <div className="bg-[url('/assets/icons/leftLines.svg')] bg-cover absolute top-0 left-0 min-w-[778px] min-h-[900px] lg:min-h-[600px] xl:min-h-[700px] 2xl:min-h-[1000px] z-[2] opacity-10" />
      {/* right side lines */}
      <div className="bg-[url('/assets/icons/rightLines.svg')] bg-cover absolute top-0 right-0 min-w-[778px] min-h-[900px] lg:min-h-[600px] xl:min-h-[700px] 2xl:min-h-[1000px] z-[2] opacity-10" />

      <div className="w-[50%] h-full absolute top-0 right-0 z-[1] bg-[url('/assets/images/3rd-sec-top-right-layer.webp')] object-contain" />

      {/* main content */}
      <div className="main-container pb-8 lg:pb-10">
        <motion.div
          className="py-8 flex flex-col justify-center items-center"
          variants={textVariant}
          initial="initial"
          whileInView="animate"
          // viewport={{
          //   once: true,
          // }}
        >
          <Image
            src={"/assets/icons/text-top-green.svg"}
            alt=""
            width={310}
            height={14}
          />
          <h5 className="uppercase text-base sm:text-lg md:text-xl font-bold tracking-[8px]">
            x layer
          </h5>
        </motion.div>

        <div className="flex flex-col-reverse lg:flex-row gap-5 sm:gap-10 items-center 2xl:mt-8">
          <div className="flex flex-col gap-4 md:gap-7 xl:gap-10 relative z-[7] w-full lg:w-1/2">
            {babydogeCaracters.map((ch, i) => (
              <motion.div
                key={i}
                variants={leftCardsVariant}
                custom={i}
                initial="initial"
                whileInView="animate"
                // viewport={{
                //   once: true,
                // }}
                className={`flex items-center gap-4 ${
                  i === 1 ? "justify-start" : "justify-start lg:justify-end"
                }`}
              >
                <div className="">
                  <Image
                    src={ch.img}
                    alt=""
                    width={200}
                    height={200}
                    className="lg:w-[90px] xl:w-[120px] 2xl:w-[200px]"
                  />
                </div>
                <div className=" relative flex justify-center items-center ">
                  <Image
                    src={badgesBg[i].img}
                    alt=""
                    width={700}
                    height={500}
                    className={`${
                      i === 1
                        ? "lg:w-[300px] xl:w-[400px] 2xl:w-[600px] 2xl:h-[250px]"
                        : "lg:w-[270px] xl:w-[320px] 2xl:w-[520px]"
                    }`}
                  />
                  {/* <p className="absolute text-2xl">{badgesBg[i].label}</p> */}
                  <div className="flex flex-col gap-1 2xl:gap-2 absolute text-sm sm:text-xl md:text-3xl lg:text-sm xl:text-lg 2xl:text-3xl pl-2 pr-4 text-gray-300">
                    <p>Name: {badgesBg[i].name}</p>
                    <p>Rarity: {badgesBg[i].rarity}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          {/*  */}
          <motion.div
            className="w-full lg:w-1/2 relative"
            variants={textVariant}
            initial="initial"
            whileInView="animate"
            // viewport={{
            //   once: true,
            // }}
          >
            <Image
              src={"/assets/images/babydoge-ch.webp"}
              alt=""
              width={756}
              height={786}
              className="relative bottom-7 sm:bottom-7 lg:ml-10 lg:bottom-16 z-[1] lg:right-0 mx-auto lg:mx-0 lg:w-[340px] xl:w-[500px] 2xl:w-[700px]"
            />
            <div className="block lg:hidden absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-b from-transparent to-black z-[2]" />
          </motion.div>
        </div>
      </div>

      {/* shadow overlay */}
      <div className="w-full h-[50%] bg-gradient-to-b from-transparent to-black absolute bottom-0 z-[6] lg:block hidden" />

      {/* border top */}
      <div className="absolute top-0 left-0 w-full">
        <FullWidthBorder />
      </div>
    </section>
  );
}

const babydogeCaracters = [
  {
    img: "/assets/images/badges/badge-1.png",
  },
  {
    img: "/assets/images/badges/badge-2.png",
  },
  {
    img: "/assets/images/badges/badge-3.png",
  },
];

const badgesBg = [
  {
    img: "/assets/images/badges/bg-1.png",
    name: "CosmoKnight Baby Doge",
    rarity: "Legendary",
  },
  {
    img: "/assets/images/badges/bg-2.png",
    name: " Dragon Baby Doge",
    rarity: "Immortal",
  },
  {
    img: "/assets/images/badges/bg-3.png",
    name: "Samurai Baby Doge",
    rarity: "Mythical",
  },
];
