import React from "react";
import styles from "./RightSide.module.css";
import { FaStar } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { contentList, sections } from "@/data/projectsData";

const WorkingScrollSyncMobile = () => {
  return (
    <div className="d-flex flex-column gap-4">
      {sections.map((sec, index) => (
        <div key={index}>
          {/* Image */}
          <div className="d-flex align-items-center justify-content-center mb-3">
            <a href={sec.link} target="_blank" rel="noopener noreferrer" className={styles.imageWrapper}>
              <div className={styles.imageContainer}>
                <img
                  src={sec.image}
                  alt={`Section ${index + 1}`}
                  className="img-fluid rounded shadow-lg"
                  style={{ maxHeight: "90%", objectFit: "contain" }}
                />
                <div className={styles.imageOverlay}>
                  <span>View Live <MdArrowOutward size={18} style={{ marginTop: "-6px" }} /></span>
                </div>
              </div>
            </a>
          </div>

          {/* Content */}
          <div className="p-md-4" style={{ maxWidth: "100%" }}>
            <div className="mb-4">
              <h3 className={`fw-bold mb-3 text-white ${styles.projectTitle}`}>{contentList[index]?.title}</h3>
              <p className={`${styles.projectdesc} mb-4`} style={{ lineHeight: "1.6" }}>
                {contentList[index]?.description}
              </p>
            </div>

            <div className="mb-4">
              <h4 className={styles.Keyfeatures}>Key Features:</h4>
              <ul className="list-unstyled">
                {contentList[index]?.points.map((pt, idx) => (
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
                {contentList[index]?.tech.map((tech, tIdx) => (
                  <span
                    className={styles.tech}
                    key={tIdx}
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
      ))}
    </div>
  );
};

export default WorkingScrollSyncMobile;
