import { lazy, useState } from 'react';

const Bar = lazy(() =>
  import('./bar').then((module) => ({ default: module.Bar }))
);

export function Foo() {
  const [showBar, setShowBar] = useState(false);

  return (
    <div>
      <h1>Import Bar as Lazy Component</h1>
      <button onClick={() => setShowBar(!showBar)}>
        {showBar ? 'Hide' : 'Show'} Bar
      </button>
      {showBar && <Bar />}
    </div>
  );
}
