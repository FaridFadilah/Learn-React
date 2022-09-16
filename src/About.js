import React from 'react'
import {Link} from "react-router-dom"
export default function About() {
  return (
    <>
    <h1>AboutTeam</h1>
    <p>
        halo ini adalah halaman about, untuk dibawah: 
    </p>
    <ul>
        <li><Link to="/about/team">Team</Link></li>
    </ul>
    </>
  )
}