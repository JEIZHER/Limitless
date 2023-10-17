import { Link } from 'react-router-dom'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const Carousel = (data) => {
	const items = data.data?.map((coin,index) => {
		let profit = coin?.price_change_percentage_24h >= 0
		return (
			<Link
				className='flex flex-col items-center text-white uppercase cursor-pointer'
				to={'/'}
				key={index}
			>
				<img src={coin?.image} alt={coin.name} className='h-12 w-12 mb-3 ' />
				<span>
					{coin?.symbol}
					&nbsp;
					<span
						className={`${
							profit > 0 ? 'text-[#0ECB81]' : 'text-red-600'
						} font-semibold`}
					>
						{profit && '+'}
						{coin?.price_change_percentage_24h?.toFixed(2)}%
					</span>
				</span>
				<span className='text-xl font-semibold'>
					{coin?.current_price.toFixed(2)}
				</span>
			</Link>
		)
	})
	const responsive = {
		0: {
			items: 2,
		},
		512: {
			items: 3,
		},
		1024: {
			items: 5,
		},
	}

	return (
		<div className='flex items-center h-1/3 '>
			<AliceCarousel
				mouseTracking
				infinite
				autoPlayInterval={1000}
				animationDuration={1500}
				disableDotsControls
				disableButtonsControls
				responsive={responsive}
				items={items}
				autoPlay
			/>
		</div>
	)
}
export default Carousel
