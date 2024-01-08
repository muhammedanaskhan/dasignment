import React from 'react'
import './Sidebar.css'
import menuItems from '../../constants/menuItems';

function Sidebar() {
    
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