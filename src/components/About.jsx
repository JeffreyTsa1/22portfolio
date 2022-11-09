import Footer from './Footer';
import {motion} from 'framer-motion';
const About = () => {
  return (
    <div>
    <motion.div 
    initial = {{ opacity: 0,
      // translateY:"-20px"
    }}
    animate = {{ opacity: 1, 
      // translateY:"0px"
    }}
    transition = {{ duration:0.5, ease: "easeOut" }}
    id="aboutWrapper">
      <div id="about">
        <h1>Hi, I'm Jeffrey.</h1>
        <p>
            Welcome to my website! Below, you will find a few projects that I have worked on in the past. I am a recent graduate from the University of Illinois, currently seeking full-time opportunities as a Software Engineer. I specialize in building elegant products for the web. 
        </p>
        <p>
            I'm Taiwanese-Canadian, but I lived in Shanghai and Hong Kong for the majority of my life. Outside of work, I'm a professional DJ, and I tinker with cars.
        </p>
        <p> Please feel free to <a href="mailto::jeffrey.my.tsai@gmail.com">reach out to me</a> if you have any questions or if you would like to collaborate!</p>
      </div>
    </motion.div>
    <Footer />
    </div>
  )
}

export default About