import React from 'react';
import {Link} from "react-router-dom";
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import Background from './pic.jpg';
const AboutComponent = () =>{

return (
<div className = 'Component-Bg'
     style = {{ backgroundImage: `url(${Background})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
              }}>
</div>

)
}
export default AboutComponent