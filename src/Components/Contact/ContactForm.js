
import React, { useState } from "react";
import Swal from 'sweetalert2';
import Callicon from '../../Assets/Icon/Call.svg'
import Msgicon from '../../Assets/Icon/Msg.svg'

const ContactForm = () => {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "7350093b-0041-46a8-bb9b-bfdedd4440e3");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-center',
                showConfirmButton: false,
                timer: 3500,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: 'success',
                title: 'Thank You.',
                text: 'Our Team will contact you soon!',
            });
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };


    return (
        <div className="flex flex-col md:flex-row items-start justify-between p-8 md:p-[120px] bg-gray-100 min-h-screen">
            {/* Left Section: Contact Info */}
            <div className="md:w-1/2 w-full mb-8 md:mb-0 text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Let's Talk</h1>
                <p className="text-base md:text-lg text-gray-600 mb-8">
                    Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help.
                </p>
                <div className="md:flex items-center text-gray-700 mb-6">
                    <div className="flex items-center mr-8">
                        <span className="mr-2 text-2xl"><img src={Callicon} alt="Call Icon" /></span>
                        <span className="whitespace-nowrap text-base md:text-lg">+91 5678976543</span>
                    </div>
                    <div className="flex items-center my-2">
                        <span className="mr-2 text-2xl"><img src={Msgicon} alt="Message Icon" /></span>
                        <span className="text-base md:text-lg">kgapco@gmail.com</span>
                    </div>
                </div>
                <ul className="text-base md:text-lg text-gray-700">
                    <li className="mb-4"><a href="#" className="hover:underline">Instagram</a></li>
                    <li className="mb-4"><a href="#" className="hover:underline">Twitter</a></li>
                    <li><a href="#" className="hover:underline">Facebook</a></li>
                </ul>
            </div>

            {/* Right Section: Form */}
            <div className="bg-white p-6 md:p-[42px] w-full md:w-[540px] rounded-lg">
                <form onSubmit={onSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-left text-gray-700 mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            required
                            className="block w-full px-4 py-3 border-none rounded-md shadow-sm focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm bg-gray-50"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-left text-gray-700 mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            required
                            className="block w-full px-4 py-3 border-none rounded-md shadow-sm focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm bg-gray-50"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-left text-gray-700 mb-2">Select Service</label>
                        <select
                            className="block w-full px-4 py-3 border-none text-[#A7A7A7] rounded-md shadow-sm focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm bg-[#F8F8F8]"
                            required
                            name="Enquired for"
                        >
                            <option value="" disabled selected>Select Service</option>
                            <option value="Agri support Services">Agri support Services</option>
                            <option value="Our Financial Services">Our Financial Services</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-left text-gray-700 mb-2">Message</label>
                        <textarea
                            name="Message"
                            className="block w-full h-32 px-4 py-3 border-none rounded-md resize-none shadow-sm focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm bg-[#F8F8F8]"
                        ></textarea>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-[#5D8424] h-[56px] text-white flex justify-center px-4 py-3  text-lg font-medium transition duration-300"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default ContactForm;
