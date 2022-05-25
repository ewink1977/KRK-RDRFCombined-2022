import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'
import { Link } from 'react-router-dom'

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

				<Col lg={8} className='userPanelPersonal'>
					<Stack gap={1}>
						<Link to='/user/username'>
							<h2 className='userUserName'>@ewink</h2>
						</Link>
						<h3 className='userRealName mb-0'>Erin Winking</h3>
						<h5>Digital Overseer</h5>
					</Stack>
				</Col>
			</Row>
			<div className='userOptions d-flex align-items-center justify-content-end'>
				<Button variant='outline-primary' size='lg' onClick={logout}>
					LOGOUT
				</Button>
			</div>
		</div>
	)
}

export default BBSUserPanel
