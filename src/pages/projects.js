import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import crew3 from "../images/crew-3.jpg"

const ProjectCard = (props) => {
  return (
    <div 
      className="project-card"
      style={{
        // width: `100%`,
        // width: `10rem`,
        // border: `1px solid black`,
      }}
    >
      <img 
        src={crew3}
        style={{
          width: `100%`,
          height: `auto`,
          margin: `0`,
        }}
      />
      <h5 style={{
        margin: `0 0 0 1rem`,
      }}>{props.title}</h5>
      <p style={{
        fontSize: `.8rem`,
        fontWeight: `100`,
        fontStyle: `oblique`,
        margin: `0 0 0 1rem`,

      }}>{props.category}</p>
    </div>
  ) 
}

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div 
      className="projects-content"
      style={{
        display: `grid`,
        gridTemplateColumns: `1fr 1fr`,
        // gridAutoColumns: `auto`,
        // gridAutoRows: `1fr`,
        gridGap: `2rem`,

        // width: `100%`,
        // backgroundColor: `pink`,
      }}
    >
      <ProjectCard title="Columbia Crew" category="Academic"></ProjectCard>
      <ProjectCard title="Columbia Crew" category="Academic"></ProjectCard>
      <ProjectCard title="Columbia Crew" category="Academic"></ProjectCard>
      <ProjectCard title="Columbia Crew" category="Academic"></ProjectCard>
      <ProjectCard title="Columbia Crew" category="Academic"></ProjectCard>


    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
