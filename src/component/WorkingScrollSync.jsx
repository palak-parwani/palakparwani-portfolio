import React, { useState, useEffect, useRef } from "react";
import styles from "./RightSide.module.css";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { contentList, sections } from "@/data/projectsData";

const WorkingScrollSync = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index"));
            if (!isNaN(index)) {
              setActiveSection(index);
            }
          }
        });
      },
      { root: scrollContainer, threshold: 0.3 }
    );

    const handleScroll = () => {
      if (!scrollContainer) return;
      const scrollTop = scrollContainer.scrollTop;
      const viewportHeight = scrollContainer.clientHeight;
      const currentIndex = Math.round(scrollTop / viewportHeight);
      const clampedIndex = Math.max(0, Math.min(currentIndex, sections.length - 1));
      setActiveSection(clampedIndex);
    };

    if (scrollContainer) {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
      });

      scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
    }

    return () => {
      observer.disconnect();
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
      className={`container-fluid p-0 ${styles.projectContainer}`}
      style={{ height: "100vh", display: "flex", overflow: "hidden" }}
    >
      {/* Left Image Scroll */}
      <div
        ref={scrollContainerRef}
        className="col-7 p-0"
        style={{
          height: "100vh",
          overflowY: "scroll",
          scrollSnapType: "y mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style jsx>{`
          .col-7::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {sections.map((sec, index) => (
          <div
            key={sec.id}
            data-index={index}
            ref={(el) => (sectionRefs.current[index] = el)}
            className="d-flex align-items-center justify-content-center"
            style={{ height: "100vh", scrollSnapAlign: "start" }}
          >
            <a href={sec.link} target="_blank" rel="noopener noreferrer" className={styles.imageWrapper}>
              <div className={styles.imageContainer}>
                <Image
                  src={sec.image}
                  unoptimized
                  width={100}
                  height={100}
                  alt={`Section ${index + 1}`}
                  className="img-fluid rounded shadow-lg"
                  style={{ maxHeight: "90%", objectFit: "cover", width: "100%", height: "100%" }}
                />
                <div className={styles.imageOverlay}>
                  <span>View Live <MdArrowOutward size={18} style={{ marginTop: "-6px" }} /></span>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Right Sticky Content */}
      <div
        className={`col-5 bg-dark text-white d-flex align-items-center justify-content-center ${styles.forMob}`}
        style={{ height: "100vh", position: "sticky", top: 0 }}
      >
        <div className="p-4" style={{ maxWidth: "100%" }}>
          <div className="mb-4">
            <h3 className={`fw-bold mb-3 text-white ${styles.projectTitle}`}>{contentList[activeSection]?.title}</h3>
            <p className={`${styles.projectdesc} mb-4`} style={{ lineHeight: "1.6" }}>
              {contentList[activeSection]?.description}
            </p>
          </div>

          <div className="mb-4">
            <h4 className={styles.Keyfeatures}>Key Features:</h4>
            <ul className="list-unstyled">
              {contentList[activeSection]?.points.map((pt, idx) => (
                <li key={idx} className="d-flex align-items-start justify-content-start mb-2">
                  <span className={styles.stars}><FaStar size={13} style={{ marginTop: "-11px" }} /></span>
                  <span className={styles.keyfeaturepoints}>{pt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4">
            <h4 className={styles.Keyfeatures}>Technologies:</h4>
            <div className="d-flex flex-wrap gap-2">
              {contentList[activeSection]?.tech.map((tech, index) => (
                <span
                  className={styles.tech}
                  key={index}
                  style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}
                >
                  {tech.icon}
                  <span>{tech.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingScrollSync;
