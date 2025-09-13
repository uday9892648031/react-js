import React from 'react';

// This is a basic functional component. It's a JavaScript function
// that returns JSX, which is what React uses to describe the UI.
function NamedExport() {
  const name = "John";
  
  // The JSX looks a lot like HTML, but it's a bit stricter.
  return (
    // You can write plain text and HTML tags here.
    <div>
      {/* You can also use curly braces to embed a JavaScript variable. */}
      <h1>Hello, {name}!</h1>
    </div>
  );
}

// Don't forget to export the component so it can be used elsewhere.
export default NamedExport;
