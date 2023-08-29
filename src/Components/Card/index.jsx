
const Card = (props) => {
    let nuevoMarco=''
    if (props.marco==='1')
    {
    	nuevoMarco='px-7 pt-11 pb-4 w-screen max-w-full'
    }else if(props.marco==='2')
    {
   	    nuevoMarco='px-6 pt-8 pb-1 border-b '
    }

	return (
		<div>
			{props.imagen && (
				<a href={props.referencia} className=' block bg-pic01 bg-center w-full h-60'>
					<img
						src={props.imagen}
						alt=''
						data-position='25% 25%'
						className='w-full h-60'
					/>
				</a>
			)}
			<div className={nuevoMarco}>
				{props.icon && <span className='block mb-5'>{props.icon}</span>}
				<h1 className={`text-${props.sizeTittle} font-bold mb-4`}>{props.titulo}</h1>
				<p className='mb-7'>{props.texto}</p>
				{props.referencia && (
					<ul >
						<li >
							<a
								href={ props.referencia !='#'?`#${props.referencia}`:'#'}
								className='flex flex-col min-w-[100px] items-center  border rounded-full mb-7  w-full py-2 text-[9px] font-bold tracking-[2.2px]'
							>
								{' '}
								LEARN MORE
							</a>
						</li>
					</ul>
				)}
			</div>
		</div>
	)
}
export default Card
