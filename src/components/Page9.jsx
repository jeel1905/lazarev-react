import React, { useRef } from "react";

const videoData = [
  {
    id: 1,
    number: "/ 01",
    head: "$500M+",
    text: "in Funding Secured <br /> For Our Clients",
    video: "./src/assets/money-hevc-safari.mp4",
  },
  {
    id: 2,
    number: "/ 02",
    head: "120+",
    text: "Awards backing <br /> our excellence",
    video: "src/assets/awards-hevc-safari.mp4",
  },
  {
    id: 3,
    number: "/ 03",
    head: "2015",
    text: "Founded, 9 years <br /> of experience",
    video: "src/assets/SF-hevc-safari.mp4",
  },
  {
    id: 4,
    number: "/ 04",
    head: "San Fransisco",
    text: "Based in Heart of AI",
    video: null, 
    wide: true,
  },
  {
    id: 5,
    number: "/ 05",
    head: "All-in-one Solution",
    text: "From user-research to scalable design systems <br /> we’ve got you covered",
    video: null,
    wide: true,
  },
];

const VideoBox = ({ number, head, text, video, wide }) => {
  const videoRef = useRef(null);

  // Restart video on hover (only if video exists)
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  return (
    <div
      className={`video-box ${wide ? "wide" : ""}`}
      onMouseEnter={handleMouseEnter}
    >
      {video && (
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          playsInline
          webkit-playsinline="true"
          preload="metadata"
          disablePictureInPicture
        />
      )}
      <div className="text">
        <div className="text-number">{number}</div>
        <div className="head-text">
          <h1 dangerouslySetInnerHTML={{ __html: head }} />
        </div>
        <div
          className="data-text"
          dangerouslySetInnerHTML={{ __html: `<h4>${text}</h4>` }}
        />
      </div>
    </div>
  );
};

const Page9 = () => {
  return (
    <div id="page9">
      <div className="container">
        {videoData.map((item) => (
          <VideoBox key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Page9;
