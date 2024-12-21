```javascript
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  return (
    <View>
      {/* Conditionally render to avoid early access */}
      {count !== undefined && <Text>{count}</Text>}
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
}
```