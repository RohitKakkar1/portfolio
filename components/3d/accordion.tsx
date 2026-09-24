import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import ArchitectureIcon from '@mui/icons-material/Architecture';
import Image from 'next/image';


export default function AccordionUsage() {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: '20px',
        left: '0px',
        width: isCollapsed ? '60px' : '300px',
        height: '100vh',
        zIndex: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        padding: isCollapsed ? '10px 5px' : '10px',
        borderRadius: isCollapsed ? '0' : '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
        transition: 'width 0.3s ease, padding 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        alignItems: isCollapsed ? 'center' : 'flex-start',
      }}
    >
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        style={{
          position: 'absolute',
          top: '10px',
          right: isCollapsed ? '-15px' : '-20px',
          width: '30px',
          height: '30px',
          border: 'none',
          backgroundColor: '#2b2b2b',
          color: 'white',
          cursor: 'pointer',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ArrowForwardIosIcon
          style={{
            transform: isCollapsed ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease',
          }}
        />
      </button>

      {/* Collapsed View Icons */}
      {isCollapsed ? (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <DesignServicesIcon />
          <ArchitectureIcon />
        </div>
      ) : (
        // Expanded View Accordions
        <>
          <div>
          <Image
              src="/blind.png"  // Ensure the path is correct for your static assets
              alt="icon"
              layout="responsive"   // Makes the image responsive
              width={100}           // Set a width, adjust as necessary
              height={100}          // Set a height, adjust as necessary
          />
            </div>

          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel1-header"
            >
              <Typography component="span">Rohit Kakkar</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Hey, I am a UX Designer and an Architect based in India.  
              This is my city, and I will show you how I aim to improve the life of the citizens in this city.
            </AccordionDetails>
            <AccordionActions>
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                <Button variant="contained" color="primary">
                  Portfolio
                </Button>
              </a>
              <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                <Button variant="contained" color="primary">
                  3D World
                </Button>
              </a>
            </AccordionActions>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel2-header"
            >
              <Typography component="span">UX Design</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel3-header"
            >
              <Typography component="span">Architecture</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
        </>
      )}
    </div>
  );
}
