import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Postcategory from "../components/postcategory"
import { rhythm } from "../utils/typography"

const CategoryTemplate = ({ data, pageContext, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const { category } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={`${category} | amaNekublog`} />
      <h2>{category}</h2>
      <hr
        style={{
          marginBottom: rhythm(1),
        }}
      />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small
                style={{
                  display: `block`,
                  marginBottom: rhythm(1 / 4),
                }}
              >
                {node.frontmatter.date}
              </small>
            </header>
            <p>
              <Postcategory postcategory={node.frontmatter.category}/>
            </p>
          </article>
        )
      })}
    </Layout>
  )
}

export default CategoryTemplate

export const pageQuery = graphql`
  query($category: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY.MM.DD")
            title
            description
            category
          }
        }
      }
    }
  }
`
