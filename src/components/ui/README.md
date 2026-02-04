# UI Design System

We use a "Radix/Shadcn" inspired pattern where components are owned by you.

## `Button.jsx`
The primary interaction element.
```jsx
// Usage
<Button variant="default" size="lg">Get Started</Button>
<Button variant="outline">Learn More</Button>
<Button variant="ghost">Log In</Button>
```
- **Variants**: `default` (Teal), `outline` (Bordered), `ghost` (Text only).
- **Sizes**: `sm`, `default`, `lg`.

## `Card.jsx`
Container for grouped content, often used with glassmorphism.
```jsx
// Usage
<Card hoverable className="p-6">
  <div className="font-bold">Content</div>
</Card>
```
- **Props**:
    - `hoverable` (boolean): Adds a slight lift and shadow on hover.
    - `glass` (boolean): Adds backdrop blur (check implementation support).

## `Input.jsx`
Standard text input field with built-in label and error handling.
```jsx
// Usage
<Input 
  label="Email Address" 
  error={errors.email} 
  placeholder="name@example.com" 
/>
```

---

### Important: `cn` Utility
All UI components use the `cn()` utility from `src/lib/utils.js`. This allows you to pass a `className` prop to override styles without conflicts.
```jsx
<Button className="mt-10 bg-red-500">I am red now</Button>
```
