import GatsbyImage from 'gatsby-image';
import React from 'react';
import "../components/explore.css";
import { Link, graphql } from "gatsby";


function Preview(props){
    const borderColor={borderColor: props.color}
    const backgroundColor={backgroundColor: props.color}
    return <div className='preview' style={borderColor}>
        <div>
            <h3 className='previewTitle'>{props.labName}</h3>
        </div>
        <div className='picture' style={borderColor}>

        </div>
        <div className="blurb">
            <p>{props.description}</p>
            <p>for: {props.audience} <br/> requires: {props.background}</p>
        </div>
        
        <button type="button" className="labButton" style={backgroundColor} >start</button>
    </div>
}

export default Preview;
