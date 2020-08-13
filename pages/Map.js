import wo from '../styles/world.module.css'
import Link from 'next/link'


function Map() {
    return (
        <div>
            <Link href="/Regions/SouthAmerica"><div className={`${wo.South} ${wo.South2}`}></div></Link>
            <Link href="/Regions/NorthAmerica"><div className={`${wo.North} ${wo.North2}`}></div></Link>
            <Link href="/Regions/Australia"><div className={`${wo.Aus} ${wo.Aus2}`}></div></Link>
   {/*      <Link href="/Regions/Antarctica"><div className={`${wo.Ant} ${wo.Ant2}`}></div></Link>     */}
   {/*      <Link href="/Regions/Oceans"><div className={`${wo.Oceans} ${wo.Oceans2}`}></div></Link>   */}
            <Link href="/Regions/Asia"><div className={`${wo.Asia} ${wo.Asia2}`}></div></Link>
            <Link href="/Regions/Africa"><div className={`${wo.Africa} ${wo.Africa2}`}></div></Link>
            <img className={wo.map} src="./worldmap.png" alt="world map" ></img>
        </div>
    )
}

export default Map