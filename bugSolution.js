```javascript
// pages/index.js
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('./dynamic'), { ssr: false });

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <DynamicComponent />
    </div>
  );
}

// pages/dynamic.js

export default function DynamicComponent() {
  return (
    <div>
      <h2>I am a dynamic component</h2>
    </div>
  );
}
```