import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import usercontext from '../Context/UserContext'

const Home = () => {
const {fname} = useContext(usercontext)
  return (
    <div>

<section className="home">
  <div className="home-box">
    <h1>
      this website is for you {fname}
    </h1>
    <h2>you can easly <span>post your feeling </span></h2>
<div className="home-btn">
  <Link to={"/LoginPost"}>post</Link>
  </div>
  </div>
</section>


    </div>
  )
}

export default Home