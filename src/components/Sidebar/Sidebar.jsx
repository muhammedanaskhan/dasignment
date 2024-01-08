import React from 'react'
import './Sidebar.css'
function Sidebar() {

    const menuItems = [
        {
            item: "Home",
            link: "/",
            image: "/menuIcons/home.svg",
            isActive: true
        },
        {
            item: "Orders",
            link: "/orders",
            image: "/menuIcons/orders.svg"
        },
        {
            item: "Products",
            link: "/products",
            image: "/menuIcons/products.svg"
        },
        {
            item: "Delivery",
            link: "/delivery",
            image: "/menuIcons/delivery.svg"
        },
        {
            item: "Marketing",
            link: "/marketing",
            image: "/menuIcons/marketing.svg"
        },
        {
            item: "Analytics",
            link: "/analytics",
            image: "/menuIcons/analytics.svg"
        },
        {
            item: "Payments",
            link: "/payments",
            image: "/menuIcons/payments.svg",
        },
        {
            item: "Tools",
            link: "/tools",
            image: "/menuIcons/tools.svg"
        },
        {
            item: "Discounts",
            link: "/discounts",
            image: "/menuIcons/discounts.svg"
        },
        {
            item: "Audience",
            link: "/audience",
            image: "/menuIcons/audience.svg"
        },
        {
            item: "Appearance",
            link: "/appearance",
            image: "/menuIcons/appearence.svg"
        },
        {
            item: "Plugins",
            link: "/plugins",
            image: "./menuIcons/plugins.svg"
        },
    ]

    
    return (
        <div className='sidebar'>
            <div className='profile'>
                <div className='user'>
                    <div class="userIcon">
                    <img src="./user__icon.png" alt="user logo" />
                </div>
                <div class="userDetail">
                    <div class="userName">Nishyan</div>
                    <div class="visitStore">Visit store</div>
                </div>
                </div>
                <img className="downArrow" src="./menuIcons/downArrow.svg" alt="arrow icon" />
            </div>
            <div className='menuItems'>
            
                {menuItems.map((item, index) => {
                    const isActive = item.isActive; 
                    return (
                        <div className={`menuItem ${isActive ? 'activeItem' : ''}`} key={index}>
                            <a href={item.link}>
                                <div className='menuIcon'>
                                    <img src={item.image} alt="menu icon" />
                                </div>
                                <div className='menuText'>
                                    {item.item}
                                </div>
                            </a>

                        </div>
                    )
                })}
            </div>
            <div className='creditsDiv'>
                <img className="creditsIcon" src='/menuIcons/creditsIcon.svg'></img>
                <div className="creditsDetails">
                    <span>Available credits</span>
                    <span className="amount">222.10</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar