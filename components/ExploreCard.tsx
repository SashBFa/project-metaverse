'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeIn } from '../animations/fadeIn';

type ExploreCardType = {
  index: number;
  active: string;
  handleClick: (index: string) => void;
  world: {
    id: string;
    imgUrl: string;
    title: string;
  };
};
const ExploreCard = ({
  index,
  active,
  handleClick,
  world,
}: ExploreCardType) => {
  return (
    <motion.div
      variants={fadeIn({
        direction: 'right',
        type: 'spring',
        delay: index * 0.5,
        duration: 0.75,
      })}
      className={`relative ${
        active === world.id
          ? 'flex-[10] lg:flex-[3.5]'
          : 'flex-[2] lg:flex-[0.5]'
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={() => handleClick(world.id)}
    >
      <Image
        src={world.imgUrl}
        alt={world.title}
        width={5000}
        height={5000}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== world.id ? (
        <h3 className="absolute font-semibold text-[18px] text-white z-0 sm:text-[26px] lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {world.title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <div className="flex justify-center items-center w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]">
            <Image
              src="/svg/headset.svg"
              alt="headset"
              width={100}
              height={100}
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
          <p className="font-normal text-[16px] leading-[20px] text-white uppercase">
            Enter the Metaverse
          </p>
          <h2 className="mt-[24px] font-semibold text-[24px] text-white sm:text-[32px]">
            {world.title}
          </h2>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
