import React, { useState } from 'react';
import Banner from '../componentes/Banner';
import SeccionCategoria from '../componentes/SecccionCategoria';
import Edicion from '../componentes/Edicion'
import { Colores } from '../../styles/colores';


const videosiniciales = {
    frontend: [
    {
      id: '1',
      title: 'Cuándo usar let, var y const?',
      categoria: 'frontend',
      videoUrl: 'https://www.youtube.com/watch?v=PztCEdIJITY&t=406s',
      descripcion: '¿A veces cuando estás programando sientes dificuldades en saber en qué momento utilizar let, var o const para declarar una variable? En este video te sacamos estas dudas, además de explicarte lo que es escopo global y local en JavaScript.',
    },
    {
      id: '2',
      title: '¿Qué es JavaScript?',
      categoria: 'frontend',
      videoUrl: 'https://www.youtube.com/watch?v=GJfOSoaXk4s&t=119s',
      descripcion: 'JavaScript: ¿qué es y cómo se hizo este lenguaje que genera muchas discusiones y debates entre la gente del área de desarrollo? Genesys y Gabriela nos hablan exactamente de esto en este Alura Tips.',
    },
  {
      id: '3',
      title: 'Equipo Frontend',
      categoria: 'frontend',
      videoUrl: 'https://www.youtube.com/watch?v=rpvrLaBQwgg',
      descripcion: '¿Estás empezando tus estudios de Programación? ¿Te interesa todo lo que es la creación de Páginas Web Desarrollo de Softwares? ¿O estás pensando en cambiar de carrera y entrar a la maravillosa area de tecnología?',
    },
  ],
  backend: [
    {
      id: '4',
      title: 'Spring Frameworkt',
      categoria: 'backend',
      videoUrl: 'https://www.youtube.com/watch?v=t-iqt1b2qqk&t=1s&pp=ygUWc3ByaW5nIGZyYW1ld29yayBhbHVyYQ%3D%3D',
      descripcion: '¿Busca un framework  para utilizar en sus proyectos? ¿Conoce Spring Framework? ',
    },
    {
      id: '5',
      title: '¿QUÉ ES EL SQL Y NOSQL',
      categoria: 'backend',
      videoUrl: 'https://www.youtube.com/watch?v=cLLKVd5CNLc&pp=ygUScXVlcyBlc2wgc3FsIGFsdXJh',
      descripcion: '¿Cuáles son las diferencias entre una estructura de datos relacional (SQL) y una no relacional (NoSQL) y ',
    },
{
      id: '6',
      title: 'Simplificando tu código en Java: Conoce los enum',
      categoria: 'backend',
      videoUrl: 'https://www.youtube.com/watch?v=EoPvlE85XAQ&pp=ygUqU0lNUExJRklDQU5ETyBUVSBDT0RJR08gRU4gQVZBIEFMVVJBIExBVEFN',
      descripcion: '¿Escribir muchas variables del tipo constantes en Java te parece un proceso tedioso y que genera muchas líneas de código?  ',
    },
  ],
  innovacion: [
      {
      id: '7',
      title: '¿QUÉ SON LAS SOFTSKILLS',
      categoria: 'innovacion',
      videoUrl: 'https://www.youtube.com/watch?v=vhwspfvI52k&t=279s&pp=ygUXcXVlIHNvbiBsYXMgc29mdCBza2lsbHM%3D',
      descripcion: '¿Qué son las Softskills y por qué es tan importante desarrollarlas para posicionarse en el mercado laboral? En este video de Alura Tips, Pri Stuani nos habla de las habilidades más buscadas por las empresas en sus profesionales y cómo las Soft Skills te ayudan en el día a día.',
    },
    {
      id: '8',
      title: 'LAS 7 SOFTSKILLS MÁS DESEADAS',
      categoria: 'innovacion',
      videoUrl: 'https://www.youtube.com/watch?v=YhR7Zp8NUzE&pp=ygUjcXVlIHNvbiBsYXMgc29mdCBza2lsbHMgTEFTIDcgQUxVUkE%3D',
      descripcion: 'Seguro que ya escuchaste hablar sobre las Soft Skills, pero ¿sabes cuáles son las 7 más buscadas por las empresas? ',
    },
    {
      id: '9',
      title: 'LAS 7 SOFTSKILLS MÁS DESEADAS',
      categoria: 'innovacion',
      videoUrl: 'https://www.youtube.com/watch?v=6N3OkLCfK-0&pp=ygUfTUVUT0RPTE9HSUFTIEFHVUlMRVMgQUxJVVJBIExBTg%3D%3',
      descripcion: 'En este video nuestra invitada, Andyara, nos explicará que són las muy conocidas hoy en día metodologias ágiles',
    },
  ],
};

export default function PaguinaPrincip() {
  const [videos, setVideos] = useState(videosiniciales);
  const [editandoVideo, seteditandoVideo] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const manejoEditarVideo = (id: string) => {
    const video = Object.values(videos)
      .flat()
      .find((v) => v.id === id);
    seteditandoVideo(video);
    setIsModalOpen(true);
  };

  const manejoEliminarVideo = (id: string) => {
    const actualizacionVideo = Object.fromEntries(
      Object.entries(videos).map(([categoria, categoriaVideos]) => [
        categoria,
        categoriaVideos.filter(video => video.id !== id)
      ])
    );
    setVideos(actualizacionVideo);
  };

  const handleSaveVideo = (data: any) => {
    const actualizacionVideo = { ...videos };

    
    if (editandoVideo) {
      actualizacionVideo[editandoVideo.categoria] = actualizacionVideo[editandoVideo.categoria].filter(
        (video: any) => video.id !== editandoVideo.id
      );
    }

    if (!actualizacionVideo[data.categoria]) {
      actualizacionVideo[data.categoria] = [];
    }
    actualizacionVideo[data.categoria].push(data);

    setVideos(actualizacionVideo);
    setIsModalOpen(false);
    seteditandoVideo(null);
  };

  return (
    <div>
      <Banner />
      {Object.entries(videos).map(([categoria, categoriaVideos]) => (
        <div key={categoria} className="uppercase max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SeccionCategoria
            title={categoria.charAt(0).toUpperCase() + categoria.slice(1)}
            color={Colores[categoria.toUpperCase() as keyof typeof Colores]}
            videos={categoriaVideos as []}
            onEditVideo={manejoEditarVideo}
            onDeleteVideo={manejoEliminarVideo}
            categoria={categoria}
          />
        </div>
      ))}

      <Edicion
        abrir={isModalOpen}
        cerrar={() => setIsModalOpen(false)}
        videoData={editandoVideo}
        guardar={handleSaveVideo}
      />
    </div>
  );
}
