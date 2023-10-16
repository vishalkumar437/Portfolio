import React from 'react';
import Card from 'react-bootstrap/Card';
import Project from './Projects';
import "./Works.css";

export default function Works() {
  return (
    <div className='Works-main'>
      <h2 className='Works-heading'>My <strong style={{ color: 'cyan' }}>Works</strong></h2>
      <div className='Works-cardsContainer'>
        {Project.map((work, index) => (
          <Card key={index} className='Works-cards'>
            <Card.Img variant="top" src={work.image} className='Works-image' />
            <Card.Body>
              <Card.Title>{work.title}</Card.Title>
              <Card.Text>{work.content}</Card.Text>
              <Card.Text> Tech Stack: {work.tech}</Card.Text>
              {work.live ?
                <a href={work.live} target="_blank" rel="noopener noreferrer" className="link-no-underline">
                  <button className='custom-btn btn-16'>
                    Go Live
                  </button>
                </a> : ""}{' '}
              <a href={work.github} target="_blank" rel="noopener noreferrer" className="link-no-underline">
                <button className='custom-btn btn-16'>
                  Github
                </button>
              </a>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  )
}
