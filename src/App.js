import React from 'react';
import Modal from './components/modal';
import TypeA from './components/forms/typeA';

const App = () => (
  <>
    <Modal buttonLabel="Modal A: Fill Form" modalHeader="Fill Form">
      <TypeA />
    </Modal>
    <Modal
      buttonLabel="Modal B: Display Grid"
      modalHeader="Display Grid"
    >
      <TypeA />
    </Modal>
    <Modal buttonLabel="Modal C: Table" modalHeader="Table">
      <TypeA />
    </Modal>
  </>
);

export default App;
