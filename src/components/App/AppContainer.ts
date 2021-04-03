import { connect } from 'react-redux';

import App from './App';

const mapStateToProps = ({ app }) => ({
  isModalOpen: app.isModalOpen,
});

export default connect(mapStateToProps, null)(App);
