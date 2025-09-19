import { useEffect, useRef } from "react";

const videos = [
  {
    title: "Accern. Rhea",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit inventore enim, quos, qui est id, architecto libero in esse vel officiis repellat alias maxime minima.",
    imgSrc: "https://assets-global.website-files.com/64a5e6675a4159253d0ee3e0/65a93ac90b586168e5917ac8_Rhea%20-%20cover_horizontal_low.webp",
    videoSrc: "./src/assets/accern-rhea-cover-big.mp4",
  },
  {
    title: "AfroTech",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit inventore enim, quos, qui est id, architecto libero in esse vel officiis repellat alias maxime minima.",
    imgSrc: "https://assets-global.website-files.com/64a5e6675a4159253d0ee3e0/65cb66041ce86ac3784aaba1_Afrotech%20-%20cover_horizontal.webp",
    videoSrc: "./src/assets/afrotech-cover-big.mp4",
  },
];

const Page4 = () => {
  const videoRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach((ref) => {
      const container = ref?.parentElement;

      if (!container) return;

      const handleMouseEnter = () => {
        ref.style.opacity = 1;
        ref.play().catch((err) => console.warn("Video play failed", err));
      };

      const handleMouseLeave = () => {
        ref.style.opacity = 0;
        ref.pause();
        ref.currentTime = 0;
      };

      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  return (
    <div id="page4">
      {videos.map((item, index) => (
        <div className="section" key={index}>
          <div className="sec-left">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </div>
          <div className="sec-right">
            <img src={item.imgSrc} alt="" />
            <video
              muted
              preload="none"
              style={{ opacity: 0, transition: "opacity 0.5s ease" }}
              ref={(el) => (videoRefs.current[index] = el)}
              src={item.videoSrc}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page4;
