import React from 'react';

import SynonymModalContainer from '../Modals/SynonymModalContainer';

type AppProps = {
  isModalOpen: boolean,
};

const App = ({ isModalOpen }: AppProps) => (
  <div className="page">
    <div className="page__main">
      <div className="container">
        {isModalOpen && <SynonymModalContainer />}
      </div>
    </div>
  </div>
);

export default App;
