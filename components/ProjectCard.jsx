import FeaturesScroll from './FeaturesScroll';
import DatabaseDiagram from './DatabaseDiagram';

export default function ProjectCard({ title, description, tech, features, screenshots, live, github, challenges }) {
    return (
        <div className=" p-6 rounded shadow-lg  mb-6">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className="mb-2">{description}</p>
            <p className="mb-2"><strong>Tech:</strong> {tech}</p>
            <p className="mb-2"><strong>Features</strong></p>
            <ul className="list-disc list-inside mb-2">
                {features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
            <FeaturesScroll items={screenshots} />
            <p className="mb-2"><strong>Database Design</strong></p>
            <DatabaseDiagram />
            {challenges && <p className="mb-2"><strong>Challenge & Solution:</strong> {challenges}</p>}
            <div className="space-x-4">
                {live && <a href={live} target="_blank" className="text-blue-500">Live Demo</a>}
                {github && <a href={github} target="_blank" className="text-blue-500">GitHub</a>}
            </div>
        </div>
    )
}