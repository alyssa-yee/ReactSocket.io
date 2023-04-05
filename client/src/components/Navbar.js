import React from 'react';

export default function Navbar(){
    return(
        <div class = "navdiv">
            <nav>
                <img src = {require ('../images/whiteDDlogo.png')} className = "nav--DD" alt ="DD logo"/>
                <li className='list'>
                    <li>
                        <a href = "http://google.com/"><button className='button-servers'>S1</button></a>
                    </li>
                    <li>
                        <a href = "http://google.com/"><button className='button-servers'>S2</button></a>
                    </li>
                    <li>
                        <a href = "http://google.com/"><button className='button-servers'>S3</button></a>
                    </li>
                    <li>
                        <a href = "http://google.com/"><button className='button-servers'>S4</button></a>
                    </li>
                    <li>
                        <a href = "http://google.com/"><button className='button-servers'>S5</button></a>
                    </li>
                    <li><button className = 'logout'> Log Out </button></li>
                </li>
                <li className='list'>
                    <li className = 'help-settings-list'><a href = "http://google.com/" class = "help-settings-link"> Settings </a></li>
                    <li className  = 'help-settings-list'><a href = "http://google.com/" class = "help-settings-link"> Help </a></li>
                </li>

                <div class = "dropdown">
                    <button className = "dropdown-btn"><img src = {require ('../images/white-menu-icon.png')} className = "dropdown-icon" alt ="dropdown-icon"/></button>
                    <div class = "dropdown-content">
                        <a href = "http://google.com/"> Server Name 6 </a>
                        <a href = "http://google.com/"> Server Name 7 </a>
                        <a href = "http://google.com/"> Server Name 8 </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}
