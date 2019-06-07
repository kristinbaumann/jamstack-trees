import React from "react"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const ContentPost = ({ post }) => (
  <li className="post">
    <div className="post-image-wrapper">
      <img src={post.image.file.url} alt={post.headline} />
    </div>
    <div className="post-text-wrapper">
      <p className="title">{post.headline}</p>
      <span className="subtitle">
        {documentToReactComponents(post.source.json)}
      </span>
    </div>
  </li>
)

export default ContentPost
