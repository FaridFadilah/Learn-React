import React from 'react'
import { useParams } from 'react-router-dom'

export default function BlogDetail() {
    const urlParams = useParams()
    return (
        <>
            <h1>{urlParams.slug}</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, alias!</p>
        </>
    )
}