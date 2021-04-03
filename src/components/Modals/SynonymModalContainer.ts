import { connect } from 'react-redux';

import { TOGGLE_MODAL, UPDATE_SYYNONYMS } from '../../actions/app';

import SynonymModal from './SynonymModal';

const mapStateToProps = ({ app }) => ({
  synonyms: app.synonyms,
});

const mapDispatchToProps = (dispatch) => ({
  onCloseModal: () => dispatch({ type: TOGGLE_MODAL }),
  onUpdateSynonyms: (synonyms) => dispatch({ type: UPDATE_SYYNONYMS, payload: synonyms }),
});

export default connect(mapStateToProps, mapDispatchToProps)(SynonymModal);
