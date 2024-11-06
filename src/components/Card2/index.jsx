import React from 'react'
import './card.scss'
const Card2 = () => {
    const logo = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr6x-mSz6tG3vn2DQn1RF9oDOWeik_jz7PdA&s'
    return (
        <div className="card-feature-container">
            {[0, 0, 0, 0].map((item) => {
                return (
                    <div div className="card-feature" >
                        <div className="card-feature-icon">
                            <img src={logo} alt="Icon 1" className="card-feature-icon-img" />
                        </div>
                        <h3 className="card-feature-title">Zero-cost Possibilities</h3>
                        <p className="card-feature-description">
                            Maximize returns with zero fees for certain assets. Only pay for
                            additional, enhanced services.
                        </p>
                    </div>
                )
            })}
        </div>
    )
}

export default Card2