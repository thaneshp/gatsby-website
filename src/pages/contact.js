import React from 'react'

import BackgroundImage from 'gatsby-background-image'
import { graphql } from 'gatsby'

import Layout from '../components/layout.js'
import Head from '../components/head'
import contactStyles from './contact.module.scss'

const ContactPage = (props) => {
    return (
        <div>
            <Layout>
            <Head title="Contact"/>
            <h1 className={contactStyles.header}>Contact Us</h1>
            <BackgroundImage
                className={contactStyles.masthead}
                fluid = {props.data.indexImage.childImageSharp.fluid}
            >
            <div className={contactStyles.blackOverlay}></div>
            </BackgroundImage>
            <h2 className={contactStyles.headerTwo}>Let's Get in Touch</h2>
            <div className={contactStyles.contentBox}>
                <h3>Contact No.</h3>
                <p>+61 041 234 5678</p>
                <h3>Email Address</h3>
                <p>webservices@example.com</p>
                <h3>Our Office</h3>
                <p>123 Bourke Street, Melbourne, VIC, 3000</p>
            </div>
            </Layout>
        </div>
    )
}

export default ContactPage;

export const PageQuery = graphql`
  query {
    indexImage: file(relativePath: {eq: "images/contact_image.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;