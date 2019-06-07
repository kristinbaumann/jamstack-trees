import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const ContentPost = ({ node }) => (
  <li className="post">
    <div className="post-image-wrapper">
      <img src={node.image.file.url} alt={node.headline} />
    </div>
    <div className="post-text-wrapper">
      <p className="title">{node.headline}</p>
      <span className="subtitle">
        {documentToReactComponents(node.source.json)}
      </span>
    </div>
  </li>
)

export default ContentPost
