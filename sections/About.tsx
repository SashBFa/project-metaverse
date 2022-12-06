'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import { fadeIn } from '../animations/fadeIn';
import { staggerContainer } from '../animations/staggerContainer';
import Image from 'next/image';

export default function About() {
  return (
    <section className="relative py-12 px-6 z-10 xs:p-8 sm:p-16">
      <div className="gradient-02 z-0" />
      <motion.div
        variants={staggerContainer({})}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-full mx-auto flex justify-center items-center flex-col 2xl:max-w-7xl"
      >
        <TypingText title="| About Metaversus" textStyles="text-center" />
        <motion.p
          variants={fadeIn({
            direction: 'up',
            type: 'tween',
            delay: 0.2,
            duration: 1,
          })}
          className="mt-[8px] font-normal text-[20px] sm:text-[32px] text-secondary-white text-center"
        >
          <b className="font-extrabold text-white">Metaverse</b> is a new thing
          in the future, where you can enjoy the virtual world by feeling like
          it&apos;s really real, you can feel what you feel in this metaverse
          world, because this is really the{' '}
          <b className="font-extrabold text-white">madness of the metaverse</b>{' '}
          of today, using only <b className="font-extrabold text-white">VR </b>
          devices you can easily explore the metaverse world you want, turn your
          dreams into reality. Let&apos;s
          <b className="font-extrabold text-white"> explore</b> the madness of
          the metaverse by scrolling down
        </motion.p>
        <motion.div
          variants={fadeIn({
            direction: 'up',
            type: 'tween',
            delay: 0.3,
            duration: 1,
          })}
        >
          <Image
            src="/svg/arrow-down.svg"
            alt="arrow down"
            width={100}
            height={100}
            className="w-[18px] h-[28px] object-contain mt-[28px]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
