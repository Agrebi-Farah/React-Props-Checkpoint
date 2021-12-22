import React from 'react' ;
import './project.css';
import image1 from '../../Assets/proj1.jpg';
import image2 from '../../Assets/proj2.jpg' ; 
import image3 from '../../Assets/proj3.jpg';
import image4 from '../../Assets/proj4.jpg';
const project =(props)=> {
    return (
        <div> 
            <div>
            <h1 className="title">PROJECTS</h1>
            </div>
            <div className="projects">
            <div className="project1">
            <img className="img1" src={image1} alt='image de project1'/>
                <h4 className="title1">PROJECT1</h4>
                <p className="para1">lorem ipsum dolor sit amet, consectetur adipiscing</p>
                <a href ={props.link1} >Github.link</a>
            </div>
            <div className="project2">
            <img className="img2" src={image2} alt='image de project2'/>
                <h4 className="title1">PROJECT2</h4>
                <p className="para2">lorem ipsum dolor sit amet, consectetur adipiscing</p>
                <a href ={props.link4} >Github.link</a>
            </div>
            <div className="project3">
            <img className="img3" src={image3} alt='image de project3'/>
                <h4 className="title1">PROJECT3</h4>
                <p className="para3">lorem ipsum dolor sit amet, consectetur adipiscing</p>
                <a href ={props.link4} >Github.link</a>
            </div>
            <div className="project4">
            <img className="img4" src={image4} alt='image de project3'/>
                <h4 className="title1">PROJECT4</h4>
                <p className="para4">lorem ipsum dolor sit amet, consectetur adipiscing</p>
                <a href ={props.link4} >Github.link</a>
            </div>
        
        








           </div>
        </div>
    )
}

export default project
