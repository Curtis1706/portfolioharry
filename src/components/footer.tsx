import { Facebook, FolderCode, Twitter, Youtube } from "lucide-react"

const footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center p-10">
  <aside>
  <FolderCode className="w-10 h-10" />
           
    <p className="font-bold">
    Harry 
    <span className="text-accent"> DEV</span>
    </p>
    <p>Copyright © {new Date().getFullYear()} -Tous droits réservés</p>
  </aside>
  <nav>
    <div className="grid grid-flow-col gap-4">
     <a href="" target="_blank" rel="noopener noreferrer">
        <Twitter className="w-6 h-6 text-current" />  
     </a>
     <a href="" target="_blank" rel="noopener noreferrer">
        <Youtube className="w-6 h-6 text-current" />
     </a>
     <a href="" target="_blank" rel="noopener noreferre">
        <Facebook className="w-6 h-6 text-current" />
     </a>
    </div>
  </nav>
</footer>
  )
}

export default footer
