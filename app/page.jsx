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
          caption: "Students can enroll in courses to view all related activities.",
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
      github: "https://github.com/theaverage-coder/slotly.git",
      isFullStack: true
    },
    {
      title: "MLP for Image Classification",
      description: "Designed a multilayer perceptron (MLP) and trained it on the Kuzushiji-MNIST dataset for image classification.",
      tech: "Python",
      features: [
        "Classified 28×28 images of 10 Japanese cursive characters using a multilayer perceptron.",
        "Compared performance with linear regression, logistic regression, and multiclass classifiers.",
        "Tuned MLP parameters: hidden layers/units, learning rates, and activation functions (ReLU, Leaky-ReLU, sigmoid).",
        "Explored how model architecture and hyperparameters impact classification performance VS CNN."
      ],
      results: [
        "Increasing hidden units improved performance, with 256 units per layer performing best.",
        "A two-layer MLP achieved the highest accuracy (87.99%), while models without hidden layers performed significantly worse (69.41%).",
        "ReLU and Leaky ReLU outperformed sigmoid, making them more effective for this task.",
        "L2 regularization improved generalization and overall accuracy.",
        "The best CNN model outperformed the MLP by 5.17%, highlighting its advantage for image classification."
      ],
      takeaways: [

      ]
    },
    {
      title: "LLM for Text Classification",
      description: "Explored the performance of the BERT model on the AG News dataset for multi-class news classification.",
      tech: "Python",
      features: [
        "AG News dataset: contains 120,000 training and 7,600 test examples of news headlines and descriptions, categorized into four topics: World, Sports, Business, and Sci/Tech.",
        "Experimented with a transformer-based model (BERT) using PyTorch",
        "Explored attention mechanisms and contextual embeddings",
        "Evaluated performance on NLP tasks"
      ],
      results: [
        "[CLS] token embeddings performed best among probing strategies for sentence representation.",
        "Logistic regression on frozen BERT embeddings achieved 89.09% accuracy.",
        "End-to-end fine-tuning improved performance to 93.08% accuracy.",
        "Attention visualizations showed focus on semantically relevant tokens during correct predictions.",
        "Results demonstrate that fine-tuning significantly enhances task-specific performance."
      ],
    }
  ]

  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans bg-[#22223B]">
      <NavBar />
      <main className="flex flex-1 w-full  flex-col items-center justify-center py-12  bg-[#22223B]">
        <header className="text-center p-20  sm:py-16 md:py-20">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">Hi, I’m <span className="text-[#9A8C98]">Eesha Patel</span></h1>
          <p className="sm:text-lg md:text-xl max-w-2xl"> I'm a Computer Science graduate and this is a visual collection of my projects highlighting my development process.</p>
        </header>
        <section id="projects" className="max-w-5xl  ">
          <h2 className="text-3xl font-bold mb-6 text-center sm:text-left">Projects</h2>
          {projects.map((p, i) => <ProjectCard key={i} project={p} />)}
        </section>

        <section id="skills" className="p-12 mx-auto flex flex-col justify-center items-center ">
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <ul className="list-disc list-inside">
            <li >JavaScript, Python, Java</li>
            <li >React, React Native, Next.js, HTML, CSS</li>
            <li >Node.js, Express, MongoDB. MySQL</li>
          </ul>
        </section>

        <section id="contact" className="p-12 mx-auto flex flex-col justify-center items-center ">
          <h2 className="text-3xl font-bold mb-6">Contact</h2>
          <p>Email: patel.eesha6@gmail.com</p>
          <p>GitHub: <a href="https://github.com/theaverage-coder" target="_blank" className="text-blue-500">github.com/theaverage-coder</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/eesha-patel-728837387" target="_blank" className="text-blue-500">linkedin.com/in/eesha-patel</a></p>
        </section>
      </main>
    </div>
  );
}
