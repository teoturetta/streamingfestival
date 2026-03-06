import Image from "next/image";
import { VideoEmbed } from "./VideoEmbed";

const galleryImages = [
  "99253553_10158679197729239_485584471295262720_o.jpg",
  "DSC5744-scaled-q7uvrukpfkh2q6sz5lsmqx0w14dm5oe3yzprftpl92.jpg",
  "tommy_capesaro_09-scaled-q7uvs7qg38yu19gxkj2svmku6a9v2sgbiqdj8v8c9g.jpg",
  "PHOTO-2020-07-16-21-15-19-q7uvs8oaa30dkc8hv9w1abgsxwg4d4y30xi1mz4onq.jpg",
  "106088940_10158788919799239_7049104891782041014_o.jpg",
  "concerto_teolo_01-scaled-q7uvs9m4gx1eohe79jw20m3rd20li6ns6zoi7f5jx0.jpg",
];

const YOUTUBE_PLAYLIST_ID = "PLlDPI5u17W3nlFHKN_HE6jxaYT4MPYKZe";
const YOUTUBE_VIDEO_ID = "JEYHDhIbAbM";

export function GallerySection() {
  return (
    <section id="gallery" className="py-20 px-4 bg-festivalGray text-festivalWhite">
      <div className="container mx-auto">
        <h2 className="font-heading text-2xl font-bold text-center mb-12">Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {galleryImages.map((name) => (
            <div key={name} className="relative aspect-[4/3] rounded overflow-hidden">
              <Image
                src={`/images/gallery/${name}`}
                alt="Streaming Festival"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
        <div className="max-w-4xl mx-auto">
          <h3 className="font-heading text-lg font-medium text-center mb-4">Video YouTube (ordinati per progetto)</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <VideoEmbed playlistId={YOUTUBE_PLAYLIST_ID} label="Playlist Streaming Festival" />
            <VideoEmbed videoId={YOUTUBE_VIDEO_ID} label="Video in evidenza" />
          </div>
        </div>
      </div>
    </section>
  );
}
