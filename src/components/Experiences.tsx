import Title from "./Title"
import imgCSS from "../assets/techno/css.png";
import imgHTML from "../assets/techno/html.png";
import imgJS from "../assets/techno/js.png";
import imgReact from "../assets/techno/react.png";
import imgTAILWIND from "../assets/techno/tailwind.png";
import imgWordpress from "../assets/techno/Wordpress.png";
import imgLaravel from "../assets/techno/laravel-logo.png";
import imgPhp from "../assets/techno/PHP-logo.svg";
import imgPython from "../assets/techno/Python-logo-notext.svg";
import Iwitech from "../assets/companies/IWITECHLOGO.jpg"
import IMUXT from "../assets/companies/IMUXTLOGO.png"


const skills = [
    { id: 1, name: "HTML", image: imgHTML },
    { id: 2, name: "CSS", image: imgCSS },
    { id: 3, name: "JavaScript", image: imgJS },
    { id: 4, name: "React", image: imgReact },
    { id: 5, name: "Tailwind CSS", image: imgTAILWIND },
    { id: 6, name: "Wordpress", image: imgWordpress },
    { id: 7, name: "Laravel", image: imgLaravel },
    { id: 8, name: "PHP", image: imgPhp },
    { id: 9, name: "Python", image: imgPython },
    { id: 10, name: "Next JS", image: imgNext },
    { id: 11, name: "Typescript", image: imgTypescript },
];
const experiences = [
    {
        id: 1,
        role: "Web designer",
        company: "Iwitech",
        period: "juin2023 - septembre 2023",
        description: [
            "Introduction au développement Web",
            "Création de sites web  avec le CMS WordPress",
        ],
        image: Iwitech,
    },
    {
        id: 2,
        role: "Developpeur Web",
        company: "IMUXT",
        period: "juin 2024 - Septembre 2024",
        description: [
            "Création d'un site Web pour un événement ayant pour but de réunir les acteurs du monde digital",
            "Brève introduction aux techniques de marketing pour tout développeur",
        ],
        image: IMUXT,
    },

];

const Experiences = () => {
    return (
        <div id="Experiences">
            <Title title="Expériences et Compétences"  />
            <div className="flex flex-col-reverse md:flex-row justify-center items-center">
                <div className="flex flex-wrap gap-4 justify-center items-center md:w-1/3 mt-4 md:mt-0">
                    {
                        skills.map((skill) => (
                            <div key={skill.id} className="flex justify-center items-center flex-col">
                                <div className="w-24 h-24 p-2 rounded-full border-2 border-accent">
                                    <img src={skill.image} alt={skill.name} className="object-corver rounded-full h-full w-full" />
                                </div>
                                <span className="mt-2 text-sm">{skill.name}</span>
                            </div>

                        ))

                    }
                </div>
                <div className="md:ml-4 flex flex-col space-y-4">
                    {
                        experiences.map((experience) => (
                            <div
                            key={experience.id} 
                            className="flex flex-col bg-base-200 p-5 rounded-xl shadow-lg">
                                <div className="flex items-center">
                                    <img src={experience.image} alt={experience.company} className="object-cover h-10 w-10" />
                                    <div className="ml-4">
                                        <h1 className="text-xl text-accent font-bold">
                                            {experience.role} , {experience.company}
                                        </h1>
                                        <span className="text-sm"> {experience.period}</span>
                                    </div>
                                </div>
                                <ul className="list-disc ml-16 mt-2">
                                    {
                                        experience.description.map((desc , index) => (
                                            <li key={index}>
                                                {desc}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Experiences
