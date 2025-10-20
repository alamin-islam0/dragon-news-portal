import React from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import Qzone from './Qzone';
import Advertizing from '../Advertizing';

const RightAside = () => {
    return (
        <div>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <Qzone></Qzone>
            <Advertizing></Advertizing>
        </div>
    );
};

export default RightAside;