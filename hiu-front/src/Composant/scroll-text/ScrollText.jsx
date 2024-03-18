import React, { useEffect, useRef, useState } from "react";
import "./ScrollText.css";
import { motion, useInView } from "framer-motion";

export const props = {
  items: [""],
  gap: 0,
  repeat: 0,
  duration: 0,
};

/**
 *
 * @param {props} param0
 * @returns
 */
export default function ScrollText({
  items = [],
  gap = 0,
  repeat = 4,
  duration = 20,
}) {
  const [width, setWidth] = useState(0);

  const scrollerRef = useRef();
  const ulRef = useRef();

  const scrollerInView = useInView(scrollerRef, { once: true });

  useEffect(() => {
    setWidth(ulRef.current.offsetWidth);
  }, []);

  /**
   *
   * @returns {string[]}
   */
  const createArray = () => {
    const response = [];
    for (let index = 0; index < repeat; index++) {
      response.push("");
    }
    return response;
  };

  const scrollerVariants = {
    initial: {
      x: "100%",
    },
    animate: {
      x: 0,
      transition: {
        ease: "circOut",
        duration: 1,
        delayChildren: 0.5,
      },
    },
  };

  const scrollerInnerVariants = {
    initial: {},
    animate: {
      x: -width / 2 - gap / 2,
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration,
        y: {
          duration: 0.4,
        },
      },
    },
  };

  return (
    <motion.div
      ref={scrollerRef}
      variants={scrollerVariants}
      initial="initial"
      animate={!scrollerInView ? "initial" : "animate"}
      className="scroller"
    >
      <motion.ul
        ref={ulRef}
        variants={scrollerInnerVariants}
        className="tag-list scroller-inner"
        style={{ gap: `${gap}px` }}
      >
        {createArray().map((element, i) => (
          <React.Fragment key={i}>
            {items.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </React.Fragment>
        ))}
      </motion.ul>
    </motion.div>
  );
}
