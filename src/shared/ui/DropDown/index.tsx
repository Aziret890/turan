/* eslint-disable react/prop-types */
import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useDropDown } from "../../../hooks/useDropDown";

const variants = {
  hidden: {
    opacity: 0,
    scaleY: 0,
  },
  visible: { opacity: 1, scaleY: 1 },
};

interface IProps2<T> {
  items: T[];
  links: T[];
}

interface IProps<T> extends IProps2<T> {
  initialSelectedItem?: string;
}

const DropDown = ({ initialSelectedItem, items, links }: IProps<string>) => {
  const { selectedItem, isOpen, toggleDropDown, onSelectItem, dropDownRef } =
    useDropDown({
      initialSelectedItem,
      items: items || links,
      storage: "drop",
    });

  return (
    <div className={styles.dropdownContainer}>
      <button
        onMouseOver={() => toggleDropDown()}
        onMouseOut={() => {
          if (isOpen) {
            toggleDropDown();
          }
        }}
        onClick={() => {
          toggleDropDown();
        }}
        className={styles.dropdownButton}
      >
        {selectedItem}
      </button>
      <div
        onMouseOver={() => toggleDropDown()}
        onMouseOut={() => toggleDropDown()}
        ref={!isOpen ? dropDownRef : null}
        className={clsx(styles.dropdownContent, {
          [styles.show]: isOpen,
        })}
      >
        {items?.map(
          (link, idx) =>
            isOpen && (
              <motion.li
                key={link}
                variants={variants}
                initial="hidden"
                animate="visible"
                transition={{
                  delay: idx * 0.2,
                  ease: "easeInOut",
                  duration: 0.25,
                }}
                viewport={{ amount: 0 }}
                className={idx === 0 ? styles.li : ""}
              >
                {isOpen && items && links && Array.isArray(links) && (
                  <Link
                    to={
                      isOpen && links && Array.isArray(links) ? links[idx] : ""
                    }
                    onClick={() => {
                      onSelectItem(links[idx]);
                      toggleDropDown();
                      window.scrollTo(0, 0);
                    }}
                  >
                    {link}
                  </Link>
                )}

                {!links && (
                  <button
                    onClick={() => {
                      toggleDropDown();
                      onSelectItem(link);
                    }}
                  >
                    {link}
                  </button>
                )}
              </motion.li>
            )
        )}
      </div>
    </div>
  );
};

export default DropDown;
