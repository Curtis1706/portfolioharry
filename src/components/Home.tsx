import { Mail } from "lucide-react"
import img from '../assets/img.jpg'

const Home = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center md:my-32 my-10" id="Home">
      <div className="flex flex-col ">
        <h1 className="text-5x1 md:text-6xl font-bold text-center md:text-left mt-4 md:mt-0">
            Hi, <br /> Je suis {" "}  <span className="text-accent">Harry ALOHOUTADE</span>
        </h1>
        <p className="my-4 text-md text-center  md:text-left">
            Je suis un développeur fullstack <br /> utilisant différentes technologies avec 3 ans d'expériences. <br />
            Toujours à la recherche de nouveaux défis et de nouvelles opportunités pour améliorer mes compétences
        </p>
        <a href="" className="btn btn-accent md:w-fit ">
            <Mail className="w-5 h-5" />
            Contactez-moi
        </a>
      </div>
      <div className="md:ml-60">
        <img src={img} alt="" className="w-96 h-96 object-cover border-8 border-accent shadow-xl transition-all duration-500 hover:border-4 hover:border-blue-500"
        style={{
            borderRadius :"39% 61% 63% 37% / 47% 39% 61% 53% "
        }} />
      </div>
    </div>
  )
}

export default Home
