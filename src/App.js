import React from 'react';
import Modal from './components/modal';
import ShortForm from './components/ShortForm';
import LongForm from './components/LongForm';
import Table from './components/Table';

const App = () => (
  <>
    <Modal buttonLabel="Modal A: Short Form" modalHeader="Short Form">
      <ShortForm />
    </Modal>
    <Modal buttonLabel="Modal B: Long Form" modalHeader="Long Form">
      <LongForm />
    </Modal>
    <Modal
      buttonLabel="Modal C: Broad Table"
      modalHeader="Broad Table"
    >
      <Table />
    </Modal>
  </>
);

export default App;
