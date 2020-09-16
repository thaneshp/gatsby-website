import React from 'react'

import BackgroundImage from 'gatsby-background-image'
import { graphql } from 'gatsby'

import Layout from '../components/layout.js'
import Head from '../components/head'
import aboutStyles from './about.module.scss'

const AboutPage = (props) => {
    return (
        <div>
            <Layout>
            <Head title="About Us" />
            <BackgroundImage
                className={aboutStyles.masthead}
                fluid = {props.data.indexImage.childImageSharp.fluid}
            >
            <div className={aboutStyles.blackOverlay}>
            <div className={aboutStyles.contentBox}>
                <h1 className={aboutStyles.header}>About Us</h1>
                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
            </div>
            </div>
            </BackgroundImage>
            <br></br>
            <p className={aboutStyles.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id libero tristique, facilisis neque ac, congue est. 
                Nulla massa nisi, fringilla et pretium ac, iaculis sit amet magna. Aliquam id mauris vitae ipsum posuere venenatis vel ac massa. 
                Morbi nec augue facilisis felis dignissim tincidunt. Pellentesque pellentesque lorem mauris, eget sagittis metus placerat sed. 
                Fusce venenatis quam ut arcu molestie porta. Aenean convallis lacinia est tincidunt facilisis. 
                Vivamus quis sapien ornare, interdum ligula sed, porttitor mauris. In id neque ac felis elementum laoreet. 
                Nam mi leo, cursus nec orci quis, euismod mattis nibh. Quisque mattis sapien consequat tortor sollicitudin faucibus. 
                Sed suscipit lectus non hendrerit ornare. Nam turpis ex, tempus id consectetur ac, egestas quis justo. 
                Vestibulum et sollicitudin libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                Pellentesque eleifend et ipsum vel euismod.
            </p>
            <br></br>
            <p className={aboutStyles.text}> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pharetra ante sed mi facilisis, ut dictum felis dapibus. 
                In vulputate erat tortor, vel tincidunt odio iaculis quis. Aliquam arcu nisl, faucibus et urna ut, sagittis congue erat. 
                Quisque lobortis interdum libero, non lacinia libero facilisis ac. Donec euismod velit eget urna pellentesque aliquam quis a arcu. 
                Praesent neque neque, varius id tellus a, dictum pharetra massa. Pellentesque viverra purus sit amet odio consectetur auctor. 
                Duis vel enim vitae enim viverra bibendum.
            </p>   
            </Layout>
        </div>
    )
}

export default AboutPage

export const PageQuery = graphql`
  query {
    indexImage: file(relativePath: {eq: "images/about_image.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;