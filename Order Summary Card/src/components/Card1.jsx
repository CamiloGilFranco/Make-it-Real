import "./Card1.css";


const Card1 = () => {
    return (
        <section className="main-container">
            <section className="img-container">
                <img className="img" src="../src/assets/illustration-hero.svg" alt="" />
            </section>
            <section className="text-container">
                <h1>Order Summary</h1>
                <p>You can now listen to million of songs, audiobooks, and podcasts on any devices anywhere you like!</p>
            </section>
            <section className="payment-container">
                <img className="img-sound" src="../src/assets/icon-music.svg" alt="" />
                <div className="text-annual">
                    <h2>Annual Plan</h2>
                    <span>$59.99/year</span>
                    
                </div>
                <a href="">Change</a>
            </section>
            <button className="proceed">Proceed to Payment</button>
            <button className="cancel">Cancel Order</button>
        
        </section>
    )
}
export default Card1