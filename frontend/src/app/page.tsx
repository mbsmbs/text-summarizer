'use client';

import { useState } from 'react';

export default function HomePage() {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSummarize = async () => {
    setLoading(true);
    setSummary('');
    setError('');

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'}/summarize`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });

      if (!res.ok) {
        throw new Error('Failed to summarize text.');
      }

      const data = await res.json();
      setSummary(data.summary);
    } catch (err) {
      setError('An error occurred while summarizing.');
    }

    setLoading(false);
  };

  return (
    <main style={{ padding: 40, maxWidth: 800, margin: 'auto' }}>
      <h1>📝 Text Summarizer</h1>
      <textarea
        rows={10}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste your text here..."
        style={{
          width: '100%',
          marginTop: 20,
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: 6,
          fontSize: '1rem',
          resize: 'vertical',
          backgroundColor: '#111',
          color: '#eee',
        }}
      />

      <button
        onClick={handleSummarize}
        disabled={loading || !text.trim()}
        style={{
          marginTop: 20,
          padding: '10px 20px',
          border: '1px solid #ccc',
          backgroundColor: loading ? '#444' : '#fff',
          color: loading ? '#aaa' : '#000',
          cursor: loading ? 'not-allowed' : 'pointer',
          borderRadius: 6,
          transition: 'background-color 0.3s ease',
        }}
      >
        {loading ? 'Summarizing...' : 'Summarize'}
      </button>


      {summary && (
        <div style={{ marginTop: 40 }}>
          <h2>Summary</h2>
          <p>{summary}</p>
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </main>
  );
}
