import { motion } from "framer-motion";

export interface VideoItem {
  title: string;
  videoId: string;
  thumbnail: string;
  publishedAt: string;
}

interface Props {
  video: VideoItem;
}

export default function VideoCard({ video }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow overflow-hidden hover:shadow-lg transition"
    >
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg line-clamp-2">{video.title}</h3>

        <p className="text-sm text-gray-500 mt-2">
          {new Date(video.publishedAt).toLocaleDateString()}
        </p>

        <a
          href={`https://www.youtube.com/watch?v=${video.videoId}`}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block text-blue-600 font-medium hover:underline"
        >
          Watch on YouTube →
        </a>
      </div>
    </motion.div>
  );
}
