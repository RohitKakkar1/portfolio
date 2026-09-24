import React from 'react';

const Project = ({ projectID, ...props }) => {
    let projectContent;

    // Determine content based on projectID
    switch (projectID) {
        case 'one':
            projectContent = 'ABCD';
            break;
        case 'two':
            projectContent = 'AFADWNO';
            break;
        case 'three':
            projectContent = 'airport';
            break;
        case 'four':
            projectContent = 'conclast ';
            break;
        default:
            projectContent = 'Unknown Project';
            break;
    }

    return (
        <div {...props} style={{ padding: "10px", border: "1px solid #ddd", borderRadius: "8px" }}>
            <h3>Project {projectID}</h3>
            <p>{projectContent}</p>
        </div>
    );
};

export default Project;
