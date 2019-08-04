import React from 'react';
import Modal from './components/modal';
import TypeA from './components/forms/typeA';

const App = () => (
  <>
    <Modal title="Modal A: Fill Form">
      <TypeA />
    </Modal>
    <Modal title="Modal B: Display Form">
      <TypeA />
    </Modal>
    <Modal title="Modal C: Table">
      <TypeA />
    </Modal>
  </>
);

export default App;
