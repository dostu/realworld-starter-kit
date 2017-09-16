import React from 'react'

const FollowButton = ({ className }) =>
  <button className={`btn btn-sm btn-outline-secondary ${className}`}>
    <i className="ion-plus-round"></i>
    &nbsp;
    Follow Eric Simons <span className="counter">(10)</span>
  </button>

export default FollowButton
