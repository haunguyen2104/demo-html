import React from 'react'
import './card.scss'
const Card3 = () => {
    const icon = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSubsfvX1GCHF8amyfEQxTz7AECFDY-oGMVTg&s'
    return (
        <div className="card-modern-container">
            {[0, 0, 0, 0].map((item) => {
                return (
                    // Card
                    <div className="card-modern" >
                        <div className="card-icon">
                            <img src={icon} alt="Icon1" />
                        </div>
                        <h3 className="card-title">Innovative Solutions</h3>
                        <p className="card-description">
                            Explore new, efficient ways to achieve your business goals and maximize
                            productivity.
                        </p>
                    </div>
                )
            })}

        </div >

    )
}

export default Card3