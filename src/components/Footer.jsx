import React from "react";
import content from "../data/content.json";

const Footer = () => {
  const { sections, copyright, styles } = content.footer;

  return (
    <footer className={styles.container}>
      <div className={styles.grid}>
        {sections.map((section, index) => (
          <div className={styles.section} key={index}>
            <h3 className={styles.title}>{section.title}</h3>
            <ul className={styles.list}>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.href} className={styles.link}>
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={styles.copyrightContainer}>
        <h5 className={copyright.style}>{copyright.text}</h5>
      </div>
    </footer>
  );
};

export default Footer;
