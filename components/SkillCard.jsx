

export default function SkillCard({ text }) {

    return (
        <div className="bg-white/5 border border-white/10 rounded-xl px-2 py-3 backdrop-blur-sm w-45 h-12 flex items-center justify-center">
            <span className="text-white text-base">
                {text}
            </span>
        </div>
    )

}