import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import HelloWorld from "../components/HelloWorld"
import Layout from "../components/Layout"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Home Page">
      <HelloWorld />
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
