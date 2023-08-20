# useToggle

A hook to easily toggle a boolean type of state.

## Example

```tsx
import { useToggle } from '@devgrace/react'

const App = () => {
  const [bool, toggle] = useToggle(false);

  return (
    <div>
      {bool && <p>render</p>}
      <button onClick={toggle}>Toggle Button</button>
    </div>
  );
}
```