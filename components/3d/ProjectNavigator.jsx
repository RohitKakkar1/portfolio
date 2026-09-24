import { useState } from "react";

const ProjectNavigator = () => {
    const [currentProject, setCurrentProject] = useState(0);

    const projects = [
        { name: "About Me", cameraKey: "aboutMe", info: "Learn more about me and my journey!" },
        { name: "First Project", cameraKey: "firstProject", info: "Discover my first project and its impact." },
        { name: "Second Project", cameraKey: "secondProject", info: "Check out the details of my second project." },
        { name: "Third Project", cameraKey: "thirdProject", info: "Explore my innovative third project." },
        { name: "Fourth Project", cameraKey: "fourthProject", info: "Get insights into my fourth project." },
        { name: "Fifth Project", cameraKey: "fifthProject", info: "Dive into my fifth and final project showcase." },
    ];

    const moveCamera = (key) => {
        // Assuming `moveCamera` is a function from your camera store
        useCameraStore.getState().moveCamera(key);
    };

    const handleNext = () => {
        const nextIndex = (currentProject + 1) % projects.length;
        setCurrentProject(nextIndex);
        moveCamera(projects[nextIndex].cameraKey);
    };

    const handleBack = () => {
        const prevIndex = (currentProject - 1 + projects.length) % projects.length;
        setCurrentProject(prevIndex);
        moveCamera(projects[prevIndex].cameraKey);
    };

    return (
        <div style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            zIndex: 1,
            background: 'rgba(0, 0, 0, 0.7)',
            color: '#fff',
            padding: '10px',
            borderRadius: '8px',
            maxWidth: '300px',
            textAlign: 'center'
        }}>
            <p style={{ marginBottom: '10px' }}>
                <strong>{projects[currentProject].name}</strong>
            </p>
            <p style={{ fontSize: '14px', marginBottom: '10px' }}>
                {projects[currentProject].info}
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button
                    onClick={handleBack}
                    style={{
                        background: '#555',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '5px 10px',
                        cursor: 'pointer',
                    }}
                >
                    ◀ Back
                </button>
                <button
                    onClick={handleNext}
                    style={{
                        background: '#555',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        padding: '5px 10px',
                        cursor: 'pointer',
                    }}
                >
                    Next ▶
                </button>
            </div>
        </div>
    );
};

export default ProjectNavigator;
