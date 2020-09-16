import React from 'react'
import { Link } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import indexStyles from './index.module.scss'

const IndexPage = (props) => {
  return  (
      <Layout>
        <Head title="Home"/>
        <BackgroundImage
          className={indexStyles.masthead}
          fluid = {props.data.indexImage.childImageSharp.fluid}
          fadeIn
        >
          <div className={indexStyles.blackOverlay}>
            <div className={indexStyles.contentBox}>
              <h1 className={indexStyles.headerText}>Web Services</h1>
              <h2>We can help you connect the dots in an everchanging world.</h2>
              <Link to={"/about"}>
                <button className={indexStyles.button}>GET STARTED</button>
              </Link>
            </div>
          </div>
        </BackgroundImage>
      </Layout>
  )
}

export default IndexPage;

export const PageQuery = graphql`
  query {
    indexImage: file(relativePath: {eq: "images/background_image.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;