import { useState } from 'react'
import {
	Container,
	Hidden,
	Grid,
	Typography,
	TextField,
	Button,
} from '@mui/material'
import { Link } from 'react-router-dom'
import TestUserInfo from '../components/TestUserInfo'

function Login() {
	const [loginData, setLoginData] = useState({})

	const handleSubmit = (e) => {
		console.log('Form Submitted...')
	}

	const clear = () => {
		setLoginData({})
	}

	return (
		<Container maxWidth='lg' className='loginContainer'>
			<Grid
				container
				direction='row'
				justifyContent='flex-start'
				alignItems='stretch'>
				<Hidden smDown>
					<Grid item md={5} className='loginLeft'>
						<Grid item className='loginTestUserBlock'>
							<TestUserInfo />
						</Grid>
					</Grid>
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
								Employee Digital Bulletin Board System
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
								Employee Login
							</Typography>
							<hr />
							<form>
								<TextField
									id='username'
									label='Username'
									placeholder='Your @username'
									helperText="Don't include the @ on your username!"
									fullWidth
									margin='normal'
									InputLabelProps={{ shrink: true }}
									variant='outlined'
									value={loginData.username}
									onChange={(e) =>
										setLoginData({
											...loginData,
											username: e.target.value,
										})
									}
								/>
								<TextField
									id='password'
									label='Password'
									type='password'
									placeholder='Password'
									helperText='If you forgot your username or password, contact IT or your manager.'
									fullWidth
									margin='normal'
									InputLabelProps={{ shrink: true }}
									variant='outlined'
									value={loginData.password}
									onChange={(e) =>
										setLoginData({
											...loginData,
											password: e.target.value,
										})
									}
								/>
								<Grid
									container
									className='loginButtonContainer'>
									<Button
										variant='contained'
										size='medium'
										onClick={handleSubmit}
										className='loginButtonSubmit'>
										Log In
									</Button>
									<Button
										variant='contained'
										size='medium'
										color='secondary'
										onClick={clear}
										className='loginButton'>
										Clear
									</Button>
								</Grid>
							</form>
							<Typography
								align='right'
								variant='body1'
								className='loginHelper'>
								If you do not have an account yet, please{' '}
								<Link to='/register'>register here</Link>!
							</Typography>
							<Hidden mdUp>
								<Grid item className='loginTestUserBlockMob'>
									<TestUserInfo />
								</Grid>
							</Hidden>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	)
}

export default Login
