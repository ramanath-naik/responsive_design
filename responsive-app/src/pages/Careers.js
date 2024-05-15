import React from 'react'
import { useLoaderData, Link } from 'react-router-dom'

export default function Careers() {
    const careers = useLoaderData()
  return (
    <div>
        {careers.map(career => (
            <Link to={career.id.toString()} key={career.id}>
                <p>{career.title}</p>
                <p>Based in {career.location}</p>
            </Link>
        ))}
    </div>
  )
}


//Loader Function

 export const careersLoader = async () => {
    const res = await fetch ('http://localhost:3001/careers')

    return res.json();

}