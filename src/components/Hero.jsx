import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-6`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#a00cf6]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hey, I'm <span className='text-[#fe4d1d]'>Aman</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            As a Full-Stack Developer <br className='sm:block hidden' />
            I help organisations to upscale their businesses by building different sites for them. 
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-30 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[36px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-3'>
            <motion.div
              animate={{
                y: [0, 22, 0],
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-4 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
