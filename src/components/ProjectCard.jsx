import "./ProjectCard.css";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {

const openProject = () => {
  window.open(project.live, "_blank");
};

return(

<div className="project-card" onClick={openProject}>

<div className="github-wrapper">

<a
href={project.github}
target="_blank"
rel="noopener noreferrer"
onClick={(e)=> e.stopPropagation()}
>
<FaGithub />
</a>

</div>

<div className="card-body">

<div className="card-text">

<h3 className="project-title">
{project.name}
</h3>

<p className="project-desc">
{project.extract}
</p>

<div
className="project-link"
onClick={(e)=>{
e.stopPropagation();
window.open(project.live,"_blank");
}}
>
See Project →
</div>

</div>

<img
src={project.image}
alt={project.name}
className="project-image"
/>

</div>

</div>

)

}