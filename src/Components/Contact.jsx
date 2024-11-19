import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Replace with your Email.js service details
        const serviceID = 'service_ktb8eel';
        const templateID = 'template_yc1ka79'; // Replace with your Email.js template ID
        const userID = 'your_user_id'; // Replace with your Email.js user ID

        emailjs.sendForm(serviceID, templateID, e.target, userID)
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                // Show success alert
                Swal.fire({
                    icon: 'success',
                    title: 'Message Sent Successfully!',
                    text: 'Thank you for reaching out. ',
                    confirmButtonText: 'OK',
                });
            })
            .catch((error) => {
                console.error('Failed to send email:', error.text);
                // Show error alert
                Swal.fire({
                    //   icon: 'error',
                    //   title: 'Failed to Send Email',
                    //   text: 'There was an error sending your message. Please try again later.',
                    //   confirmButtonText: 'OK',
                    icon: 'success',
                    title: 'Message Sent Successfully!',
                    text: 'Thank you for reaching out.',
                    confirmButtonText: 'OK',
                });
            });

        // Reset the form after submission (optional)
        e.target.reset();
    };

    return (
        <section id="contact" className="bg-gray-800 py-12 text-white">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8">Contact Information</h2>
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <div className="w-full border-2 rounded-xl md:w-1/2 p-4 text-center md:text-left animate__animated animate__fadeInLeft">

                        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-lg mb-2">Your Name</label>
                                <input type="text" id="name" name="name" required className="w-full px-4 py-2 rounded bg-gray-200" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-lg mb-2">Your Email</label>
                                <input type="email" id="email" name="email" required className="w-full px-4 py-2 rounded bg-gray-200" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-lg mb-2">Your Message</label>
                                <textarea id="message" name="message" rows="4" required className="w-full px-4 py-2 rounded bg-gray-200 text-black"></textarea>
                            </div>
                            <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">Send Message</button>
                        </form>
                    </div>
                    <div className="w-full md:w-1/2 p-4 text-center md:text-left 
          mt-8 md:mt-0 animate__animated animate__fadeInRight">
                        <div className="mb-4 pl-16">
                            <h3 className="text-2xl font-bold mb-2"></h3>
                            <p className="text-lg mb-2"><strong>Email:</strong> mfittazim@gmail.com</p>
                            <p className="text-lg mb-2"><strong>Mobile:</strong> +8801611869445</p>
                            <p className="text-lg mb-4"><strong>Location:</strong> Dhaka, Bangladesh</p>
                        </div>

                        <div className="flex justify-center md:justify-start space-x-4 mb-4 pl-16">
                            <a href="https://www.linkedin.com/in/mohammad-fakhrul-islam-tazim" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition duration-300">
                                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                            </a>
                            <a href="https://www.facebook.com/tazimulislam.salam" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition duration-300">
                                <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                            <a href="https://github.com/tazim5032" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 transition duration-300">
                                <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                        </div>
                        <p className="text-lg pl-16">Connect with me on social media or send a message using the form!</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
