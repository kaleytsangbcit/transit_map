import styled from 'styled-components';
import style from '../styles/Home.module.css'

const Subscription = styled.div`
display: flex;
flex-direction: row;
margin: 20px;
justify-content: center;
width: 100%;
`

const Content = styled.div`
width:30%;
`

const TypeBox = styled.input`
width:20%;
height:50px;
margin:10px;
padding:20px;
border: none;
border-radius: 3px;
font-size: 18px;
`

const Button = styled.button`
width:20%;
height:50px;
border: none;
border-radius: 3px;
font-size: 18px;
background-color: #005daa;
margin:10px;
color:#FFFFFF;
`

const FooterCont = styled.div`
display: flex;
flex-direction: row;
margin: 20px;
justify-content: flex-start;
width: 100%;
`

const First = styled.div`
width:30%;
`

const Logo = styled.img`
width: 40%;
`

const Column = styled.div`
width:30%;
margin-left:20px;
`

const Heading = styled.div`
font-size: 24px;
font-weight: bold;
`

const List = styled.li`
display: block;
height:20px;
list-style: none;
margin-top:20px;
`




export default function Footer() {

    return (
        <div className={style.footer}>
            <Subscription>
                <Content>
                    Subscribe to the <b>TransLink Monthly Updates</b> newsletter to receive the latest news, projects, 
                    transit service changes and other initiatives. You may unsubscribe at any time.
                </Content>

                <TypeBox placeholder="First Name"/>
                <TypeBox placeholder="Email address"/>
                <Button>Subscribe</Button>
            </Subscription>

            <FooterCont>
                <First>
                    <Logo src="./logo_footer.png" />
                    <p>Metro Vancouver's transportation network, serving residents and visitors with public transit, 
                        major roads, bridges and Trip Planning.</p>
                </First>

                <Column>
                    <Heading>Getting Around</Heading>
                        <List><a href="https://www.translink.ca/transit-fares">Transit Fares</a></List>
                        <List><a href="https://www.translink.ca/schedules-and-maps?page=1">Schedules</a></List>
                        <List><a href="https://www.translink.ca/rider-guide">Rider Guide</a></List>
                        <List><a href="https://www.translink.ca/alerts">Transit Alerts</a></List>
                </Column>

                <Column>
                    <Heading>Resources</Heading>
                        <List><a href="https://www.translink.ca/about-us/customer-service/contact-information">Contact Us</a></List>
                        <List><a href="https://www.translink.ca/about-us/careers">Careers</a></List>
                </Column>

                <Column>
                    <Heading>Contact Us</Heading>
                        <p>Call us at 604.953.3333</p>
                        <br/>
                        <p><a href="https://www.google.com/maps/place/TransLink/@49.2247324,-122.8939064,17z/data=!3m1!4b1!4m5!3m4!1s0x5486765906294161:0x8be44a756edffc2f!8m2!3d49.2247289!4d-122.8917178">400-287 Nelson's Ct., New Westminster, BC V3L0E7</a></p>
                </Column>

            </FooterCont>


       </div> 
    )
}