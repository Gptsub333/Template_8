import content from "../data/content.json";

const Hero = () => {
  const { heading, description, buttons, videos, styles } = content.hero;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        {heading.mainText}
        <span className={heading.highlightedStyle}>
          {" "}
          {heading.highlightedText}
        </span>
      </h1>
      <p className={styles.description}>{description}</p>
      <div className={styles.buttonContainer}>
        <a
          href={buttons.startForFree.href}
          className={buttons.startForFree.style}
        >
          {buttons.startForFree.label}
        </a>
        <a
          href={buttons.documentation.href}
          className={buttons.documentation.style}
        >
          {buttons.documentation.label}
        </a>
      </div>
      <div className={styles.videoContainer}>
        {videos.map((video, index) => (
          <video key={index} autoPlay loop muted className={video.style}>
            <source src={video.src} type={video.type} />
            Your Browser doesn't support the video tag.
          </video>
        ))}
      </div>
    </div>
  );
};

export default Hero;
