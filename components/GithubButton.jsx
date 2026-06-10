
import { IoMdOpen } from "react-icons/io";

export default function GithubButton({ github }) {
    return (
        <a href={github.link} target="_blank"
            className="    group
    flex items-center justify-between
    w-80 h-20
    px-5
    bg-white/5
    border border-white/10
    rounded-xl
    backdrop-blur-sm
    hover:bg-white/10
    hover:border-white/20
    transition-all duration-300">
            <div>
                <p className=" text-[#9A8C98] uppercase font-light tracking-[0.1em]"> GitHub </p>
                <p className="text-white font-medium"> {github.title} </p>
            </div>
            <IoMdOpen
                className="
      text-xl text-[#9A8C98]
      transition-transform duration-300
      group-hover:translate-x-1
      group-hover:-translate-y-1
    " />
        </a>
    )
}