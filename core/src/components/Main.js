import React from 'react'
import PropTypes from 'prop-types'

import '../assets/scss/components/_date.scss'
import '../assets/scss/components/_company.scss'
import profile from '../images/profile.jpg'
import bsides from '../images/bsides.jpg'
//import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
    render() {

        let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

            return (
                <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

                <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
                <h2 className="major">Who Am I?</h2>
                <span className="image" style={{marginLeft:"20vh"}}><img style={{borderRadius:100},{height:600}, {width:400}} src={profile} alt="Picture of me :)" /></span>
                <p></p>
                <p>My name is Christopher Raley. I'm a computer scientist with a strong interest in cybersecurity. I am working towards a B.A. Computer Science degree at the University of Virginia (go hoos). I currently reside in Northern Virginia, but wouldn't mind calling UVA my second home.</p>
                <p>From my high school days I was alway fascinated by the concept of "hacking" (inspired by <a href="https://en.wikipedia.org/wiki/Sneakers_(1992_film)"><em>Sneakers</em></a>), which eventually lead me to self learn programming languages and pen testing techniques.</p>

                <hr/>
                {close}
                </article>

                <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
                <h2 className="major">Experience</h2>

                <b>Cybersecurity Engineer Intern</b> <span className="date">May 2019 - Present</span>
                <p className="company">Northrop Grumman<span className="date">McLean, VA</span></p>                 
                <li> Created Angular 8 + Python Flask CRUD (Create, Read, Update, Delete) application to automate quality assessments for different task forces</li>
                <li> Implemented solutions for Angular frontend application with backend APIs</li>
                <hr/>

                <b>Network Security Teacher Assistant</b> <span className="date">Aug 2018 - May 2019</span>
                <p className="company">University of Virginia<span className="date">Charlottesville, VA</span></p>                 
                <li> Lectured weekly in topics such as Session Hijacking, Cryptography, and Penetration Testing Techniques</li>
                <li> Assisted students during in-class labs and assignments </li>
                <li> Troubleshooted technical issues with virtual machines, network configurations, etc during office hours</li>

                <hr/>

                <b>Cybersecurity Research Assistant</b> <span className="date">May 2018 - May 2019</span>
                <p className="company">University of Virginia<span className="date">Charlottesville, VA</span></p>                 
                <li>Compiled user-friendly tutorials on how to properly assess vulnerabilities and safely patch them</li>
                <li> Experimented with Golden Ticket Kerberos attacks to increase global awareness and mitigate exploitations</li>
                <li> Discovered how to autonomously install rogue X.509 certificates on Windows, Mac, and Linux machines</li>

                <hr/>

                <b>GenCyber Camp Teacher Assistant</b> <span className="date">May 2018 - July 2018</span>
                <p className="company">University of Virginia<span className="date">Charlottesville, VA</span></p>                 
                <p>The GenCyber Cyberwars Camp, hosted by UVA Engineering’s Department of Computer Science and sponsored by the GenCyber Program, 
                a campaign to improve cybersecurity education funded by the National Security Agency and the National Science Foundation. 
                <a href="https://www.dailyprogress.com/news/uva/uva-bootcamp-aims-to-increase-it-training-for-teachers/article_f8a5e20a-7682-11e8-81a7-4fd889ca9dbf.html">Check out this article!</a>
                </p>
                <li> Managed <a href="https://blogs.cisco.com/perspectives/cyber-security-capture-the-flag-ctf-what-is-it">"Capture The Flag"</a> (CTF) challenges including digital forensics, SQL injections, and steganography</li>
                <li> Optimized XSS and CSRF demonstrations to maintain compatibility between virtual machines</li>

                <hr/>

                <b>Assistant Instructor</b> <span className="date">November 2018</span>
                <p className="company">Security B-Sides Southwest Virginia<span className="date">Wise, VA</span></p>                 
                <p>BSides is a "community-driven framework for building events for and by information security community members. The goal is to expand
                the spectrum of conversation beyond the traditional confines of space and time." <a href="http://www.securitybsides.com">Click here for more information</a></p>
                <span className="image main"><img src={bsides} alt="" /></span>
                <li> Assisted workshop dealing with SSLStrip tool and how attackers can deceive casual web users in order to obtain login credentials</li>
                <li> Provided virtual machines to simulate an attacker who will perform a man-in-the-middle attack</li>

                {close}
                </article>


                <article id="academics" className={`${this.props.article === 'academics' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
                <h2 className="major">Education</h2>
                <b>University of Virginia</b> <span className="date">Aug 2016 - Present</span>
                <p className="company">Bachelor of Arts Computer Science</p>
                <li>GPA: 3.73</li>
                <li>Department of Homeland Security Cybersecurity Focal Path</li>
                <hr/>
                <h2 className="major">Certificates</h2>
                <b>Security+</b><span className="date">Jul 2021</span>
                <p className="company">CompTIA</p>

                <b>CCNA Routing and Switching</b><span className="date">Aug 2021</span>
                <p className="company">Cisco</p>


                {close}
                </article>


                <article id="about" className={`${this.props.article === 'project' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
                <h2 className="major">Projects</h2>
                <b>Vulnerability Scanning / Patching</b>
                <li> Tutorials explaining how to properly scan for vulnerabilities on a computer and the necessary steps to take to patch them</li>
                {close}
                </article>

                <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
                <h2 className="major">Contact</h2>
                <form method="post" action="#">
                <div className="field half first">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
                </div>
                <div className="field half">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
                </div>
                <div className="field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="4"></textarea>
                </div>
                <ul className="actions">
                <li><input type="submit" value="Send Message" className="special" /></li>
                <li><input type="reset" value="Reset" /></li>
                </ul>
                </form>
                <ul className="icons">
                <li><a href="http://www.github.com/raleycs" className="icon fa-github"><span className="label">GitHub</span></a></li>
                <li><a href="http://www.linkedin.com/in/csraley" className="icon fa-linkedin"><span className="label">Instagram</span></a></li>
                </ul>
                {close}
                </article>

                </div>
            )
    }
}

Main.propTypes = {
    route: PropTypes.object,
    article: PropTypes.string,
    articleTimeout: PropTypes.bool,
    onCloseArticle: PropTypes.func,
    timeout: PropTypes.bool,
    setWrapperRef: PropTypes.func.isRequired,
}

export default Main
