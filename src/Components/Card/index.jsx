// import { lazy ,Suspense} from 'react'
// import Loading from'../../Utils/Loading'
// const Boton = lazy(() => delayForDemo( import('../Boton')))
import Boton from '../Boton'
// function delayForDemo(promise) {
// 	return new Promise(resolve => {
// 	  setTimeout(resolve, 5000);
// 	}).then(() => promise);
//   }

const Card = (props) => {
	let nuevoMarco = ''
	if (props.marco === '1') {
		nuevoMarco = 'px-7 pt-11 pb-4 w-screen  max-w-full lg:border'
	} else if (props.marco === '2') {
		nuevoMarco = 'px-6 pt-8 pb-1 border-b lg:border-r'
	}
	
	return (
		<div className={`lg:flex ${props.icon ? 'lg:w-1/2' : ''}`}>
			{props.imagen && (
				<a
					href={props.referencia}
					className='block bg-pic01 w-full aspect-square'
				>
					<img
						src={props.imagen}
						alt='imagen1'
						className='w-full  aspect-square border  border-r-0 '
						loading="lazy"
					/>
				</a>
			)}
			<div className={nuevoMarco}>
				<div className=' sm:flex sm:items-center sm:space-x-3 '>
					{props.icon && <span className='block mb-5 sm:mb-3'>{props.icon}</span>}
					<h1 className={`${props.sizeTittle} font-bold`}>{props.titulo}</h1>	
				</div>
			
				<p className='select-none mb-7'>{props.texto}</p>
				{props.referencia && (
					<Boton referencia={props.referencia} Titulo='LEARN MORE' />	
					// <Suspense fallback= {<Loading/>}>				
					// </Suspense>
					
				)}
			</div>
		</div>
	)
}
export default Card
