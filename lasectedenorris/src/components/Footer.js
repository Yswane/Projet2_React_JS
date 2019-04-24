import React,{Component} from 'react'
import './Footer.css'

class Footer extends Component{
    render() {
        return(
    <footer>
        <div className="foot-content" >
            <ul className =" ul-foot">
                <a href="/"><li className ="li-foot">Accueil</li></a>
                <a href="/Chuck"><li className ="li-foot">Chuck</li></a>
            </ul>

            <ul className =" ul-foot">
                <a href="/Game"><li className ="li-foot">Défis Chuck</li></a>
                <a href="/Shop"><li className ="li-foot">Shop</li></a>
            </ul>

            <ul className =" ul-foot">
                <a href="https://fr.wikipedia.org/wiki/Chuck_Norris"> <li className ="li-foot">FAQ</li> </a>
                <a href="http://poneyclub-alencon-equitation.blogspot.com/2012/01/strip-tease-poney.html"><li className = "li-foot">Notre Partenaire</li>  </a>
            </ul>

            <ul className =" ul-foot">
                <a href="https://chucknorris.com/"><li className ="li-foot">Contact</li></a>
                <a href="https://www.facebook.com/groups/102049689879538/" target="_blank" rel="noopener noreferrer" ><img className="icon-footer" src="https://i.pinimg.com/originals/6f/8e/f7/6f8ef7788e9d6b78b027b640089a0fd1.png" alt=""/></a>
                <a href="https://twitter.com/ChuckNo20220926" target="_blank" rel="noopener noreferrer"><img className="icon-footer" src="https://abracadabrapdf.net/wp-content/uploads/2014/12/twitter.png" alt=""/></a>  
                <a href="https://www.instagram.com/explore/tags/chucknorris/" target="_blank" rel="noopener noreferrer" ><img className="icon-footer" src="http://www.pngall.com/wp-content/uploads/2016/04/Instagram-PNG-Pic.png" alt=""/></a>
                <a href="https://media.giphy.com/media/pvJyvknexyCCQ/giphy.gif"><img className="icon-footer" src="https://cdn.freebiesupply.com/logos/thumbs/1x/tinder-icon-logo.png" alt=""/></a>            
            </ul>
        </div>

        <p>Tout droits reservés à Gérard Lasalle <br/>  <a href="https://fightweb.files.wordpress.com/2008/06/chuck-norris-no.gif?w=640"> Merci Chuck et Michel </a> </p>
        

    </footer>
        )
        }   
    }

export default Footer