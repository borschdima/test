import React, { useState } from 'react';

import { ReactComponent as CloseSVG } from '../../../static/icons/close.svg';

import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';

import { ISynonym } from '../../../interfaces';

import './SynonymForm.scss';

type SynonymFormProps = {
  mode: string,
  synonym?: ISynonym,
  onSubmit: (result?: string) => void,
};

const SynonymForm = ({ mode, synonym, onSubmit }: SynonymFormProps) => {
  const [value, setValue] = useState(synonym ? synonym.text : '');
  const [error, setError] = useState('');

  const handleSublmit = (e: React.FormEvent): void => {
    e.preventDefault();

    if (!value) {
      setError('Введите что-нибудь');
    } else {
      setError('');
      setValue('');
      onSubmit(value);
    }
  };

  return (
    <form className="synonym-form" onSubmit={handleSublmit}>
      <h6 className="synonym-form__title">
        {mode === 'edit' ? 'редактирование синонима:' : 'Добавление синонима:'}
      </h6>
      <div className="synonym-form__field">
        <Input
          className="synonym-form__input"
          placeholder="Введите что-нибудь"
          name="synonym"
          value={value}
          onChange={setValue}
          errorMessage={error}
        />
      </div>
      <div className="synonym-form__actions">
        <Button type="submit">
          {mode === 'edit' ? 'cохранить' : 'добавить'}
        </Button>
        {mode === 'edit' && (
          <button type="button" className="synonym-form__action" onClick={() => onSubmit()}>
            <CloseSVG />
          </button>
        )}
      </div>
    </form>
  );
};

export default SynonymForm;
