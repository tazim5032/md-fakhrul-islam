import { FaGithub } from 'react-icons/fa';
import { SiCodeforces, SiHackerrank, SiLeetcode } from 'react-icons/si';

function ProfileLinks() {
 
  const githubUrl = 'https://github.com/tazim5032';
  const codeforcesUrl = 'https://codeforces.com/profile/tazim';
  const leetcodeUrl = 'https://leetcode.com/u/tazim220';
  const hackerrankUrl = 'https://www.hackerrank.com/profile/mfittazim22';

  return (
    <section id="profile-links" className="bg-gray-800 text-white py-12">
      <div className="container mx-auto">
      <div className="mx-auto max-w-3xl">
          <h3 className="text-4xl font-bold mb-4 text-center">Problem Solving and Competitive Programming</h3>
          <p className="text-lg text-center text-center">
            I excel in problem-solving and competitive programming, with a passion for tackling algorithmic challenges
            and honing my skills on platforms like Codeforces, LeetCode, and HackerRank. Through these platforms, I
            continuously strive to enhance my problem-solving abilities and algorithmic thinking.
          </p>
        </div>
        
        <div className="flex justify-center space-x-4 mb-4 mt-10">
          
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition duration-300">
            <FaGithub size={36} />
          </a>
          <a href={codeforcesUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition duration-300">
            <SiCodeforces size={36} />
          </a>
          <a href={leetcodeUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition duration-300">
            <SiLeetcode size={36} />
          </a>
          <a href={hackerrankUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition duration-300">
            <SiHackerrank size={36} />
          </a>
        </div>
        <p className="text-lg text-center mb-8">
          Connect with me on these platforms to see more of my work and activities!
        </p>
        
      </div>
    </section>
  );
}

export default ProfileLinks;
