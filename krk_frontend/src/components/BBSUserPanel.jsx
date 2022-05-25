import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

function BBSUserPanel() {
	const logout = () => {
		console.log('Logout was clicked!')
	}

	return (
		<div className='userPanel'>
			<Row className='justify-content-start align-items-start userPanelContainer'>
				<Col lg={3}>
					<img
						src='https://cdn.douglasavenue.com/krk/media/profilePics/erin.jpg'
						alt='ewink'
						className='userPanelImg'
					/>
				</Col>

				<Col item lg={8} className='userPanelPersonal'>
					<Stack gap={1}>
						<h2 className='userUserName'>@ewink</h2>
						<h3 variant='h3' className='userRealName'>
							Erin Winking
						</h3>
						<h5 variant='h5'>Digital Overseer</h5>
					</Stack>
				</Col>
			</Row>
			<Row className='userOptions align-items-center justify-content-end'>
				<Button
					variant='outlined'
					color='primary'
					size='large'
					onClick={logout}>
					LOGOUT
				</Button>
			</Row>
		</div>
	)
}

export default BBSUserPanel
