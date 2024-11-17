import React from 'react'
import about_img from '../src/assets/about-me.jpg'

export default function AboutSection() {
    return (
        <div className="about-section">
            <h2 className="section-main-title">ABOUT ME</h2>
            <div className="container">
                <div className="about-left"><img src={about_img} /></div>
                <div className="about-right">
                <h2>Hi There! I'm John Doe</h2>
                <h3>Visual Designer</h3>
                <p>I am a Visual Designer with a strong focus on digital branding. Visual design seeks to 
                    attract, inspire, create desires and motivate people to make an imagination with a lasting
                    impact.
                </p>
                <div className="about-table">
                    <table>
                    <tbody>
                        <tr>
                        <td>Birthday:</td>
                        <td>May 01, 1996</td>
                        </tr>
                        <tr>
                        <td>Phone:</td>
                        <td>00123 50 6788651</td>
                        </tr>
                        <tr>
                        <td>Email:</td>
                        <td>hello@example.com</td>
                        </tr>
                        <tr>
                        <td>From:</td>
                        <td>2661, Hitch median lane, beer creek</td>
                        </tr>
                        <tr>
                        <td>Language:</td>
                        <td>English, German</td>
                        </tr>
                        <tr>
                        <td>Freelance:</td>
                        <td>Available</td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <button className="btn">Download CV</button>
                </div>
            </div>
        </div>
    )
}