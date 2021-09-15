import React from 'react'

function Home(props) {
    console.warn(props.data.length);
    return (
        <div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.sathya.in/Media/Default/Thumbs/0044/0044918-samsung-mobile-m515fzbd-galaxy-m51-6gb-ram128gb-storage-blue.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        Samsung
                    </span><br/>
                    <span>
                        Price: 15000
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:15000,name:'Samsung'})}
                        }>
                        Add to Cart</button>
                        <button 
                    onClick={
                        ()=>{props.removeToCartHandler()}
                        }>
                        Remove From Cart</button>
                </div>
            </div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.sathya.in/Media/Default/Thumbs/0044/0044918-samsung-mobile-m515fzbd-galaxy-m51-6gb-ram128gb-storage-blue.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        Samsung
                    </span><br/>
                    <span>
                        Price: 15000
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:15000,name:'Samsung'})}
                        }>
                         Add to Cart</button>
                        <button 
                    onClick={
                        ()=>{props.removeToCartHandler()}
                        }>
                        Remove From Cart</button>
                </div>
            </div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.sathya.in/Media/Default/Thumbs/0044/0044918-samsung-mobile-m515fzbd-galaxy-m51-6gb-ram128gb-storage-blue.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        Samsung
                    </span><br/>
                    <span>
                        Price: 15000
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:15000,name:'Samsung'})}
                        }>
                         Add to Cart</button>
                        <button 
                    onClick={
                        ()=>{props.removeToCartHandler()}
                        }>
                        Remove From Cart</button>
                </div>
            </div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.sathya.in/Media/Default/Thumbs/0044/0044918-samsung-mobile-m515fzbd-galaxy-m51-6gb-ram128gb-storage-blue.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        Samsung
                    </span><br/>
                    <span>
                        Price: 15000
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:15000,name:'Samsung'})}
                        }>
                         Add to Cart</button>
                        <button 
                    onClick={
                        ()=>{props.removeToCartHandler()}
                        }>
                        Remove From Cart</button>
                </div>
            </div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.sathya.in/Media/Default/Thumbs/0044/0044918-samsung-mobile-m515fzbd-galaxy-m51-6gb-ram128gb-storage-blue.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        Samsung
                    </span><br/>
                    <span>
                        Price: 15000
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:15000,name:'Samsung'})}
                        }>
                        Add to Cart</button>
                        <button 
                    onClick={
                        ()=>{props.removeToCartHandler()}
                        }>
                        Remove From Cart</button>
                </div>
            </div>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://www.sathya.in/Media/Default/Thumbs/0044/0044918-samsung-mobile-m515fzbd-galaxy-m51-6gb-ram128gb-storage-blue.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        Samsung
                    </span><br/>
                    <span>
                        Price: 15000
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button 
                    onClick={
                        ()=>{props.addToCartHandler({pice:15000,name:'Samsung'})}
                        }>
                         Add to Cart</button>
                        <button 
                    onClick={
                        ()=>{props.removeToCartHandler()}
                        }>
                        Remove From Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Home