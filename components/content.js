import style from '../styles/Home.module.css'

export default function Content() {

    return (
        <>
        <div className={style.content}>
            <h2>Expo Line</h2>
       
            The Expo Line operates two routes:

            <div className={style.list}>
                <li>Waterfront Station (Downtown Vancouver) to King George Station (Surrey)</li>
                <li>Waterfront Station (Downtown Vancouver) to Production Way–University Station (Burnaby)</li>
            </div>
            Transfer to the Millennium Line at the following stations:
            
            <div className={style.list}>
                <li>Commercial–Broadway Station</li>
                <li>Lougheed Town Centre Station</li>
                <li>Production Way–University Station</li>
            </div>
            Use Columbia Station to transfer to and from a train going to either King George or Production Way–University.
            <br/>
            Use Waterfront Station to transfer to the Canada Line, SeaBus, or West Coast Express.

        </div>
       </> 
    )
}
