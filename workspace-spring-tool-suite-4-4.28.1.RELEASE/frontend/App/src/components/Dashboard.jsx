import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <section>
        <Link to='/dashboard/laptops'>Laptops</Link>
        <Link to='/dashboard/watches'>Mobiles</Link>
      </section>
    </div>
  )
}

export default Dashboard
