import { useState } from 'react'
import {
	Container,
	Grid,
	Typography,
	TextField,
	Button,
	Hidden,
} from '@mui/material'
import { Link } from 'react-router-dom'

function Register() {
	const [registerData, setRegisterData] = useState({})

	const handleSubmit = (e) => {
		console.log('form submitted')
	}

	const clear = () => {
		setRegisterData({})
	}

	return (
		<Container maxWidth='lg' className='loginContainer'>
			<Grid
				container
				direction='row'
				justifyContent='flex-start'
				alignItems='stretch'>
				<Hidden smDown>
					<Grid item md={5} className='registerLeft' />
				</Hidden>
				<Grid item md={5} sm={12} className='loginRight'>
					<Grid
						item
						container
						direction='column'
						justifyContent='flex-start'
						alignItems='center'>
						<Grid item className='loginHeaderBlock'>
							<Typography
								variant='h1'
								className='loginBlockHeader'>
								MgRONALD'S
							</Typography>
							<Typography className='loginBlockSubhead'>
								Welcome to the Team! We're glad to have you
								aboard!
							</Typography>
						</Grid>
						<Grid item className='loginFormBlock'>
							<Typography
								variant='caption'
								display='block'
								gutterBottom
								className='loginFormWarning'>
								This system is for MgRonald's employees only!
								Any unauthorized access is bad, mmkay?
							</Typography>
							<Typography
								variant='h4'
								className='loginFormHeader'>
								Sign up for an EBBS account!
							</Typography>
							<hr />
							<form>
								<TextField
									id='username'
									label='Username*'
									placeholder='Choose your @username!'
									helperText='Minimum of 8 characters, letters and numbers only!'
									fullWidth
									margin='dense'
									InputLabelProps={{ shrink: true }}
									variant='outlined'
									value={registerData.username}
									onChange={(e) =>
										setRegisterData({
											...registerData,
											username: e.target.value,
										})
									}
								/>
								<TextField
									id='email'
									label='Email Address*'
									type='email'
									fullWidth
									margin='dense'
									InputLabelProps={{ shrink: true }}
									variant='outlined'
									value={registerData.email}
									onChange={(e) =>
										setRegisterData({
											...registerData,
											email: e.target.value,
										})
									}
								/>
								<TextField
									id='password'
									label='Password*'
									type='password'
									placeholder='Choose a password!'
									helperText='Password must be at least 8 characters, can’t be too similar to your other personal information, can’t be a commonly used password, and can’t be entirely numeric.'
									fullWidth
									margin='dense'
									InputLabelProps={{ shrink: true }}
									variant='outlined'
									value={registerData.password}
									onChange={(e) =>
										setRegisterData({
											...registerData,
											password: e.target.value,
										})
									}
								/>
								<TextField
									id='passwordConfirm'
									label='Confirm Password*'
									type='password'
									placeholder='Confirm that password!'
									helperText='Enter the same password as before for verification.'
									fullWidth
									margin='dense'
									InputLabelProps={{ shrink: true }}
									variant='outlined'
									value={registerData.password2}
									onChange={(e) =>
										setRegisterData({
											...registerData,
											password2: e.target.value,
										})
									}
								/>
								<Typography
									variant='caption'
									color='error'
									display='block'>
									*All fields are <strong>REQUIRED</strong>.
								</Typography>
								<Typography
									variant='caption'
									color='textSecondary'
									display='block'>
									<strong>TEST USERS!</strong> There's no
									email validation required, so no need to use
									your real information if you don't want, but
									it would be cool if you did since I am
									curious who all is dropping by!
								</Typography>
								<Grid
									container
									className='loginButtonContainer'>
									<Button
										variant='contained'
										size='medium'
										color='primary'
										onClick={handleSubmit}
										className='loginButton'>
										Register
									</Button>
									<Button
										variant='contained'
										size='medium'
										color='secondary'
										onClick={clear}
										className='loginButton'>
										Clear Form
									</Button>
								</Grid>
								<Typography
									align='right'
									className='loginHelper'>
									If you already have an account, please{' '}
									<Link to='/login'>Log In</Link>.
								</Typography>
							</form>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	)
}

export default Register
