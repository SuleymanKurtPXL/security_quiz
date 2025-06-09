import React, { useState, useEffect } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H"];

function detectCodeLanguage(code) {
  // Eenvoudige heuristiek voor taalherkenning
  if (/^(SELECT |DELETE |INSERT |UPDATE |CREATE |DROP |ALTER |WITH |FROM |WHERE |JOIN |LIMIT |COUNT\(|INNER JOIN|\.output |\.header |sqlite3 )/im.test(code)) {
    return 'sql';
  }
  if (/^(ls |cd |chmod |cat |echo |grep |find |pwd |rm |cp |mv |sudo |export |\.\/|\/.+|\$ |# )/im.test(code)) {
    return 'bash';
  }
  if (/^(cmp |mov |jmp |push |pop |call |ret |eax|ebx|ecx|edx|esi|edi|rbx|rax|rdx|rsi|rdi)/im.test(code)) {
    return 'assembly';
  }
  // Default: python
  return 'python';
}

function renderVraagTekst(vraag) {
  // Regex voor bekende code/commando-patronen
  const codePatterns = [
    // Python
    /import\s+\w+(;\s*\w+\.[\w_]+\([^)]*\))?/g,
    /\w+\s*=\s*\[.*?\]/g,
    /print\([^)]*\)/g,
    /for\s+\w+\s+in\s+range\([^)]*\):/g,
    /def\s+\w+\([^)]*\):/g,
    /with\s+open\([^)]*\)\s+as\s+\w+:/g,
    /\w+\.upper\(\)/g,
    /student\['leeftijd'\]/g,
    // Shell
    /ls\s+-[\w-]+\s*\S*/g,
    /ls\s+\S+/g,
    /cd\s+\S+/g,
    /chmod\s+\d{3,4}\s+\S+/g,
    /cat\s+\S+/g,
    /echo\s+.+/g,
    /grep\s+.+/g,
    /find\s+.+/g,
    /pwd/g,
    /rm\s+\S+/g,
    /cp\s+\S+/g,
    /mv\s+\S+/g,
    /sudo\s+.+/g,
    /export\s+\w+=\S+/g,
    /\.[/\w]+/g,
    // SQL
    /SELECT\s+.+?;/gi,
    /DELETE\s+FROM\s+\w+\s+WHERE.+?;/gi,
    /INSERT\s+INTO\s+\w+.+?;/gi,
    /UPDATE\s+\w+.+?;/gi,
    /CREATE\s+TABLE.+?;/gi,
    /DROP\s+TABLE.+?;/gi,
    /ALTER\s+TABLE.+?;/gi,
    /COUNT\(\*\)/gi,
    /LIMIT\s+\d+/gi,
    /INNER\s+JOIN/gi,
    /\.output\s+\S+/g,
    /\.header\s+on/g,
    /sqlite3\s+\S+/g,
    // Assembly
    /cmp\s+\w+,\s*\w+/g,
    /mov\s+\w+,\s*\w+/g,
    /jmp\s+\w+/g,
    /push\s+\w+/g,
    /pop\s+\w+/g,
    /call\s+\w+/g,
    /ret/g,
    /eax|ebx|ecx|edx|esi|edi|rbx|rax|rdx|rsi|rdi/g
  ];

  const lines = vraag.split('\n');
  let inCode = false;
  let codeBuffer = [];
  const elements = [];
  let codeLang = 'python';

  function flushCode() {
    if (codeBuffer.length > 0) {
      const code = codeBuffer.join('\n');
      elements.push(
        <SyntaxHighlighter
          key={elements.length}
          language={codeLang}
          style={oneLight}
          customStyle={{
            borderRadius: 8,
            padding: '10px 14px',
            margin: '8px 0',
            fontSize: 16,
            background: '#f3f4f6',
            lineHeight: 1.5,
            display: 'block',
          }}
          showLineNumbers={false}
        >
          {code}
        </SyntaxHighlighter>
      );
      codeBuffer = [];
      codeLang = 'python';
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Detecteer code: regel begint met spatie/tab of typische code/commando/SQL/assembly
    if (
      /^\s/.test(line) ||
      /^(x =|if |elif |else:|print\(|for |def |student = |with open|numbers = )/.test(line.trim()) ||
      /^(ls |cd |chmod |cat |echo |grep |find |pwd |rm |cp |mv |sudo |export |\.\/|\/.+|\$ |# )/.test(line.trim()) ||
      /^(SELECT |DELETE |INSERT |UPDATE |CREATE |DROP |ALTER |WITH |FROM |WHERE |JOIN |LIMIT |COUNT\(|INNER JOIN|\.output |\.header |sqlite3 )/.test(line.trim()) ||
      /^(cmp |mov |jmp |push |pop |call |ret |eax|ebx|ecx|edx|esi|edi|rbx|rax|rdx|rsi|rdi)/.test(line.trim())
    ) {
      if (!inCode) {
        codeLang = detectCodeLanguage(line);
      }
      codeBuffer.push(line);
      inCode = true;
    } else {
      if (inCode) {
        flushCode();
        inCode = false;
      }
      if (line.trim() !== "") {
        // Zoek en style alle code/commando-patronen inline
        let parts = [line];
        codePatterns.forEach((pat) => {
          let newParts = [];
          parts.forEach((part) => {
            if (typeof part === 'string') {
              let lastIndex = 0;
              let match;
              pat.lastIndex = 0;
              while ((match = pat.exec(part)) !== null) {
                if (match.index > lastIndex) {
                  newParts.push(part.slice(lastIndex, match.index));
                }
                const code = match[0];
                const lang = detectCodeLanguage(code);
                newParts.push(
                  <SyntaxHighlighter
                    key={newParts.length}
                    language={lang}
                    style={oneLight}
                    customStyle={{
                      display: 'inline',
                      verticalAlign: 'middle',
                      borderRadius: 5,
                      padding: '1px 5px',
                      fontSize: 15,
                      background: '#f3f4f6',
                      margin: '0 2px',
                    }}
                    showLineNumbers={false}
                  >
                    {code}
                  </SyntaxHighlighter>
                );
                lastIndex = pat.lastIndex;
              }
              if (lastIndex < part.length) {
                newParts.push(part.slice(lastIndex));
              }
            } else {
              newParts.push(part);
            }
          });
          parts = newParts;
        });
        elements.push(
          <span key={elements.length}>
            {parts}
            <br />
          </span>
        );
      }
    }
  }
  if (inCode) flushCode();
  return elements;
}

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function prepareVragen(vragen) {
  // Shuffle vragen
  const shuffledVragen = shuffleArray(vragen).map(vraag => {
    // Shuffle opties per vraag
    const indices = Array.from({length: vraag.opties.length}, (_, i) => i);
    const shuffledIndices = shuffleArray(indices);
    const nieuweOpties = shuffledIndices.map(i => vraag.opties[i]);
    const nieuweCorrect = shuffledIndices.indexOf(vraag.correct);
    return { ...vraag, opties: nieuweOpties, correct: nieuweCorrect };
  });
  return shuffledVragen;
}

export default function MultipleChoiceQuiz({ vragen, onDone, current: initialCurrent, score: initialScore, selected: initialSelected, confirmed: initialConfirmed, feedback: initialFeedback, onProgress }) {
  const [shuffledVragen] = useState(() => prepareVragen(vragen));
  const [current, setCurrent] = useState(initialCurrent ?? 0);
  const [score, setScore] = useState(initialScore ?? 0);
  const [selected, setSelected] = useState(initialSelected ?? Array(shuffledVragen.length).fill(null));
  const [confirmed, setConfirmed] = useState(initialConfirmed ?? Array(shuffledVragen.length).fill(false));
  const [feedback, setFeedback] = useState(initialFeedback ?? Array(shuffledVragen.length).fill(null));
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (onProgress) {
      onProgress({ current, score, selected, confirmed, feedback });
    }
  }, [current, score, selected, confirmed, feedback]);

  function handleSelect(idx) {
    if (confirmed[current]) return;
    const newSelected = [...selected];
    newSelected[current] = idx;
    setSelected(newSelected);
    const juist = idx === shuffledVragen[current].correct;
    const newConfirmed = [...confirmed];
    newConfirmed[current] = true;
    setConfirmed(newConfirmed);
    const newFeedback = [...feedback];
    newFeedback[current] = juist ? "Goed!" : "Helaas, dat is niet correct.";
    setFeedback(newFeedback);
    if (juist) setScore(score + 1);
  }

  function handleNext() {
    if (current < shuffledVragen.length - 1) setCurrent(current + 1);
  }

  function handlePrev() {
    if (current > 0) setCurrent(current - 1);
  }

  function handleBack() {
    if (onDone) onDone(score, shuffledVragen.length);
  }

  function handleRestart() {
    setCurrent(0);
    setScore(0);
    setSelected(Array(shuffledVragen.length).fill(null));
    setConfirmed(Array(shuffledVragen.length).fill(false));
    setFeedback(Array(shuffledVragen.length).fill(null));
  }

  function handleRetry() {
    // Wis feedback en confirmed voor deze vraag, zodat je opnieuw kunt proberen
    const newConfirmed = [...confirmed];
    newConfirmed[current] = false;
    setConfirmed(newConfirmed);
    const newFeedback = [...feedback];
    newFeedback[current] = null;
    setFeedback(newFeedback);
    const newSelected = [...selected];
    newSelected[current] = null;
    setSelected(newSelected);
  }

  if (showResult) {
    return (
      <div style={{ textAlign: 'center', marginTop: 40 }}>
        <h2 style={{ color: '#111827', fontSize: 26, fontWeight: 800 }}>Overzicht</h2>
        <p style={{ fontSize: 20, color: '#111827', fontWeight: 700 }}>Je score: <span style={{ color: score === shuffledVragen.length ? '#16a34a' : score === 0 ? '#dc2626' : '#111827' }}>{score} / {shuffledVragen.length}</span></p>
        <div style={{ textAlign: 'left', margin: '0 auto', maxWidth: 520, marginBottom: 24 }}>
          {shuffledVragen.map((vraag, idx) => {
            const juist = selected[idx] === vraag.correct;
            const onbeantwoord = selected[idx] === null;
            return (
              <div key={idx} style={{
                background: onbeantwoord ? '#f3f4f6' : juist ? '#e0ffe0' : '#fee2e2',
                border: onbeantwoord ? '1.5px solid #d1d5db' : juist ? '1.5px solid #16a34a' : '1.5px solid #dc2626',
                borderRadius: 10,
                marginBottom: 16,
                padding: 16
              }}>
                <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 6 }}>{renderVraagTekst(vraag.vraag)}</div>
                <div style={{ marginBottom: 6 }}>
                  <b>Jouw antwoord: </b>
                  {onbeantwoord ? <span style={{ color: '#6b7280' }}>Onbeantwoord</span> : (
                    <span style={{ color: juist ? '#16a34a' : '#dc2626', fontWeight: 700 }}>{vraag.opties[selected[idx]]}</span>
                  )}
                </div>
                <div style={{ marginBottom: 6 }}>
                  <b>Correct antwoord: </b>
                  <span style={{ color: '#16a34a', fontWeight: 700 }}>{vraag.opties[vraag.correct]}</span>
                </div>
                <div style={{ color: '#64748b', fontSize: 15, marginBottom: 4 }}><b>Uitleg:</b> {vraag.uitleg}</div>
                <div style={{ color: '#6366f1', fontSize: 14 }}><b>Mnemonic:</b> {vraag.mnemonic}</div>
              </div>
            );
          })}
        </div>
        <button onClick={handleRestart} style={{ marginRight: 12, padding: '10px 28px', borderRadius: 8, background: '#fff', border: '1.5px solid #6366f1', fontSize: 17, cursor: 'pointer', fontWeight: 600, color: '#312e81' }}>
          Opnieuw proberen
        </button>
        <button onClick={handleBack} style={{ marginTop: 0, padding: '10px 28px', borderRadius: 8, background: '#fff', border: '1.5px solid #d1d5db', fontSize: 17, cursor: 'pointer', fontWeight: 600, color: '#111827' }}>
          Terug naar menu
        </button>
      </div>
    );
  }

  const vraag = shuffledVragen[current];
  const progress = (confirmed.filter(Boolean).length / shuffledVragen.length) * 100;

  return (
    <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 2px 16px #e5e7eb', padding: 32, marginTop: 32 }}>
      <button onClick={handleBack} style={{ marginBottom: 18, padding: '7px 18px', borderRadius: 8, background: '#fff', border: '1.5px solid #d1d5db', fontSize: 15, cursor: 'pointer', fontWeight: 500, color: '#111827' }}>
        Terug naar menu
      </button>
      {/* Vraagnummer en resterende vragen */}
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 15, color: '#111827', fontWeight: 600, marginBottom: 4 }}>
        <span>Vraag {current + 1} van {shuffledVragen.length}</span>
        <span>NOG {shuffledVragen.length - selected.filter(s => s !== null).length} VRAGEN TE GAAN</span>
      </div>
      {/* Nieuwe segmenten-voortgangsbalk */}
      <div style={{ display: 'flex', gap: 3, marginBottom: 12, marginTop: 2, justifyContent: 'center' }}>
        {shuffledVragen.map((vraag, idx) => {
          let kleur = '#a3a3a3'; // grijs
          if (selected[idx] !== null) {
            kleur = selected[idx] === vraag.correct ? '#16a34a' : '#dc2626';
          }
          return (
            <div
              key={idx}
              title={`Vraag ${idx + 1}`}
              style={{
                width: 22,
                height: 8,
                borderRadius: 5,
                background: kleur,
                border: idx === current ? '2px solid #6366f1' : '1.5px solid #e5e7eb',
                transition: 'background 0.2s, border 0.2s',
                boxSizing: 'border-box',
              }}
            />
          );
        })}
      </div>
      <div style={{ fontSize: 22, fontWeight: 700, color: '#111827', marginBottom: 18, marginTop: 8, minHeight: 48 }}>
        {renderVraagTekst(vraag.vraag)}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 18 }}>
        {vraag.opties.map((optie, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(idx)}
            disabled={showResult || selected[current] !== null}
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              background: selected[current] === idx
                ? (idx === vraag.correct && confirmed[current] ? '#e5e7eb' : '#f3f4f6')
                : '#fff',
              color: '#111827',
              border: selected[current] === idx
                ? (idx === vraag.correct && confirmed[current] ? '2px solid #111827' : '2px solid #d1d5db')
                : '2px solid #e5e7eb',
              borderRadius: 10,
              fontSize: 17,
              fontWeight: 500,
              padding: '14px 18px',
              cursor: showResult ? 'not-allowed' : 'pointer',
              transition: 'background 0.15s, border 0.15s',
              outline: 'none',
              gap: 18
            }}
          >
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 36,
              height: 36,
              minWidth: 36,
              minHeight: 36,
              maxWidth: 36,
              maxHeight: 36,
              borderRadius: '50%',
              background: '#fff',
              border: '2px solid #111827',
              color: '#111827',
              fontWeight: 700,
              fontSize: 18,
              marginRight: 16,
              boxSizing: 'border-box',
              flexShrink: 0
            }}>{LETTERS[idx]}</span>
            {optie}
          </button>
        ))}
      </div>
      <div style={{ minHeight: 28 }}>
        {feedback[current] && (
          <div style={{
            fontWeight: 700,
            fontSize: 16,
            color: feedback[current].includes('Goed') ? '#111827' : (feedback[current] === 'Onbeantwoord' ? '#6b7280' : '#dc2626'),
            background: feedback[current].includes('Goed') ? '#e0ffe0' : feedback[current] === 'Helaas, dat is niet correct.' ? '#fee2e2' : '#f3f4f6',
            borderRadius: 8,
            padding: 10,
            textAlign: 'center',
            marginTop: 4
          }}>{feedback[current]}</div>
        )}
        {feedback[current] === "Helaas, dat is niet correct." && (
          <button
            onClick={handleRetry}
            style={{ marginTop: 12, padding: '8px 18px', borderRadius: 8, background: '#fff', border: '1.5px solid #dc2626', fontSize: 15, cursor: 'pointer', fontWeight: 600, color: '#dc2626' }}
          >
            Probeer opnieuw
          </button>
        )}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24 }}>
        <button
          onClick={handlePrev}
          disabled={current === 0}
          style={{ padding: '8px 18px', borderRadius: 8, background: '#fff', border: '1.5px solid #d1d5db', fontSize: 15, cursor: current === 0 ? 'not-allowed' : 'pointer', fontWeight: 500, color: '#111827' }}
        >
          Vorige
        </button>
        {current < shuffledVragen.length - 1 ? (
          <button
            onClick={handleNext}
            style={{ padding: '8px 18px', borderRadius: 8, background: '#fff', border: '1.5px solid #d1d5db', fontSize: 15, cursor: 'pointer', fontWeight: 500, color: '#111827' }}
          >
            Volgende
          </button>
        ) : (
          <button
            onClick={() => setShowResult(true)}
            style={{ padding: '8px 28px', borderRadius: 8, background: '#6366f1', border: '1.5px solid #6366f1', fontSize: 16, cursor: 'pointer', fontWeight: 700, color: '#fff' }}
          >
            Verzenden & resultaat
          </button>
        )}
      </div>
    </div>
  );
} 