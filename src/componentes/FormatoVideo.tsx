interface formatoVideoProps {
    onSubmit: (data: any) => void;
    datosIniciales: any;
    envioLabel: string;
    
}

export default function FormatoVideo({ datosIniciales, onSubmit, envioLabel = "Save" }: formatoVideoProps): JSX.Element {
    return (
        <form onSubmit={onSubmit} className="space-y-6">
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-200">
                    Titulo
                </label>

                <input
                    type="text"
                    id="title"
                    name="title"
                    defaultValue={datosIniciales.title}
                    className="mt-1 text-gray-900 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>

            <div>
                <label htmlFor="categoria" className="block text-sm font-medium text-gray-200">
                    Categoria
                </label>

                <select
                    id="categoria"
                    name="categoria"
                    defaultValue={datosIniciales.categoria}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                    <option value="frontend">Frontend</option>
                    <option value="backend">Backend</option>
                    <option value="innovacion">Innovation & Management</option>
                </select>
            </div>

            <div>
                <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-200">
                    Image URL
                </label>

                <input
                    type="url"
                    id="imageUrl"
                    name="imageUrl"
                    defaultValue={datosIniciales.imageUrl}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>

            <div>
                <label htmlFor="videoUrl" className="block text-sm font-medium text-gray-200">
                    Video URL
                </label>

                <input
                    type="url"
                    id="videoUrl"
                    name="videoUrl"
                    defaultValue={datosIniciales.videoUrl}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>

            <div>
                <label htmlFor="descripcion" className="block text-sm font-medium text-gray-200">
                    descripcion
                </label>

                <textarea
                    id="descripcion"
                    name="descripcion"
                    rows={4}
                    defaultValue={datosIniciales.descripcion}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>

            <div className=" flex justify-end space-x-4">
                <button
                    type="reset"
                    className="text-white px-4 py-2 border border-gray-300 rounded-md text-gray-200 hover:bg-gray-50">
                        Limpiar 
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                    {envioLabel}
                </button>
            </div>
        </form>
    );
}

