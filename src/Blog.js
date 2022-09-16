import React from 'react'
import { Link } from 'react-router-dom'

export default function Blog() {
  return (
    <>
    <ul>
        <li><Link to="article1">Article 1</Link></li>
        <li><Link to="article2">Article 2</Link></li>
        <li><Link to="article3">Article 3</Link></li>
    </ul>
    </>
    )
}