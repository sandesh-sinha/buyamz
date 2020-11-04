import React from 'react'
import Product from './Product'
import './Home.css'
function Home() {
    return (
        <div className='home'>
           <div className='home__container'>
                <img src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.JPG'
                     className='home__image' alt='home' />   
            </div> 
            <div className='home__row'>
                <Product title='Laptop' price='150000'  
                         image='https://images-na.ssl-images-amazon.com/images/I/71HXR1mNdYL._SL1500_.jpg'
                         rating={5}
                         />
                <Product title='Laptop' price='150000'  
                         image='https://images-na.ssl-images-amazon.com/images/I/71HXR1mNdYL._SL1500_.jpg'
                         rating={5}
                         />
            </div> 
            <div className='home__row'>
            <Product title='Laptop' price='150000'  
                         image='https://images-na.ssl-images-amazon.com/images/I/71HXR1mNdYL._SL1500_.jpg'
                         rating={5}
                         />
                <Product title='Laptop' price='150000'  
                         image='https://images-na.ssl-images-amazon.com/images/I/71HXR1mNdYL._SL1500_.jpg'
                         rating={5}
                         />
                <Product title='Laptop' price='150000'  
                         image='https://images-na.ssl-images-amazon.com/images/I/71HXR1mNdYL._SL1500_.jpg'
                         rating={5}
                         />                                                  
            </div>
        </div>
    )
}

export default Home
