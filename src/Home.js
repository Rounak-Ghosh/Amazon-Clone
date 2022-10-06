import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
        <div className="home_container">
        <img className="home__image" src="https://m.media-amazon.com/images/I/91NCHauoLTL._SR1500,844_.jpg" alt="Hero"/>
        <div className="home__row">
            <Product id="123456" title="Zero to One: Notes on Start Ups, or How to Build the Future" price={379.00} image="https://images-na.ssl-images-amazon.com/images/I/71doP+hSREL.jpg" rating={5} />
            <Product id="654321" title="Samsung Galaxy S20 FE 5G (Cloud Lavender, 8GB RAM, 128GB Storage)" price={39990.00} image="https://m.media-amazon.com/images/I/81QVLzeVckL._SL1500_.jpg" rating={5} />
        </div>

        <div className="home__row">
            <Product id="123987" title="Allen Solly Men's Regular Fit Polo" price={679.00} image="https://m.media-amazon.com/images/I/91lg2RcO9ML._UL1500_.jpg" rating={4} />
            <Product id="789456" title="Echo Dot (4th Gen, 2020 release) with clock | Next generation smart speaker with powerful bass, LED display and Alexa (Blue)" price={4999.00} image="https://m.media-amazon.com/images/I/61u0y9ADElL._SL1000_.jpg" rating={5} />
            <Product id="129956" title="Elica Hob 5 Burner Auto Ignition Glass Top - 1 Big MFC Brass Burner, 2 Mini Triple Ring and 2 Double Ring Brass Burner (PRO FB MFC 5B 90 MT FFD)" price={57990.00} image="https://m.media-amazon.com/images/I/61hXNhRyIRL._SL1000_.jpg" rating={3} />
        </div>
        
        <div className="home__row">
            <Product id="103406" title="Samsung 214 cm (85 inches) 8K Ultra HD Smart Neo QLED TV QA85QN900AKXXL (Steel)" price={1282490} image="https://m.media-amazon.com/images/I/91RMUYY13VS._SL1500_.jpg" rating={5} />
        </div>

        </div>
    </div>
  )
}

export default Home;