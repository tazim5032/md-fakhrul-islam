import { useState } from "react";

const ProjectCard = ({ imageUrl, title, shortInfo, liveLink, clientLink, serverLink, features, technologies, onDetailsClick }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleDetailsClick = () => {
    setModalOpen(true);
    onDetailsClick();
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className=" rounded overflow-hidden shadow-lg  m-4">
      <img className="w-full h-64 object-cover object-center" src={imageUrl} alt={title} />
      <div className="px-6 py-4 ">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-justify">{shortInfo}</p>
      </div>
      <div className="px-6 py-4">
        <div className="flex justify-between gap-2">
          <button
            onClick={() => window.open(liveLink, '_blank')}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Live Link
          </button>
          <button
            onClick={() => window.open(clientLink, '_blank')}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Client Link
          </button>
          <button
            onClick={() => window.open(serverLink, '_blank')}
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Server Link
          </button>
        </div>
        <button
          onClick={handleDetailsClick}
          className="mt-2 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Details
        </button>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg overflow-y-auto">
            <h2 className="text-2xl text-gray-700 font-bold mb-4">{title}</h2>
            <p className="text-gray-700 mb-4">{shortInfo}</p>
            <h3 className="text-lg font-bold mb-2 text-black">Top Features:</h3>
            <ul className="list-disc pl-6 mb-4 text-black">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <h3 className="text-lg font-bold mb-2 text-black">Used Technologies:</h3>
            <ul className="list-disc pl-6 mb-4 text-black">
              {technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <button
              className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded w-full"
              onClick={closeModal}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
