import React from 'react';
import queryString from 'query-string';

const About = ({match, location}) => {
    const query = queryString.parse(location.search);
    const detail = query.detail === 'true';
    return (
        <div>
            <h2>{match.params.name} 소개</h2>
            {detail && 'detail: blahblah'}
        </div>
        
    );
};
export default About;