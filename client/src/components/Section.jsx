import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Section = () => {
	const [ offerListings, setOfferListings ] = useState([]);

	const statsData = [
		{ number: '3298', label: '# of Buy Properties', delay: '300' },
		{ number: '2181', label: '# of Sell Properties', delay: '400' },
		{ number: '9316', label: '# of All Properties', delay: '500' },
		{ number: '7191', label: '# of Agents', delay: '600' }
	];

	useEffect(() => {
		const fetchOfferListings = async () => {
			try {
				const res = await fetch('/api/listing/get?offer=true&limit=4');
				const data = await res.json();
				setOfferListings(data);
			} catch (error) {
				console.error(error);
			}
		};
		fetchOfferListings();
	}, []);

	return (
		<div className="section-4 bg-gray-200">
			<div className="container mx-auto">
				<div className="flex justify-center text-center mb-5">
					<div className="lg:w-2/5">
						<h2 className="text-4xl font-bold text-primary mb-6 mt-4 text-gray-900">
							Let's find a home that's perfect for you
						</h2>
						<p className="text-gray-400 mb-4">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam enim pariatur similique
							debitis vel nisi qui reprehenderit.
						</p>
					</div>
				</div>

				<div className="flex flex-wrap justify-between mb-10">
					<div className="lg:w-4/12">
						<Feature
							icon="images/home.png"
							title="2M Properties"
							description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste."
						/>
						<Feature
							icon="images/user.png"
							title="Top Rated Agents"
							description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste."
						/>
						<Feature
							icon="images/security.png"
							title="Legit Properties"
							description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum iste."
						/>
					</div>

					<div className="lg:w-7/12 order-last lg:order-first mb-5 lg:mb-0">
						<div className="relative">
							{offerListings.length > 0 ? (
								<Link to={`/listing/${offerListings[0]._id}`}>
									<img
										src={offerListings[0].imageUrls[0]} 
										alt={`Listing 1`}
										className="w-12/12 object-cover"
									/>
								</Link>
							) : (
								<p>Loading images...</p>
							)}
						</div>
					</div>
				</div>
				<div className="flex flex-wrap justify-around mt-5">
					{statsData.map((stat, index) => (
						<Stat key={index} number={stat.number} label={stat.label} delay={stat.delay} />
					))}
				</div>
			</div>
		</div>
	);
};

const Feature = ({ icon, title, description }) => (
	<div className="flex items-center mb-20 mt-6 feature-h">
		<span className="flex-none w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center transition-transform duration-300 transform hover:scale-105 wrap-icon">
			<img src={icon} alt={title} className="w-8 " />
		</span>
		<div className="ml-4 feature-text">
			<h3 className="text-2xl font-semibold heading">{title}</h3>
			<p className="text-gray-900">{description}</p>
		</div>
	</div>
);

const Stat = ({ number, label, delay }) => (
	<div className={`w-1/2 sm:w-1/4 mb-5 text-center`} data-aos="fade-up" data-aos-delay={delay}>
		<div className="mb-5">
			<span className="block text-cyan-700 text-5xl mb-1 font-bold text-primary">{number}</span>
			<span className="block text-gray-400 text-xl">{label}</span>
		</div>
	</div>
);

export default Section;
