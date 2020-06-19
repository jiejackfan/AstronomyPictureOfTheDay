import React from 'react';
import ApodService from '../services/ApodService'
import {Link} from "react-router-dom";
export default class Login extends React.Component {
render() {
        return (
        <div className=" container ">
<Link to="/home">
       <i class="fa fa-home float-right btn-sm" aria-hidden="true"></i>
       </Link>
<h1> PRIVACY NOTICE </h1>
<h4> Last updated June 19, 2020 </h4>
       Thank you for choosing to be part of our community at Fan-Free-Joshi (“Company”, “we”, “us”, or “our”). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our notice, or our practices with regards to your personal information, please contact us at joshi.mai@husky.neu.edu.

       When you visit our website http://starmaps.com, and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy notice, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Sites and our services.

       This privacy notice applies to all information collected through our website (such as http://starmaps.com), and/or any related services, sales, marketing or events (we refer to them collectively in this privacy notice as the "Services").

       Please read this privacy notice carefully as it will help you make informed decisions about sharing your personal information with us
       </div>
)


}
}