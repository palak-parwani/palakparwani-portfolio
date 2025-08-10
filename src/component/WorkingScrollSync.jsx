import React, { useState, useEffect, useRef } from "react";
import styles from "./RightSide.module.css";
import {
  FaGlobeAsia,
  FaMapMarkerAlt,
  FaMobileAlt,
  FaSmile,
  FaStar,
} from "react-icons/fa";
import {
  FaBell,
  FaBolt,
  FaCloudSun,
  FaCode,
  FaCss3Alt,
  FaHtml5,
  FaJs,
  FaLaptopCode,
  FaReact,
  FaUsers,
} from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import Image from "next/image";

const WorkingScrollSync = () => {
  const [activeSection, setActiveSection] = useState(0);
  const sectionRefs = useRef([]);
  const scrollContainerRef = useRef(null);

  const contentList = [
    {
      title: "Rock Paper Scissor Game",
      description:
        "A fun and interactive game built with ReactJS where players compete against the computer using hand gestures. Features playful emojis based on the outcome.",
      points: [
        "Dynamic gameplay with real-time result detection.",
        "Integrated expressive emojis for win, lose, and draw states.",
        "Clean and responsive UI using React state and props.",
      ],
      tech: [
        {
          icon: <FaReact style={{ color: "hsl(45, 100%, 72%)" }} />,
          name: "React",
        },
        {
          icon: <FaCss3Alt style={{ color: "hsl(45, 100%, 72%)" }} />,
          name: "CSS3",
        },
        {
          icon: <FaJs style={{ color: "hsl(45, 100%, 72%)" }} />,
          name: "JavaScript",
        },
        {
          icon: <FaBolt style={{ color: "hsl(45, 100%, 72%)" }} />,
          name: "Vite",
        },
        {
          icon: <FaSmile style={{ color: "hsl(45, 100%, 72%)" }} />,
          name: "Emoji Support",
        },
      ],
    },
    {
      title: "To-Do List Timer App",
      description:
        "A simple task management app with timer functionality, check-off system, and browser notifications when the timer ends.",
      points: [
        "Add/delete tasks with ease",
        "Mark tasks as complete",
        "Set a timer in minutes",
        "Show browser notification when timer ends",
      ],
      tech: [
        {
          icon: <FaHtml5 style={{ color: "hsl(45, 100%, 72%)" }} />,
          name: "HTML5",
        },
        {
          icon: <FaCss3Alt style={{ color: "hsl(45, 100%, 72%)" }} />,
          name: "CSS3",
        },
        {
          icon: <FaJs style={{ color: "hsl(45, 100%, 72%)" }} />,
          name: "JavaScript",
        },
        {
          icon: <FaBell style={{ color: "hsl(45, 100%, 72%)" }} />,
          name: "Browser Notification",
        },
      ],
    },
    {
      title: "Live Weather Forecast App",
      description:
        "A modern React-based weather application that allows users to search weather details for any city or country, with geolocation support to auto-fetch current location weather.",
      points: [
        "Search weather by city or country name",
        "Automatically detects user's location using Geolocation API",
        "Displays real-time temperature, humidity, and wind speed",
        "Clean UI with weather icons and responsive design",
      ],
      tech: [
        {
          icon: <FaReact style={{ color: "hsl(45, 100%, 72%)" }} />,
          name: "React",
        },
        {
          icon: <FaCss3Alt style={{ color: "hsl(45, 100%, 72%)" }} />,
          name: "CSS3",
        },
        {
          icon: <FaJs style={{ color: "hsl(45, 100%, 72%)" }} />,
          name: "JavaScript",
        },
        {
          icon: <FaMapMarkerAlt style={{ color: "hsl(45, 100%, 72%)" }} />,
          name: "Geolocation API",
        },
        {
          icon: <FaCloudSun style={{ color: "hsl(45, 100%, 72%)" }} />,
          name: "OpenWeatherMap API",
        },
      ],
    },
    {
      title: "Blueberry DMC – B2B Travel Website",
      description:
        "A professionally designed B2B website for a Destination Management Company (DMC), crafted using React. Focuses on business-to-business travel solutions with a clean UI for tour listings, services, and partner engagement.",
      points: [
        "Modern and responsive UI built using React",
        "Clear presentation of travel services and destinations",
        "Optimized for B2B clients and corporate travel partners",
        "Section-based layout including hero, features, testimonials, and contact",
        "Interactive components like sliders",
      ],
      tech: [
        {
          icon: <FaReact style={{ color: "hsl(45, 100%, 72%)" }} />,
          name: "React",
        },
        {
          icon: <FaCss3Alt style={{ color: "hsl(45, 100%, 72%)" }} />,
          name: "CSS3",
        },
        {
          icon: <FaJs style={{ color: "hsl(45, 100%, 72%)" }} />,
          name: "JavaScript",
        },
        {
          icon: <FaLaptopCode style={{ color: "hsl(45, 100%, 72%)" }} />,
          name: "Responsive Design",
        },
      ],
    },
    {
      title: "Blueberry Travel – Corporate Travel Website",
      description:
        "A sleek and responsive corporate travel website crafted with attention to layout, accessibility, and modern UI design. The focus was on building a clean, mobile-friendly frontend using React and CSS.",
      points: [
        "Designed and implemented a fully responsive layout",
        "Created engaging UI for travel-related corporate content",
        "Ensured cross-device and cross-browser compatibility",
        "Used flexbox for scalable layout structure",
        "Focused purely on frontend presentation and user experience",
      ],
      tech: [
        {
          icon: <FaReact style={{ color: "hsl(45, 100%, 72%)" }} />,
          name: "React",
        },
        {
          icon: <FaCss3Alt style={{ color: "hsl(45, 100%, 72%)" }} />,
          name: "CSS3",
        },
        {
          icon: <FaJs style={{ color: "hsl(45, 100%, 72%)" }} />,
          name: "JavaScript",
        },
        {
          icon: <FaMobileAlt style={{ color: "hsl(45, 100%, 72%)" }} />,
          name: "Responsive Design",
        },
      ],
    },
    {
      title: "Blueberry Group – Company Website",
      description:
        "A  company website built using React JS. This project focused on both interactive functionality and sleek UI design to represent the services and values of the Blueberry Group.",
      points: [
        "Designed responsive UI for all pages with clean and modern aesthetics",
        "Implemented interactive components and navigation using React",
        "Integrated reusable components for consistency and scalability",
        "Combined visual branding with smooth user experience",
      ],
      tech: [
        {
          icon: <FaReact style={{ color: "hsl(45, 100%, 72%)" }} />,
          name: "React",
        },
        {
          icon: <FaCss3Alt style={{ color: "hsl(45, 100%, 72%)" }} />,
          name: "CSS3",
        },
        {
          icon: <FaJs style={{ color: "hsl(45, 100%, 72%)" }} />,
          name: "JavaScript",
        },
        {
          icon: <FaMobileAlt style={{ color: "hsl(45, 100%, 72%)" }} />,
          name: "Responsive Design",
        },
      ],
    },
    {
      title: "Next Migration – Travel Booking Platform",
      description:
        "A responsive travel booking website built with React JS. The platform provides a dynamic user experience based on IP location (UAE or India), features interactive forms, clean UI, and basic API integration.",
      points: [
        "Designed a responsive and intuitive UI for travel services",
        "Created interactive forms with real-time validation",
        "Integrated APIs for basic data handling and user submissions",
        "Optimized layout for performance on both desktop and mobile devices",
      ],
      tech: [
        {
          icon: <FaReact style={{ color: "hsl(45, 100%, 72%)" }} />,
          name: "React",
        },
        {
          icon: <FaCss3Alt style={{ color: "hsl(45, 100%, 72%)" }} />,
          name: "CSS3",
        },
        {
          icon: <FaJs style={{ color: "hsl(45, 100%, 72%)" }} />,
          name: "JavaScript",
        },
        {
          icon: <FaGlobeAsia style={{ color: "hsl(45, 100%, 72%)" }} />,
          name: "IP Geolocation",
        },
        {
          icon: <FaCode style={{ color: "hsl(45, 100%, 72%)" }} />,
          name: "API Integration",
        },
        {
          icon: <FaMobileAlt style={{ color: "hsl(45, 100%, 72%)" }} />,
          name: "Responsive Design",
        },
      ],
    },
  ];

  const sections = [
    {
      id: 0,
      image: "/rock-paper-scissor-game.png",
      link: "https://palak-parwani.github.io/rock-paper-scissor-game/",
    },
    {
      id: 1,
      image: "/to-do-list.png",
      link: "https://palak-parwani.github.io/To-Do-List/",
    },

    {
      id: 2,
      image: "/weather-app.png",
      link: "https://palak-parwani.github.io/weather_app/",
    },

    {
      id: 3,
      image: "/dmc.png",
      link: "https://bbtdmc.blueberrydmc.com/",
    },
    {
      id: 4,
      image: "/bbt.png",
      link: "https://newtesting.blueberry-travel.com/",
    },
    {
      id: 5,
      image: "/bbg.png",
      link: "https://newbbg.blueberrygroup.org/",
    },
    {
      id: 6,
      image: "/nh.png",
      link: "https://nextmigration.blueberry-travel.com/",
    },
  ];
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
    {
      root: scrollContainer,
      threshold: 0.3, // smaller threshold to detect earlier
    }
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
}, [sections.length]); // removed activeSection from deps

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsSmallScreen(width <= 576);
      setIsMediumScreen(width <= 1600 && width > 576);
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {isSmallScreen && (
        <div className="d-flex flex-column gap-4">
          {sections.map((sec, index) => (
            <div key={index}>
              {/* Image */}
              <div className="d-flex align-items-center justify-content-center mb-3">
                <a
                  href={sec.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.imageWrapper}
                >
                  <div className={styles.imageContainer}>
                    <img
                      src={sec.image}
                      alt={`Section ${index + 1}`}
                      className="img-fluid rounded shadow-lg"
                      style={{ maxHeight: "90%", objectFit: "contain" }}
                    />
                    <div className={styles.imageOverlay}>
                      <span>
                        View Live{" "}
                        <MdArrowOutward
                          size={18}
                          style={{ marginTop: "-6px" }}
                        />
                      </span>
                    </div>
                  </div>
                </a>
              </div>

              {/* Content for this image */}
              <div className="p-md-4" style={{ maxWidth: "100%" }}>
                <div className="mb-4">
                  <h3
                    className={`fw-bold mb-3 text-white ${styles.projectTitle}`}
                  >
                    {contentList[index]?.title}
                  </h3>
                  <p
                    className={`${styles.projectdesc} mb-4`}
                    style={{ lineHeight: "1.6" }}
                  >
                    {contentList[index]?.description}
                  </p>
                </div>

                <div className="mb-4">
                  <h4 className={styles.Keyfeatures}>Key Features:</h4>
                  <ul className="list-unstyled">
                    {contentList[index]?.points.map((pt, idx) => (
                      <li
                        key={idx}
                        className="d-flex align-items-start justify-content-start mb-2"
                      >
                        <span className={styles.stars}>
                          <FaStar size={13} style={{ marginTop: "-11px" }} />
                        </span>
                        <span className={styles.keyfeaturepoints}>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className={styles.Keyfeatures}>Technologies:</h4>
                  <div className={`d-flex flex-wrap gap-2`}>
                    {contentList[index]?.tech.map((tech, tIdx) => (
                      <span
                        className={styles.tech}
                        key={tIdx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          marginBottom: "4px",
                        }}
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
      )}

      {isMediumScreen && (
        <div
          className={`container-fluid p-0 ${styles.projectContainer}`}
          style={{ height: "100vh", display: "flex", overflow: "hidden" }}
        >
          {/* Left Image Scroll Section */}
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
                style={{
                  height: "100vh",
                  scrollSnapAlign: "start",
                }}
              >
                <a
                  href={sec.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.imageWrapper}
                >
                  <div className={styles.imageContainer}>
                    <Image
                      src={sec.image}
                      unoptimized
                      width={100} height={100} 
                      alt={`Section ${index + 1}`}
                      className="img-fluid rounded shadow-lg"
                      style={{ maxHeight: "90%", objectFit: "contain" }} 
                    />
                    <div className={styles.imageOverlay}>
                      <span>
                        View Live{" "}
                        <MdArrowOutward
                          size={18}
                          style={{ marginTop: "-6px" }}
                        />
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* Right Sticky Content */}
          <div
            className={`col-5 bg-dark text-white d-flex align-items-center justify-content-center ${styles.forMob}`}
            style={{
              height: "100vh",
              position: "sticky",
              top: 0,
            }}
            onWheel={(e) => {
              // Prevent default scroll behavior on right side
              e.preventDefault();

              // Pass scroll to left side container
              if (scrollContainerRef.current) {
                const scrollContainer = scrollContainerRef.current;
                const currentScroll = scrollContainer.scrollTop;
                const viewportHeight = scrollContainer.clientHeight;

                // Determine scroll direction and amount
                const scrollDelta = e.deltaY;

                if (scrollDelta > 0) {
                  // Scrolling down - go to next section
                  const nextSection = Math.min(
                    activeSection + 1,
                    sections.length - 1
                  );
                  scrollContainer.scrollTo({
                    top: nextSection * viewportHeight,
                    behavior: "smooth",
                  });
                } else {
                  // Scrolling up - go to previous section
                  const prevSection = Math.max(activeSection - 1, 0);
                  scrollContainer.scrollTo({
                    top: prevSection * viewportHeight,
                    behavior: "smooth",
                  });
                }
              }
            }}
          >
            <div className="p-4" style={{ maxWidth: "100%" }}>
              <div className="mb-4">
                <h3
                  className={`fw-bold mb-3 text-white ${styles.projectTitle}`}
                >
                  {contentList[activeSection]?.title}
                </h3>
                <p
                  className={`${styles.projectdesc} mb-4`}
                  style={{ lineHeight: "1.6" }}
                >
                  {contentList[activeSection]?.description}
                </p>
              </div>

              <div className="mb-4">
                <h4 className={styles.Keyfeatures}>Key Features:</h4>
                <ul className="list-unstyled">
                  {contentList[activeSection]?.points.map((pt, idx) => (
                    <li
                      key={idx}
                      className="d-flex align-items-start justify-content-start mb-2"
                    >
                      <span className={styles.stars}>
                        <FaStar size={13} style={{ marginTop: "-11px" }} />
                      </span>
                      <span className={styles.keyfeaturepoints}>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-4">
                <h4 className={styles.Keyfeatures}>Technologies:</h4>
                <div className={`d-flex flex-wrap gap-2 `}>
                  {contentList[activeSection]?.tech.map((tech, index) => (
                    <span
                      className={styles.tech}
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "4px",
                      }}
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
      )}
    </>
  );
};
export default WorkingScrollSync;
