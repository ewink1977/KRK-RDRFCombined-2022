import { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
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
		<Container fluid='lg' className='loginContainer'>
			<Row className='justify-items-start'>
				<Col xs={12} md={5} className='loginLeft'>
					<div className='loginTestUserBlock'>
						<TestUserInfo />
					</div>
				</Col>
				<Col md={5} sm={12} className='loginRight'>
					<Stack>
						<div className='loginHeaderBlock'>
							<h1 className='loginBlockHeader'>MgRONALD'S</h1>
							<h3 className='loginBlockSubhead'>
								Employee Digital Bulletin Board System
							</h3>
						</div>

						<div item className='loginFormBlock'>
							<p className='loginFormWarning'>
								This system is for MgRonald's employees only!
								Any unauthorized access is bad, mmkay?
							</p>
							<h4 variant='h4' className='loginFormHeader'>
								Employee Login
							</h4>
							<hr />
							<Form>
								<Form.Group
									className='mb-1'
									controlId='formBasicUsername'>
									<Form.Label>Username</Form.Label>
									<Form.Control
										type='text'
										id='username'
										placeholder='Your @username'
										aria-describedby='usernameHelpBlock'
										value={loginData.username}
										onChange={(e) =>
											setLoginData({
												...loginData,
												username: e.target.value,
											})
										}
									/>
									<Form.Text id='usernameHelpBlock' muted>
										Don't include the @ on your username!
									</Form.Text>
								</Form.Group>
								<Form.Group
									className='mb-1'
									controlId='formBasicPassword'>
									<Form.Label>Password</Form.Label>
									<Form.Control
										type='password'
										id='password'
										placeholder='Password'
										aria-describedby='passwordHelpBlock'
										value={loginData.password}
										onChange={(e) =>
											setLoginData({
												...loginData,
												password: e.target.value,
											})
										}
									/>
									<Form.Text id='usernameHelpBlock' muted>
										If you forgot your username or password,
										contact IT or your manager.
									</Form.Text>
								</Form.Group>

								<div container className='loginButtonContainer'>
									<Button
										variant='primary'
										size='medium'
										onClick={handleSubmit}
										className='loginButtonSubmit'>
										Log In
									</Button>
									<Button
										variant='danger'
										size='medium'
										onClick={clear}
										className='loginButton'>
										Clear
									</Button>
								</div>
							</Form>
							<p className='loginHelper text-align-right'>
								If you do not have an account yet, please{' '}
								<Link to='/register'>register here</Link>!
							</p>
						</div>
					</Stack>
				</Col>
			</Row>
		</Container>
	)
}

export default Login
