import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="content">
            <div className="inner">
                <h1>Christopher Raley</h1>
                <p>Hi! I'm Chris.</p>
                <p>Cybersecurity engineer, hacker, and student.</p>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Who Am I?</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Experience</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('academics')}}>Academics</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('project')}}>Projects</a></li>
            </ul>
        </nav>
 
            </div>
        </div>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
