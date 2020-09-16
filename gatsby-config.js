/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
      title: 'Web Services',
      author: 'webservices.com'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: 'aqid8ok7awzt',
                accessToken: 'SU5ZFJ8VZiK1nddGEKAyhWo2jeFNoC0iGtZgmv0v3uc'
            }
        },
        'gatsby-plugin-sass',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: 'src',
                path: `${__dirname}/src/`,
            }
        },
        `gatsby-transformer-sharp`,
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [
                    'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
							maxWidth: 750,
							linkImagesToOriginal: false
                        }
                    }
                ]
            }
        }
    ]
}
