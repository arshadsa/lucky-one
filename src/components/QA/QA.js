import React from 'react';

const QA = () => {
  return (
    <div>
      <h1>How React Works?</h1>
      <p><strong>Ans: </strong>React mainstains a tree for developed code to do efficent differential computation on the nodes. This way React allows the developer to change the DOM efficiently and push only the changes to DOM and not the entire DOM. Secondly, JSX used in React is only a syntactic sugar. These are converted to basic React commands. Then React converts them to plain JavaScript Object. Finally, React App tag is used to push the completed DOM to the UI.</p>
      <h1>What are the differences between Props and State?</h1>
      <p><strong>Ans: </strong>Firstly, Props are used to pass data from one component to another. On the other hand, state is used for data within components only. Secondly, props are immutable. That means, it cannot be changed or modified by the receiving component. But state is mutable and it actually used to modify the data inside it's variable. Thirdly, props are read-only. But state can be read and updated.</p>
      <h1>How useState works?</h1>
      <p><strong>Ans: </strong>It is a Hook that allows developers to have a state variable in functional components. Developers can pass the initial state to that function and that returns a variable with it's current state value and another function to update that. In other words, useState enables developers to add state to function components. Calling React.useState inside a function component generates a single piece of state associated with that component. State with Hooks can be of any type and not necessarily to be an object.</p>
    </div>
  );
};

export default QA;