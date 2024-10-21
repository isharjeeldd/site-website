import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { container, paragraph } from "../../styles/globals";

import tunnel from "../../assets/Images/tunnel.jpg";
import train from "../../assets/Images/train.jpg";
import research from "../../assets/Images/research.jpg";
import neural from "../../assets/Images/neural.jpg";

// Preload images
const images = {
  tunnel: new Image(),
  train: new Image(),
  research: new Image(),
  neural: new Image(),
};

images.tunnel.src = tunnel;
images.train.src = train;
images.research.src = research;
images.neural.src = neural;

const Features = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200
  );

  const scrollThresholds = {
    firstBlock: 800,
    secondBlock: 1500,
  };

  // Preload images on component mount
  useEffect(() => {
    Promise.all(
      Object.values(images).map(
        (img) =>
          new Promise((resolve) => {
            if (img.complete) resolve();
            else img.onload = resolve;
          })
      )
    ).then(() => setImagesLoaded(true));
  }, []);

  const updateExpandedIndex = useCallback(() => {
    const scrollY = window.scrollY;

    if (
      scrollY >= scrollThresholds.firstBlock &&
      scrollY < scrollThresholds.secondBlock
    ) {
      setExpandedIndex(0);
    } else if (scrollY >= scrollThresholds.secondBlock) {
      setExpandedIndex(1);
    }
  }, [scrollThresholds]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateExpandedIndex();
          ticking = false;
        });
        ticking = true;
      }
    };

    const handleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
    }, 200);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [updateExpandedIndex]);

  const handleToggle = useCallback((index) => {
    setExpandedIndex((prev) => (prev === index ? -1 : index));
  }, []);

  const containerVariants = {
    expanded: {
      height: windowWidth < 640 ? "auto" : "300px",
      width: windowWidth < 640 ? "100%" : "75%",
      transition: { duration: 0.3, ease: "easeOut" },
    },
    collapsed: {
      height: windowWidth < 640 ? "150px" : "150px",
      width: windowWidth < 640 ? "75%" : "50%",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  const imageVariants = {
    initial: { scale: 0.95, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.2 },
    },
    exit: {
      scale: 0.95,
      opacity: 0,
      transition: { duration: 0.1 },
    },
  };

  return (
    <div className={`${container} mt-[250px] mb-[150px]`}>
      <div className="flex w-full flex-wrap items-center">
        <div className="w-full md:w-full lg:w-[50%]">
          {/* First Block */}
          <motion.div
            className="flex items-center bg-expert-cons bg-no-repeat bg-cover p-10 cursor-pointer"
            variants={containerVariants}
            animate={expandedIndex === 0 ? "expanded" : "collapsed"}
            onClick={() => handleToggle(0)}
            layout
          >
            <div className="relative">
              <AnimatePresence mode="wait">
                {expandedIndex === 0 && imagesLoaded && (
                  <div className="block lg:absolute lg:right-[-150px] lg:bottom-[90px]">
                    <div className="flex items-end gap-1">
                      <div className="flex flex-col gap-1 items-end justify-end">
                        <motion.div
                          variants={imageVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="bg-secondary h-[40px] w-[50px] rounded-sm"
                        />
                        <motion.img
                          variants={imageVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="h-[100px] w-[120px] rounded-sm"
                          src={tunnel}
                          alt="Tunnel"
                        />
                        <motion.div
                          variants={imageVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="bg-primary h-[60px] w-[70px] rounded-sm"
                        />
                      </div>
                      <div className="flex flex-col gap-1 items-start justify-start">
                        <motion.div
                          variants={imageVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="bg-primary h-[70px] w-[80px] rounded-sm"
                        />
                        <motion.img
                          variants={imageVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="h-[100px] w-[100px] rounded-sm"
                          src={train}
                          alt="Train"
                        />
                        <motion.div
                          variants={imageVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="bg-secondary h-[30px] w-[35px] rounded-sm"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </AnimatePresence>

              <motion.h2
                className={`text-[#404040] font-[500] cursor-pointer ${
                  expandedIndex === 0
                    ? "w-full lg:w-[60%] mt-6 lg:mt-0"
                    : "w-[80%]"
                }`}
                animate={{
                  fontSize: expandedIndex === 0 ? "26px" : "18px",
                  opacity: expandedIndex === 0 ? 1 : 0.7,
                }}
                transition={{ duration: 0.2 }}
              >
                Expert Consultancy and Actionable Insights
              </motion.h2>

              <AnimatePresence>
                {expandedIndex === 0 && (
                  <motion.hr
                    className="mt-4 border-[#404040]"
                    initial={{ width: "0%" }}
                    animate={{ width: "60%" }}
                    exit={{ width: "0%" }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Second Block */}
          <motion.div
            className="flex items-center bg-in-depth bg-no-repeat bg-cover p-10 mt-2 cursor-pointer"
            variants={containerVariants}
            animate={expandedIndex === 1 ? "expanded" : "collapsed"}
            onClick={() => handleToggle(1)}
            layout
          >
            <div className="relative">
              <AnimatePresence mode="wait">
                {expandedIndex === 1 && imagesLoaded && (
                  <div className="block lg:absolute lg:right-[-290px] lg:top-[90px]">
                    <div className="flex items-end gap-1">
                      <div className="flex flex-col gap-1 items-end justify-end">
                        <motion.img
                          variants={imageVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="h-[100px] w-[120px] rounded-sm"
                          src={research}
                          alt="Research"
                        />
                        <motion.div
                          variants={imageVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="bg-primary h-[60px] w-[70px] rounded-sm"
                        />
                        <motion.div
                          variants={imageVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="bg-secondary h-[40px] w-[50px] rounded-sm"
                        />
                      </div>
                      <div className="flex flex-col gap-1 items-start justify-start">
                        <motion.div
                          variants={imageVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="bg-secondary h-[30px] w-[35px] rounded-sm"
                        />
                        <motion.div
                          variants={imageVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="bg-primary h-[70px] w-[80px] rounded-sm"
                        />
                        <motion.img
                          variants={imageVariants}
                          initial="initial"
                          animate="animate"
                          exit="exit"
                          className="h-[100px] w-[100px] rounded-sm"
                          src={neural}
                          alt="Neural"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </AnimatePresence>

              <motion.h2
                className={`text-[#404040] font-[500] cursor-pointer ${
                  expandedIndex === 1 ? "w-[60%] mt-8 lg:mt-0" : "w-[80%]"
                }`}
                animate={{
                  fontSize: expandedIndex === 1 ? "26px" : "18px",
                  opacity: expandedIndex === 1 ? 1 : 0.7,
                }}
                transition={{ duration: 0.2 }}
              >
                In-Depth Research
              </motion.h2>

              <AnimatePresence>
                {expandedIndex === 1 && (
                  <motion.hr
                    className="mt-4 border-[#404040]"
                    initial={{ width: "0%" }}
                    animate={{ width: "60%" }}
                    exit={{ width: "0%" }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Text Content Section */}
        <div className="w-full md:w-full lg:w-[50%] mt-14 md:mt-14">
          <AnimatePresence mode="wait">
            <motion.h2
              key={`heading-${expandedIndex}`}
              className="text-black mb-3 font-semibold text-[30px] md:text[36px] lg:text-[42px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {expandedIndex === 0
                ? "Architecting Ethical AI Futures"
                : expandedIndex === 1
                ? "Decoding the DNA of Responsible AI"
                : ""}
            </motion.h2>
            <motion.p
              key={`text-${expandedIndex}`}
              className={`${paragraph} w-full lg:w-[80%]`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {expandedIndex === 0
                ? "In the gold rush of AI innovation, we're the cartographers mapping the ethical terrain. As AI reshapes industries and redefines human-machine boundaries, organizations face a labyrinth of ethical, legal, and societal challenges. SITE's consultancy arm doesn't just guide you through this maze - we help you redesign it. From workforce transitions to governance frameworks, we translate cutting-edge research into actionable strategies. With SITE, you're not just adopting AI; you're crafting a responsible, innovative future."
                : expandedIndex === 1
                ? "Where others see binary, we see the complex strands of AI's impact on humanity. SITE's research arm dives deep into the multifaceted world of AI ethics, governance, and societal implications. We're not content with surface-level analysis; we're excavating the foundations of AI's role in shaping our future. Our interdisciplinary approach fuses technical expertise with social sciences, producing insights that don't just fill academic journals - they fuel real-world solutions and shape tomorrow's policies."
                : ""}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default Features;
