import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BBSUserPanel from '../components/BBSUserPanel'

function BBSMain() {
	return (
		<Container fluid className='bbsContainer'>
			<Row>
				<Col item xs={12} lg className='bbsLeftColumn'>
					{/* <StickyPostList /> */}
					{/* <PostList /> */}
					<h1>Left Side</h1>
				</Col>
				<Col item xs={12} lg className='bbsRightColumn'>
					<BBSUserPanel />
					{/* <BBSEventSummary /> */}
					{/* <AddPost /> */}
				</Col>
			</Row>
		</Container>
	)
}

export default BBSMain
