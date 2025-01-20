import React from 'react';
import { Play } from 'lucide-react';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

interface PreviewProps {
    videoUrl: string;
}

export default function Preview({ videoUrl }: PreviewProps) {
React.useEffect(() => {
    Fancybox.bind("[data-fancybox='preview']", {});

    return () => {Fancybox.destroy();};
}, []);

const embedUrl = (url: string) => {
    const videoId = url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&\?]*)/)?.[1];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
};

const miniaturaUrl = `https://img.youtube.com/vi/${videoUrl.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&\?]*)/)?.[1]}/maxresdefault.jpg`;

return (
    <div className="relative aspect-video rounded-lg overflow-hidden mb-4">
        <a
        href={embedUrl(videoUrl)}
        data-fancybox="preview"
        data-type="iframe"
        className="block relative"
        >
        <img 
            src={miniaturaUrl}
            alt="Video preview"
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
            <Play className="w-16 h-16 text-white" />
        </div>
        </a>
    </div>
);
}