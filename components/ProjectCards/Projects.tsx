'use client';
import styles from './page.module.css'
import { projects } from './dataProjects';
import Card from './ProjectCards';

export default function ProjectCardss() {
  return (
    <div>
      {
        projects.map( (project, index) => {
          return <Card key={index} {...project} i={index}/>
        })
      }
    </div>
  )
}