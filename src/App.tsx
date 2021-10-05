import { useState } from "react";

const App = () => {
  const [abortController, setAbortController] =
    useState<AbortController | null>(null);

  const callSlowAPI = async () => {
    try {
      const newAbortController = new AbortController();
      setAbortController(newAbortController);
      await window.fetch("http://localhost:8000", {
        signal: newAbortController.signal,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const cancelFetch = () => abortController?.abort();

  return (
    <div className="App">
      <button data-cy="make-request-btn" onClick={callSlowAPI}>
        Make slow Request
      </button>
      <button data-cy="cancel-request-btn" onClick={cancelFetch}>
        cancel slow Request
      </button>
    </div>
  );
};

export default App;
