import React from 'react';

const Projects: React.FC = () => {
  return (
    <>
      <div style={{ color: 'var(--keyword-color)', fontWeight: 'bold', marginBottom: '10px' }}>[ PROJECT_LOG ]</div>
      <div style={{ marginBottom: '10px' }}>
        <span style={{ color: 'var(--prompt-color)' }}>$ project </span>
        <span style={{ color: 'var(--keyword-color)' }}>--name=</span>
        <span style={{ color: 'var(--string-color)' }}>"Gemini CLI" </span>
        <span style={{ color: 'var(--keyword-color)' }}>--status=</span>
        <span style={{ color: 'var(--accent-color)' }}>"active"</span>
        <p style={{ marginLeft: '20px', color: 'var(--text-color)' }}>An interactive CLI agent for software engineering tasks. Built with Node.js and advanced LLM orchestration.</p>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <span style={{ color: 'var(--prompt-color)' }}>$ project </span>
        <span style={{ color: 'var(--keyword-color)' }}>--name=</span>
        <span style={{ color: 'var(--string-color)' }}>"System Monitor" </span>
        <span style={{ color: 'var(--keyword-color)' }}>--type=</span>
        <span style={{ color: 'var(--accent-color)' }}>"rust"</span>
        <p style={{ marginLeft: '20px', color: 'var(--text-color)' }}>Low-level system monitoring tool for Linux, providing real-time telemetry for CPU and Memory.</p>
      </div>
      <div>
        <span style={{ color: 'var(--prompt-color)' }}>$ project </span>
        <span style={{ color: 'var(--keyword-color)' }}>--name=</span>
        <span style={{ color: 'var(--string-color)' }}>"Personal Web" </span>
        <span style={{ color: 'var(--keyword-color)' }}>--stack=</span>
        <span style={{ color: 'var(--accent-color)' }}>"react+ts"</span>
        <p style={{ marginLeft: '20px', color: 'var(--text-color)' }}>This very site! A Linux-inspired portfolio built from scratch with React and Vanilla CSS.</p>
      </div>
    </>
  );
};

export default Projects;
