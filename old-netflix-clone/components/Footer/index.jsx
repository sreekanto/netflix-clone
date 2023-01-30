import React from 'react'
import { footerLinks } from '../data/links'
import { Col, Container, Row } from '../globalElements'
import { FooterElement, FooterNav, FooterNavItem, FooterNavLink } from './FooterElements'

const Footer = () => {
  return (
    <FooterElement>
      <Container>
        {
          footerLinks && (
            <Row>
              { footerLinks.map(({id, links}) => (
                <Col key={id} isOneFourth>
                  {
                    links && 
                    (
                      <FooterNav>
                        { 
                          links.map(({id, title, to}) => (
                            <FooterNavItem key={id}>
                              <FooterNavLink to={to}>{ title }</FooterNavLink>
                            </FooterNavItem>
                          ))
                        }
                      </FooterNav>
                    )
                  }
                </Col>
                )) 
              } 
            </Row>
          )
        }
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </FooterElement>
  )
}

export default Footer