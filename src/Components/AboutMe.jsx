function AboutMe() {
  const resumeUrl = 'https://drive.google.com/file/d/1jSkeameTf0A-FxBSjxbmuUMq4X_MC1l_/view'; // Replace with your resume URL

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = './Mohammad Fakhrul Islam Resume.pdf'; // Path to your resume file
    link.download = 'resume.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="bg-gray-800 py-12 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 p-4">
          <img
            src="https://i.postimg.cc/63Gdp6ZP/Mohammad-Fakhrul-Islam.png"
            alt="Tazim"
            className="rounded-full w-96 h-96 mx-auto md:mx-0"
          />
        </div>
        <div className="w-full md:w-1/2 p-4 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg mb-4 text-justify">
            I am a dynamic software developer specializing in the MERN stack,
            adept at creating responsive and user-friendly websites. Passionate
            about problem-solving, continuous learning, and leveraging the
            latest JavaScript frameworks to deliver innovative solutions.
            Committed to producing high-quality code and collaborating
            effectively within teams to achieve project objectives.
          </p>
          <div className="mt-4 space-x-4">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            >
              View Resume
            </a>
            <button
              onClick={handleDownloadResume}
              className="inline-block bg-gray-700 
              text-white font-bold py-2 px-4 rounded hover:bg-gray-600 transition duration-300"
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
