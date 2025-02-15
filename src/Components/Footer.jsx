import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

function Footer() {
    // Get the current year dynamically
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 text-gray-300 py-16">
            <div className="container mx-auto px-4 flex flex-col md:flex-row md:justify-between items-center">
                {/* Left Column: Logo and Name */}
                <div className="flex items-center mb-4 md:mb-0">
                    <img src="https://i.postimg.cc/63Gdp6ZP/Mohammad-Fakhrul-Islam.png" alt="Logo" className="h-12 w-12
           mr-2 rounded-full" />
                    <p className="text-lg font-bold">Mohammad Fakhrul Islam</p>
                </div>

                {/* Middle Column: Copyright */}
                <div className="text-center md:text-lg mb-4 md:mb-0">
                    <div className="mb-4">
                        <h3 className="text-2xl font-bold mb-2"></h3>
                        <p className="text-lg mb-2"><strong>Email:</strong> mfittazim@gmail.com</p>
                        <p className="text-lg mb-2"><strong>Mobile:</strong> +8801611869445</p>
                        <p className="text-lg mb-4"><strong>Location:</strong> Dhaka, Bangladesh</p>
                    </div>
                    <p>&copy; {currentYear} Mohammad Fakhrul Islam. All Rights Reserved.</p>
                </div>

                {/* Right Column: Social Media Links */}
                <div className="flex items-center justify-center md:justify-end space-x-4">
                    <a href="https://www.linkedin.com/in/mohammad-fakhrul-islam-tazim" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition duration-300">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://github.com/tazim5032" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition duration-300">
                        <FaGithub size={24} />
                    </a>
                    <a href="https://www.facebook.com/tazimulislam.salam" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition duration-300">
                        <FaFacebook size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
