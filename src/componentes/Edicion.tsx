import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';


interface VideoData {
    id?: string;
    title: string;
    categoria: string;
    videoUrl: string;
    descripcion: string;
}

interface EdicionProps {
    abrir: boolean;
    cerrar: () => void;
    videoData?: VideoData;
    guardar: (data: VideoData) => void;
}

const Edicion: React.FC<EdicionProps> = ({ abrir, cerrar, videoData, guardar }) => {
    const [datosFormulario, setDatosFormulario] = useState<VideoData>({
        id: '',
        title: '',
        categoria: 'frontend',
        videoUrl: '',
        descripcion: '',
});

    useEffect(() => {
    if (videoData) {
        setDatosFormulario(videoData);
    } else {
        setDatosFormulario({ title: '', categoria: 'frontend', videoUrl: '', descripcion: '' });
    }
}, 
    [videoData]);

    const cambio = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
            const { name, value } = e.target;
            setDatosFormulario((prev) => ({ ...prev, [name]: value }));
        };

const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    guardar(datosFormulario);
};

if (!abrir) return null;

return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center bg-black bg-opacity-50">
        <div 
            className="bg-gray-900 p-6 rounded shadow-lg w-96 border-indigo-500 border-2">
        <div 
            className="flex justify-between items-center mb-6 text-blue-300">
            <h2 
                className="uppercase text-xl font-bold text-blue-400">
                {datosFormulario.id ? 'Editar Video' : 'Agregar Video'}
            </h2>
            <button onClick={cerrar} className="p-2 hover:bg-gray-300 rounded-full transition-colors">
                <X className="h-6 w-6" />
            </button>
        </div>

        <form onSubmit={submit}>
            <div className="mb-4 ">
                <label className="block text-gray-400">Título</label>
                <input
                    name="title"
                    value={datosFormulario.title}
                    onChange={cambio}
                    className="w-full  bg-transparent text-indigo-200 border-2 border-blue-400 px-2 py-1 rounded"
                    required
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-300">Categoría</label>
                <select
                    name="categoria"
                    value={datosFormulario.categoria}
                    onChange={cambio}
                    className="w-full  bg-transparent text-indigo-200 border-2 border-blue-400 px-2 py-1 rounded"
                    >
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                    <option value="innovation">Innovación y Gestión</option>
                </select>
            </div>

        <div className="mb-4">
            <label className="block text-gray-300">URL del Video</label>
            <input
                name="videoUrl"
                value={datosFormulario.videoUrl}
                onChange={cambio}
                className="w-full bg-transparent text-indigo-200 border-2 border-blue-400 px-2 py-1 rounded"
                required
            />
        </div>

        <div className="mb-4">
            <label className="block text-gray-300">Descripción</label>
            <textarea
                name="descripcion"
                value={datosFormulario.descripcion}
                onChange={cambio}
                rows={3}
                className="w-full bg-transparent text-indigo-200 border-2 border-blue-400 px-2 py-1 rounded"
                required
            />
        </div>

        <div className="flex justify-end">
            <button
                type="button"
                onClick={cerrar}
                className="uppercase bg-gray-500 text-white px-3 py-1 rounded mr-2"
            >
            Cancelar
            </button>

            <button type="submit" className="uppercase bg-blue-500 text-white px-3 py-1 rounded">
            Guardar
            </button>
        </div>
        </form>
        </div>
    </div>
);
};

export default Edicion;
