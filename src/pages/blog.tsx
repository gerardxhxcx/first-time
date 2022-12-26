import * as React from 'react'
import { HeadFC, PageProps, graphql, StaticQueryDocument } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const Blog: React.FC<{data: any}> = ({data}) => {
    console.log(data)
    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
                {data.allMdx.nodes.map((mdx:any) => (
                    <article key={mdx.id}>
                        <h2>{mdx.frontmatter.title}</h2>
                        <p>{`Posted: ${mdx.frontmatter.date}`}</p>
                        <p>{mdx.excerpt}</p>
                        <p>{`Modified: ${mdx.parent.modifiedTime}`}</p>
                    </article>
                ))}
            </ul>
        </Layout>
    )
}

export const Head: HeadFC = () => (
    <>
        <Seo title='Blog' /> 
    </>
)

export const query: StaticQueryDocument = graphql`
    query{
        allMdx(sort: {frontmatter: {date: DESC}}) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                }
                id
                excerpt
                parent {
                    ... on File {
                        modifiedTime(formatString: "MMMM D, YYYY")
                    }
                }
            }
        }
    }
`
export default Blog
