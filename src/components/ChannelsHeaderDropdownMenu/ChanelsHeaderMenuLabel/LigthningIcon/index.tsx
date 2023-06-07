import { motion, useAnimation } from 'framer-motion';
import { Zap } from 'lucide-react';

const LightningIcon = () => {
  const controls = useAnimation();

  const handleHover = () => {
    controls.start({ y: [0, -2, 0], transition: { duration: 0.3 } });
  };

  return (
    <motion.div onMouseEnter={handleHover} style={{ display: 'inline-block' }} animate={controls}>
      <Zap className="text-yellow-500 w-4 rotate-6" fill="rgb(234 179 8 / var(--tw-text-opacity))" />
    </motion.div>
  );
};

export default LightningIcon;
