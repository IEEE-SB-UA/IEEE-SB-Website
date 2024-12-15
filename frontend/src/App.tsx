import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Button } from "@/components/ui/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <Button onClick={() => setCount((count) => count + 1)}>
        joe {count}
      </Button>
      <Button>Click me</Button>
      <Button variant="secondary">Secondary</Button>
    </>
  );
}

export default App;
