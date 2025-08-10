"use client";
import { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./RightSide.module.css";
import Slider from "react-slick";
import { BsFillSendFill } from "react-icons/bs";
import emailjs from "emailjs-com";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WorkingScrollSync from "./WorkingScrollSync";

const tabs = ["About", "Resume", "Projects", "Contact"];

export default function RightSide() {
  const scrollRef = useRef(null);
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    swipeToSlide: true,
    touchMove: true,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const [mapLoaded, setMapLoaded] = useState(false);

  const skills = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      alt: "html",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      alt: "css",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      alt: "js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      alt: "react js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      alt: "next js",
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      alt: "GitHub",
      className: styles.skillIcong,
    },
    { src: "https://api.iconify.design/logos/figma.svg", alt: "figma" },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
      alt: "bootstarp",
      className: styles.skillIcong,
    },
    {
      src: "https://api.iconify.design/logos/visual-studio-code.svg",
      alt: "vs code",
    },
  ];

  const handleWheelScroll = (e) => {
    if (scrollRef.current) {
      e.preventDefault();
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(form.current);

    emailjs
      .send(
        "service_daefu7j",
        "template_a4v0xd5",
        {
          from_name: formData.get("from_name"),
          from_email: formData.get("from_email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
          time: new Date().toLocaleString(),
        },
        "CXGPheonVdiF0mT7p"
      )
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
          form.current.reset();
        },
        (error) => {
          console.error("Error:", error);
          toast.error("Failed to send message. Please try again later.", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  const [activeTab, setActiveTab] = useState("About");

  const renderContent = () => {
    switch (activeTab) {
      case "About":
        return (
          <>
            <p className={styles.description}>
              I'm a Frontend Developer with 1 year of experience crafting
              responsive, interactive, and modern web interfaces. Skilled in
              HTML, CSS, JavaScript, and React.js, with a focus on clean code
              and seamless user experiences. Currently diving deeper into
              Next.js to expand my full-stack capabilities.
            </p>

            <p className={styles.description}>
              If you're seeking a skilled Frontend developer to breathe life
              into your project and exceed your expectations, I am here to
              collaborate and create magic together. Reach out, and let's
              transform your vision into a reality!
            </p>

            <h3 className={styles.subHeading}>What I'm Doing</h3>
            <div className={styles.cardsWrapper}>
              <div className={styles.serviceItem}>
                <div className={styles.serviceIcon}>🧩</div>
                <div>
                  <h4 className={styles.serviceHead}> UI Implementation</h4>
                  <p className={styles.ServiceDes}>
                    Translating designs into pixel-perfect, interactive UIs with
                    React, ensuring responsiveness and accessibility.
                  </p>
                </div>
              </div>

              <div className={styles.serviceItem}>
                <div className={styles.serviceIcon}>🛠</div>
                <div>
                  <h4 className={styles.serviceHead}>
                    {" "}
                    Component-Based Architecture
                  </h4>
                  <p className={styles.ServiceDes}>
                    Building modular, reusable components using React.js for
                    clean and maintainable frontend codebases.
                  </p>
                </div>
              </div>

              <div className={styles.serviceItem}>
                <div className={styles.serviceIcon}>📚</div>
                <div>
                  <h4 className={styles.serviceHead}> Learning Next.js</h4>
                  <p className={styles.ServiceDes}>
                    Exploring full-stack capabilities, server-side rendering,
                    and dynamic routing to level up development workflows.
                  </p>
                </div>
              </div>

              <div className={styles.serviceItem}>
                <div className={styles.serviceIcon}>📈</div>
                <div>
                  <h4 className={styles.serviceHead}> Performance Tuning</h4>
                  <p className={styles.ServiceDes}>
                    Optimizing load times, minimizing re-renders, and improving
                    frontend performance for seamless user experience.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className={styles.subHeading}>Skills</h3>
              <div
                className={styles.scrollWrapper}
                onWheel={handleWheelScroll}
                ref={scrollRef}
              >
                <Slider {...settings} className={styles.slider}>
                  {skills.map((skill, index) => (
                    <div key={index} className={styles.slide}>
                      <div className={styles.image}>
                        <img
                          src={skill.src}
                          alt={skill.alt}
                          className={skill.className}
                        />
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </>
        );
      case "Resume":
        return (
          <>
            <section className={styles.educationSection}>
              <h2
                className={`${styles.heading} mt-0 d-flex justify-content-start align-items-center gap-2`}
                style={{ marginLeft: "-19px" }}
              >
                <button
                  type="button"
                  className={`${styles.button} w-auto`}
                  style={{ padding: "8px 10px" }}
                >
                  <IoBookOutline className={styles.icon} />
                </button>
                Education
              </h2>

              <div className={styles.timeline}>
                <div className={styles.entry}>
                  <span className={styles.circle}></span>
                  <div className={styles.content}>
                    <h3 className={styles.institution}>
                      St. Wilfred College for Girls, Jaipur
                    </h3>
                    <p className={styles.degree}>
                      Bachelor of Computer Applications (BCA)
                    </p>
                    {/* <p className={styles.degree}>CGPA: 8.42</p> */}
                    <span className={styles.date}>2021 — 2024</span>
                  </div>
                </div>
                <div className={styles.entry}>
                  <span className={styles.circle}></span>
                  <div className={styles.content}>
                    <h3 className={styles.institution}>
                      Guru Siddharath International School, Beawer
                    </h3>
                    <p className={styles.degree}>+2 Commerce</p>
                    {/* <p className={styles.degree}>CGPA: 9.68</p> */}
                    <span className={styles.date}>2019 — 2021</span>
                  </div>
                </div>
              </div>
            </section>

            <section className={`${styles.educationSection} mt-0 pt-0`}>
              <h2
                className={`${styles.heading} mt-0 d-flex justify-content-start align-items-center gap-2`}
                style={{ marginLeft: "-19px" }}
              >
                <button
                  type="button"
                  className={`${styles.button} w-auto`}
                  style={{ padding: "8px 10px" }}
                >
                  <IoBookOutline className={styles.icon} />
                </button>
                Experience
              </h2>

              <div className={styles.timeline}>
                <div className={styles.entry}>
                  <span className={styles.circle}></span>
                  <div className={styles.content}>
                    <h3 className={styles.institution}>Frontend Developer</h3>
                    <p className={styles.degree}>
                      Tech Binary (part of Blueberry Group)
                    </p>
                    <span className={styles.date}>Oct 2024 – Present</span>
                    <p className={styles.degree}>Jaipur, Rajasthan</p>
                    <ul className={styles.customList}>
                      <li>
                        Developed responsive and user-friendly web interfaces
                        using <strong>HTML5</strong>, <strong>CSS3</strong>,{" "}
                        <strong>JavaScript</strong>, and{" "}
                        <strong>React.js</strong>, while also learning{" "}
                        <strong>Next.js</strong> for building performant web
                        apps.
                      </li>
                      <li>
                        Collaborated with UI/UX designers to convert Figma
                        designs into functional code with pixel-perfect
                        precision.
                      </li>
                      <li>
                        Implemented reusable components and state management
                        using <strong>React Hooks</strong> and{" "}
                        <strong>Context API</strong>.
                      </li>
                      <li>
                        Optimized application performance and improved load
                        times using lazy loading and code splitting techniques.
                      </li>
                      <li>
                        Integrated RESTful APIs for dynamic data rendering and
                        created modular components for scalability.
                      </li>
                      <li>
                        Utilized <strong>Git</strong> and{" "}
                        <strong>GitHub</strong> for version control and agile
                        collaboration with team members.
                      </li>
                      <li>
                        Worked with <strong>Bootstrap 5</strong> and custom CSS
                        to maintain consistent design systems across projects.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className={styles.entry}>
                  <span className={styles.circle}></span>
                  <div className={styles.content}>
                    <h3 className={styles.institution}>
                      Frontend Developer Intern
                    </h3>
                    <p className={styles.degree}>
                      Tech Binary (part of Blueberry Group)
                    </p>
                    <span className={styles.date}>Jul 2024 - Sep 2024</span>
                    <p className={styles.degree}>Jaipur, Rajasthan</p>
                    <ul className={styles.customList}>
                      <li>
                        Strengthened core skills in HTML, CSS, and JavaScript
                        through real-world project development.
                      </li>
                      <li>
                        Started learning React.js and contributed to building
                        dynamic components under mentorship.
                      </li>
                      <li>
                        Translated Figma designs into responsive, accessible,
                        and pixel-perfect UIs.
                      </li>
                      <li>
                        Implemented SEO best practices for better visibility and
                        organic reach.
                      </li>
                      <li>
                        Optimized website performance, reducing load times and
                        improving user experience.
                      </li>
                      <li>
                        Gained hands-on experience in debugging, cross-browser
                        compatibility, and clean code practices.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <div className="d-flex justify-content-end">
              <a href="/PalakCV.pdf" download className="text-decoration-none">
                <button type="button" className={styles.button}>
                  <IoDocumentTextOutline />
                  &nbsp;Download CV
                </button>
              </a>
            </div>
          </>
        );
      case "Projects":
        return (
          <>
            <WorkingScrollSync />
          </>
        );
      case "Contact":
        return (
          <>
            <div>
              <div style={{ borderRadius: "12px", overflow: "hidden" }}>
                <div style={{ position: "relative", minHeight: "450px" }} className={styles.mapContainer}>
                  {!mapLoaded && (
                    <div
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "#f0f0f0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      
                    >
                      <span>Loading Map...</span>
                    </div>
                  )}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.013123456789!2d75.756123!3d27.021512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db57bace8f015%3A0xaabbccddeeff0011!2sAlaknanda%20Apartments%2C%20Sector%209%2C%20Pratap%20Nagar%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v0000000000000!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <h2 className={`${styles.heading} ${styles.contacthead}`}>Contact Form</h2>
              <form ref={form} onSubmit={sendEmail} className={styles.form}>
                <div className={styles.row}>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Full name"
                    className={styles.input}
                    required
                  />
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Email address"
                    className={styles.input}
                    required
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className={styles.inputFull}
                  required
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  className={styles.textarea}
                  rows={5}
                  required
                ></textarea>
                <div className="d-flex justify-content-end">
                  <button
                    type="submit"
                    className={`${styles.button}  ${styles.sendbtn}`}
                    disabled={loading}
                    style={{ minWidth: "200px", maxWidth: "200px" }}
                  >
                    {loading ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        <BsFillSendFill />
                        &nbsp;Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
              <ToastContainer />
            </div>
          </>
        );
      default:
        return <p className={styles.description}>Coming soon...</p>;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <h2 className={styles.pageTitle}>{activeTab}</h2>
        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`${styles.tabButton} ${
                activeTab === tab ? styles.active : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.contentBox}>{renderContent()}</div>
    </div>
  );
}
