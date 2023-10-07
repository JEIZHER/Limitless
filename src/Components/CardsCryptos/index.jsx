import React from 'react'

const CardsCryptos = (props) => {
	return (
		<div id={props.id} className='px-4 pt-8 pb-1 w-[230px] text-slate-800 border rounded-lg bg-slate-200 bg-opacity-20 '>
			<div className='hover:shadow-accent hover:shadow-md cursor-pointer flex items-center  space-x-3 bg-slate-300  rounded-lg pl-2'>
				<img src={props.icon} alt="props.id" className='h-7 w-7' />
				<h1 className=' text-2xl sm:text-3xl mb-1 font-bold'>{props.symbol}</h1>
			</div>
			<div className=' my-3'>
			<p>Price :</p>
			<p className='text-xl font-bold ' >{props.price}</p>	
			</div>
			<div className=' mb-3'>
			<p>Volume :</p>
			<p></p>
			</div>
			
		</div>
	)
}
export default React.memo(CardsCryptos)
