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

const Logo = styled.img`
    width: 10%;
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

            <Logo src="./logo_footer.png" />
       </div> 
    )
}