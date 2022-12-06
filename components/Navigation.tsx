'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { navigationMotion } from '../animations/navigation';

export default function Navigation() {
  return (
    <motion.nav
      variants={navigationMotion}
      initial="hidden"
      whileInView="show"
      className="relative px-6 py-8 sm:px-16"
    >
      <div className="absolute w-1/2 inset-0 gradient-01" />
      <div className="w-full mx-auto flex justify-between gap-8 2xl:max-w-7xl">
        <Image
          src="/svg/search.svg"
          alt="search"
          width={100}
          height={100}
          className="w-6 h-6 object-contain"
        />
        <h2 className="uppercase font-extrabold text-2xl leading-7 text-white">
          metaversus
        </h2>
        <Image
          src="/svg/menu.svg"
          alt="menu"
          width={100}
          height={100}
          className="w-6 h-6 object-contain"
        />
      </div>
    </motion.nav>
  );
}
