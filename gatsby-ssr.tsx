import * as React from 'react'

const HtmlAttributes = {
    lang: "en"
}

const HeadComponents = [
    <script key="my-script" src="https://gatsby.dev/my-script" />
]

const BodyAttributes = {
    "data-theme": "dark"
}
  
export const onRenderBody = ({
    setHeadComponents,
    setHtmlAttributes,
    setBodyAttributes
}) => {
    setHtmlAttributes(HtmlAttributes)
    setHeadComponents(HeadComponents)
    setBodyAttributes(BodyAttributes)
}