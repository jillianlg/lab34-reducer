/* eslint-disable max-len */
import React, { useReducer } from 'react';
import reducer, { initialState } from '../../reducers/recordReducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const undo = () => dispatch({ type: 'UNDO' });
  const redo = () => dispatch({ type: 'REDO' });

  return (
    <>
      <button id="UNDO" onClick={undo}>undo</button>
      <button id="REDO" onClick={redo}>redo</button>
      
      <label htmlFor="RECORD">Color</label>
      <input id="RECORD" type="color" value={state.current} onChange={({ target }) => dispatch({ type: 'RECORD', payload: target.value })} />
    
      <div data-testid="display" style={{ backgroundColor: state.current, width: '10rem', height: '10rem' }}></div>
    </>
  );
}

export default App;
