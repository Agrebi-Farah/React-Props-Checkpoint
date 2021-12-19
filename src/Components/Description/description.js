import React from 'react' ;
import './description.css';
import imagfarah from '../Description/farah.jpg' ;

const description =(props)=> {
    return (
        <div className="main">
            <h2 className="para">Hello, MY name is <span className ="me">{props.name}</span>, I'm 25 years old, <br/> I'm student at GOMYCODE and I think I'm super funny and crazy as well. </h2>
           
            <img className="myself" src={imagfarah} alt = 'my picture' />
        </div>
    )
}

export default description
