import { MapContainer, TileLayer } from 'react-leaflet'
import './map.scss'
import "leaflet/dist/leaflet.css";
import Pin from '../pin/Pin';

function Map({items}){
  return (
    <MapContainer center={[31.41519,73.07923]} zoom={6}  className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {items.map(item=>(
      <Pin item={item} key={item.id}/>
    ))}
  </MapContainer>
  )
}

export default Map