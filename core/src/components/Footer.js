import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">Christopher Raley 
            | <a href="mailto:raley@virginia.edu" style={{"borderBottom" : "none"}} >raley@virginia.edu</a> 
            | <a href="https://github.com/raleycs" style={{"borderBottom" : "none"}} ><i className="fa fa-github" aria-hidden="true"></i></a> <a href="https://linkedin.com/in/csraley" style={{"borderBottom" : "none"}} ><i className="fa fa-linkedin" aria-hidden="true"></i></a>
        </p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
