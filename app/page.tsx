"use client";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import profileImage from "@/public/profile.png";
import { experiences, projects, technologies } from "@/data/data.json";
import {
  ArrowBigDownDash,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  SquareArrowOutUpRight,
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const scrollToView = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/30 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/30 rounded-full mix-blend-screen filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      </div>
      {/* Profile info */}
      <div className="flex flex-col md:flex-row md:min-w-7xl md:max-w-7xl md:mx-auto mt-8 md:mt-0 md:justify-center gap-4 items-center min-h-screen relative">
        <div className="w-40 h-40 md:w-full md:h-full">
          <Image
            alt="Imagen de perfil"
            src={profileImage}
            className="rounded-full inset-ring shadow-xs"
          />
        </div>
        <div className="flex flex-col gap-2 md:min-w-3xl md:max-w-3xl px-4">
          <span className="text-sm md:text-md w-fit mx-auto mt-4 md:mt-0 md:mx-0 bg-background-badge border-white/40 border rounded-full p-2 shadow-lg shadow-background-badge/40">
            ✋ Disponible para proyectos
          </span>
          <div
            className="md:text-7xl text-5xl h-30 md:h-40 w-full bg-linear-to-r from-purple-500 to-pink-500 
             text-transparent bg-clip-text text-center md:text-left
              mx-auto md:mx-0"
          >
            <Typewriter
              options={{
                strings: [
                  "Desarrollador de Software",
                  "Desarrollador Frontend",
                  "Desarrollador Backend",
                  "Desarrollador Móvil",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <p className="md:text-xl md:max-w-xl text-center md:text-left">
            Desarrollo aplicaciones web y móviles modernas, escalables y de alto
            rendimiento que convierten ideas en productos digitales exitosos.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-4 md:mt-8">
            <button
              className="w-30 bg-linear-to-r from-indigo-700 to-purple-500 hover:from-indigo-900 hover:to-purple-700 p-2 rounded-md hover:cursor-pointer"
              onClick={() => scrollToView("contact")}
            >
              Contactame
            </button>
            <button
              className="w-30 border border-indigo-700 p-2 rounded-md hover:bg-background-badge hover:cursor-pointer"
              onClick={() => scrollToView("projects")}
            >
              Ver proyectos
            </button>
          </div>
          <button
            className="absolute bottom-20 md:bottom-30 right-0 left-0"
            onClick={() => scrollToView("experience")}
          >
            <ArrowBigDownDash
              size={28}
              className="text-pink-500 mx-auto animate-bounce hover:cursor-pointer"
            />
          </button>
        </div>
      </div>
      {/* Experiencia laboral */}
      <div
        id="experience"
        className="md:min-w-7xl md:max-w-7xl mx-auto flex justify-center flex-col gap-4 items-center min-h-screen"
      >
        <h2
          className="text-2xl md:text-4xl bg-linear-to-r from-purple-500 to-pink-500 
             text-transparent bg-clip-text"
        >
          Experiencia laboral
        </h2>
        <p className="text-center md:text-left mx-4 md:mx-0">
          Mi trayectoria profesional en el desarrollo de software
        </p>
        <div className="w-full mt-10 px-4">
          <ol className="relative border-s border-gray-700">
            {experiences.map((experience, index) => (
              <li className="mb-10 ms-4 flex flex-col gap-2" key={index}>
                <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-gray-900 bg-pink-500 animate-pulse ring-4 ring-purple-500/25" />
                <time className="mb-1 text-md font-normal leading-none text-gray-500">
                  {experience.startDate} - {experience.endDate}
                </time>
                <h3 className="md:text-xl font-semibold text-white">
                  {experience.title} -{" "}
                  <span
                    className="font-sans bg-linear-to-r from-purple-500 to-pink-500 
             text-transparent bg-clip-text"
                  >
                    {experience.company}
                  </span>
                </h3>
                <p className="mb-4 md:text-lg font-normal text-gray-400">
                  {experience.description}
                </p>
                <div>
                  <span>Logros:</span>
                  {experience.achievements.map((achievement, index) => (
                    <p className="mt-2 text-gray-400" key={index}>
                      ✔️ {achievement}
                    </p>
                  ))}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      {/* Proyectos destacados */}
      <div
        id="projects"
        className="md:min-w-7xl md:max-w-7xl mx-auto flex justify-center flex-col gap-4 items-center min-h-screen mt-40"
      >
        <h2
          className="text-2xl md:text-4xl bg-linear-to-r from-purple-500 to-pink-500 
             text-transparent bg-clip-text"
        >
          Proyectos destacados
        </h2>
        <p className="text-center md:text-left mx-4 md:mx-0">
          Algunos de mis proyectos más relevantes y sus resultados
        </p>
        <div className="md:grid md:grid-cols-2 w-full mt-10 flex flex-col gap-8 px-4">
          {projects.map((project, index) => (
            <div
              className="border border-purple-500 rounded-md hover:shadow-lg hover:shadow-purple-500/60 transition-shadow duration-300"
              key={index}
            >
              <Image
                alt={project.title}
                src={`/projects/${project.image}`}
                width={1000}
                height={1000}
                className="overflow-hidden object-cover"
              />
              <div className="py-4 px-6">
                <p
                  className="text-2xl bg-linear-to-r from-purple-500 to-pink-500 
             text-transparent bg-clip-text"
                >
                  {project.title}
                </p>
                <p className="mt-4 text-slate-300">{project.description}</p>
                <p
                  className="mt-4 mb-1 text-lg bg-linear-to-r from-purple-500 to-pink-500 
             text-transparent bg-clip-text"
                >
                  Logros:
                </p>
                {project.achievements.map((achievement, index) => (
                  <p key={index}>✔️ {achievement}</p>
                ))}
                <p
                  className="mt-4 text-lg bg-linear-to-r from-purple-500 to-pink-500 
             text-transparent bg-clip-text"
                >
                  Tecnologías:
                </p>
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.technologies.map((technology, index) => (
                    <span
                      key={index}
                      className="bg-linear-to-r from-indigo-700 to-purple-500 px-3 rounded-full"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                <div
                  className={`${
                    project.link || project.github ? "mt-6" : ""
                  } flex gap-4`}
                >
                  {project.link && (
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center gap-2 w-full border border-purple-500/50 py-2 rounded-lg hover:bg-purple-700/30 hover:cursor-pointer"
                    >
                      <SquareArrowOutUpRight size={18} /> Demo
                    </Link>
                  )}
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-center items-center gap-2 w-full border border-indigo-500/50 py-2 rounded-lg hover:bg-indigo-700/30 hover:cursor-pointer"
                    >
                      <Github size={18} /> Código
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Tecnologias */}
      <div className="md:min-w-7xl md:max-w-7xl mx-auto flex justify-center flex-col gap-4 items-center mt-40">
        <h2
          className="text-2xl md:text-4xl bg-linear-to-r from-purple-500 to-pink-500 
             text-transparent bg-clip-text"
        >
          Tecnologías
        </h2>
        <p className="text-center md:text-left mx-4 md:mx-0">
          Stack tecnológico y herramientas que domino
        </p>
        <div className="relative overflow-hidden w-full mt-10">
          {/* Fade lateral */}
          <div className="pointer-events-none absolute inset-y-0 left-0 md:w-40 bg-linear-to-r from-background to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 md:w-40 bg-linear-to-l from-background to-transparent z-10"></div>

          {/* Carrusel infinito verdadero */}
          <div className="marquee flex whitespace-nowrap">
            {/* Primer bloque */}
            {technologies.map((tech, i) => (
              <div key={`a1-${i}`} className="flex items-center gap-2 mx-18">
                <Image
                  alt={tech.name}
                  src={`/technologies/${tech.image}`}
                  width={40}
                  height={40}
                />
                <p className="text-3xl">{tech.name}</p>
              </div>
            ))}

            {technologies.map((tech, i) => (
              <div key={`a2-${i}`} className="flex items-center gap-2 mx-18">
                <Image
                  alt={tech.name}
                  src={`/technologies/${tech.image}`}
                  width={40}
                  height={40}
                />
                <p className="text-3xl">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden w-full mt-10">
          {/* Fade lateral */}
          <div className="pointer-events-none absolute inset-y-0 left-0 md:w-40 bg-linear-to-r from-background to-transparent z-10"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 md:w-40 bg-linear-to-l from-background to-transparent z-10"></div>

          {/* Carrusel infinito verdadero */}
          <div className="marquee-l flex whitespace-nowrap">
            {/* Primer bloque */}
            {technologies
              .slice()
              .reverse()
              .map((tech, i) => (
                <div key={`b1-${i}`} className="flex items-center gap-2 mx-18">
                  <Image
                    alt={tech.name}
                    src={`/technologies/${tech.image}`}
                    width={40}
                    height={40}
                  />
                  <p className="text-3xl">{tech.name}</p>
                </div>
              ))}

            {technologies
              .slice()
              .reverse()
              .map((tech, i) => (
                <div key={`b2-${i}`} className="flex items-center gap-2 mx-18">
                  <Image
                    alt={tech.name}
                    src={`/technologies/${tech.image}`}
                    width={40}
                    height={40}
                  />
                  <p className="text-3xl">{tech.name}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* Contacto */}
      <div className="md:min-w-7xl md:max-w-7xl mx-auto flex justify-center flex-col gap-4 items-center mt-40 mb-40">
        <h2
          className="text-2xl md:text-4xl bg-linear-to-r from-purple-500 to-pink-500 
             text-transparent bg-clip-text"
        >
          Contacto
        </h2>
        <p className="text-center md:text-left mx-4 md:mx-0">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>
        {/* Contact info */}
        <div
          id="contact"
          className="flex flex-col gap-4 border border-indigo-500/60 p-4 rounded-md bg-purple-500/10 md:min-w-xl md:max-w-xl mx-4"
        >
          <p className="text-xl">Información de Contacto</p>
          <Link
            href="mailto:yaiiir.dev@gmaail.com"
            className="flex gap-2 items-center w-fit"
          >
            <Mail size={18} className="text-purple-500" /> Correo electrónico:{" "}
            <span className="text underline decoration-purple-500 hover:decoration-purple-400">
              yaiiir.dev@gmail.com
            </span>
          </Link>
          <Link
            href="tel:+50767383079"
            className="flex gap-2 items-center w-fit"
          >
            <Phone size={18} className="text-indigo-500" /> Número de télefono:{" "}
            <span className="text underline decoration-indigo-500 hover:decoration-indigo-400">
              6738-3079
            </span>
          </Link>
          <p>
            Estoy disponible para proyectos freelance y oportunidades de empleo.
            Normalmente respondo en menos de 24 horas.
          </p>
        </div>
        {/* Social */}
        <div className="flex flex-col gap-4 border border-indigo-500/60 p-4 rounded-md bg-purple-500/10 md:min-w-xl md:max-w-xl mx-4">
          <p className="text-xl">Redes Sociales</p>
          <div className="flex gap-4 justify-center items-center mt-8 w-full">
            <Link
              href="https://github.com/dylanGonzalez09"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-linear-to-r from-indigo-700 to-purple-700 hover:shadow-lg shadow-purple-700/50 rounded-full p-4 hover:cursor-pointer"
            >
              <Github className="hover:text-pink-500" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/dylan-gonz%C3%A1lez-623706161/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-linear-to-r from-indigo-700 to-purple-700 hover:shadow-lg shadow-purple-700/50 rounded-full p-4 hover:cursor-pointer"
            >
              <Linkedin className="hover:text-pink-500" />
            </Link>
            <Link
              href="https://www.instagram.com/yaiir.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-linear-to-r from-indigo-700 to-purple-700 hover:shadow-lg shadow-purple-700/50 rounded-full p-4 hover:cursor-pointer"
            >
              <Instagram className="hover:text-pink-500" />
            </Link>{" "}
          </div>
          <p className="text-center md:text-left">
            Contáctame a través de mis redes sociales para consultas,
            colaboraciones o proyectos.
          </p>
        </div>
        {/* CV */}
        <div className="flex flex-col gap-4 border border-purple-500/60 p-4 rounded-md bg-purple-500/10 md:min-w-xl md:max-w-xl mx-4">
          <p className="text-xl text-center">¿Listo para colaborar?</p>
          <p className="text-center">
            Descarga mi CV para más detalles sobre mi experiencia
          </p>
          <Link
            href="/CV-spanish.pdf"
            download="CV-spanish.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center w-fit mx-auto px-4 items-center gap-2 border border-indigo-500/50 py-2 rounded-lg hover:bg-indigo-700/30 hover:cursor-pointer"
          >
            Descargar CV
          </Link>
        </div>
      </div>
    </div>
  );
}
