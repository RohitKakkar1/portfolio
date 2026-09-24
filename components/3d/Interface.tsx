import { useKeyboardControls } from '@react-three/drei'
import useGame from './stores/useGame.jsx'
import { useEffect, useRef } from 'react'
import React from 'react';
import { addEffect } from '@react-three/fiber'
import './style2.css'
import { useState } from 'react';
import { Html } from '@react-three/drei';



export default function Interface()
{
    const forward = useKeyboardControls((state) => state.forward)
    const backward = useKeyboardControls((state) => state.backward)
    const leftward = useKeyboardControls((state) => state.leftward)
    const rightward = useKeyboardControls((state) => state.rightward)
    const jump = useKeyboardControls((state) => state.jump)
    const SwitchProjects = useKeyboardControls((state) => state.SwitchProjects)
    const Top = useKeyboardControls((state) => state.Top)
    const Origin = useKeyboardControls((state) => state.Origin)
    const toggleCamera = useKeyboardControls((state) => state.toggleCamera)

return (

  <Html>
    {/* Master Panel */}
    <div className="master-panel">
      {/* Player Controls Section */}
      <div className="section">
        <h3>Player Controls</h3>
        <div className="controls centered">
          <div className="row">
            <div className={`key ${forward ? 'active' : ''}`}>W</div>
          </div>
          <div className="row">
            <div className={`key ${leftward ? 'active' : ''}`}>A</div>
            <div className={`key ${backward ? 'active' : ''}`}>S</div>
            <div className={`key ${rightward ? 'active' : ''}`}>D</div>
          </div>
          <div className="row">
            <div className={`key large ${jump ? 'active' : ''}`}>Space</div>
          </div>
        </div>
      </div>

      {/* Camera Movements Section */}
      <div className="section">
        <h3>Camera Movements</h3>
        <div className="controls">
          <div className="row">
            <div className={`key ${toggleCamera ? 'active' : ''}`}>
              Caps
            </div>
            <div className="control-description">toggleCamera</div>
          </div>
          <div className="row">
            <div className={`key ${Top ? 'active' : ''}`}>
              T
            </div>
            <div className="control-description">Set Top View</div>
          </div>
        </div>
      </div>
      {/* Navigational Movements Section */}
      <div className="section">
        <h3>Navigational Movements</h3>
        <div className="controls">
          <div className="row">
            <div className={`key ${SwitchProjects ? 'active' : ''}`}>
              P
            </div>
            <div className="control-description">Switch to Projects</div>
          </div>
          <div className="row">
            <div className={`key ${Origin ? 'active' : ''}`}>
              O
            </div>
            <div className="control-description">Origin</div>
          </div>
        
          <div className="row">
            <div className={`key ${Top ? 'active' : ''}`}>
              T
            </div>
            <div className="control-description">Set Top View</div>
          </div>
        </div>
      </div>


    </div>
  </Html>
);







}