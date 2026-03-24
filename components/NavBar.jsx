export default function Navbar() {
    return (
        <nav className="flex justify-between p-6 shadow bg-[#4A4E69]">
            <h1 className="text-xl font-bold">Eesha Patel</h1>
            <div className="space-x-4">
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#contact">Contact</a>
            </div>
        </nav>
    )
}