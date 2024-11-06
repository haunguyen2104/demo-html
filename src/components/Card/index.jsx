import React from 'react'
import './card.scss'
const Card = () => {
    const imageUrl = "https://images.unsplash.com/photo-1492552181161-62217fc3076d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
    const avatarUrl = 'https://images.unsplash.com/photo-1631947430066-48c30d57b943?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHxlbnwwfHwwfHx8Mg%3D%3D'
    return (
        <div className="card-container">
            {/* Card 1 */}
            <div className="card">
                <img src={imageUrl} alt="ArticleImage" className="card-image" />
                <div className="card-content">
                    <span className="tag technology">Technology</span>
                    <h3 className="card-title">
                        Why is the Tesla Cybertruck designed the way it is?
                    </h3>
                    <p className="card-description">
                        An exploration into the truck's polarising design
                    </p>
                    <div className="card-author-info">
                        <img src={avatarUrl} alt="Author" className="card-author-image" />
                        <div>
                            <p className="card-author-name">July Dec</p>
                            <p className="time">2h ago</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Card 2 */}
            <div className="card">
                <img src={imageUrl} alt="ArticleImage" className="card-image" />
                <div className="card-content">
                    <span className="tag popular">Popular</span>
                    <h3 className="card-title">
                        How to Keep Going When You Don’t Know What’s Next
                    </h3>
                    <p className="card-description">
                        The future can be scary, but there are ways to deal with that fear.
                    </p>
                    <div className="card-author-info">
                        <img src={avatarUrl} alt="Author" className="card-author-image" />
                        <div>
                            <p className="card-author-name">Eyup Ucmaz</p>
                            <p className="time">Yesterday</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Card 3 */}
            <div className="card">
                <img src={imageUrl} alt="ArticleImage" className="card-image" />
                <div className="card-content">
                    <span className="tag design">Design</span>
                    <h3 className="card-title">10 Rules of Dashboard Design</h3>
                    <p className="card-description">Dashboard Design Guidelines</p>
                    <div className="card-author-info">
                        <img src={avatarUrl} alt="Author" className="card-author-image" />
                        <div>
                            <p className="card-author-name">Carrie Brewer</p>
                            <p className="time">1w ago</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card