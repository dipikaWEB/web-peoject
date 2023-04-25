import './App.css'
import image from './img/a1.png' 
import Navbar from './navbar';



function Home(){
    return (
        <div>
            <div className="container">
            <h1>We're changing  the <br> whole game</br></h1>
            <button className="btnget">Get Started</button>
            <button className="btnview">View Pricing</button>
            <img src={image} className='img'></img>
            <div className='row'>
                <div className='col-md-4'>
                    <h2>our flower</h2>
                </div>
            </div>
</div>
            
        </div>

    )
}

export default Home;