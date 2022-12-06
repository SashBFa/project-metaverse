'use client';

import { motion } from 'framer-motion';
import { textContainer } from '../animations/textContainer';
import { textVariant2 } from '../animations/textVariant';

type TextType = {
  title: string;
  textStyles: string;
};
export const TypingText = ({ title, textStyles }: TextType) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span key={index} variants={textVariant2}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }: TextType) => (
  <h2>Title Text</h2>
);
