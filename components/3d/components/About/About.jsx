import React from 'react'
import Image from 'next/image'

const About = () => {
    return (
        <>
            <div style={{
                padding: "20px",
                fontFamily: "Arial, sans-serif",
                lineHeight: "1.6",
                maxHeight: "700px",
                overflowY: "auto",
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
            }}>
                {/* About Section */}
                <section style={{ marginTop: "40px", marginBottom: "20px", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>
                    {/* Photo Section */}
                    <div style={{ flex: "1 1 300px", textAlign: "center" }}>
                        <Image
                            src="carousel_1.jpg"  // Ensure this path is correct
                            alt="Designer Portrait"
                            layout="responsive"   // Makes the image responsive
                            width={700}           // Set a width that reflects the aspect ratio
                            height={500}          // Set a height that reflects the aspect ratio
                            style={{
                                borderRadius: "10px",
                                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                            }}
                        />
                    </div>

                    {/* Text Section */}
                    <div style={{ flex: "2 1 500px" }}>
                        <p>
                            Hi, I’m a designer specializing in creating interactive 3D experiences and intuitive UX solutions.
                            With a background in architecture and a passion for technology, I love building immersive worlds
                            where users can explore my projects in a fun and engaging way.
                        </p>
                        <p>
                            I believe in blending creativity with functionality, aiming to design solutions that not only look
                            great but also solve real-life problems. My work involves a lot of prototyping, experimenting with
                            emerging technologies, and constantly improving the user experience.
                        </p>
                    </div>
                </section>

                {/* Skills Section */}
                <h2 style={{ marginTop: "40px", marginBottom: "10px" }}>Skills</h2>
                <ul>
                    <li>3D Modeling & Animation (Low-poly stylized design)</li>
                    <li>UI/UX Design & Prototyping</li>
                    <li>React Three Fiber & Three.js</li>
                    <li>Interactive Design & Game-like Experiences</li>
                    <li>Architecture & Spatial Design</li>
                </ul>

                {/* Work Experience Section */}
                <h2 style={{ marginTop: "40px", marginBottom: "10px" }}>Work Experience</h2>
                <div>
                    <h3>Freelance Designer & Developer</h3>
                    <p style={{ fontStyle: "italic", marginBottom: "5px" }}>Jan 2023 – Present</p>
                    <p>
                        Worked on various interactive UX and 3D design projects for clients, focusing on creating
                        immersive experiences that engage users. Developed custom web applications using React,
                        Three.js, and Zustand.
                    </p>

                    <h3>UX Designer at [Company Name]</h3>
                    <p style={{ fontStyle: "italic", marginBottom: "5px" }}>Jul 2021 – Dec 2022</p>
                    <p>
                        Collaborated with cross-functional teams to design user-centric solutions. Led the design of
                        multiple web platforms, improving user engagement and satisfaction.
                    </p>
                </div>

                {/* Software Section */}
                <section style={{ marginTop: "40px", marginBottom: "20px" }}>
                    <h2 style={{ marginBottom: "20px", textAlign: "center" }}>Software</h2>
                    <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-around",
                        alignItems: "center",
                        gap: "20px"
                    }}>
                        <div style={{ textAlign: "center" }}>
                            <div style={{ fontSize: "40px" }}>{/* Icon for Figma */}🎨</div>
                            <p>Figma, Sketch, Adobe XD</p>
                            <small>(UI/UX Prototyping)</small>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <div style={{ fontSize: "40px" }}>{/* Icon for Blender */}🖌️</div>
                            <p>Blender, 3ds Max, Cinema 4D</p>
                            <small>(3D Modeling & Animation)</small>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <div style={{ fontSize: "40px" }}>{/* Icon for React */}🌐</div>
                            <p>React, React Three Fiber, Three.js</p>
                            <small>(Web Development)</small>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <div style={{ fontSize: "40px" }}>{/* Icon for ZBrush */}🖍️</div>
                            <p>ZBrush, Substance Painter</p>
                            <small>(Texturing & Detailing)</small>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <div style={{ fontSize: "40px" }}>{/* Icon for Photoshop */}🖼️</div>
                            <p>Photoshop, Illustrator</p>
                            <small>(Graphic Design)</small>
                        </div>
                    </div>
                </section>

            </div>


        </>


    )
}

export default About