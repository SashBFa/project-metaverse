'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { staggerContainer } from '../animations/staggerContainer';
import { ExploreCard, TitleText, TypingText } from '../components';
import { exploreWorlds } from '../data';

export default function Explore() {
  const [active, setActive] = useState<string>('world-2');
  const handleClick = (index: string) => {
    setActive(index);
  };
  return (
    <section id="explore" className="py-12 px-6 xs:p-8 sm:p-16">
      <motion.div
        variants={staggerContainer({})}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-full mx-auto flex flex-col 2xl:max-w-7xl"
      >
        <TypingText title="| The world" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want
              <br className="hidden md:block" /> to explore
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex flex-col min-h-[70vh] gap-5 lg:flex-row">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              world={world}
              index={index}
              active={active}
              handleClick={handleClick}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
