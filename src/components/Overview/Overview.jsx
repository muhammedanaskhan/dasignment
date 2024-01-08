import React from 'react'
import './Overview.css'

function Overview() {

    const cardsData = [
        {
            title: "Online orders",
            amount: '231'
        },
        {
            title: "Amount received",
            amount: '₹23,92,312.19'
        }
    ]
    return (
        <div className='overview'>
            <div className='overviewHeader'>
                <div class="overviewTitle">Overview</div>
                <div class="overviewFilter">
                    <span>Last month</span>
                    <svg height="16px" width="16px" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svg-chevron-down-icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </div>
            </div>
            <div className="overviewCards">
                {cardsData.map((item, index) => {
                    return (
                        <div className='card' key={index}>
                            <p className="cardTitle">{item.title}</p>
                            <p className="cardAmount">{item.amount}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Overview