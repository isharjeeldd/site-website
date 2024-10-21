import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { container, paragraph } from "../../styles/globals";
import laptopImage from "../../assets/Images/laptopImage.jpg";
import aiImage from "../../assets/Images/aiImage.jpg";
import tunnel from "../../assets/Images/tunnel.jpg";
import train from "../../assets/Images/train.jpg";
import research from "../../assets/Images/research.jpg";
import neural from "../../assets/Images/neural.jpg";

const Features = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  // useEffect(() => {
  //     const toggleInterval = setTimeout(() => {
  //         setExpandedIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
  //     }, 5000);

  //     return () => clearTimeout(toggleInterval);
  // }, [expandedIndex]);

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const popVariant1 = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.7,
        delay: 0.3,
      },
    },
    exit: { scale: 0 },
  };

  const popVariant2 = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
    exit: { scale: 0 },
  };

  const popVariant3 = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.3,
      },
    },
    exit: { scale: 0, opacity: 0 },
  };

  return (
    <div className={`${container} mt-[250px] mb-[150px]`}>
      <div className="flex w-full flex-wrap items-center">
        <div className="w-full md:w-full lg:w-[50%]">
          {/* First Block */}
          <motion.div
            className="flex items-center bg-expert-cons bg-no-repeat bg-cover p-10 cursor-pointer"
            initial={{ height: "150px", width: "50%" }}
            animate={() => {
              const screenWidth = window.innerWidth;
              let heightValue;
              let widthValue;
              if (screenWidth < 640) {
                // Small screens
                heightValue = expandedIndex === 0 ? "100%" : "200px";
                widthValue = expandedIndex === 0 ? "100%" : "75%";
              } else {
                // Large screens
                heightValue = expandedIndex === 0 ? "300px" : "150px";
                widthValue = expandedIndex === 0 ? "75%" : "50%";
              }
              return {
                height: heightValue,
                width: widthValue,
              };
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            onClick={() => handleToggle(0)}
          >
            <div className="relative">
              {/* Conditionally show blocks and images */}
              {expandedIndex === 0 && (
                <div className="block lg:absolute lg:right-[-150px] lg:bottom-[90px]">
                  <div className="flex items-end gap-1">
                    <div className="flex flex-col gap-1 items-end justify-end">
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={popVariant1}
                      >
                        <div className="bg-secondary h-[40px] w-[50px] rounded-sm"></div>
                      </motion.div>
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={popVariant2}
                      >
                        <img
                          className="h-[100px] w-[120px] rounded-sm"
                          src={tunnel}
                          alt="Laptop"
                        />
                      </motion.div>
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={popVariant3}
                      >
                        <div className="bg-primary h-[60px] w-[70px] rounded-sm"></div>
                      </motion.div>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start">
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={popVariant2}
                      >
                        <div className="bg-primary h-[70px] w-[80px] rounded-sm"></div>
                      </motion.div>
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={popVariant3}
                      >
                        <img
                          className="h-[100px] w-[100px] rounded-sm"
                          src={train}
                          alt="AI"
                        />
                      </motion.div>
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={popVariant1}
                      >
                        <div className="bg-secondary h-[30px] w-[35px] rounded-sm"></div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              )}

              <motion.h2
                className={`text-[#404040] font-[500] cursor-pointer ${
                  expandedIndex === 0
                    ? "w-full lg:w-[60%] mt-6 lg:mt-0"
                    : "w-[80%]"
                }`}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                animate={{
                  fontSize: expandedIndex === 0 ? "26px" : "18px",
                  opacity: expandedIndex === 0 ? "1" : "0.7",
                }}
              >
                Expert Consultancy and Actionable Insights
              </motion.h2>
              {expandedIndex === 0 && (
                <motion.hr
                  className="mt-4 border-[#404040]"
                  initial={{ width: "0%" }}
                  animate={{ width: expandedIndex === 0 ? "60%" : "70%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}
            </div>
          </motion.div>

          {/* Second Block */}
          <motion.div
            className="flex items-center bg-in-depth bg-no-repeat bg-cover p-10 mt-2 cursor-pointer"
            initial={{ height: "150px", width: "50%" }}
            animate={() => {
              const screenWidth = window.innerWidth;
              let heightValue, widthValue;

              // Adjust height and width based on screen size
              if (screenWidth < 640) {
                // Small screens
                heightValue = expandedIndex === 1 ? "100%" : "150px";
                widthValue = expandedIndex === 1 ? "100%" : "75%";
              } else {
                // Large screens
                heightValue = expandedIndex === 1 ? "300px" : "150px";
                widthValue = expandedIndex === 1 ? "75%" : "50%";
              }

              return {
                height: heightValue,
                width: widthValue,
              };
            }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            onClick={() => handleToggle(1)}
          >
            <div className="relative">
              {/* Conditionally show blocks and images */}
              {expandedIndex === 1 && (
                <div className="block lg:absolute lg:right-[-290px] lg:top-[90px]">
                  <div className="flex items-end gap-1">
                    <div className="flex flex-col gap-1 items-end justify-end">
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={popVariant2}
                      >
                        <img
                          className="h-[100px] w-[120px] rounded-sm"
                          src={research}
                          alt="Laptop"
                        />
                      </motion.div>
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={popVariant1}
                      >
                        <div className="bg-primary h-[60px] w-[70px] rounded-sm"></div>
                      </motion.div>
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={popVariant3}
                      >
                        <div className="bg-secondary h-[40px] w-[50px] rounded-sm"></div>
                      </motion.div>
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-start">
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={popVariant1}
                      >
                        <div className="bg-secondary h-[30px] w-[35px] rounded-sm"></div>
                      </motion.div>
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={popVariant2}
                      >
                        <div className="bg-primary h-[70px] w-[80px] rounded-sm"></div>
                      </motion.div>
                      <motion.div
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={popVariant3}
                      >
                        <img
                          className="h-[100px] w-[120px] rounded-sm"
                          src={neural}
                          alt="AI"
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>
              )}

              <motion.h2
                className={`text-[#404040] font-[500] cursor-pointer ${
                  expandedIndex === 1 ? "w-[60%] mt-8 lg:mt-0" : "w-[80%]"
                }`}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                animate={{
                  fontSize: expandedIndex === 1 ? "26px" : "18px",
                  opacity: expandedIndex === 1 ? "1" : "0.7",
                }}
              >
                In-Depth Research
              </motion.h2>
              {expandedIndex === 1 && (
                <motion.hr
                  className="mt-4 border-[#404040]"
                  initial={{ width: "0%" }}
                  animate={{ width: expandedIndex === 0 ? "60%" : "70%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}
            </div>
          </motion.div>
        </div>

        {/* respective heading and description */}
        <div className="w-full md:w-full lg:w-[50%] mt-14 md:mt-14">
          <AnimatePresence mode="wait">
            <motion.h2
              key={expandedIndex}
              className="text-black mb-3 font-semibold text-[30px] md:text[36px] lg:text-[42px]"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeVariants}
              transition={{ duration: 0.3 }}
            >
              {expandedIndex === 0
                ? "Architecting Ethical AI Futures"
                : expandedIndex === 1
                ? "Decoding the DNA of Responsible AI"
                : ""}
            </motion.h2>
            <motion.p
              key={expandedIndex + "_description"}
              className={`${paragraph} w-full lg:w-[80%]`}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={fadeVariants}
              transition={{ duration: 0.3 }}
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

export default Features;
