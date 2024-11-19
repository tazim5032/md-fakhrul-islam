const Education = () => {
  // Dummy data for education
  const education = [
    {
      id: 1,
      institution: 'Rajshahi University of Engineering & Technology',
      degree: 'Bachelor of Science in Computer Science & Engineering',
      year: '2018 - 2023',
      location: 'Rajshahi, Bangladesh',
    },
    {
      id: 2,
      institution: 'Birshreshtha Noor Mohammad Public College',
      degree: 'Higher Secondary School Certificate (HSC)',
      year: '2015 - 2017',
      location: 'Dhaka, Bangladesh',
    },
    {
      id: 3,
      institution: 'Feni Government Pilot High School',
      degree: 'Secondary School Certificate (SSC)',
      year: '2010 - 2015',
      location: 'Feni, Bangladesh',
    },
    {
      id: 4,
      institution: 'Imperial Kinder Garten',
      degree: 'Primary School Certificate (PSC)',
      year: '2003 - 2009',
      location: 'Feni, Bangladesh',
    },
  ];

  return (
    <section id="education" className="bg-gray-800 py-12 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Education</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu) => (
            <div key={edu.id} className="p-6 bg-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold">{edu.institution}</h3>
              <p className="text-lg">{edu.degree}</p>
              <p className="">{edu.year}</p>
              <p className="">{edu.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
