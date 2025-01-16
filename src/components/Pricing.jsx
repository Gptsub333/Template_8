import { CheckCircle2 } from "lucide-react";
import content from "../data/content.json";

const Pricing = () => {
  const { heading, pricingOptions, styles } = content.pricing;

  return (
    <div className={styles.container} id="Pricing">
      <h2 className={heading.style}>{heading.text}</h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((item, index) => (
          <div className={styles.pricingOptionContainer} key={index}>
            <div className={styles.card}>
              <p className={styles.title}>
                {item.title}
                {item.title === "Developer" && (
                  <span className={styles.mostPopularStyle}>
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className={styles.priceInfo}>
                <span className={styles.price}>{item.price}</span>
                <span className={styles.priceLabel}>/month</span>
              </p>
              <ul>
                {item.features.map((feature, featureIndex) => (
                  <li className={styles.featureList} key={featureIndex}>
                    <CheckCircle2 />
                    <span className={styles.featureIcon}>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className={styles.subscribeButton}>
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
