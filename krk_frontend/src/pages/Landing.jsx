import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import LandingHeader from '../components/LandingHeader'

const LandingPage = () => {
	return (
		<div>
			<LandingHeader />
			<Container fluid>
				<Row className='showcaseContainer'>
					<Col md={8} lg={3}>
						<img
							src='https://cdn.douglasavenue.com/krk/media/img/krk-logo.png'
							alt='KRK Logo'
							className='showcaseLogo'
						/>
					</Col>
					<Col md={12} lg={5} className='showcaseInfobox'>
						<h2 className='showcaseHeader'>Welcome To KRK!</h2>
						<p className='showcaseParagraph'>
							KRK (pronounced 'cork') EBBS system is a digital
							corkboard for businesses that allows employees to
							communicate with each other, management to
							communicate with all employees, and event
							scheduling. Check out the information below to see
							more details on how KRK can help your business!
						</p>
					</Col>
				</Row>
				<Row
					lg='3'
					xs='1'
					className='salesContainer justify-content-between align-items-stretch g-1'>
					<Col>
						<Card className='salesBox'>
							<Card.Img
								variant='top'
								src='https://cdn.douglasavenue.com/krk/media/img/post-sales-header.png '
								className='salesMedia'
							/>
							<Card.Body>
								<Card.Title className='salesBoxTitle'>
									Post Feed For Users!
								</Card.Title>
								<Card.Text>
									Users can post messages, as well as like and
									reply to messages other users' post.
									Messages are segregated to departments, so
									it is as if each department has their own
									personal KRKBoard! Supervisors for that
									department can prioritize messages so they
									remain at the top of the message timeline,
									and site-wide supervisors can send messages
									to any department as well as pin sitewide
									messages to the top of the timeline!
								</Card.Text>
								<Card.Text>
									Feel free to log in with our test user
									account or register with a new account to
									test KRK out, or contact me, Erin Winking,
									to discuss the application further!
								</Card.Text>
								<div className='cardButtonRow'>
									<Link to='/login'>
										<Button size='small' color='primary'>
											LOGIN/REGISTER
										</Button>
									</Link>
									<Button
										href='http://imageone.digital/contact/'
										size='small'
										color='success'>
										CONTACT ERIN
									</Button>
								</div>
							</Card.Body>
						</Card>
					</Col>

					<Col>
						<Card className='salesBox'>
							<Card.Img
								variant='top'
								src='https://cdn.douglasavenue.com/krk/media/img/event-sales-header.png'
								className='salesMedia'
							/>
							<Card.Body>
								<Card.Title className='salesBoxTitle'>
									Event Calendar For All!
								</Card.Title>
								<Card.Text>
									KRK comes with an event calendar for your
									staff! Events can be created as far in
									advance as you like and can be set to only
									be displayed for a single department or the
									entire site! Sometimes your users do not
									need to know about an event or project
									happening in another department, so no need
									to clutter up their event calendar.
								</Card.Text>
								<Card.Text>
									Feel free to log in with our test user
									account or register with a new account to
									test KRK out, or contact me, Erin Winking,
									to discuss the application further!
								</Card.Text>
								<div className='cardButtonRow'>
									<Link to='/login'>
										<Button size='small' color='primary'>
											LOGIN/REGISTER
										</Button>
									</Link>
									<Button
										href='http://imageone.digital/contact/'
										size='small'
										color='success'>
										CONTACT ERIN
									</Button>
								</div>
							</Card.Body>
						</Card>
					</Col>

					<Col>
						<Card className='salesBox'>
							<Card.Img
								variant='top'
								src='https://cdn.douglasavenue.com/krk/media/img/user-sales-header.png'
								className='salesMedia'
							/>
							<Card.Body>
								<Card.Title className='salesBoxTitle'>
									Easy User Management!
								</Card.Title>
								<Card.Text>
									User management is KRK is simple. Users
									register their account, supervisors set
									their department as well as their access
									levels, and that is it! Users can upload
									their own profile pictures and set their own
									biographies. Supervisors and managers can of
									course edit anything necessary!
								</Card.Text>
								<Card.Text>
									Feel free to log in with our test user
									account or register with a new account to
									test KRK out, or contact me, Erin Winking,
									to discuss the application further!
								</Card.Text>
								<div className='cardButtonRow'>
									<Link to='/login'>
										<Button size='small' color='primary'>
											LOGIN/REGISTER
										</Button>
									</Link>
									<Button
										href='http://imageone.digital/contact/'
										size='small'
										color='success'>
										CONTACT ERIN
									</Button>
								</div>
							</Card.Body>
						</Card>
					</Col>
				</Row>

				<Row className='ctaContainer d-flex justify-content-around align-items-stretch'>
					<Col md={12} lg={5} className='ctaBox'>
						<h3 className='ctaHeader'>Try KRK Out!</h3>
						<p className='ctaText'>
							Would you like to take KRK for a spin? Please try
							out the demo site by clicking the buttons below or
							the buttons on the top menu! You can either create
							your own account, which will default to give you the
							view of a front-line worker at our fictional
							restaurant, MgRonald's. If you don't want to go
							through all that trouble, you can use the demo
							account that is already set up. User name is
							'testuser' and the password is 'testpassword'
							(without the quotes).
						</p>
						<div className='ctaButtonContainer'>
							<Link to='/login'>
								<Button size='large' color='primary'>
									LOGIN
								</Button>
							</Link>
							<Link to='/register'>
								<Button size='large' color='warning'>
									REGISTER NEW ACCOUNT
								</Button>
							</Link>
						</div>
					</Col>

					<Col md={12} lg={5} className='ctaBox'>
						<h3 className='ctaHeader'>KRK For Your Biz!</h3>
						<p className='ctaText'>
							Would you like to have your own KRK Employee
							Bulletin Board System? Well, then you will have to
							hire me as a web developer and have me build it for
							you! KRK isn't sold as SaaS right now (but who knows
							what the future might hold). You can look into
							having me, Erin Winking, as an employee by checking
							out my profile, GitHub, or emailing me!
						</p>
						<div className='ctaButtonContainer'>
							<Button
								href='https://douglasavenue.com'
								size='small'
								color='secondary'>
								MY PROFILE
							</Button>
							<Button
								href='https://github.com/ewink1977'
								size='small'
								color='primary'>
								MY GITHUB
							</Button>
							<Button
								href='http://imageone.digital/contact/'
								size='small'
								color='success'>
								Contact me!
							</Button>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default LandingPage
