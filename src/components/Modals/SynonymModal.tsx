/* eslint-disable react/destructuring-assignment */
import React from 'react';

import Button from '../UI/Button/Button';

import Synonym from '../Includes/Synonym/Synonym';
import SynonymForm from '../Includes/SynonymForm/SynonymForm';

import { ReactComponent as CloseSVG } from '../../static/icons/close.svg';
import { ReactComponent as InfoSVG } from '../../static/icons/info.svg';

import { ISynonym } from '../../interfaces';

import './SynonymModal.scss';

type SynonymModalProps = {
  synonyms: ISynonym[];
  onCloseModal: () => void;
  onUpdateSynonyms: (synonyms: ISynonym[]) => void;
};

type SynonymModalState = {
  synonyms: ISynonym[];
  mode: string,
  activeItem: string,
};

class SynonymModal extends React.PureComponent<SynonymModalProps, SynonymModalState> {
  state = {
    synonyms: this.props.synonyms,
    mode: 'create',
    activeItem: null,
  };

  componentDidMount() {}

  handleClickSave = (): void => {
    const { synonyms } = this.state;
    const { onUpdateSynonyms } = this.props;

    onUpdateSynonyms(synonyms);
  };

  handleClickClear = (): void => {
    const { onUpdateSynonyms } = this.props;

    this.setState({ synonyms: [], mode: 'create', activeItem: null }, () => onUpdateSynonyms([]));
  };

  handleClickEditSynonym = (id: string): void => {
    const { synonyms } = this.state;

    const synonym = synonyms.find((syn) => syn.id === id);

    this.setState({ activeItem: synonym.id, mode: 'edit' });
  };

  handleClickDeleteSynonym = (id: string): void => {
    const { synonyms } = this.state;

    this.setState({ synonyms: synonyms.filter((item) => item.id !== id) });
  };

  handleFormSubmit = (value?: string): void => {
    const { synonyms, mode, activeItem } = this.state;

    if (value) {
      const newItem = {
        text: value,
        id: Date.now().toString(),
      };

      if (mode === 'edit') {
        console.log(activeItem);
        this.setState({
          // eslint-disable-next-line
          synonyms: synonyms.map((item) => item.id !== activeItem ? item : ({ text: value, id: item.id })),
          mode: 'create',
          activeItem: null,
        });
      } else {
        this.setState((prev) => ({ ...prev, synonyms: [newItem, ...synonyms] }));
      }
    } else {
      this.setState({ mode: 'create', activeItem: null });
    }
  };

  render() {
    const { onCloseModal } = this.props;
    const { synonyms, mode, activeItem } = this.state;

    return (
      <div className="modal synonym-modal">
        <div className="modal__backdrop" />
        <div className="modal__content">
          <div className="modal__header">
            <h3 className="modal__header-title">Редактирование группы синонимов поисковых фраз</h3>
          </div>
          <div className="modal__body">
            <h6 className="modal__body-title">
              Синонимы
              <InfoSVG />
            </h6>
            {mode === 'create' && <SynonymForm mode={mode} onSubmit={this.handleFormSubmit} />}
            {synonyms.length > 0 && (
              <div className="synonym-modal__list">
                {synonyms.map((item) => item.id !== activeItem ? (
                  <Synonym
                    key={item.id}
                    synonym={item}
                    onEdit={this.handleClickEditSynonym}
                    onDelete={this.handleClickDeleteSynonym}
                  />
                ) : (
                  <SynonymForm
                    key={item.id}
                    mode={mode}
                    onSubmit={this.handleFormSubmit}
                    synonym={item}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="modal__footer">
            <Button variant="success" onClick={this.handleClickSave}>
              сохранить изменения
            </Button>
            <Button variant="danger" onClick={this.handleClickClear}>
              очистить синонимы
            </Button>
          </div>
          <button className="modal__close" onClick={onCloseModal} type="button">
            <CloseSVG />
          </button>
        </div>
      </div>
    );
  }
}

export default SynonymModal;
