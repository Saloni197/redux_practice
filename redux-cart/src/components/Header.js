import React from 'react'
function Header(props)
{
    console.warn(props.data)
    return(
        <div>
             <div className="add-to-cart">
    <span className="cart-count">{props.data.length}</span>
                <img src="http://www.organizeit.com/item-img/foldable-shopping-cart-we-go-red.jpg" />
            </div>
        </div>
    )
}

export default Header