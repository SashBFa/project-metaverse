type StaggerContainerType = {
  staggerChildren?: any;
  delayChildren?: any;
};

export const staggerContainer = ({
  staggerChildren,
  delayChildren,
}: StaggerContainerType) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});
