import React ,{useContext,} from 'react'
import Boton from '../Boton'
// import {ContextDatCryptos} from '../../Context'

const CardsCryptos = (props) => {
	// const context =useContext(ContextDatCryptos)
    // console.log(context.BTC) 
		return (
		<div id={props.id} className='lg:flex lg:w-1/2 '>

			<div className='px-6 pt-8 pb-1 border-b lg:border-r'>
				<div className=' sm:flex sm:items-center sm:space-x-3 '>
					{props.icon && <span className='block mb-5 sm:mb-3'>{props.icon}</span>}
					<h1 className= ' text-2xl sm:text-3xl mb-4 font-bold'>{props.titulo}</h1>	
				</div>
			
				<p className='select-none mb-7'>{props.texto}</p>
				{props.referencia && (
					<Boton referencia={props.referencia} Titulo='LEARN MORE' />		
					
				)}
			</div>
		</div>
	)
}
export default React.memo(CardsCryptos)
