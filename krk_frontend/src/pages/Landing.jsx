import {
	Grid,
	Typography,
	Card,
	CardMedia,
	CardActionArea,
	CardContent,
	CardActions,
	Button,
} from '@mui/material'
import { Link } from 'react-router-dom'
import LandingHeader from '../components/LandingHeader'

const LandingPage = () => {
	return (
		<div>
			<LandingHeader />
			<Grid container className='showcaseContainer'>
				<Grid item md={8} lg={3}>
					<img
						src='https://cdn.douglasavenue.com/krk/media/img/krk-logo.png'
						alt='KRK Logo'
						className='showcaseLogo'
					/>
				</Grid>
				<Grid item md={12} lg={5} className='showcaseInfobox'>
					<Typography variant='h2' className='showcaseHeader'>
						Welcome To KRK!
					</Typography>
					<Typography variant='body2' className='showcaseParagraph'>
						KRK (pronounced 'cork') EBBS system is a digital
						corkboard for businesses that allows employees to
						communicate with each other, management to communicate
						with all employees, and event scheduling. Check out the
						information below to see more details on how KRK can
						help your business!
					</Typography>
				</Grid>
			</Grid>
			<Grid
				container
				spacing={0}
				direction='row'
				justifyContent='space-evenly'
				alignItems='stretch'
				className='salesContainer'>
				<Grid item md={12} lg={4}>
					<Card className='salesBox'>
						<CardActionArea>
							<CardMedia
								className='salesMedia'
								image='https://cdn.douglasavenue.com/krk/media/img/post-sales-header.png'
								title='Posts!'
							/>
							<CardContent>
								<Typography
									variant='h4'
									component='h2'
									className='salesBoxTitle'>
									Post Feed For Users!
								</Typography>
								<Typography variant='body2'>
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
								</Typography>
								<br />
								<Typography variant='body2'>
									Feel free to log in with our test user
									account or register with a new account to
									test KRK out, or contact me, Erin Winking,
									to discuss the application further!
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions className='cardButtonRow'>
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
						</CardActions>
					</Card>
				</Grid>

				<Grid item md={12} lg={4}>
					<Card className='salesBox'>
						<CardActionArea>
							<CardMedia
								className='salesMedia'
								image='https://cdn.douglasavenue.com/krk/media/img/event-sales-header.png'
								title='Events!'
							/>
							<CardContent>
								<Typography
									variant='h4'
									component='h2'
									className='salesBoxTitle'>
									Event Calendar For All!
								</Typography>
								<Typography variant='body2'>
									KRK comes with an event calendar for your
									staff! Events can be created as far in
									advance as you like and can be set to only
									be displayed for a single department or the
									entire site! Sometimes your users do not
									need to know about an event or project
									happening in another department, so no need
									to clutter up their event calendar.
								</Typography>
								<br />
								<Typography variant='body2'>
									Feel free to log in with our test user
									account or register with a new account to
									test KRK out, or contact me, Erin Winking,
									to discuss the application further!
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions className='cardButtonRow'>
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
						</CardActions>
					</Card>
				</Grid>
				<Grid item md={12} lg={4}>
					<Card className='salesBox'>
						<CardActionArea>
							<CardMedia
								className='salesMedia'
								image='https://cdn.douglasavenue.com/krk/media/img/user-sales-header.png'
								title='Users!'
							/>
							<CardContent>
								<Typography
									variant='h4'
									component='h2'
									className='salesBoxTitle'>
									Easy User Management!
								</Typography>
								<Typography variant='body2'>
									User management is KRK is simple. Users
									register their account, supervisors set
									their department as well as their access
									levels, and that is it! Users can upload
									their own profile pictures and set their own
									biographies. Supervisors and managers can of
									course edit anything necessary!
								</Typography>
								<br />
								<Typography variant='body2'>
									Feel free to log in with our test user
									account or register with a new account to
									test KRK out, or contact me, Erin Winking,
									to discuss the application further!
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions className='cardButtonRow'>
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
						</CardActions>
					</Card>
				</Grid>
			</Grid>
			<Grid
				container
				gap={1}
				direction='row'
				justifyContent='space-evenly'
				alignItems='stretch'
				className='ctaContainer'>
				<Grid item md={12} lg={5} className='ctaBox'>
					<Typography variant='h3' className='ctaHeader'>
						Try KRK Out!
					</Typography>
					<Typography variant='body2' className='ctaText'>
						Would you like to take KRK for a spin? Please try out
						the demo site by clicking the buttons below or the
						buttons on the top menu! You can either create your own
						account, which will default to give you the view of a
						front-line worker at our fictional restaurant,
						MgRonald's. If you don't want to go through all that
						trouble, you can use the demo account that is already
						set up. User name is 'testuser' and the password is
						'testpassword' (without the quotes).
					</Typography>
					<Grid container className='ctaButtonContainer'>
						<Link to='/login'>
							<Button size='small' color='primary'>
								LOGIN
							</Button>
						</Link>
						<Link to='/register'>
							<Button size='small' color='warning'>
								REGISTER NEW ACCOUNT
							</Button>
						</Link>
					</Grid>
				</Grid>
				<Grid item md={12} lg={5} className='ctaBox'>
					<Typography variant='h3' className='ctaHeader'>
						KRK For Your Biz!
					</Typography>
					<Typography variant='body2' className='ctaText'>
						Would you like to have your own KRK Employee Bulletin
						Board System? Well, then you will have to hire me as a
						web developer and have me build it for you! KRK isn't
						sold as SaaS right now (but who knows what the future
						might hold). You can look into having me, Erin Winking,
						as an employee by checking out my profile, GitHub, or
						emailing me!
					</Typography>
					<Grid container className='ctaButtonContainer'>
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
					</Grid>
				</Grid>
			</Grid>
		</div>
	)
}

export default LandingPage
