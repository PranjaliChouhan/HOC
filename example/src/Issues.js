import React from 'react';

// HOC to provide a "color" prop
const withColor = (WrappedComponent, color) => {
  return class extends React.Component {
    render() {
      return <WrappedComponent color={color} />;
    }
  };
};

// HOC to provide a "size" prop
const withSize = (WrappedComponent, size) => {
  return class extends React.Component {
    render() {
      return <WrappedComponent size={size} />;
    }
  };
};

// Component A: Receives "color" prop directly
const ComponentA = ({ color }) => {
  return <div style={{ color }}>Component A</div>;
};

// Component B: Receives "size" prop directly
const ComponentB = ({ size }) => {
  return <div style={{ fontSize: size }}>Component B</div>;
};

// Component C: Wraps ComponentB and receives "color" prop via prop drilling
const ComponentC = ({ color }) => {
  return (
    <div>
      <ComponentB size="20px" />
    </div>
  );
};

// EnhancedComponentA: ComponentA wrapped with withColor HOC
const EnhancedComponentA = withColor(ComponentA, 'red');

// EnhancedComponentB: ComponentB wrapped with withSize HOC
const EnhancedComponentB = withSize(ComponentB, '16px');

// EnhancedComponentC: ComponentC wrapped with withColor HOC
const EnhancedComponentC = withColor(ComponentC, 'blue');

const Issue = () => {
  return (
    <div>
      <EnhancedComponentA /> {/* Receives color prop */}
      <EnhancedComponentB /> {/* Receives size prop */}
      <EnhancedComponentC /> {/* Prop drilling from EnhancedComponentC to ComponentB */}
    </div>
  );
};

export default Issue;
