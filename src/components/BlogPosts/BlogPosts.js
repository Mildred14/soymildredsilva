import React, { useEffect, useState } from "react";
import { Loading } from '../Loading/Loading'
import './BlogPost.scss'
export const BlogPosts = () => {
  const [posts, setPosts] = useState([])
  const [errors, setErrors] = useState([])
  const [isLoading, setLoading] = useState(false)

  const MEDIUM_URL = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mildrednatalysilva'

  useEffect(() => {
    setLoading(true)
    fetch(MEDIUM_URL).then(res => res.json()).then((data) => {
      setPosts(data)
      setLoading(false)
    }).catch((error) => setErrors(error) )

  }, [])

  const displayPosts = () => {
    if (posts && posts.status === 'ok') {
      return posts?.items.map((post) => {
        const image = (post['description']).toString().match(/<img[^>]+src="([^">]+)"/)[1]
        const description = post['description'].replace(/<(.|\n)*?>/g, '')
        const shortDescription = description.substr(0, 250) + "\u2026";

        return (
          <a href={post.link} target="_blank" rel="noopener" className="item--card" key={post.guid}>
              <div className="item--img posts-img">
                <img src={image}/>
              </div>
              <div className="content post-content">
                <p className="name">{post.title}</p>
                <p className="description">{shortDescription}</p>
              </div>
          </a>
        )
      })
    }
  }

  return (
    <div className="items">
      <h3>Plase take a moment to read my latest posts 📚☕️</h3>
      {isLoading ? (<Loading/>) : displayPosts()}
    </div>
  )
}