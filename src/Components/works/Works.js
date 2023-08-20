import React from 'react';  
import Button from 'react-bootstrap/Button';
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
              {work.live?
              <Button variant="outline-primary" size='lg'>
                <a href={work.github} target="_blank" rel="noopener noreferrer" className="link-no-underline">
                  Go Live
                </a>
                </Button>:""}{' '}
              <Button variant="primary">
                <a href={work.github} target="_blank" rel="noopener noreferrer" className="link-no-underline">
                  Github
                </a>
                </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  )
}
