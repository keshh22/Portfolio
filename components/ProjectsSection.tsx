import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Satellite Flight Path Tracker",
    description: "Using web scraped flight path data to visualize orbiting of satellites around the earth",
    image: "/satellite.png",
    github: "https://github.com/keshh22/SatelliteTracker",
    link: "https://satellitetracker.vercel.app/",
  },
  {
    name: "Image Steganography",
    description:
      "This project uses LSB technique which allows us to embed sensitive data in a way that is not visible to the human eye, ensuring the security and privacy of our communication.",
    image: "/steganography.png",
    github: "https://github.com/keshh22/Steganography",
    link: "https://imagesteganography.vercel.app/",
  },
  {
    name: "AI Image Generator",
    description:
      "Image Generator using a diffusion model with components from NodeJS, Javascript, CSS and HTML. Using the MERN stack to make an interactive website for generating images based on user prompts.",
    image: "/imagegen.png",
    github: "https://github.com/keshh22/Image-Generator",
    link: "https://keshimagegen.vercel.app/",
  },

  {
    name: "Pneumonia/Influenza Classification",
    description:
      "ML Algorithms for Image Classification using different ResNets and applying different techniques like Augmentation to improve accuracies of the prediction model",
    image: "/pneumonia.png",
    github: "https://github.com/keshh22/PneumoniaMNIST",
    link: "https://github.com/keshh22/PneumoniaMNIST",
  },
  
  
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
