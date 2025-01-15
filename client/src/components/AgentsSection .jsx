import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const socialIcons = {
    twitter: faTwitter,
    facebook: faFacebook,
    linkedin: faLinkedin,
    instagram: faInstagram,
};

const AgentsSection = () => {
    return (
        <div className=" py-12">
            <div className="container mx-auto">
                <div className="text-center mb-10">
                    <div className="mb-10">
                        <h2 className=" text-gray-900 font-bold text-primary text-4xl mb-4">
                            Our Agents
                        </h2>
                        <p className="text-gray-600">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Atque facere tempore asperiores velit, quibusdam cum deserunt tempora ratione possimus
                            doloribus debitis pariatur veniam
                            eligendi doloremque reprehenderit. Aperiam voluptas neque quidem.
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4">
                    {['James Doe', 'Jean Smith', 'Alicia Huston'].map((name, index) => (
                        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-10">
                            <div className="bg-white text-center rounded-lg shadow-lg overflow-hidden relative pt-16">
                                <div className="relative w-24 h-24 mx-auto mb-4 mt-[-45px] z-10" style={{ margin: '-45px auto 0 auto' }}>
                                    <img
                                        src={`images/person_${index + 1}-min.jpg`}
                                        alt="Agent"
                                        className="w-full h-full object-cover rounded-full border-4 border-white"
                                    />
                                </div>
                                <div className="p-6">
                                    <h2 className="text-lg mb-2">
                                        <a href="#" className="text-gray-900 hover:text-blue-600">{name}</a>
                                    </h2>
                                    <span className="block text-gray-500 mb-3">Real Estate Agent</span>
                                    <p className="text-gray-300 text-lg">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                                        . Facere officiis inventore cumque tenetur laboriosam,
                                        minus culpa doloremque odio, neque molestias?
                                    </p>
                                    <ul className="flex justify-center mt-4 space-x-3">
                                        {Object.keys(socialIcons).map((social, idx) => (
                                            <li key={idx}>
                                                <a href="#" className="bg-blue-900 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out hover:bg-transparent hover:border hover:border-blue-900 hover:text-blue-900">
                                                    <FontAwesomeIcon icon={socialIcons[social]} />
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AgentsSection;
