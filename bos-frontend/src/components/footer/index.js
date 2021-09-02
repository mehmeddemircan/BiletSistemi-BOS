import React, { Fragment } from "react";

import { Tag } from 'antd';
import {
  TwitterOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';
import {
  FooterLogo,
  Footer,
  FooterCol,
  FooterBottom,
  Ul,
  Row,
  Container,
} from "./styles/footer";
import { Link } from "react-router-dom";




const FooterComponent = () => {




  return (
    <Fragment>
      <Footer>
        <FooterLogo>
          <a href="#"></a>
        </FooterLogo>
        <Container>
          <Row>
            <FooterCol>
              <h4>ABOUT</h4>
              <Ul>
                <li>
                  <a href="#">How Airbnb works</a>
                </li>
                <li>
                  <a href="#">Newsroom</a>
                </li>
                <li>
                  <a href="#">Investors</a>
                </li>
                <li>
                  <a href="#">Airbnb Plus</a>
                </li>
                <li>
                  <a href="#">Airbnb Luxe</a>
                </li>
                <li>
                  <a href="#">HotelTonight</a>
                </li>
                <li>
                  <a href="#">Airbnb for Work</a>
                </li>
              </Ul>
            </FooterCol>
            <FooterCol>
              <h4>COMMUNITY</h4>
              <Ul>
                <li>
                  <a href="#">Diversity & Belonging</a>
                </li>
                <li>
                  <a href="#">Against Discrimination</a>
                </li>
                <li>
                  <a href="#">Accessibility</a>
                </li>
                <li>
                  <a href="#">Airbnb Associates</a>
                </li>
                <li>
                  <a href="#">Frontline Stays</a>
                </li>
                <li>
                  <a href="#">Guest Referrals</a>
                </li>

                <li>
                  <a href="#">Gift cards</a>
                </li>

                <li>
                  <a href="#">Airbnb.org</a>
                </li>

              </Ul>
            </FooterCol>
            <FooterCol>
              <h4>HOST</h4>
              <Ul>
              <li>
                  <a href="#">Host your home</a>
                </li>
                <li>
                  <a href="#">Host an Online Experience</a>
                </li>
                <li>
                  <a href="#">Host an Experience</a>
                </li>
                <li>
                  <a href="#">Responsible hosting</a>
                </li>
                <li>
                  <a href="#">Resource Center</a>
                </li>
                <li>
                  <a href="#">Community Center</a>
                </li>
              </Ul>
            </FooterCol>
            <FooterCol>
              <h4>SUPPORT</h4>
              <Ul>
                <li>
                  <a href="#">Our COVID-19 Response</a>
                </li>
                <li>
                  <a href="#">Help Center</a>
                </li>
                <li>
                  <a href="#">Cancellation options</a>
                </li>
                <li>
                  <a href="#">Neighborhood Support</a>
                </li>
                <li>
                  <a href="#">Trust & Safety</a>
                </li>
             
              </Ul>
            </FooterCol>
            <FooterCol>
              <h4>FOLLOW US</h4>
              <div style={{display: 'flex' , flexDirection: 'column',width: '50%'}}>

              <Tag icon={<TwitterOutlined />} color="#55acee" style={{margin: '4px 0px', borderRadius: 5}}>
      Twitter
    </Tag>
    <Tag icon={<YoutubeOutlined />} color="#cd201f" style={{margin: '4px 0px' ,borderRadius: 5}}>
      Youtube
    </Tag>
    <Tag icon={<FacebookOutlined />} color="#3b5999" style={{margin: '4px 0px' ,borderRadius: 5}}>
      Facebook
    </Tag>
    <Tag icon={<LinkedinOutlined />} color="#55acee" style={{margin: '4px 0px',borderRadius: 5}}>
      LinkedIn
    </Tag>

              
              </div>
 {/*
              <div className="social-links">

                  <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-youtube"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a> 
              </div>
              */}
            </FooterCol>

            <FooterBottom>

              <div style={{padding: '24px 0px'}}>
                <section className="d-flex justify-content-between" style={{flexDirection: 'row-reverse',alignItems:'center'}}>
<div className="d-flex">
  <div>
    <div className="d-flex">
      <span style={{marginRight: 24}}>
        <a>
          <span>
            <i className="fas fa-globe"></i>
          </span>
          <span style={{textDecoration: 'underline',marginLeft:12}}>England (En)</span>
        </a>
      </span>
      <span style={{marginRight: 24}}>
        <a>
          <span>
          <i class="fas fa-euro-sign"></i>
          </span>
          <span style={{textDecoration: 'underline',marginLeft:12}}>GBP</span>
        </a>
      </span>
    </div>
  </div>
</div>

<div style={{marginRight: 40,}}>
                
                     <div style={{color:'rgb(34,34,34)' ,fontWeight: 400,marginRight: 19}}>
                copyright &copy;
                <script>document.write(new Date().getFullYear())</script>
                Company designed by <span>Creator</span>
              </div>
              
                </div>
              
               
               

                </section>
              </div>
           
            </FooterBottom>
          </Row>
        </Container>
      </Footer>
    </Fragment>
  );
};

export default FooterComponent;
