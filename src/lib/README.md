# Lib / Utilities

This folder contains helper functions that are logic-pure (no UI).

## `utils.js`

### `cn(...inputs)`
**Class Name Merger.**

This is the most critical helper in the codebase. It combines `clsx` (for conditional classes) and `tailwind-merge` (for handling class conflicts).

#### Why do we need it?
Tailwind classes conflict. If a default button has `bg-blue-500` and you pass `className="bg-red-500"`, standard string concatenation might result in `bg-blue-500 bg-red-500`, and CSS specificity determines the winner (often unpredictably).

`tailwind-merge` intelligently detects that `bg-red-500` conflicts with `bg-blue-500` and removes the former, ensuring your overrides actually work.

#### Usage
```js
import { cn } from './lib/utils';

// Conditional classes
cn("base-class", isSelected && "active-class")

// Merging overrides
cn("p-4 bg-white", props.className)
```
