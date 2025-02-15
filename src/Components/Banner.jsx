function Banner() {
  return (
    <section className="bg-gray-800
    p-10 mt-16 text-white">
      <div className="container mx-auto flex flex-col
      md:flex-row items-center">
        <div className="md:w-1/2 p-4 text-center md:text-left">
          <h1 className="text-5xl font-extrabold mb-4">Hi, I'm Mohammad Fakhrul Islam</h1>
          <p className="text-2xl mb-6">
            Junior Software Developer
          </p>
          <p className="text-lg mb-4">
            Passionate about Software Engineering, continuous learning, and delivering innovative solutions with the latest JavaScript frameworks.
          </p>
          <div className="mt-4">
            <a href="#projects" className="inline-block bg-white text-indigo-700
             font-semibold py-2 px-4 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl">
              View My Projects
            </a>
          </div>
        </div>
        <div className="md:w-1/2 p-4 flex justify-center md:justify-end">
          <img src="https://i.postimg.cc/NjfmrkTm/tt.png" alt="Banner" className="w-3/4 md:w-full h-auto rounded-lg shadow-lg transform transition-transform hover:scale-105" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
