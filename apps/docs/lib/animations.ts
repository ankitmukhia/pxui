export const containerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

export const itemsVariants = {
  hidden: {
    opacity: 0,
    y: -20,
    filter: "blur(10px)" 
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.25,
      delay: 0.5,
    },
  },
};

