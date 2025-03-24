
import Title from "./Title"
import rubis from "../assets/projects/Residence_Rubis.png";
import gantin from "../assets/projects/École Cardinal Bernardin Gantin _ Excellence Éducative.png";
import iafund from "../assets/projects/Financement.png";
import stage from "../assets/projects/Gestion des stages.png";
import portfolio from "../assets/projects/portfolio.png";
import innov from "../assets/projects/Innovatech.png";
import dame from "../assets/projects/Dame de Martine.png";
import cv from "../assets/projects/cv.png";
import { Link } from "lucide-react"

const projects = [
    {
        id: 1,
        title: 'Site pour hôtel Residences Rubis',
        technologies: ['WordPress', 'Elementor'],
        demoLink: 'https://residencerubis.com/',
        image: rubis,
        description: 'Un site vitrine élégant et moderne pour un hôtel de luxe, offrant une expérience immersive aux visiteurs.',
    },
    {
        id: 2,
        title: 'Site du Complexe scolaire catholique Cardinal Gantin',
        technologies: ['WordPress', 'Elementor'],
        demoLink: 'https://csccbgantin.net',
        image: gantin,
        description: 'Un site institutionnel pour une école catholique, permettant aux parents et élèves d’accéder facilement aux informations.',
    },
    {
        id: 3,
        title: 'Site de gestion de stage académique',
        technologies: ['Laravel', 'Bootstrap'],
        demoLink: '#',
        image: stage,
        description: 'Une plateforme web facilitant la gestion des stages académiques, du suivi des étudiants jusqu’aux évaluations finales.',
    },
    {
        id: 4,
        title: 'Portfolio personnel',
        technologies: ['React', 'TailwindCSS'],
        demoLink: '#',
        image: portfolio,
        description: 'Un portfolio interactif et dynamique mettant en avant mes compétences et mes projets en développement web.',
    },
    {
        id: 5,
        title: 'Site pour une entreprise naissante en France',
        technologies: ['Bootstrap', 'Laravel'],
        demoLink: '#',
        image: innov,
        description: 'Un site web professionnel conçu pour une startup, optimisé pour la conversion et la visibilité en ligne.',
    },
    {
        id: 6,
        title: 'Site de financement',
        technologies: ['WordPress', 'Elementor'],
        demoLink: 'http://iafund.digital/',
        image: iafund,
        description: 'Une plateforme dédiée au financement participatif et aux opportunités d’investissement accessibles à tous.',
    },
    {
        id: 7,
        title: 'Jeu de dame complet',
        technologies: ['React'],
        demoLink: '#',
        image: dame,
        description: 'Un jeu de dames en ligne entièrement fonctionnel, offrant une expérience de jeu fluide et intuitive.',
    },
    {
        id: 8,
        title: 'Application web de création de CV',
        technologies: ['React', 'TailwindCSS','Next JS'],
        demoLink: '#',
        image: cv,
        description: 'Une application web permettant aux utilisateurs de créer et personnaliser leur CV plus facilement',
    }
];



const Projects = () => {
  return (
    <div className="mt-10">
    <Title title="Mes Projets"/>
    <div className="grid md:grid-cols-3 gap-4" id="Projects">
        {projects.map((project) =>(
            <div key={project.id} className="bg-base-300  p-5 h-fit shadow-lg rounded-xl">
                <img src={project.image} 
                alt={project.title} 
                className="w-full rounded-xl h-56 object-cover"/>
                <div>
                    <h1 className="my-2 font-bold">
                        {project.title}
                    </h1>
                    <p className="text-sm" >{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2 my-3">
                    {project.technologies.map((tech) =>
                    <span className="badge badge-accent badge-sm">
                        {tech}
                    </span>
                    )}
                </div>
                <div className="flex">
                    <a className="btn btn-neutral w-1/3" href={project.demoLink}>
                        Demo 
                        <Link className="w-4" />
                    </a>
                </div>
            </div>

        ))}
    </div>
    </div>
  )
}

export default Projects
