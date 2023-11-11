import React from 'react'
import { Link } from 'react-router-dom'
const CardsCryptos = (props) => {
	return (
		<div
			id={props.id}
			className={`text-slate-800 border  rounded-lg bg-slate-200 bg-opacity-20 ${
				props.orden === 'blocks'
					? 'px-3 pt-8 pb-1 w-[230px] '
					: 'flex items-center gap-2 w-full h-12'
			}`}
		>
			<div
				className={`hover:shadow-accent hover:shadow-md cursor-pointer  bg-slate-300  rounded-lg pl-2 ${
					props.orden === 'blocks' ? '' : 'w-[230px] my-1 ml-3'
				}`}
			>
				<Link to={"/Graficos"} state={props.symbol+'USDT'} className='flex  items-center  space-x-3'>
				<img src={props.icon} alt={props.id} className='h-7 w-7' loading='lazy' />
				<h1 className=' text-2xl sm:text-3xl mb-1 font-bold'>{props.symbol}</h1>
				</Link>

			</div>
			<div className='flex flex-row justify-between'>
				<div className={`my-3 text-xl text-white font-semibold tracking-[2px] ${props.orden === 'blocks' ? '' : 'flex'}`} >
					<p
						className={` ${props.orden === 'blocks' ? 'mb-2' : 'hidden'}`}
					>
						Current price :
					</p>
					<p className='   px-2 rounded-lg w-40 bg-gray-900'>
						{props.price}
					</p>
					<p className={`hidden text-[#0ECB81] px-2 ml-2 rounded-lg  w-40 bg-slate-800 ${props.orden === 'blocks' ? 'hidden' : 'lg:block'}`}>
						{props.higth}
					</p>
					<p className={`hidden text-[#F6465D] px-2 ml-2 rounded-lg  w-40 bg-slate-800 ${props.orden === 'blocks' ? 'hidden' : 'lg:block'}`}>
						{props.low}
					</p>
				</div>
			
				<canvas
					id={`I${props.id}`}
					width='20'
					height='50'
					className={` ${props.orden === 'blocks' ? 'my-3' : 'my-0 mx-4'}`}
				></canvas>
			</div>
		</div>
	)
}
export default React.memo(CardsCryptos)
