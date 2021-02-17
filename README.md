# lab34-reducer

Refactor this code:

```js
const useRecord = (init) => {
  const [before, setBefore] = useState([]);
  const [current, setCurrent] = useState(init);
  const [after, setAfter] = useState([]);

  const undo = () => {
    setAfter(after => [current, ...after]);
    setCurrent(before[before.length - 1]);
    setBefore(before => before.slice(0, -1));
  };

  const redo = () => {
    setBefore(before => [...before, current]);
    setCurrent(after[0]);
    setAfter(after => after.slice(1));
  }

  const record = val => {
    setBefore(before => [...before, current]);
    setCurrent(val);
  }

  return {
    undo,
    record,
    redo,
    current,
  }
};

function App() {
  const { current, undo, redo, record } = useRecord('#FF0000');

  return (
    <>
      <button onClick={undo}>undo</button>
      <button onClick={redo}>redo</button>
      <input type="color" value={current} onChange={({ target }) => record(target.value)} />
      <div style={{ backgroundColor: current, width: '10rem', height: '10rem' }}></div>
    </>
  )
}

export default App;
```

## Test

Write a test that tests the behavior off App.

## Refactor

Refactor the hook to `useReducer` instead of `useState`. Refactor only the hook, you
shouldn't need to refactor the component at all.

## Rubric

* behavior test 3 pts
* refactor 7 pts