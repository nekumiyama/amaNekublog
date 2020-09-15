import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import { rhythm } from "../utils/typography"

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query NavbarQuery {
      site {
        siteMetadata {
          categories {
            name
          }
        }
      }
    }
  `)
  
  const categories = data.site.siteMetadata.categories

  return (
    <ul
      style={{
        display: `flex`,
        marginBottom: rhythm(0.5),
        marginLeft: 0,
      }}
    >
      {categories.map(category => {
        return (
          <li
            style={{
              display: `flex`,
              paddingLeft: 0,
              paddingRight: `16px`,
              paddingTop: `10px`,
              paddingBottom: `10px`,
            }}
          >
            <Link to={`/${category.name}`}>{category.name}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Navbar