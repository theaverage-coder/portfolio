import Image from "next/image";
import NavBar from '../components/NavBar';
import ProjectCard from '../components/ProjectCard';

import './globals.css';

export default function Home() {
  const projects = [
    {
      title: "Slotly",
      description: "A mobile booking app that allows students and professors to schedule, manage, and track appointments.",
      tech: "MERN Stack [React Native, Node.js, Express, MongoDB]",
      features: [
        "Secure authentication system with JWT and role-based access (students vs. professors)",
        "Integrated course enrollment system for managing academic participation",
        "Advanced booking system with real-time conflict prevention for scheduling appointments",
        "Interactive polling system allowing dynamic voting and updates",
        "Event management module for creating, managing, and registering for events"
      ],
      screenshots: [
        {
          caption: "Secure user authentication with role-based access control (students vs. professors), using JWT-based session management.",
          images: ["/onboardingStart.png", "/login.png", "/onboardingRole.png"]
        },
        {
          caption: "Students can seamlessly browse and enroll in courses, enabling structured access to academic resources.",
          images: ["/addcourse.png", "/courses.png", "/booking_details.png"]
        },
        {
          caption: `Full booking management system allowing users to create, update, and cancel appointments with real-time availability handling.
          Conflict-free scheduling with server-side validation to prevent overlapping appointments.`,
          images: ["/booking_availabilities.png", "/book_appointment.png", "/appointments.png"]
        },
        {
          caption: "Dynamic polling feature where users can submit multiple votes and modify existing responses, with real-time updates.",
          images: ["/poll.png", "/poll_vote.png", "/event.png"]
        }
      ],
      //database,
      live: "https://your-app.vercel.app",
      github: "https://github.com/your-repo",
      challenges: "Handled overlapping bookings with server-side validation."
    }
  ]

  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans bg-[#22223B]">
      <NavBar />
      <main className="flex flex-1 w-full  flex-col items-center justify-center py-32 px-16  bg-[#22223B]">
        <header className="text-center p-20 ">
          <h1 className="text-4xl font-bold mb-4">Hi, I’m <span className="text-[#9A8C98]">Eesha Patel</span></h1>
          <p className="text-xl">Full-Stack Developer | I build real-world web applications</p>
        </header>
        <section id="projects" className="p-12 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Projects</h2>
          {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
        </section>

        <section id="skills" className="p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <ul className="list-disc list-inside">
            <li>JavaScript, Python, Java</li>
            <li>React, React Native, Next.js, HTML, CSS</li>
            <li>Node.js, Express, MongoDB. MySQL</li>
          </ul>
        </section>

        <section id="contact" className="p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <p>Email: patel.eesha6@gmail.com</p>
          <p>GitHub: <a href="https://github.com/yourname" target="_blank" className="text-blue-500">github.com/yourname</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/yourname" target="_blank" className="text-blue-500">linkedin.com/in/yourname</a></p>
        </section>
      </main>
    </div>
  );
}
