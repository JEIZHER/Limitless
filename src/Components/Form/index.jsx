import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'
const Form = () => {
	
	const form = useRef()
	const captcha = useRef(null)
	const onChange = () => {
		const btn = document.getElementById('B_send')
		if (captcha.current.getValue()) {
			 btn.disabled = false
		} else {
			 btn.disabled = true
		}
	}
	const sendEmail = (e) => {
		e.preventDefault()
		const btn = document.getElementById('B_send')
		btn.value = 'Sending...'

		emailjs
			.sendForm(
				import.meta.env.VITE_SERVICE_ID,
				import.meta.env.VITE_TEMPLATE_ID,
				form.current,
				import.meta.env.VITE_PUBLIC_KEY
			)
			.then(
				() => {
					btn.value = 'SEND'
					captcha.current.reset()
					alert('The message has been sent successfully')
					btn.classList.remove('opacity-100')
					// btn.classList.add('opacity-50')
					// btn.classList.add('disabled')
					 btn.disabled 
				},
				(error) => {
					btn.value = 'SEND'
					alert('Apologies, an error has occurred....' + error.text)
				}
			)
	}
	return (
		<div className='lg:flex lg:gap-6'>
			<form ref={form} onSubmit={sendEmail}>
				<div className='flex flex-col mb-3 '>
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
								className='form-inputs h-10 '
								required
								placeholder='Name'
							/>
						</div>
						<div className=' pb-5  sm:w-[calc(50%-10px)]'>
							<label htmlFor='email' className='block pb-3'>
								Email
							</label>
							<input
								type='email'
								name='email'
								id='email'
								autoComplete='email'
								className='form-inputs h-10'
								required
								placeholder='your email'
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
							className='form-inputs py-3 resize-none'
							required
							placeholder='Message'
						></textarea>
					</div>
				</div>

				{/* <div className="g-recaptcha mb-5" data-sitekey= {import.meta.env.VITE_RECAPTCHA_KEY} theme='dark'></div>			  */}
				<ReCAPTCHA
					ref={captcha}
					onChange={onChange}
					sitekey={import.meta.env.VITE_RECAPTCHA_KEY}
					className='mb-5'
				/>

				<label>
					<input
						id='B_send'
						type='submit'
						value='SEND'
						disabled
						className='flex flex-col min-w-[100px] max-w-[300px] items-center  border rounded-full mb-7  w-full py-2 text-[20px] font-bold tracking-[2.2px] sm:max-w-[250px] hover:shadow-accent hover:transition-shadow hover:shadow-md cursor-pointer  disabled:opacity-50 disabled:pointer-events-none '
					/>
				</label>
			</form>

			<section className='pt-12 mt-12 border-t lg:pt-0 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-6'>
				<ul className='mb-8'>
					<li>
						<h1 className='text-1xl font-bold mb-3'>Address</h1>
						<span>
							12345 Somewhere Road #654
							<br />
							Nashville, TN 00000-0000
							<br />
							USA
						</span>
					</li>
					<li className='mt-6'>
						<h1 className='text-1xl font-bold mb-3'>Email</h1>
						<a href='#'>cripto-limitless.gmail.com</a>
					</li>
					<li className='mt-6'>
						<h1 className='text-1xl font-bold mb-3'>Phone</h1>
						<span>(000) 000-0000</span>
					</li>
					<li className='mt-6'>
						<h1 className='text-1xl font-bold mb-3'>Social</h1>
						<ul className='mb-8'>
							<li className='inline-block pr-3'>
								<a href='#' loading='lazy' className='fa-brands fa-twitter'>
									<span className='sr-only'>Twitter</span>
								</a>
							</li>
							<li className='inline-block pr-3'>
								<a href='#' loading='lazy' className='fa-brands fa-facebook'>
									<span className='sr-only'>Facebook</span>
								</a>
							</li>
							<li className='inline-block pr-3'>
								<a href='#' loading='lazy' className='fa-brands fa-github'>
									<span className='sr-only'>GitHub</span>
								</a>
							</li>
							<li className='inline-block pr-3'>
								<a href='#' loading='lazy' className='fa-brands fa-instagram'>
									<span className='sr-only'>Instagram</span>
								</a>
							</li>
							<li className='inline-block pr-3'>
								<a href='#' loading='lazy' className='fa-brands fa-linkedin'>
									<span className='sr-only'>LinkedIn</span>
								</a>
							</li>
						</ul>
					</li>
				</ul>
			</section>
		</div>
	)
}
export default React.memo(Form)
