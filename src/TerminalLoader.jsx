const TerminalLoader = () => {
  return (
    <div className="loader-screen" aria-live="polite" aria-label="Portfolio is loading">
      <div className="terminal-loader">
        <div className="terminal-header">
          <div className="terminal-title">Status</div>
          <div className="terminal-controls">
            <div className="control close"></div>
            <div className="control minimize"></div>
            <div className="control maximize"></div>
          </div>
        </div>
        <div className="terminal-loader-text">Loading...</div>
      </div>
    </div>
  );
};

export default TerminalLoader;
