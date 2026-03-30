import FeaturesScroll from './FeaturesScroll';
import DatabaseDiagram from './DatabaseDiagram';

export default function ProjectCard({ project }) {
    //export default function ProjectCard({ title, description, tech, features, screenshots, live, github, isFullStack }) {

    return (
        <div className=" p-6 rounded shadow-lg  mb-6 ">
            <h2 className="text-2xl font-bold mb-2 text-[#C9ADA7]">{project.title}</h2>
            <p className="mb-2">{project.description}</p>
            <p className="mb-2"><strong>Tech:</strong> {project.tech}</p>
            {project.isFullStack ? (
                <>
                    <p className="mb-2 text-[#F2E9E4]"><strong>Features</strong></p>
                    <ul className="list-disc list-inside mb-2">
                        {project.features.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                    <FeaturesScroll items={project.screenshots} />

                    <div>
                        <p className="mb-2 text-[#F2E9E4]"><strong>Database Design</strong></p>
                        <DatabaseDiagram />
                    </div>

                    <div className="space-x-4 mt-10">
                        <a href={project.github} target="_blank" className="text-blue-500">GitHub</a>
                    </div>
                </>
            ) : (
                <>
                    <p className="mb-2 text-[#F2E9E4]"><strong>Technical Details</strong></p>
                    <ul className="list-disc list-inside mb-2">
                        {project.features.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                    <p className="mb-2 text-[#F2E9E4]"><strong>Results</strong></p>
                    <ul className="list-disc list-inside mb-2">
                        {project.results.map((r, i) => <li key={i}>{r}</li>)}
                    </ul>
                </>
            )}
        </div>

    )
}