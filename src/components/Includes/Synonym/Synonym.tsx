import React from 'react';

import { ReactComponent as PencilSVG } from '../../../static/icons/pencil.svg';
import { ReactComponent as TrashSVG } from '../../../static/icons/trash.svg';

import { ISynonym } from '../../../interfaces';

import './Synonym.scss';

type SynonymProps = {
  onEdit: (value: string) => void,
  onDelete: (value: string) => void,
  synonym: ISynonym,
};

const Synonym = (props: SynonymProps) => {
  const { onEdit, onDelete, synonym } = props;

  return (
    <div className="synonym">
      <div className="synonym__text" title={synonym.text}>{synonym.text}</div>
      <div className="synonym__actions">
        <button className="synonym__action" onClick={() => onEdit(synonym.id)} type="button">
          <PencilSVG />
        </button>
        <button className="synonym__action" onClick={() => onDelete(synonym.id)} type="button">
          <TrashSVG />
        </button>
      </div>
    </div>
  );
};

export default Synonym;
