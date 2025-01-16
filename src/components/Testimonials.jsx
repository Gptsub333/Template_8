import React from "react";
import content from "../data/content.json";

const Testimonials = () => {
  const { heading, testimonials, styles } = content.testimonials;

  return (
    <div className={styles.container} id="Testimonials">
      <h2 className={heading.style}>{heading.text}</h2>
      <div className={styles.testimonialContainer}>
        {testimonials.map((testimonial, index) => (
          <div className={styles.testimonialItem} key={index}>
            <div className={styles.card}>
              <p className={styles.text}>{testimonial.text}</p>
              <div className={styles.profileContainer}>
                <img
                  className={styles.profileImage}
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h6 className={styles.userName}>{testimonial.user}</h6>
                  <span className={styles.companyName}>
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
