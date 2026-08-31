import { useState } from "react";
import { Play } from "lucide-react";

export default function CinematicVideoCard({
  poster,
  posterAlt,
  src,
  title,
  text,
  credit,
  eager = false,
  size = "feature",
  className = "",
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure className={`cinematic-video-card cinematic-video-card--${size} ${className}`.trim()}>
      {playing ? (
        <video
          className="cinematic-video-card__video"
          src={src}
          controls
          autoPlay
          playsInline
          preload="metadata"
          aria-label={title}
        />
      ) : (
        <>
          <img
            className="cinematic-video-card__poster"
            src={poster}
            alt={posterAlt}
            loading={eager ? "eager" : "lazy"}
          />
          <div className="cinematic-video-card__shade" aria-hidden="true" />
          <div className="cinematic-video-card__copy">
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
          <button
            className="cinematic-video-card__play"
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${title}`}
          >
            <Play size={22} fill="currentColor" strokeWidth={0} />
          </button>
        </>
      )}
      {credit && <figcaption className="cinematic-video-card__credit">{credit}</figcaption>}
    </figure>
  );
}
