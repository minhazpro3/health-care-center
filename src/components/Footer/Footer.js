import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
       <div className="bg-secondary text-white">
            <div className="row container py-5 px-5">
                <div className="col-md-4">
                    <ul><li>Thank you so much so much for visited this website!</li></ul>
                    <br/>
                    <div className="ms-4" >
                        <h6>AHS Health Care Center and Org Limited.</h6>
                        <br/>
                       <div className="d-flex align-item-center">
                       <i class="fas fa-map-marker-alt"></i>
                        <p className="ms-2">Kangasoni,Road:-15412,Honolulu ,<br/>Bangladesh</p>
                       </div>
                    </div>
                    
                </div>
                <div className="col-md-4">
                    <div className="ms-4">
                        <h5>!If you want to our services?<br/>Subscribe Now</h5>
                        <div>
                            <input type="email" placeholder="email" className="w-75 px-2" />
                            <button className="btn btn-sm bg-info my-2">Click now</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                   <h4 className="ms-4">Follow us</h4>
                 <div className="ms-4">
                 <i class="fab fa-facebook"></i> <a target="_blank" className=" text-white"  href="https://www.facebook.com">Facebook</a>
                 <br/>
                 <i class="fab fa-youtube"></i> <a target="_blank" className=" text-white"  href="https://www.youtube.com">Youtube</a>
                 <br/>
                 <i class="fab fa-instagram"></i> <a className=" text-white" target="_blank" href="https://www.instagram.com">Instargam</a>
                 <br/>
                 <i class="fab fa-twitter"></i> <a target="_blank" className=" text-white"  href="https://www.twitter.com">Twitter</a>
                 <br/>
                 <i class="fas fa-envelope-open-text"></i> <a target="_blank" className=" text-white" href="https://www.gmail.com">andrebal.545@gmail.com</a>
                 <br/>
                 <i class="fas fa-globe"></i> <a target="_blank" className=" text-white" href="https://www.google.com">www.ai-website.com</a>
                 <br/>
                  
                 </div>
                </div>
               
        </div>

        <div><h6 className="text-center pb-3">All Rights Reserved By Minhaz.Moyna@.All</h6></div>
       </div>
    );
};

export default Footer;