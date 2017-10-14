import React from 'react';
import queryString from 'query-string';
import { Redirect } from 'react-router-dom';

const About = ({match, location}) => {
    const query = queryString.parse(location.search);
    const detail = query.detail === 'true';
    const redirect = match.params.name = 'ghost';
    return (
        <div>
            <h2>{match.params.name} 소개</h2>
            {detail && 'detail: blahblah'}
            {
                redirect && <Redirect to="/"/>
            }
        </div>
        
    );
};
export default About;