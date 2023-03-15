import React, { useState } from 'react'
import './Cards.css'

const Cards = () => {

  const comments = [
    {
      name: 'title1',
      comment: 'Lorem ipsum, dolor sit amet',
    },
    {
      name: 'title2',
      comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi sint aperiam tempora ratione',
    },
    {
      name: 'title3',
      comment: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi sint aperiam tempora ratione sunt beatae alias null'
    }
  ];

  const [copy] = useState(comments)

  return (
    <section className="post-box">
      {copy.map((item) => {
        return <Card name={item.name} comment={item.comment} />;
      })}
    </section>
  )
}

function Card(props) {

  return (
    <div className="post-card">
      <h2>{props.name}</h2>
      <p className="post-card-txt">
        {props.comment}
      </p>
    </div>
  )
}

export default Cards