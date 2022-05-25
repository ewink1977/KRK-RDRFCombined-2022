import { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Stack from 'react-bootstrap/Stack'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Register() {
	const [registerData, setRegisterData] = useState({})

	const handleSubmit = (e) => {
		console.log('form submitted')
	}

	const clear = () => {
		setRegisterData({})
	}

	return (
		<Container fluid='lg' className='loginContainer'>
			<Row
				container
				direction='row'
				justifyContent='flex-start'
				alignItems='stretch'>
				<Col md={5} className='registerLeft' />
				<Col md={5} sm={12} className='loginRight'>
					<Stack>
						<div className='loginHeaderBlock'>
							<h1 className='loginBlockHeader'>MgRONALD'S</h1>
							<div className='loginBlockSubhead'>
								<small className='text-muted'>
									Welcome to the Team! We're glad to have you
									aboard!
								</small>
							</div>
						</div>
						<div item className='loginFormBlock'>
							<p className='loginFormWarning'>
								This system is for MgRonald's employees only!
								Any unauthorized access is bad, mmkay?
							</p>
							<h4 className='loginFormHeader'>
								Sign up for an EBBS account!
							</h4>
							<hr />
							<Form>
								<Form.Group
									className='mb-2'
									controlId='formUserName'>
									<Form.Label>Username*</Form.Label>
									<Form.Control
										id='username'
										type='text'
										placeholder='Choose your @username!'
										value={registerData.username}
										onChange={(e) =>
											setRegisterData({
												...registerData,
												username: e.target.value,
											})
										}
									/>
									<Form.Text>
										Minimum of 8 characters, letters and
										numbers only!
									</Form.Text>
								</Form.Group>
								<Form.Group
									className='mb-2'
									controlId='formEmailAddress'>
									<Form.Label>Email Address*</Form.Label>
									<Form.Control
										id='email'
										type='email'
										value={registerData.email}
										onChange={(e) =>
											setRegisterData({
												...registerData,
												email: e.target.value,
											})
										}
									/>
								</Form.Group>
								<Form.Group
									className='mb-2'
									controlId='formPassword'>
									<Form.Label>Password*</Form.Label>
									<Form.Control
										id='password1'
										type='password'
										placeholder='Choose a password!'
										value={registerData.password}
										onChange={(e) =>
											setRegisterData({
												...registerData,
												password: e.target.value,
											})
										}
									/>
									<Form.Text>
										Password must be at least 8 characters,
										cannot be too similar to your other
										personal information, cannot be a
										commonly used password, and cannot be
										entirely numeric.
									</Form.Text>
								</Form.Group>
								<Form.Group
									className='mb-2'
									controlId='formConfirmPassword'>
									<Form.Label>Confirm Password*</Form.Label>
									<Form.Control
										id='password2'
										type='password'
										placeholder='Confirm that password!'
										value={registerData.password2}
										onChange={(e) =>
											setRegisterData({
												...registerData,
												password2: e.target.value,
											})
										}
									/>
									<Form.Text>
										Enter the same password as before for
										verification.
									</Form.Text>
								</Form.Group>
								<small className='text-muted text-danger'>
									*All fields are <strong>REQUIRED</strong>.
								</small>
								<small className='text-muted text-secondary'>
									<strong>TEST USERS!</strong> There's no
									email validation required, so no need to use
									your real information if you don't want, but
									it would be cool if you did since I am
									curious who all is dropping by!
								</small>
								<Row className='loginButtonContainer'>
									<Button
										size='sm'
										variant='success'
										onClick={handleSubmit}
										className='loginButton'>
										Register
									</Button>
									<Button
										variant='secondary'
										size='sm'
										onClick={clear}
										className='loginButton'>
										Clear Form
									</Button>
								</Row>
								<p className='loginHelper text-end'>
									If you already have an account, please{' '}
									<Link to='/login'>Log In</Link>.
								</p>
							</Form>
						</div>
					</Stack>
				</Col>
			</Row>
		</Container>
	)
}

export default Register
