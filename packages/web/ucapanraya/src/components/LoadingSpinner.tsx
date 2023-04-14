import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <motion.div
      className="w-4 h-4 bg-indigo-700 rounded-full mt-10"
      animate={{
        scale: [1, 2, 2, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      }}
    />
  );
};

export default LoadingSpinner;
