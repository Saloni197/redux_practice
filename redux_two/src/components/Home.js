import React from 'react';

function Home(props) {
    console.warn("Props",props)
    return (
        <div>
        <div className="add-to-cart">
        {/* <span>{props.data.length}</span> */}
            <img src="http://www.organizeit.com/item-img/foldable-shopping-cart-we-go-red.jpg"/>
        </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src='https://www.sathya.in/Media/Default/Thumbs/0044/0044918-samsung-mobile-m515fzbd-galaxy-m51-6gb-ram128gb-storage-blue.jpg'/>
                </div>
                <div className="text-wrapper item">
                <span>
                    Samsung<br/>
                </span>
                <span>
                    Price:15000.00
                </span>
                </div>
                <div className="btn-wrapper item">
                <button>
                   {/* onClick={
                       ()=>props.addToCartHandler({pice:15000,name:'samsung'})}
                     > */}
                      Add To Cart</button> 
                </div>
            </div>
        </div>
    );
}

export default Home;