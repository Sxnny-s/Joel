import React from 'react'
import {Link} from 'react-router-dom'

const LandingPage = () => {
  return (
    <>
        <h1>
            LandingPage
        </h1>
        <Link to='/login'>Click here to login</Link>
    </>
  )
}

export default LandingPage