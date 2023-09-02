import Boton from '../Boton'
const Card = (props) => {
	let nuevoMarco = ''
	if (props.marco === '1') {
		nuevoMarco = 'px-7 pt-11 pb-4 w-screen  max-w-full sm:px-16   '
	} else if (props.marco === '2') {
		nuevoMarco = 'px-6 pt-8 pb-1 border-b'
	}

	return (
		<div className={` lg:flex ${props.icon ? 'lg:w-1/2' : ''}`}>
			{props.imagen && (
				<a
					href={props.referencia}
					className=' block bg-pic01 bg-center w-full h-[306px] lg:h-[390px] '
				>
					<img
						src={props.imagen}
						alt=''
						className='w-full h-[306px] lg:h-[390px]  '
					/>
				</a>
			)}
			<div className={nuevoMarco}>
				{props.icon && <span className='block mb-5'>{props.icon}</span>}
				<h1 className={`${props.sizeTittle} font-bold mb-4`}>{props.titulo}</h1>
				<p className='mb-7'>{props.texto}</p>
				{props.referencia && <Boton referencia={props.referencia} />}
			</div>
		</div>
	)
}
export default Card
