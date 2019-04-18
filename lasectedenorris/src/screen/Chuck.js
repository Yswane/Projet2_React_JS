import React, { Component } from 'react';
import './Chuck.css'
import Gridchuck from '../components/Gridchuck';
import Button_Chuck_Top from '../components/Button_Chuck_Top';
import {Link} from 'react-router-dom';
import '../components/Chuckcarousel.css';
import ApiQuotesChuck from './ApiQuotesChuck';




class Chuck extends Component {
    render() {
        return (  
            <>
                <title>Page Chuck</title>

               
                <div className="bodyChuckpage">
                    
                   {/* Contenaire bannière avec bulle API */}
                    <section className="sectionApiQuotes">
                    <div className="separation1"></div>  
                        <ApiQuotesChuck />
                    </section>
                    
                    {/* Contenaire images/video/gif etc... */}
                    <section className='sectionGrid'> 
                    <div className="separation2"></div>  
                        <div>
                        <Gridchuck />
                        </div>
                    </section>
                

                    <section className="sectionfooterbottom">
                        <div>
                        <Button_Chuck_Top />
                        </div>
                    </section>
               
                    <div className="button_movie">
                    <a href="/Filmography" Target="_blank" className="button-primary2" title="Learn More"><Link to="/Chuck" />Ma Filmographie<span className="icon-play"><i className="fas fa-chevron-circle-right"></i></span></a>
                    </div> 
                
                </div>
               
            </>
        );
    }
}


export default Chuck;
