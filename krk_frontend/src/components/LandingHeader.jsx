import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function LandingHeader() {
	return (
		<nav>
			<Navbar bg='light'>
				<Container>
					<Navbar.Brand href='/index.html'>
						<img
							src='https://cdn.douglasavenue.com/krk/media/img/krk-icon.png'
							width='80'
							height='40'
							className='d-inline-block align-top'
							alt='KRK Logo'
						/>
					</Navbar.Brand>
				</Container>
			</Navbar>
		</nav>
	)
}

export default LandingHeader
