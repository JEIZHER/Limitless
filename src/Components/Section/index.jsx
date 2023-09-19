import Card from '../Card'
import Boton from '../Boton'

const Section = (props) => {
	return (
		<div
			// className={`${
			// 	!props.data_sec
			// 		? ' bg-gradient-to-l from-violet-800 to-blue-700   w-auto'
			// 		: ''
			// }`}
		>
			<section
				id={props.id}
				className={`flex flex-col justify-center pb-10 px-7 pt-12 sm:pt-24 lg:pt-12 sm:px-16 ${props.background}`}
			>
				<Card
					sizeTittle={props.sizeTittle}
					titulo={props.titulo}
					texto={props.texto}
				/>
				<div
					className={`${
						props.marco === '2'
							? 'flex flex-col flex-wrap lg:flex-row border border-b-0 lg:border-r-0 lg:border-b-0 rounded-sm mb-8'
							: ''
					}`}
				>
					{props.data_sec?.map((dat, index) => (
						<Card
							key={index}
							sizeTittle='text-2xl sm:text-3xl mb-4'
							titulo={dat.titulo}
							texto={dat.texto}
							referencia={dat.referencia}
							imagen={dat.imagen}
							icon={dat.icon}
							marco={props.marco}
						/>
					))}
				</div>

				{props.objet && props.objet}
				{props.referencia && (
					<Boton referencia={props.referencia} Titulo='LEARN MORE' />
				)}
			</section>
		</div>
	)
}
export default Section
