import React from 'react'
import { Link } from 'react-router-dom'

const ArticleInfo = () =>
  <div style={{ display: 'inline-block' }}>
    <Link to="/profile">
      <img src="http://i.imgur.com/Qr71crq.jpg" />
    </Link>
    <div className="info">
      <Link to="/profile">Eric Simons</Link>
      <span className="date">January 20th</span>
    </div>
  </div>

export default ArticleInfo
