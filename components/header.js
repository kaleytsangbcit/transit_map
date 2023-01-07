import style from '../styles/Home.module.css'

export default function Header() {

    return (
        <>
        <div className={style.header}>
            <img src="./logo.png" />
            <h1>SkyTrain Stations</h1>
        </div>
       </> 
    )
}