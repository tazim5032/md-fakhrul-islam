import ProjectCard from './ProjectCard'; // Adjust the path as per your file structure

const Projects = () => {
  // Dummy data for projects
  const projects = [
    {
      id: 1,
      imageUrl: 'https://i.postimg.cc/Hs37H8Kx/ss.png',
      title: 'Micro Task',
      shortInfo: 'This project is a micro-task management system with different user roles and functionalities, allowing task creation, task completion, and financial transactions for task rewards.',
      liveLink: 'https://micro-task-55c95.web.app',
      clientLink: 'https://github.com/tazim5032/pico-worker-client',
      serverLink: 'https://github.com/tazim5032/micro-work-server',
      features: [
        'Feature 1: User roles and permissions',
        'Feature 2: Task creation and completion',
        'Feature 3: Financial transactions',
      ],
      technologies: ['React', 'Tailwind CSS', 'Express', 'MongoDB', 'Node.js'],
    },
    {
      id: 2,
      imageUrl: 'https://i.postimg.cc/cCzyMmCC/ss.png',
      title: 'EduFlow',
      shortInfo: 'This project is a full-stack web application for online group study with friends. Every registered user is considered a friend of others. Users can create assignments, complete them, and grade their friends assignments.',
      liveLink: 'https://edu-flow.firebaseapp.com',
      clientLink: 'https://github.com/tazim5032/edu-flow-client',
      serverLink: 'https://github.com/tazim5032/edu-flow-server',
      features: [
        'Feature 1: Online group study functionality',
        'Feature 2: Assignment creation and grading',
        'Feature 3: User friend management',
      ],
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'Firebase'],
    },
    {
      id: 3,
      imageUrl: 'https://i.postimg.cc/7LnFQDhp/ss.png',
      title: 'Ceramics Arena',
      shortInfo: 'Ceramics Arena is a web application for showcasing and selling ceramics and pottery items. It provides users with various features such as authentication, product management, and a visually appealing user interface.',
      liveLink: 'https://ceramics-arena-client.web.app',
      clientLink: 'https://github.com/tazim5032/ceramics-arena-client',
      serverLink: 'https://github.com/tazim5032/ceramics-arena-server',
      features: [
        'Feature 1: Authentication and user management',
        'Feature 2: Product catalog and management',
        'Feature 3: Visual design and user experience',
      ],
      technologies: ['React', 'Tailwind CSS', 'Node.js', 'Firebase', 'Firestore'],
    },
  ];

  const handleDetailsClick = () => {
    // Logic for what happens when "Details" is clicked (e.g., fetch more details from API, etc.)
    console.log('Details button clicked');
  };

  return (
    <section id="projects" className="bg-gray-800 py-12 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              imageUrl={project.imageUrl}
              title={project.title}
              shortInfo={project.shortInfo}
              liveLink={project.liveLink}
              clientLink={project.clientLink}
              serverLink={project.serverLink}
              features={project.features}
              technologies={project.technologies}
              onDetailsClick={handleDetailsClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
