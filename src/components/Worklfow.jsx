import { CheckCircle2 } from "lucide-react";
import content from "../data/content.json";

const Workflow = () => {
  const { heading, image, checklistItems, styles } = content.workflow;

  return (
    <div className={styles.container} id="Workflow">
      <h2 className={heading.style}>
        {heading.mainText}
        <span className={heading.highlightedStyle}>
          {" "}
          {heading.highlightedText}
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className={styles.imageContainer}>
          <img src={image.src} alt={image.alt} />
        </div>
        <div className={styles.checklistContainer}>
          {checklistItems.map((item, index) => (
            <div className={styles.checklistItem} key={index}>
              <div className={styles.iconContainer}>
                <CheckCircle2 className={styles.icon} />
              </div>
              <div>
                <h5 className={styles.title}>{item.title}</h5>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
