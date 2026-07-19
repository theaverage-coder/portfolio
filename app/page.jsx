import Image from "next/image";
import NavBar from '../components/NavBar';
import ProjectCard from '../components/ProjectCard';
import SkillCard from '../components/SkillCard';
import ContactCard from '../components/ContactCard';
import './globals.css';

export default function Home() {
  const skills = [
    {
      title: "LANGUAGES",
      items: ["JavaScript", "Java", "Python"]
    },
    {
      title: "TECHNOLOGIES & LIBRARIES",
      items: ["React.js", "React Native", "Node.js"]
    },
    {
      title: "DATABASES",
      items: ["MySQL", "MongoDB"]
    },
    {
      title: "TOOLS & TECHNOLOGIES",
      items: ["HTML", "CSS", "Git"]
    }
  ];

  const contact = [
    {
      title: "EMAIL",
      text: "patel.eesha6@gmail.com"
    },
    {
      title: "PHONE",
      text: "514-884-7012"
    },
    {
      title: "GITHUB",
      text: "github.com/theaverage-coder",
      link: "https://github.com/theaverage-coder"
    },
    {
      title: "LINKEDIN",
      text: "Eesha Patel",
      link: "https://linkedin.com/in/eesha-patel-728837387"
    },
  ];

  const projects = [
    {
      title: "Slotly",
      description: "A mobile booking app that allows students and professors to schedule, manage, and track appointments.",
      tech: [
        "React Native",
        "Node.js",
        "Express.js",
        "MongoDB"
      ],
      features: [
        "Developed a mobile application to automate office-hour scheduling, event management, and student-professor interactions",
        "Designed and implemented RESTful APIs with JWT-based authentication and secured user credentials using password hashing and salting with bcrypt",
        "Role-based access control: enabling professors to manage courses, office hours, events, and polls, while allowing students to book appointments, register for events, and participate in polls",
        "Architected a scalable MongoDB database schema for users, courses, appointments, events, polls and more while enabling efficient data retrieval and management",
        "Built reusable React Native components and integrated frontend workflows with backend services through asynchronous API communication",
        "Developed backend services using a modular MVC architecture, improving maintainability and separation of concerns",
        "Developed backend validation logic to prevent appointment scheduling conflicts and implemented frontend form validation and error handling for application reliability",
        "Collaborated with a UI/UX designer and utilized Git-based workflows to deliver production-ready features in a team environment"
      ],
      pictures: [
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
      database: "/slotly_db.svg",
      github: {
        title: "slotly",
        link: "https://github.com/theaverage-coder/slotly.git"
      },

    },
    {
      title: "URL Shortener",
      description: "Full-stack URL shortening platform with user accounts, custom aliases, and real-time analytics",
      tech: [
        "React", "Express.js", "Node.js", "PostgreSQL"
      ],
      features: [
        "Implemented JWT authentication and authorization to provide secure, user-specific URL management through protected REST APIs.",
        "Developed an analytics system that reports click activity, unique visitors, and time-based traffic metrics using optimized SQL aggregation queries.",
        "Refactored the backend from MongoDB to PostgreSQL with Prisma ORM, designing a normalized relational schema and indexing strategy to improve scalability and query efficiency."
      ],
      database: "/url_shortener_db.svg",
      github: {
        title: "url-shortener",
        link: "https://github.com/theaverage-coder/url-shortener"
      },
    },
    {
      title: "Email Queue System",
      description: "A backend system that processes background jobs using a queue-based architecture to improve API responsiveness by decoupling task execution from user requests",
      tech: [
        "JavaScript",
        "Redis",
        "Docker"
      ],
      features: [
        "Implements an asynchronous notification system using a producer-consumer architecture to offload time-consuming tasks to background workers",
        "Processes jobs with retry logic, exponential backoff, and concurrency control to improve reliability under failure conditions",
        "Uses Redis-backed queues for fast, in-memory job scheduling a",
        "Supports delayed job execution and fault simulation to demonstrate resilience and real-world failure handling",
        "Containerized with Docker and designed for horizontal scalability by adding multiple worker instances",
        "Includes a monitoring dashboard for real-time visibility into job states"
      ],
      pictures: [
        {
          caption: "System flow",
          images: ["/email_queue_flow.png"]
        },
        {
          caption: "Bull Board dashboard to monitor jobs",
          images: ["/bull_board_dashboard.png"]
        },
      ],
      github: {
        title: "email-queue",
        link: "https://github.com/theaverage-coder/email-queue"
      },
    },
    {
      title: "MLP for Image Classification",
      description: "Designed a multilayer perceptron (MLP) and trained it on the Kuzushiji-MNIST dataset for image classification.",
      tech: [
        "Python"
      ],
      features: [
        "Classified 28×28 images of 10 Japanese cursive characters using a multilayer perceptron",
        "Compared performance with linear regression, logistic regression, and multiclass classifiers",
        "Tuned MLP parameters: hidden layers/units, learning rates, and activation functions (ReLU, Leaky-ReLU, sigmoid)",
        "Explored how model architecture and hyperparameters impact classification performance VS CNN"
      ],
      pictures: [
        {
          caption: "Results of trying different hidden units within layers, learning rates and activation functions",
          images: ["/MLP_hidden_units_and_lr_vs_accuracy.png", "/MLP_activation_functions.png"]
        },
        {
          caption: "The 256-unit, 0.01 learning rate model was the best-performing two-hidden-layer MLP (93.54% test accuracy). Outperformed by 32-unit ConvNet model (93.54% test accuracy)",
          images: ["/MLP_optimal_model.png", "/MLP_convnet_results.png"]
        },
      ],
      results: [
        "Increasing hidden units improved performance, with a 256 unit, 2-layer MLP achieving optimal performance",
        "ReLU and Leaky ReLU outperformed sigmoid, making them more effective for this task",
        "L2 regularization improved generalization and overall accuracy",
        "The best CNN model outperformed the optmal MLP, highlighting its advantage for image classification"
      ],
    },
    {
      title: "LLM for Text Classification",
      description: "Explored the performance of the BERT model on the AG News dataset for multi-class news classification.",
      tech: [
        "Python",
        "Pytorch"
      ],
      features: [
        "AG News dataset: contains 120,000 training and 7,600 test examples of news headlines and descriptions, categorized into four topics: World, Sports, Business, and Sci/Tech",
        "Experimented with a transformer-based model (BERT) using PyTorch",
        "Explored attention mechanisms and contextual embeddings",
        "Evaluated performance on NLP tasks"
      ],
      results: [
        "[CLS] token embeddings performed best among probing strategies for sentence representation",
        "Logistic regression on frozen BERT embeddings achieved 89.09% accuracy.",
        "End-to-end fine-tuning improved performance to 93.08% accuracy",
        "Attention visualizations showed focus on semantically relevant tokens during correct predictions",
        "Results demonstrate that fine-tuning significantly enhances task-specific performance"
      ],
    }
  ]

  return (
    <div className="flex flex-col flex-1 bg-zinc-50 font-sans bg-[#22223B]">
      <NavBar />
      <main className="flex flex-1 w-full  flex-col items-center justify-center py-12  bg-[#22223B]">
        <header className="flex flex-col text-center p-20  sm:py-16 md:py-20 md:h-[550px] justify-center items-center">
          <h2 className="mb-10 uppercase font-light tracking-[0.2em] text-[#C9ADA7]"> FULL STACK & BACKEND DEVELOPER </h2>
          <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold mb-4 leading-tight">Hi, I’m <span className="text-[#9A8C98]">Eesha.</span></h1>
          <p className="sm:text-lg md:text-2xl max-w-2xl"> This portfolio is a collection of projects that showcase my development process, technical skills, and problem-solving approach.</p>
        </header>

        <section id="about" className="lg:w-5xl mb-40  scroll-mt-24">
          <h2 className="md:text-2xl uppercase font-light tracking-[0.2em] mb-6 text-center  md:mx-10 lg:mx-0 md:text-left  border-b border-gray-300 pb-2">
            ABOUT
          </h2>
          <div className="w-full flex justify-center items-center">
            <div className="flex flex-row gap-x-15 w-[80%]">
              <div className="flex flex-col gap-5">
                <p>
                  I'm a Computer Science graduate from Mcgill University with a passion for software development and building practical applications.
                </p>
                <p>
                  Through personal, academic, and collaborative projects, I've gained experience designing and developing full-stack applications.
                  I enjoy designing APIs, working with databases, and building scalable applications.
                </p>
              </div>
              <p>
                I am actively seeking opportunities in software development, backend engineering, or full-stack development where I can apply my technical skills, contribute to meaningful projects, and continue growing as a developer.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="lg:w-5xl mb-10 scroll-mt-24">
          <h2 className="md:text-2xl uppercase font-light tracking-[0.2em] mb-6 text-center md:text-left md:mx-10 lg:mx-0  border-b border-gray-300 pb-2">
            PROJECTS
          </h2>
          {projects.map((p, i) => <ProjectCard key={i} project={p} />)}
        </section>

        <section id="skills" className="lg:w-5xl mb-10 scroll-mt-24">
          <h2 className="md:text-2xl uppercase font-light tracking-[0.2em] mb-6 text-center md:text-left md:mx-10 lg:mx-0   border-b border-gray-300 pb-2">
            SKILLS
          </h2>
          <div className="w-full flex justify-center items-center mt-10 ">
            <div className="w-[80%]">
              {skills.map((e, idx) => (
                <div key={idx}>
                  <h5 className="  text-[#9A8C98] mb-2 uppercase font-light tracking-[0.1em]"> {e.title} </h5>
                  <div className="flex flex-row mb-10 gap-x-4">
                    {e.items.map((item, i) =>
                      <SkillCard key={i} text={item} />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="lg:w-5xl mb-10 scroll-mt-24">
          <h2 className="md:text-2xl uppercase font-light tracking-[0.2em] mb-6 text-center md:mx-10 lg:mx-0  md:text-left border-b border-gray-300 pb-2">
            CONTACT
          </h2>
          <div className="w-full flex justify-center items-center mt-10">
            <div className="w-[80%] grid grid-cols-2 gap-x-20 gap-y-5 w-fit mx-auto">
              {contact.map((e, idx) =>
                <ContactCard key={idx} contact={e} />
              )}
            </div>
          </div>

        </section>
      </main>
    </div >
  );
}
