import React, { useState, useEffect, useRef } from "react";
import { chunk1 } from "./data/chunk1";
import { chunk2 } from "./data/chunk2";
import { chunk3 } from "./data/chunk3";
import { chunk4 } from "./data/chunk4";
import { chunk5 } from "./data/chunk5";
import { chunk_python } from "./data/chunk_python";
import { chunk_mini_exam } from "./data/chunk_mini_exam";
import ChunkQuiz from "./components/ChunkQuiz";
import MultipleChoiceQuiz from "./components/MultipleChoiceQuiz";
import DragDropQuiz from "./components/DragDropQuiz";
import { HashRouter } from "react-router-dom";

const CHUNKS = [
  {
    key: "deel1",
    titel: "🎯 Oefenvragen Deel 1 – Theorie: DFIR, Memory & Tools",
    vragen: chunk1,
    beschrijving: "Test je kennis over DFIR, geheugen en tools."
  },
  {
    key: "deel2",
    titel: "🧠 Oefenvragen Deel 2 – Reverse Engineering, Malware, Python, Linux Forensics",
    vragen: chunk2,
    beschrijving: "Reverse engineering, malware, Python en Linux forensics."
  },
  {
    key: "deel3",
    titel: "🔍 Oefenvragen Deel 3 – Imaging, Linux Forensics, SQL, Python",
    vragen: chunk3,
    beschrijving: "Imaging, Linux forensics, SQL en Python."
  },
  {
    key: "deel4",
    titel: "🧠 Oefenvragen Deel 4 – SQL, SQLite, Python + Databases",
    vragen: chunk4,
    beschrijving: "SQL, SQLite, Python en databases."
  },
  {
    key: "deel5",
    titel: "🧠 Oefenvragen Deel 5 – Python Forensics, SQL-Queries, SQLite",
    vragen: chunk5,
    beschrijving: "Python forensics, SQL-queries en SQLite."
  },
  {
    key: "python",
    titel: "🐍 Python Quiz – Basiskennis Python",
    vragen: chunk_python,
    beschrijving: "Test je basiskennis van Python met 10 typische examenvragen."
  },
  {
    key: "mini_exam",
    titel: "✅ Mini Examen – Oefenvragen (23 stuks)",
    vragen: chunk_mini_exam,
    beschrijving: "Mini-examen met 23 representatieve oefenvragen over forensisch onderzoek, Python, SQL en meer."
  }
];

function App() {
  const [selectedChunk, setSelectedChunk] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('selectedChunk')) || null;
    } catch {
      return null;
    }
  });
  const [lastScore, setLastScore] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('lastScore')) || null;
    } catch {
      return null;
    }
  });
  const [quizType, setQuizType] = useState(() => {
    try {
      return localStorage.getItem('quizType') || 'mc';
    } catch {
      return 'mc';
    }
  });
  const [oefenExamenVragen, setOefenExamenVragen] = useState(null);
  const [oefenExamenType, setOefenExamenType] = useState(null); // 'mc' of 'drag'
  const [showAddModule, setShowAddModule] = useState(false);
  const [newModule, setNewModule] = useState({ titel: '', beschrijving: '', vragen: '' });
  const [customChunks, setCustomChunks] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('customChunks')) || [];
    } catch {
      return [];
    }
  });
  const [quizProgress, setQuizProgress] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('quizProgress')) || null;
    } catch {
      return null;
    }
  });

  // Sla voortgang op in localStorage
  useEffect(() => {
    localStorage.setItem('lastScore', JSON.stringify(lastScore));
  }, [lastScore]);
  useEffect(() => {
    localStorage.setItem('customChunks', JSON.stringify(customChunks));
  }, [customChunks]);
  useEffect(() => {
    localStorage.setItem('quizType', quizType);
  }, [quizType]);
  useEffect(() => {
    localStorage.setItem('selectedChunk', JSON.stringify(selectedChunk));
  }, [selectedChunk]);
  useEffect(() => {
    localStorage.setItem('quizProgress', JSON.stringify(quizProgress));
  }, [quizProgress]);

  function handleQuizDone(score, total) {
    setLastScore({ score, total });
    setSelectedChunk(null);
  }

  function startOefenExamen(type) {
    const allVragen = [
      ...chunk1,
      ...chunk2,
      ...chunk3,
      ...chunk4,
      ...chunk5,
      ...chunk_python,
      ...chunk_mini_exam
    ];
    // Shuffle
    for (let i = allVragen.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allVragen[i], allVragen[j]] = [allVragen[j], allVragen[i]];
    }
    setOefenExamenVragen(allVragen);
    setOefenExamenType(type);
    setSelectedChunk(null);
    setLastScore(null);
    setQuizType(type);
  }

  function handleAddModule() {
    setShowAddModule(true);
    setNewModule({ titel: '', beschrijving: '', vragen: '' });
  }

  function handleSaveModule() {
    if (!newModule.titel || !newModule.beschrijving || !newModule.vragen) return;
    let vragenArr;
    try {
      vragenArr = JSON.parse(newModule.vragen);
    } catch {
      alert('Vragen moeten een geldige JSON-array zijn!');
      return;
    }
    setCustomChunks([...customChunks, {
      key: 'custom_' + Date.now(),
      titel: newModule.titel,
      beschrijving: newModule.beschrijving,
      vragen: vragenArr
    }]);
    setShowAddModule(false);
  }

  // Helper om quiz te starten met voortgang
  function startQuizWithProgress(chunk, type) {
    setSelectedChunk(chunk);
    setQuizType(type);
    setOefenExamenVragen(null);
    setOefenExamenType(null);
    setLastScore(null);
    setQuizProgress(null);
  }

  // Opslaan van quizvoortgang vanuit quizcomponenten
  function handleQuizProgress(progress) {
    setQuizProgress(progress);
  }

  // Herstel quizvoortgang bij renderen van quizcomponenten
  function getQuizProgressProps(chunkKey, type) {
    if (!quizProgress) return {};
    if (quizProgress.chunkKey !== chunkKey || quizProgress.type !== type) return {};
    return quizProgress;
  }

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f1f5f9 0%, #e0e7ff 100%)' }}>
      <div className="app" style={{ maxWidth: 600, margin: '0 auto', padding: 32 }}>
        <h1 style={{ fontSize: 32, fontWeight: 800, letterSpacing: -1, color: '#312e81', marginBottom: 8, textAlign: 'center', textShadow: '0 2px 8px #e0e7ff' }}>
          DFIR Crash Course
        </h1>
        <div style={{ textAlign: 'center', color: '#64748b', marginBottom: 32, fontSize: 18 }}>
          Interactief oefenen met forensische kennis
        </div>
        {selectedChunk === null && !oefenExamenVragen ? (
          <>
            {lastScore && (
              <div style={{ background: '#e0ffe0', padding: 12, borderRadius: 8, marginBottom: 16, textAlign: 'center', fontWeight: 600, color: '#166534', border: '1px solid #bbf7d0' }}>
                <span style={{ fontSize: 18 }}>Laatste score: {lastScore.score} / {lastScore.total}</span>
              </div>
            )}
            <div style={{ display: 'flex', gap: 16, marginBottom: 18 }}>
              <button
                onClick={() => startOefenExamen('mc')}
                style={{ flex: 1, padding: '16px 0', borderRadius: 12, background: '#f3e8ff', border: '2px solid #a21caf', fontSize: 20, fontWeight: 700, color: '#a21caf', cursor: 'pointer', boxShadow: '0 2px 12px #e0e7ff' }}
              >
                Oefen examen (Meerkeuze)
              </button>
              <button
                onClick={() => startOefenExamen('drag')}
                style={{ flex: 1, padding: '16px 0', borderRadius: 12, background: '#e0e7ff', border: '2px solid #6366f1', fontSize: 20, fontWeight: 700, color: '#312e81', cursor: 'pointer', boxShadow: '0 2px 12px #e0e7ff' }}
              >
                Oefen examen (Drag & Drop)
              </button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 10 }}>
              <button
                onClick={handleAddModule}
                style={{ border: 'none', background: '#e0e7ff', color: '#312e81', borderRadius: '50%', width: 44, height: 44, fontSize: 28, fontWeight: 800, cursor: 'pointer', boxShadow: '0 2px 8px #e0e7ff' }}
                title="Nieuwe module toevoegen"
              >
                +
              </button>
            </div>
            <h2 style={{ fontSize: 22, color: '#1e293b', marginBottom: 18, textAlign: 'center' }}>Kies een module om te oefenen:</h2>
            {showAddModule && (
              <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.18)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ background: '#fff', borderRadius: 16, padding: 32, minWidth: 340, boxShadow: '0 2px 24px #e0e7ff', maxWidth: 420 }}>
                  <h2 style={{ fontSize: 22, color: '#312e81', marginBottom: 18 }}>Nieuwe module toevoegen</h2>
                  <input
                    type="text"
                    placeholder="Titel"
                    value={newModule.titel}
                    onChange={e => setNewModule({ ...newModule, titel: e.target.value })}
                    style={{ width: '100%', marginBottom: 12, padding: 10, borderRadius: 8, border: '1.5px solid #d1d5db', fontSize: 16 }}
                  />
                  <input
                    type="text"
                    placeholder="Beschrijving"
                    value={newModule.beschrijving}
                    onChange={e => setNewModule({ ...newModule, beschrijving: e.target.value })}
                    style={{ width: '100%', marginBottom: 12, padding: 10, borderRadius: 8, border: '1.5px solid #d1d5db', fontSize: 16 }}
                  />
                  <textarea
                    placeholder="Vragen (JSON-array, zie voorbeeld)"
                    value={newModule.vragen}
                    onChange={e => setNewModule({ ...newModule, vragen: e.target.value })}
                    rows={7}
                    style={{ width: '100%', marginBottom: 12, padding: 10, borderRadius: 8, border: '1.5px solid #d1d5db', fontSize: 15, fontFamily: 'monospace' }}
                  />
                  <div style={{ color: '#64748b', fontSize: 13, marginBottom: 10 }}>
                    Voorbeeld:<br />
                    [&#123; "vraag": "Wat is 2+2?", "opties": ["3","4","5"], "correct": 1, "uitleg": "2+2=4", "mnemonic": "Twee plus twee is vier" &#125;]
                  </div>
                  <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
                    <button onClick={() => setShowAddModule(false)} style={{ padding: '8px 18px', borderRadius: 8, background: '#f3f4f6', border: '1.5px solid #d1d5db', fontSize: 15, cursor: 'pointer', fontWeight: 500, color: '#111827' }}>Annuleren</button>
                    <button onClick={handleSaveModule} style={{ padding: '8px 18px', borderRadius: 8, background: '#e0e7ff', border: '1.5px solid #6366f1', fontSize: 15, cursor: 'pointer', fontWeight: 600, color: '#312e81' }}>Opslaan</button>
                  </div>
                </div>
              </div>
            )}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 18 }}>
              <button
                style={{
                  padding: '8px 18px',
                  borderRadius: 8,
                  border: quizType === 'mc' ? '2px solid #a21caf' : '2px solid #e5e7eb',
                  background: quizType === 'mc' ? '#f3e8ff' : '#f8fafc',
                  color: '#a21caf',
                  fontWeight: 700,
                  fontSize: 16,
                  cursor: 'pointer',
                  outline: 'none',
                  transition: 'background 0.15s, border 0.15s'
                }}
                onClick={() => setQuizType('mc')}
              >
                Meerkeuze
              </button>
              <button
                style={{
                  padding: '8px 18px',
                  borderRadius: 8,
                  border: quizType === 'drag' ? '2px solid #6366f1' : '2px solid #e5e7eb',
                  background: quizType === 'drag' ? '#e0e7ff' : '#f8fafc',
                  color: '#312e81',
                  fontWeight: 700,
                  fontSize: 16,
                  cursor: 'pointer',
                  outline: 'none',
                  transition: 'background 0.15s, border 0.15s'
                }}
                onClick={() => setQuizType('drag')}
              >
                Drag & Drop
              </button>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 18 }}>
              {[...CHUNKS, ...customChunks].map(chunk => (
                <li key={chunk.key}>
                  <button
                    style={{
                      width: '100%',
                      textAlign: 'left',
                      padding: 22,
                      borderRadius: 16,
                      border: 'none',
                      background: 'white',
                      boxShadow: '0 2px 16px #e0e7ff',
                      cursor: 'pointer',
                      fontSize: 18,
                      transition: 'transform 0.1s',
                      fontWeight: 600,
                      color: '#312e81',
                      outline: 'none',
                    }}
                    onClick={() => startQuizWithProgress(chunk, quizType)}
                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.025)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <div style={{ fontWeight: 700, fontSize: 20, marginBottom: 4 }}>{chunk.titel}</div>
                    <div style={{ fontSize: 15, color: '#64748b', fontWeight: 400 }}>{chunk.beschrijving}</div>
                  </button>
                </li>
              ))}
            </ul>
          </>
        ) : oefenExamenVragen ? (
          oefenExamenType === 'mc' ? (
            <MultipleChoiceQuiz
              vragen={oefenExamenVragen}
              onDone={(score, total) => {
                setLastScore({ score, total });
                setOefenExamenVragen(null);
                setOefenExamenType(null);
                setQuizProgress(null);
              }}
              {...getQuizProgressProps('oefenexamen', 'mc')}
              onProgress={progress => handleQuizProgress({ ...progress, chunkKey: 'oefenexamen', type: 'mc' })}
            />
          ) : (
            <DragDropQuiz
              vragen={oefenExamenVragen}
              onDone={(score, total) => {
                setLastScore({ score, total });
                setOefenExamenVragen(null);
                setOefenExamenType(null);
                setQuizProgress(null);
              }}
              showOefenExamenButton={false}
              {...getQuizProgressProps('oefenexamen', 'drag')}
              onProgress={progress => handleQuizProgress({ ...progress, chunkKey: 'oefenexamen', type: 'drag' })}
            />
          )
        ) : (
          quizType === 'mc' ? (
            <MultipleChoiceQuiz
              vragen={selectedChunk.vragen}
              onDone={handleQuizDone}
              {...getQuizProgressProps(selectedChunk.key, 'mc')}
              onProgress={progress => handleQuizProgress({ ...progress, chunkKey: selectedChunk.key, type: 'mc' })}
            />
          ) : (
            <DragDropQuiz
              vragen={selectedChunk.vragen}
              onDone={handleQuizDone}
              showOefenExamenButton={true}
              {...getQuizProgressProps(selectedChunk.key, 'drag')}
              onProgress={progress => handleQuizProgress({ ...progress, chunkKey: selectedChunk.key, type: 'drag' })}
            />
          )
        )}
      </div>
    </div>
  );
}

export default function WrappedApp(props) {
  return (
    <HashRouter>
      <App {...props} />
    </HashRouter>
  );
} 