import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';
import { Footer } from '../components/footer';
import AgentsSection from '../components/AgentsSection ';
import FeaturesSection from '../components/FeaturesSection';
import Section from '../components/Section';

export default function Home() {
	const [ offerListings, setOfferListings ] = useState([]);
	const [ saleListings, setSaleListings ] = useState([]);
	const [ rentListings, setRentListings ] = useState([]);
	SwiperCore.use([ Navigation ]);
	console.log(offerListings);

	useEffect(() => {
		Footer;
		const fetchOfferListings = async () => {
			try {
				const res = await fetch('/api/listing/get?offer=true&limit=4');
				const data = await res.json();
				setOfferListings(data);
				fetchRentListings();
			} catch (error) {
				console.log(error);
			}
		};
		const fetchRentListings = async () => {
			try {
				const res = await fetch('/api/listing/get?type=rent&limit=4');
				const data = await res.json();
				setRentListings(data);
				fetchSaleListings();
			} catch (error) {
				console.log(error);
			}
		};

		const fetchSaleListings = async () => {
			try {
				const res = await fetch('/api/listing/get?type=sale&limit=4');
				const data = await res.json();
				setSaleListings(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchOfferListings();
	}, []);

	return (
		<div className="bg-white">
			<Swiper navigation className="swiper-container">
				{offerListings &&
					offerListings.length > 0 &&
					offerListings.map((listing) => (
						<SwiperSlide key={listing._id} className="swiper-slide">
							<div
								style={{
									background: `url(${listing.imageUrls[0]}) center no-repeat`,
									backgroundSize: 'cover'
								}}
								className="h-[800px] rounded-lg shadow-lg"
								aria-label={`Listing ${listing._id}`}
							/>
						</SwiperSlide>
					))}
			</Swiper>

			<div className="flex flex-col gap-6 py-28 px-3 max-w-6xl mx-auto text-center">
				<h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
					Find your next <span className="text-slate-500">perfect</span>
					<br />
					place with ease
				</h1>
				<p className="text-gray-400 text-sm sm:text-base">
					Sahara Estate is the best place to find your next perfect place to live.
					<br />
					We have a wide range of properties for you to choose from.
				</p>
        <div className='flex justify-center'>
				<Link
					to="/search"
					className=" rounded-full bg-emerald-800 hover:bg-emerald-500 p-3 w-3/6
           border text-white font-bold "
				>
					Let's get started...
				</Link>
        </div>
			</div>

			<div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 ">
				{offerListings &&
				offerListings.length > 0 && (
					<div className="">
						<div className="my-3 flex justify-between items-center">
							<h2 className="text-2xl font-semibold text-slate-600">Recent offers</h2>
							<Link className="text-sm text-blue-800 hover:underline" to="/search?offer=true">
								Show more offers
							</Link>
						</div>
						<div className="flex flex-wrap gap-4">
							{offerListings.map((listing) => <ListingItem listing={listing} key={listing._id} />)}
						</div>
					</div>
				)}
				{rentListings &&
				rentListings.length > 0 && (
					<div className="">
						<div className="my-3 flex justify-between items-center">
							<h2 className="text-2xl font-semibold text-slate-600">Recent places for rent</h2>
							<Link className="text-sm text-blue-800 hover:underline" to="/search?type=rent">
								Show more places for rent
							</Link>
						</div>
						<div className="flex flex-wrap gap-4">
							{rentListings.map((listing) => <ListingItem listing={listing} key={listing._id} />)}
						</div>
					</div>
				)}
				{saleListings &&
				saleListings.length > 0 && (
					<div className="">
						<div className="my-3 flex justify-between items-center">
							<h2 className="text-2xl font-semibold text-slate-600">Recent places for sale</h2>
							<Link className="text-sm text-blue-800 hover:underline" to="/search?type=sale">
								Show more places for sale
							</Link>
						</div>
						<div className="flex flex-wrap gap-4">
							{saleListings.map((listing) => <ListingItem listing={listing} key={listing._id} />)}
						</div>
					</div>
				)}
			</div>
			<FeaturesSection />
			<Section />
			<AgentsSection />
			<Footer />
		</div>
	);
}
