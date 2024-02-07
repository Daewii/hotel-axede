import axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import images from '../assets/img/images'

const URI = 'http://localhost:8000/hoteles/'


const CompShowHoteles = () => {
    
    const [hoteles, setHotel] = useState([])
    useEffect( ()=>{
        gethoteles()
    },[])

    //procedimineto para mostrar todos los hoteles
    const gethoteles = async () => {
        const res = await axios.get(URI)
        setHotel(res.data)
    }

    return (
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='card-deck'>
                {hoteles.map((hotel, index) => (
                  <div className='card mb-4' key={hotel.id}>
                    <img src={images[index].img} className='card-img-top' alt='Hotel' />
                    <div className='card-body'>
                      <h5 className='card-title'>{hotel.nombre}</h5>
                    </div>
                    <div className='card-footer'>
                      <Link className='btn btn-primary'>Ver detalles</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    )

}

export default CompShowHoteles