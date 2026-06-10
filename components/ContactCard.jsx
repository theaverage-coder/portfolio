
export default function ContactCard({ contact }) {

    return (
        <div className="flex flex-col  border border-white/10 rounded-xl px-2 py-3 backdrop-blur-sm w-80 h-20 flex pl-5 justify-center">
            <p className=" text-[#9A8C98] uppercase font-light tracking-[0.1em]">
                {contact.title}
            </p>
            {contact.link ? (
                <a href={contact.link} target="_blank" className="text-blue-500">
                    {contact.text}
                </a>
            ) : (
                <p className="text-white text-base">
                    {contact.text}
                </p>
            )}
        </div>
    )
}