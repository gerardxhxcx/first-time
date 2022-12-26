import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

const AboutPage: React.FC<PageProps> = () => (
    <Layout pageTitle="About Page">
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
)

export default AboutPage

export const Head: HeadFC = () => (
    <>
        <Seo title="About Me" />
        <meta name="description" content="Your description" />
    </>
)