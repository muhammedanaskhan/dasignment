import React from 'react'
import './Nav.css'
function Nav() {
    return (
        <div className='nav'>
            <div class="navHeading">
                <div class="navTitle">Payments</div>
                <div class="navInfo">
                    <div class="infoIcon">
                        <img src="./navIcons/infoIcon.svg" alt="info logo" />
                    </div>
                    <p class="infoText">How it works?</p>
                </div>
            </div>
            <div class="searchBox">
                <div class="boxIcon">
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="svg-search-icon">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>
                <input class="boxInput" type="text" placeholder="Search features, tutorial, etc." />
            </div>
            <div class="headerButtons">
                <div class="speakerIconDiv">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M18.4211 0.0237288L1.11579 3.38234C0.463158 3.49896 0 4.1287 0 4.85174V12.5019C0 13.225 0.463158 13.8547 1.11579 13.9713L2.88421 14.3212C3.6 15.6273 4.94737 17.8897 6.75789 19.7323C7.36842 20.362 8.37895 19.8022 8.25263 18.8693C8.08421 17.6331 8.12632 16.3037 8.18947 15.3707L18.4211 17.3766C19.2421 17.5398 20 16.8401 20 15.9072V1.49312C20 0.560174 19.2421 -0.139537 18.4211 0.0237288ZM6.46316 9.6331C6.46316 9.88966 6.27368 10.0996 6.04211 10.0996H4.31579C4.08421 10.0996 3.89474 9.88966 3.89474 9.6331V7.72056C3.89474 7.464 4.08421 7.25408 4.31579 7.25408H6.04211C6.27368 7.25408 6.46316 7.464 6.46316 7.72056V9.6331ZM11.2842 9.6331C11.2842 9.88966 11.0947 10.0996 10.8632 10.0996H9.13684C8.90526 10.0996 8.71579 9.88966 8.71579 9.6331V7.72056C8.71579 7.464 8.90526 7.25408 9.13684 7.25408H10.8632C11.0947 7.25408 11.2842 7.464 11.2842 7.72056V9.6331ZM16.1263 9.6331C16.1263 9.88966 15.9368 10.0996 15.7053 10.0996H13.9789C13.7474 10.0996 13.5579 9.88966 13.5579 9.6331V7.72056C13.5579 7.464 13.7474 7.25408 13.9789 7.25408H15.6842C15.9158 7.25408 16.1053 7.464 16.1053 7.72056V9.6331H16.1263Z" fill="#4D4D4D" />
                    </svg>

                </div>
                <div class="dropdownIconDiv">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <g clip-path="url(#clip0_3839_15065)">
                            <circle cx="20" cy="20" r="20" fill="#E6E6E6" />
                            <path d="M21.1109 25.5026C20.5156 26.1587 19.4844 26.1587 18.8891 25.5026L13.6151 19.6895C12.7406 18.7256 13.4245 17.1816 14.726 17.1816L25.274 17.1816C26.5755 17.1816 27.2594 18.7256 26.3849 19.6895L21.1109 25.5026Z" fill="#4D4D4D" />
                        </g>
                        <defs>
                            <clipPath id="clip0_3839_15065">
                                <rect width="40" height="40" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>
            </div>
        </div>
    )
}

export default Nav