import Boton from '../Boton'
const Form = () => {
	return (
		<form method='post' action='#'>
			<div className='flex flex-col mb-8 '>
				<div className='sm:flex sm:flex-row justify-between'>
					<div className='pb-5  sm:w-[calc(50%-10px)]'>
						<label htmlFor='name' className='block pb-3 '>
							Name
						</label>
						<input
							type='text'
							name='name'
							id='name'
							autoComplete='given-name'
							className=' block  appearance-none focus:outline-none focus:border-white-500 focus:border-2 border rounded-md px-4  bg-transparent w-full h-10 '
						/>
					</div>
					<div className=' pb-5  sm:w-[calc(50%-10px)]'>
						<label htmlFor='email' className='block pb-3'>
							Email
						</label>
						<input
							type='text'
							name='email'
							id='email'
							autoComplete='email'
							className='block focus:outline-none focus:border-white-500 focus:border-2 border rounded-md px-4 appearance-none bg-transparent w-full h-10'
						/>
					</div>
				</div>

				<div className=' pb-5'>
					<label htmlFor='message' className='block mb-3'>
						Message
					</label>
					<textarea
						name='message'
						id='message'
						rows='5'
						className='block appearance-none bg-transparent border rounded-md focus:outline-none focus:border-white-500 focus:border-2 px-4 py-3 w-full resize'
					></textarea>
				</div>
			</div>
			<Boton referencia='#' Titulo="SEND MESSAGE" />
		</form>
	)
}
export default Form
