import React from "react"
import { Link } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const ContentPost = ({ post, showLink }) => (
  <li className="post">
    {showLink ? (
      <Link to={`/explore/${post.slug}`} className="post-image-wrapper">
        <img src={post.image.file.url} alt={post.headline} />
      </Link>
    ) : (
      <div className="post-image-wrapper">
        <img src={post.image.file.url} alt={post.headline} />
      </div>
    )}
    <div className="post-text-wrapper">
      <p className="title">{post.headline}</p>
      <span className="subtitle">
        {documentToReactComponents(post.source.json)}
      </span>
    </div>
  </li>
)

ContentPost.defaultProps = {
  showLink: false,
}

export default ContentPost
