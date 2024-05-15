import React from 'react';
import { useParams, useLoaderData } from 'react-router-dom';

export default function CareerDetails() {
    const {id} = useParams();
    const career = useLoaderData();
  return (
    <div>
        <h2>Career Dateils for {career.title}</h2>
        <p>Starting salary : {career.salary}</p>
        <p>Location : {career.location}</p>
    </div>
  )
}

//loader function

export const careerDetailsLoder = async ({params}) =>{
    const {id} = params

    const res = await fetch('http://localhost:3001/careers/' + id)

    return res.json();

}