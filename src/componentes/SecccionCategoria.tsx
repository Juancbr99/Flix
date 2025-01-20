import React from 'react';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import VideoCard from './VideoCard';

interface Video {
    id: string;
    title: string;
    videoUrl: string;
    descripcion: string;
}

interface SeccionCategoriaProps {
    title: string;
    color: string;
    videos: Video[];
    onEditVideo: (id: string) => void;
    onDeleteVideo: (id: string) => void;
    categoria: 'frontend' | 'backend' | 'innovacion';
}

export default function SeccionCategoria({
    title,
    color,
    videos,
    onEditVideo,
    onDeleteVideo,
    categoria,

}: SeccionCategoriaProps) {
    React.useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});

    return () => {Fancybox.destroy();};
}, 
[]);

    return (
        <div className={`py-8 ${categoria}-section bg-gray-900`}>
            <h2
                className="text-2xl font-bold mb-6 px-4"
                style={{ color: color }}>
                {title}
        </h2>
        <div className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
            <div key={video.id}>
                <VideoCard 
                    {...video}
                    categoryColor={color}
                    edicion={() => onEditVideo(video.id)}
                    borrar={() => onDeleteVideo(video.id)}
                />
            </div>
        ))}
        </div>
        </div>
    );
}