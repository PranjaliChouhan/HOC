import React from 'react';

// Define the Higher-Order Component (HOC) withTitle
// It takes a WrappedComponent and a title as parameters
const withTitle = (WrappedComponent, title) => {
  // Define and return an anonymous class-based component
  return class extends React.Component {
    // Render method of the anonymous component
    render() {
      return (
        <div>
          {/* Display the title prop */}
          <h1 >{title}</h1>
          {/* Render the WrappedComponent and pass any props */}
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};

// Define a simple functional component, MyComponent
const MyComponent = () => {
  return <p>Hello, world!</p>;
};

// Apply the withTitle HOC to MyComponent and pass 'My Component Title' as the title
const EnhancedComponent = withTitle(MyComponent, 'My Component Title');

// Define the  component
const Componentex = () => {
  // Render the EnhancedComponent
  return <EnhancedComponent />;
};

// Export the  component as the default export
export default Componentex;
