'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { slideIn } from '../animations/slideIn';
import { staggerContainer } from '../animations/staggerContainer';
import { textVariant } from '../animations/textVariant';

export default function Hero() {
  return (
    <section className="py-12 pl-6 xs:py-8 sm:py-16 sm:pl-16">
      <motion.div
        variants={staggerContainer({})}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-full mx-auto flex flex-col 2xl:max-w-7xl"
      >
        <div className="relative flex justify-center items-center flex-col z-10">
          <motion.h1
            variants={textVariant(1.1)}
            className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white"
          >
            Metaverse
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center"
          >
            <h2 className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white">
              Ma
            </h2>
            <div className="md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]" />
            <h2 className="font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white">
              Ness
            </h2>
          </motion.div>
        </div>
        <motion.div
          variants={slideIn({
            direction: 'right',
            type: 'tween',
            delay: 0.2,
            duration: 1,
          })}
          className="relative w-full -mt-3 md:-mt-5"
        >
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />
          <Image
            src="/img/cover.png"
            alt="cover"
            width={1000}
            height={1000}
            className="w-full h-[350px] sm:h-[500px] object-cover rounded-tl-[140px] z-10 relative"
          />
          <Link href="#explore">
            <div className="relative w-full flex justify-end -mt-[50px] pr-[40px] z-10 sm:-mt-[70px]">
              <Image
                src="/img/stamp.png"
                alt="stamp"
                width={100}
                height={100}
                className="w-[100px] h-[100px] sm:w-[155px] sm:h-[155px] object-contain"
              />
            </div>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
