import { VIDEO_URL } from "@/constants";

export const Video = () => {
  return (
    <iframe
      className="w-full rounded-3xl"
      src={VIDEO_URL}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
    ></iframe>
  );
};
