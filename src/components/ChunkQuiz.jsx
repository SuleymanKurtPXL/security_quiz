import React, { useState } from "react";
import DragDropQuiz from "./DragDropQuiz";
import MnemonicCard from "./MnemonicCard";
import ProgressBar from "./ProgressBar";

export default function ChunkQuiz({ vragen, onDone }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  function handleAnswer(correct) {
    if (correct) setScore(score + 1);
    setTimeout(() => setCurrent(current + 1), 1200);
  }

  function handleBack() {
    if (onDone) onDone(score, vragen.length);
  }

  if (current >= vragen.length) {
    setTimeout(() => {
      if (onDone) onDone(score, vragen.length);
    }, 1500);
    return (
      <div style={{ background: 'white', borderRadius: 18, boxShadow: '0 2px 16px #e0e7ff', padding: 32, marginTop: 32, textAlign: 'center' }}>
        <h2 style={{ color: '#312e81', fontSize: 26, fontWeight: 800 }}>Klaar!</h2>
        <p style={{ fontSize: 20, color: '#166534', fontWeight: 700 }}>Je score: {score} / {vragen.length}</p>
        <p style={{ color: '#64748b', marginBottom: 24 }}>Goed geoefend! Je wordt zo teruggestuurd naar het menu.</p>
        <button onClick={handleBack} style={{ marginTop: 16, padding: '10px 28px', borderRadius: 8, background: '#e0e7ff', border: 'none', fontSize: 18, cursor: 'pointer', fontWeight: 600, color: '#312e81' }}>
          Terug naar menu
        </button>
      </div>
    );
  }

  const vraag = vragen[current];

  return (
    <div style={{ background: 'white', borderRadius: 18, boxShadow: '0 2px 16px #e0e7ff', padding: 32, marginTop: 32 }}>
      <ProgressBar current={current + 1} total={vragen.length} />
      <button onClick={handleBack} style={{ marginBottom: 16, padding: '7px 18px', borderRadius: 8, background: '#f1f5f9', border: '1px solid #d1d5db', fontSize: 15, cursor: 'pointer', fontWeight: 500, color: '#312e81' }}>
        Terug naar menu
      </button>
      <div style={{ fontSize: 22, fontWeight: 700, color: '#1e293b', marginBottom: 18, marginTop: 8, minHeight: 48 }}>{vraag.vraag}</div>
      <DragDropQuiz
        vraag={vraag.vraag}
        opties={vraag.opties}
        correct={vraag.correct}
        onAnswer={handleAnswer}
      />
      <MnemonicCard mnemonic={vraag.mnemonic} />
      <div className="uitleg" style={{ marginTop: 18, color: '#64748b', background: '#f1f5f9', borderRadius: 8, padding: 12, fontSize: 15, minHeight: 36 }}>{vraag.uitleg}</div>
    </div>
  );
} 