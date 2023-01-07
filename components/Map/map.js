import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import style from '../../styles/Home.module.css'

import { MapContainer, TileLayer, Marker, Popup, Polyline, CircleMarker } from 'react-leaflet'

export default function Map() {

    const mapposition = [49.22598193504186, -123.00392637479472];

    const waterfront = [49.28594, -123.11129];
    const burrad = [49.28562314043961, -123.12006881526956];
    const granville = [49.28278894969113, -123.11642699992593];
    const stadiumChinatown = [49.27974871120043, -123.10997116355242];
    const mainStreet = [49.273094978559996, -123.09962044070349];
    const commerical = [49.2630046443884, -123.06902054381742];
    const nanaimo = [49.24841825105861, -123.05593875921133];
    const ave29 = [49.244315237562276, -123.04620287746377];
    const joyce = [49.23838000066657, -123.03182267001496];
    const patterson = [49.229770892163955, -123.01268014280102];
    const metrotown = [49.22580013067751, -123.00390798018493];
    const royalOak = [49.22006316610511, -122.98850061507342];
    const edmonds = [49.21255429527258, -122.95926081857334];
    const street22 = [49.199952203842116, -122.94933240768405];
    const newWest = [49.20145300539859, -122.91268125875095];
    const columbia = [49.205206434950846, -122.90615295153619];
    const scottRoad = [49.20444611235624, -122.8740676075166];
    const gateway = [49.19898738673813, -122.85080620899573];
    const surreyCentral = [49.18955375317162, -122.84803545374655];
    const kingGeorge = [49.182816929361174, -122.84484908536207];
    const sapperton = [49.22468318780022, -122.88932853261798];
    const braid = [49.232952206674994, -122.88292808825904];
    const lougheed = [49.248599843222934, -122.89728059996204];
    const productionWay = [49.25357348659764, -122.91886478199692];

    const polyline = [
        waterfront,
        burrad,
        granville,
        stadiumChinatown,
        mainStreet,
        commerical,
        nanaimo,
        ave29,
        joyce,
        patterson,
        metrotown,
        royalOak,
        edmonds,
        street22,
        newWest,
        columbia,
        scottRoad,
        gateway,
        surreyCentral, 
        kingGeorge,
    ]

    const polyline2 = [
        columbia,
        sapperton,
        braid,
        lougheed,
        productionWay,
    ]

    const darkBlueOption = { color: 'darkblue' };

    return (
        <MapContainer className={style.map} center={mapposition} zoom={12} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={waterfront}>
                <Popup>
                    Waterfront Station <br/> Expo Line
                </Popup>
            </Marker>

            <Marker position={burrad}>
                <Popup>
                    Burrad Station <br/> Expo Line
                </Popup>
            </Marker>

            <Marker position={granville}>
                <Popup>
                    Granville Station <br/> Expo Line
                </Popup>
            </Marker>

            <Marker position={stadiumChinatown}>
                <Popup>
                    Stadium–Chinatown Station <br/> Expo Line
                </Popup>
            </Marker>

            <Marker position={commerical}>
                <Popup>
                    Commercial–Broadway Station <br/> Expo Line and Millennium Line
                </Popup>
            </Marker>

            <Marker position={nanaimo}>
                <Popup>
                    Nanaimo Station <br/> Expo Line
                </Popup>
            </Marker>

            <Marker position={ave29}>
                <Popup>
                    29th Ave Station <br/> Expo Line
                </Popup>
            </Marker>
            
            <Marker position={joyce}>
                <Popup>
                    Joyce–Collingwood Station <br/> Expo Line
                </Popup>
            </Marker>

            <Marker position={patterson}>
                <Popup>
                    Patterson Station <br/> Expo Line
                </Popup>
            </Marker>

            <Marker position={metrotown}>
                <Popup>
                    Metrotown Station <br/> Expo Line
                </Popup>
            </Marker>
            
            <Marker position={royalOak}>
                <Popup>
                    Royal Oak Station <br/> Expo Line
                </Popup>
            </Marker>

            <Marker position={edmonds}>
                <Popup>
                    Edmonds Station <br/> Expo Line
                </Popup>
            </Marker>

            <Marker position={street22}>
                <Popup>
                    22nd Street Station <br/> Expo Line
                </Popup>
            </Marker>
            
            <Marker position={newWest}>
                <Popup>
                    New Westminster Station <br/> Expo Line
                </Popup>
            </Marker>

            <Marker position={columbia}>
                <Popup>
                    Columbia Station <br/> Expo Line
                </Popup>
            </Marker>

            <Marker position={scottRoad}>
                <Popup>
                    Scott Road Station <br/> Expo Line
                </Popup>
            </Marker>
            
            <Marker position={gateway}>
                <Popup>
                    Gateway Station <br/> Expo Line
                </Popup>
            </Marker>

            <Marker position={surreyCentral}>
                <Popup>
                    Surrey Central Station <br/> Expo Line
                </Popup>
            </Marker>

            <Marker position={kingGeorge}>
                <Popup>
                    King George Station <br/> Expo Line
                </Popup>
            </Marker>
            
            <Marker position={sapperton}>
                <Popup>
                    Sapperton Station <br/> Expo Line
                </Popup>
            </Marker>

            <Marker position={braid}>
                <Popup>
                    Braid Station <br/> Expo Line
                </Popup>
            </Marker>

            <Marker position={lougheed}>
                <Popup>
                    Lougheed Town Centre Station <br/> Expo Line and Millennium Line
                </Popup>
            </Marker>

            <Marker position={productionWay}>
                <Popup>
                    Production Way–University Station <br/> Expo Line and Millennium Line
                </Popup>
            </Marker>


            <Polyline pathOptions={darkBlueOption} positions={polyline}/>

            <Polyline pathOptions={darkBlueOption} positions={polyline2}/>

        </MapContainer>
    )
}