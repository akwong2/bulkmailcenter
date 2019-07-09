import React from 'react'
// import sf from '../../assets/sf.jpg';
// import write from '../../assets/write.jpg';
import think from '../../assets/think.jpg';
import './Home.css';

const home = (props) => {
    return (
        <div>
            <h2>Home</h2>
       
            <div className="Home">
                <img src={think} alt="homePic" />
                
                <div className="Content">
                    <p>
                        With more than 25 years of experience in Direct Mailing Industry, our experienced
                        staff at City Print & Mail offers a complete solution with a full line of Direct
                        Mail capabilities including list procurement and management, printing, and mailing 
                        services. Our customers come from various industries including non-profit 
                        organization, government agency, educational institute, medical center, bank, real
                        estate, restaurant, and customers throughout the country. We provide professional
                        solution to your project.
                    </p>
                    <p>
                        We are committed to provide our customer the highest level of quality services with
                        the fastest turnaround time, at the most competitive prices. This commitment, backed
                        by our dedication to customer service, makes City Print & Mail the best choice 
                        for your business.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default home;
