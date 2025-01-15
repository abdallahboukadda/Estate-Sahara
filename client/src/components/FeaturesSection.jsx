import React from 'react';
import '../style.css';
const FeaturesSection = () => {
    return (
        <section class="features-1 py-8 relative z-8 text-center bg-[rgba(0,32,74,0.05)]">
            <div class="container mx-auto">
                <div class="flex flex-wrap">
                <div className="w-full sm:w-1/2 lg:w-1/4 p-4" data-aos="fade-up" data-aos-delay="500">
                        <div className="box-feature bg-white rounded-md p-8 mb-8">
                            <span className="flaticon-building text-blue-900 text-6xl mb-4 block">
                                <img src="images/house.png" alt=""  className="w-20 h-20 mx-auto mb-4" />
                            </span>
                            <h3 className="mb-3 text-lg font-bold">Property for Sale</h3>
                            <p className="text-gray-500 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptates, accusamus.
                            </p>
                            <p><a href="#" className="learn-more relative inline-block pb-2 text-blue-900">Learn More</a></p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 p-4" data-aos="fade-up" data-aos-delay="500">
                        <div className="box-feature bg-white rounded-md p-8 mb-8">
                            <span className="flaticon-building text-blue-900 text-6xl mb-4 block">
                                <img src="images/building.png" alt=""  className="w-20 h-20 mx-auto mb-4" />
                            </span>
                            <h3 className="mb-3 text-lg font-bold">Property for Sale</h3>
                            <p className="text-gray-500 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptates, accusamus.
                            </p>
                            <p><a href="#" className="learn-more relative inline-block pb-2 text-blue-900">Learn More</a></p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 p-4" data-aos="fade-up" data-aos-delay="500">
                        <div className="box-feature bg-white rounded-md p-8 mb-8">
                            <span className="flaticon-building text-blue-900 text-6xl mb-4 block">
                                <img src="images/real-estate-agent.png" alt=""  className="w-20 h-20 mx-auto mb-4" />
                            </span>
                            <h3 className="mb-3 text-lg font-bold">Property for Sale</h3>
                            <p className="text-gray-500 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptates, accusamus.
                            </p>
                            <p><a href="#" className="learn-more relative inline-block pb-2 text-blue-900">Learn More</a></p>
                        </div>
                    </div>
                    <div className="w-full sm:w-1/2 lg:w-1/4 p-4" data-aos="fade-up" data-aos-delay="500">
                        <div className="box-feature bg-white rounded-md p-8 mb-8">
                            <span className="flaticon-building text-blue-900 text-6xl mb-4 block">
                                <img src="images/houseSale.png" alt=""  className="w-20 h-20 mx-auto mb-4" />
                            </span>
                            <h3 className="mb-3 text-lg font-bold">Property for Sale</h3>
                            <p className="text-gray-500 mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Voluptates, accusamus.
                            </p>
                            <p><a href="#" className="learn-more relative inline-block pb-2 text-blue-900">Learn More</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default FeaturesSection;
