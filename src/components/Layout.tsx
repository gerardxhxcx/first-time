import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import './layout.colors.scss';
import * as layoutStyles from './layout.module.scss'

const Layout: React.FC<{pageTitle: string, children: any}> = ({pageTitle, children}) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    console.log(data)

    return (
        <div className={layoutStyles.container}>
            <header className={layoutStyles.siteTitle}>{data.site.siteMetadata.title}</header>
            <nav>
                <ul className={layoutStyles.navLinks}>
                    <li className={layoutStyles.navLinkItem}>
                        <Link className={layoutStyles.navLinkText} to="/">Home</Link>
                    </li>
                    <li className={layoutStyles.navLinkItem}>
                        <Link className={layoutStyles.navLinkText} to="/about">About</Link>
                    </li>
                    <li className={layoutStyles.navLinkItem}>
                        <Link className={layoutStyles.navLinkText} to="/blog">My blog</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={layoutStyles.heading}>{pageTitle}</h1>
                {children}
                <ol>
                    <li className={layoutStyles.listStyleOne}>test style scss</li>
                    <li className={layoutStyles.listStyleTwo}>test style scss</li>
                    <li className={layoutStyles.listStyleThree}>test style scss</li>
                </ol>
            </main>
        </div>
    )
}

export default Layout