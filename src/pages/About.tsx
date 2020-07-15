import React from 'react';
import queryString from 'query-string';

const About = ({location,match}:any)=>{
    const query = queryString.parse(location.search)
    const detail = query.detail === 'true';
    return (
        <div>
            <h2>About {match.params.name}</h2>
            {detail && 'detail: test'}
        </div>
    )
}

export default About;