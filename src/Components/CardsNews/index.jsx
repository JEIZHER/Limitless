import React from 'react'
import Boton from '../Boton'

const CardsNews = (props) => {
	return (
		<div className={`lg:flex ${props.icon ? 'lg:w-1/2' : ''}`}>
			{props.imagen && (
				<a href={props.referencia} className='block  w-full aspect-square'>
					<img
						src={props.imagen}
						alt='imagen1'
						className='w-full  aspect-square border  border-r-0 '
						loading='lazy'
					/>
				</a>
			)}
			<div className='px-7 pt-11 pb-4 w-screen  max-w-full lg:border'>
				<div className=' sm:flex sm:items-center sm:space-x-3 '>
					<h1 className='text-2xl sm:text-3xl mb-4 font-bold'>
						{props.titulo}
					</h1>
				</div>

				<p className='select-none mb-7'>{props.texto}</p>
				{props.referencia && (
					<Boton referencia={props.referencia} Titulo='LEARN MORE' />
				)}
			</div>
		</div>
	)
}
export default React.memo(CardsNews)
