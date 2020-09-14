import React, { Component } from 'react';
import './index.css'


class Footer extends React.Component
{

render(){
    return(
        <div>
        <footer className="footer text-center">
            <div className="social">
                <ul>
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"> <i className="fa fa-twitter" /></a></li>
                    <li><a href="#"> <i className="fa fa-instagram" /></a></li>
                </ul>
            </div>
            <div className="copyrights">
                <p>&copyrights; 2020 <span>Filmplats</span></p>

            </div>
        </footer>
          
        </div>
    );
}

}
export default Footer
