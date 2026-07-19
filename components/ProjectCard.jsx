import FeaturesScroll from './FeaturesScroll';
import DatabaseDiagram from './DatabaseDiagram';
import GithubButton from './GithubButton';

export default function ProjectCard({ project }) {

    return (
        <div className=" p-6 rounded  mb-6 mt-10 ">
            <h2 className="text-2xl font-bold uppercase tracking-[0.1em] mb-2 text-[#C9ADA7]">{project.title}</h2>
            <p className="mb-2 ">{project.description}</p>
            <div className='my-5'>
                <p className="mb-2 md:text-xl font-light uppercase tracking-[0.1em] text-[#F2E9E4]">
                    Tech
                </p>
                <div className="flex flex-row gap-x-5">
                    {project.tech.map((e, idx) =>
                        <div key={idx} className=" border border-white/10 rounded-xl px-2 py-3 backdrop-blur-sm w-35 h-10 flex items-center justify-center">
                            <span className="text-white text-base">
                                {e}
                            </span>
                        </div>
                    )}
                </div>
            </div>
            <div className='my-5'>
                <p className="mb-2 md:text-xl font-light uppercase tracking-[0.1em] text-[#F2E9E4]">
                    Technical Details
                </p>
                <ul className="list-disc list-inside mb-2 ">
                    {project.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                {project.pictures && (
                    project.title === "Slotly" ?
                        <FeaturesScroll items={project.pictures} mobilePicture={true} />
                        :
                        <FeaturesScroll items={project.pictures} />
                )}
            </div>

            {project.database && (
                <div className='my-5'>
                    <p className="mb-2 md:text-xl font-light uppercase tracking-[0.1em] text-[#F2E9E4]">
                        Database Design
                    </p>
                    <DatabaseDiagram database={project.database} />
                </div>
            )}

            {project.results &&
                <div className='my-5'>

                    <p className="mb-2 md:text-xl font-light uppercase tracking-[0.1em] text-[#F2E9E4]">
                        Results
                    </p>
                    <ul className="list-disc list-inside mb-2">
                        {project.results.map((r, i) => <li key={i}>{r}</li>)}
                    </ul>
                </div>
            }

            {project.github &&
                <GithubButton github={project.github} />
            }
        </div>

    )
}