import FormatoVideo from '../componentes/FormatoVideo';

export default function NuevoVideo() {
    const manejarEnvio = (data: unknown) => {
        console.log;{data}
};

return (
    <div className="max-w-3x2 bg-gray-900 mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3x1 text-white font-bold mb-8">NUEVO VIDEO</h1>
        <FormatoVideo onSubmit={manejarEnvio} envioLabel="Crear Video" />
    </div>
);
}