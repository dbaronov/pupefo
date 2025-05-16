import React from 'react';

export const LoadingSkeleton = () => (
  <div style={{ padding: 32, textAlign: 'center' }}>
    <div style={{ background: '#eee', height: 200, marginBottom: 16, borderRadius: 8 }} />
    <div style={{ background: '#eee', height: 24, width: 200, margin: '8px auto', borderRadius: 4 }} />
    <div style={{ background: '#eee', height: 16, width: 150, margin: '8px auto', borderRadius: 4 }} />
  </div>
);

export default LoadingSkeleton;
