import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const Postcategory = ({ postcategory }) => {
  const data = useStaticQuery(graphql`
    query PostcatQuery {
      site {
        siteMetadata {
          categories {
            name
            color
          }
        }
      }
    }
  `)

  const categories = data.site.siteMetadata.categories
  let color = `red`

  categories.forEach(category => {
    if (postcategory === category.name) {
      color = category.color
    }
  }) 

  return (
    <small
      style={{
        backgroundColor: `${color}`,
        padding: `6px 8px`,
        borderRadius: `5%`,
        textAlign: `center`,
        //fontWeight: `bold`,
      }}
    >
      {postcategory}
    </small>
  )
}

Postcategory.defaultProps = {
  postcategory: `default`,
}

Postcategory.propTypes = {
  postcategory: PropTypes.string,
}

export default Postcategory
