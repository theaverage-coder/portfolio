import FeaturesScroll from './FeaturesScroll';
import DatabaseDiagram from './DatabaseDiagram';

export default function ProjectCard({ project }) {

    return (
        <div className=" p-6 rounded  mb-6 ">
            <h2 className="text-2xl font-bold uppercase tracking-[0.1em] mb-2 text-[#C9ADA7]">{project.title}</h2>
            <p className="mb-2 ">{project.description}</p>
            <div className='my-5'>
                <p className="mb-2 md:text-xl font-light uppercase tracking-[0.1em] text-[#F2E9E4]">
                    Tech
                </p>
                <div className="flex flex-row gap-x-5">
                    {project.tech.map((e, idx) =>
                        <div key={idx} className="bg-white/5 border border-white/10 rounded-xl px-2 py-3 backdrop-blur-sm w-35 h-10 flex items-center justify-center">
                            <span className="text-white text-base">
                                {e}
                            </span>
                        </div>
                    )}
                </div>
            </div>
            {project.isFullStack ? (
                <>
                    <div className='my-5'>
                        <p className="mb-2 md:text-xl font-light uppercase tracking-[0.1em] text-[#F2E9E4]">
                            Features
                        </p>
                        <ul className="list-disc list-inside mb-2 ">
                            {project.features.map((f, i) => <li key={i}>{f}</li>)}
                        </ul>
                        <FeaturesScroll items={project.screenshots} mobilePicture={true} />
                    </div>
                    <div className='my-5'>
                        <p className="mb-2 md:text-xl font-light uppercase tracking-[0.1em] text-[#F2E9E4]">
                            Database Design
                        </p>
                        <DatabaseDiagram />
                    </div>

                </>
            ) : (
                <>
                    <div className='my-5'>
                        <p className="mb-2 md:text-xl font-light uppercase tracking-[0.1em] text-[#F2E9E4]">
                            Technical Details
                        </p>
                        <ul className="list-disc list-inside mb-2 ">
                            {project.features.map((f, i) => <li key={i}>{f}</li>)}
                        </ul>
                        {project.pictures &&
                            <FeaturesScroll items={project.pictures} />
                        }
                    </div>
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
                </>
            )}
            {
                project.github &&
                <div className="space-x-4 mt-10">
                    <a href={project.github} target="_blank" className="text-blue-500">GitHub</a>
                </div>
            }
        </div>

    )
}