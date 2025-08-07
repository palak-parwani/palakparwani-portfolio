"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaLinkedin, FaSquarePhone, FaSquareXTwitter, FaLocationDot } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdEmail, MdSimCardDownload } from "react-icons/md";
import styles from "./LeftSide.module.css";

export default function LeftSide() {
  const [showMore, setShowMore] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    checkWidth(); // Initial check
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const renderSidebarInfoMore = () => (
    <div className={styles.sidebarInfoMore}>
      <div className={styles.separator}></div>
      <ul className={styles.contactsList}>
        <li className={styles.contactItem}>
          <div className={styles.iconBox}>
            <MdEmail />
          </div>
          <div className={styles.contactInfo}>
            <p className={styles.contactTitle}>Email</p>
            <a
              href="mailto:parwanipalak3@gmail.com"
              className={styles.contactLink}
            >
              parwanipalak3@gmail.com
            </a>
          </div>
        </li>

        <li className={styles.contactItem}>
          <div className={styles.iconBox}>
            <IoPhonePortraitOutline />
          </div>
          <div className={styles.contactInfo}>
            <p className={styles.contactTitle}>Phone</p>
            <a href="tel:+919587531213" className={styles.contactLink}>
              +91 9587531213
            </a>
          </div>
        </li>

        <li className={styles.contactItem}>
          <div className={styles.iconBox}>
            <FaLocationDot />
          </div>
          <div className={styles.contactInfo}>
            <p className={styles.contactTitle}>Location</p>
            <a
              href="https://www.google.com/maps/place/Alakhnanda+Apartment,+Sector+9,+Pratap+Nagar,+Jaipur,+Rajasthan"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              Jaipur, Rajasthan
            </a>
          </div>
        </li>
      </ul>

      <div className={styles.separator}></div>

      <ul className={styles.socialList}>
        <li className={styles.socialItem}>
          <a
            href="https://www.linkedin.com/in/palak-parwani-203a36236/"
            target="_blank"
            className={styles.socialLink}
          >
            <FaLinkedin />
          </a>
        </li>
        <li className={styles.socialItem}>
          <a
            href="https://github.com/palak-parwani"
            target="_blank"
            className={styles.socialLink}
          >
            <SiGithub />
          </a>
        </li>
        <li className={styles.socialItem}>
          <a
            href="https://x.com/palakparwani__"
            target="_blank"
            className={styles.socialLink}
          >
            <FaSquareXTwitter />
          </a>
        </li>
        <li className={styles.socialItem}>
          <a
            href="/palakCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <MdSimCardDownload size={24} />
          </a>
        </li>
      </ul>
    </div>
  );

  return (
    <div className={styles.sticky}>
      <div className={styles.sidebar} data-sidebar="">
        <div className={styles.sidebarInfo}>
          <a
            href="/me2.jpeg"
            target="_blank"
            rel="noopener noreferrer"
            title="Click me!"
          >
            <div className={styles.avatarBox}>
              <img src="/image/avatar.png" alt="Palak Parwani" />
              <span
                className={styles.activeStatus}
                title="Available for work!"
              ></span>
            </div>
          </a>

          <div className={styles.infoContent}>
            <h1 className={styles.name} title="Palak Parwani">
              Palak Parwani
            </h1>
            <p className={styles.title}>Frontend Developer</p>
          </div>
        </div>

        {isMobile ? (
          <>
            <button
              className={styles.button}
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Hide Contacts" : "Show Contacts"}
            </button>
            {showMore && renderSidebarInfoMore()}
          </>
        ) : (
          renderSidebarInfoMore()
        )}
      </div>
    </div>
  );
}
