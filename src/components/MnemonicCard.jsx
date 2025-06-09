import React from "react";

export default function MnemonicCard({ mnemonic }) {
  return (
    <div style={{ background: '#fef9c3', padding: '0.75em', borderRadius: 8, margin: '1em 0', fontSize: 15 }}>
      <strong>Geheugensteuntje:</strong> {mnemonic}
    </div>
  );
} 