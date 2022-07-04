import React, { useEffect, useState } from 'react'
import Callrequst from '../Navbar/callrequst';
import './products.css'


const Products = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            await fetch(`http://localhost:8080/rooms`)
                .then(res => res.json())
                .then(res => setData(res))
        }
        getData();
    }, [])

    return (
        <div className='container'>

            <div className='pCards'>
                {
                    data.map((element) => (
                        <div className="pCard">
                        <div>
                        <img src={element.image} alt="" />
                    </div>
                    <div>
                    <h3>{element.title}</h3>
                    <p>{element.location}</p>
                    <p>{element.gender}</p>
                    <p>{element.price}</p>
                    <button><Callrequst/> </button>
                    </div>
                     

                    </div>

                    ))
                }
            </div>
            <div className="gMap">
                <iframe title='abc' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.66008764744!2d77.35073867566955!3d12.954517004756145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1656752838589!5m2!1sen!2sin" 
                width="600" height="450" style={{border:"0"}} 
                allowfullscreen="" loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">

                </iframe>
            </div>
        </div>
    )
}

export default Products;
