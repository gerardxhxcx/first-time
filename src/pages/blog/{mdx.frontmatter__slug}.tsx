import { graphql, PageProps, StaticQueryDocument } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'

const BlogPost: React.FC<{data:any, children: string}> = ({data, children}) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  )
}

export const Head: React.FC<{data:any}> = ({data}) => <Seo title={data.mdx.frontmatter.title} />

export const query: StaticQueryDocument = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export default BlogPost