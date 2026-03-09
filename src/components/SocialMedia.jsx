import { FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { IoLogoLinkedin } from "react-icons/io"


function SocialMedia() {
  return (
    <div className="flex gap-15 bg-gray-100 p-4 pb-2 rounded-2xl mt-2">
        <a href="https://www.linkedin.com/in/krishnakushwaha"><button className="hover:scale-110 transition"><IoLogoLinkedin size={34}/></button></a>
        <a href="https://www.x.com/krisna_kuswaha"><button className="hover:scale-110 transition"><FaXTwitter size={30}/></button></a>
        <a href="https://www.github.com//krishnakushwaha07"><button className="hover:scale-110 transition"><FaGithub size={32}/></button></a>
    </div>
  )
}

export default SocialMedia