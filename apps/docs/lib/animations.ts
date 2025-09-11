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

export const itemsVariant = {
  hidden: {
    opacity: 0,
		y: -10 
  },
  visible: {
    opacity: 1,
		y: 0,
    transition: {
			delay: 0.25,
      duration: 0.30,
			when: "beforeChildren"
    },
  },
};

export const itemsChildrenVariant = {
  hidden: {
    opacity: 0,
		y: -8
  },
  visible: {
    opacity: 1,
		y: 0,
    transition: {
      duration: 0.60,
    },
  },
};
