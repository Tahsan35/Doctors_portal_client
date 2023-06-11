import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../Infocard/InfoCards';
import Services from '../Services/Services';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonial from '../Testimonial/Testimonial';
import FeaturedService from '../FeaturedService/FeaturedService';
import Contract from '../Contract/Contract';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <FeaturedService></FeaturedService>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contract></Contract>
        </div>
    );
};

export default Home;