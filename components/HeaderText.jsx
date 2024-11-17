import React from 'react'
import icon_facebook from '../src/assets/facebook.png'
import icon_twitter from '../src/assets/twitter.png'
import icon_github from '../src/assets/github.png'

export default function HeaderText() {
    return (
        <div className="header-text">
            <h1>Hi, I am <span className="highlight">John Doe</span></h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Iure libero numquam cum veritatis laudantium perspiciatis 
                animi enim corporis suscipit voluptate praesentium aspernatur 
                maiores quam perferendis ratione consequatur ipsa, voluptatibus tempora.
            </p>
            <div className="social-icons">
                <img src={icon_facebook} />
                <img src={icon_twitter} />
                <img src={icon_github} />
            </div>
        </div>
    )
}