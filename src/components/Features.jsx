import content from "../data/content.json";
import {
  BotMessageSquare,
  Fingerprint,
  ShieldHalf,
  BatteryCharging,
  PlugZap,
  GlobeLock,
} from "lucide-react";

const Features = () => {
  const { sectionTitle, heading, featureItems, styles } = content.features;

  // Map icons to their respective components
  const iconComponents = {
    BotMessageSquare,
    Fingerprint,
    ShieldHalf,
    BatteryCharging,
    PlugZap,
    GlobeLock,
  };

  return (
    <div className={styles.container} id="Features">
      <div className="text-center">
        <span className={sectionTitle.style}>{sectionTitle.label}</span>
        <h2 className={heading.style}>
          {heading.mainText}
          <span className={heading.highlightedStyle}>
            {" "}
            {heading.highlightedText}
          </span>
        </h2>
      </div>
      <div className={styles.featureContainer}>
        {featureItems.map((item, index) => {
          const IconComponent = iconComponents[item.icon];
          return (
            <div className={styles.featureItem} key={index}>
              <div className="flex">
                <div className={styles.iconContainer}>
                  <IconComponent className={styles.icon} />
                </div>
                <div>
                  <h5 className={styles.text}>{item.text}</h5>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
