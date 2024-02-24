import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      <footer className="py-3 my-4 border-top bg-success">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="d-flex align-items-center">
            {/* <Link to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
            </Link> */}
            <span className="">© 2024 TastyMasic/Avatar, Ltd</span>
          </div>
        </div>
      </footer>
    </div>
  )
};

//d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top
//text-muted