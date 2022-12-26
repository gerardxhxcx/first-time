import * as React from 'react'
import useSiteMetadata from './UseSiteMetadata'

const Seo: React.FC<{title:string}> = ({title}) => {
    const [siteTitle] = React.useState(useSiteMetadata().title);
    return (
        <title>{title} | {siteTitle}</title>
    )
}

export default Seo