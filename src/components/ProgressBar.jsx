import React from "react";

export default function ProgressBar({ current, total }) {
  const percent = Math.round((current / total) * 100);
  return (
    <div className="progress-bar" style={{ margin: '1em 0' }}>
      <div style={{ background: '#4ade80', height: 10, width: `${percent}%`, transition: 'width 0.3s' }} />
      <span style={{ fontSize: 12 }}>{current} / {total} vragen voltooid</span>
    </div>
  );
} 