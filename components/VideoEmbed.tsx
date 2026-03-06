type VideoEmbedProps = {
  /** YouTube video ID (e.g. JEYHDhIbAbM) or playlist ID (e.g. PLlDPI5u17W3nlFHKN_HE6jxaYT4MPYKZe) */
  videoId?: string;
  playlistId?: string;
  label?: string;
  /** If true, render iframe embed; otherwise render link */
  embed?: boolean;
  className?: string;
};

function getEmbedUrl(videoId?: string, playlistId?: string): string {
  if (playlistId) {
    return `https://www.youtube.com/embed/videoseries?list=${playlistId}`;
  }
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}`;
  }
  return "";
}

function getWatchUrl(videoId?: string, playlistId?: string): string {
  if (playlistId) {
    return `https://www.youtube.com/playlist?list=${playlistId}`;
  }
  if (videoId) {
    return `https://www.youtube.com/watch?v=${videoId}`;
  }
  return "#";
}

export function VideoEmbed({
  videoId,
  playlistId,
  label,
  embed = false,
  className = "",
}: VideoEmbedProps) {
  const embedUrl = getEmbedUrl(videoId, playlistId);
  const watchUrl = getWatchUrl(videoId, playlistId);

  if (!videoId && !playlistId) return null;

  if (embed && embedUrl) {
    return (
      <div className={`aspect-video rounded overflow-hidden ${className}`}>
        <iframe
          className="w-full h-full"
          src={embedUrl}
          title={label ?? "YouTube"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <a
      href={watchUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block px-4 py-2 bg-festivalAccent hover:bg-festivalAccent/90 text-festivalWhite font-medium rounded uppercase text-sm transition-colors ${className}`}
    >
      {label ?? (playlistId ? "Playlist" : "Video")}
    </a>
  );
}
