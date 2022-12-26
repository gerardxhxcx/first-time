import { graphql, useStaticQuery } from "gatsby"

type useSiteMetadata = {
    title?: string
    description?: string
    siteUrl?: string
}

const useSiteMetadata = ():useSiteMetadata => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return data.site.siteMetadata
}

export default useSiteMetadata