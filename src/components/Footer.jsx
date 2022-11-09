import React from 'react'
import ghLogo from '../assets/gh.png'
import inLogo from '../assets/in.png'
import igLogo from '../assets/ig.png'
const Footer = () => {
  return (
    <div>
        <div id="hover_footer">
            <div id="left_hand_bar" class="bar">
                <a href="https://github.com/JeffreyTsa1" target="_blank"><img src={ghLogo} class="link_icons" /></a>
                <a href="https://www.linkedin.com/in/jeffreytsa1/" target="_blank"><img src={inLogo} class="link_icons" /></a>
                <a href="https://www.instagram.com/jeffreytttt/" target="_blank"><img src={igLogo} class="link_icons" /></a>
            </div>
            <div id="right_hand_bar" class="bar">
                <a href="ResumeJeffreyTsai2021.pdf" download target="_blank">resume</a>
            </div>
        </div>
    </div>
  )
}

export default Footer