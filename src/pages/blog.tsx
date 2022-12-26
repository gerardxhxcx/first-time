import * as React from 'react'
import { HeadFC, PageProps, graphql, StaticQueryDocument } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const Blog: React.FC<{data: any}> = ({data}) => {
    console.log(data)
    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
                {data.allFile.nodes.map((node:any) => (
                    <li key={node.name}>{node.name}</li>
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
        allFile(filter: {sourceInstanceName: {eq: "blog"}}){
            nodes{
                name
            }
        }
    }
`
export default Blog
