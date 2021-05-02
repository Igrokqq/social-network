import React, { FormEvent, useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import TwitterSearchIcon from './TwitterSearchIcon';

import '../../sass/components/Ui/TwitterSearchInput.sass';
import TwitterSearchInputClearButton from './TwitterSearchInputClearButton';

type Props = {
  readonly labelText?: string;
  readonly placeholderText?: string;
  readonly inputClassName?: string;
  readonly value?: string;
  readonly inputId?: string;
  readonly onInput: (searchText: string) => void;
  readonly hasLabel?: boolean;
}

const initialProps: Props = {
  labelText: 'Search',
  placeholderText: 'smth...',
  inputClassName: 'mb-2 w-100 twitter-search-input',
  inputId: 'search',
  value: '',
  onInput: (): void => { },
  hasLabel: false
};

export default function SearchInput({
  labelText,
  placeholderText,
  inputClassName,
  inputId,
  onInput,
  value,
  hasLabel
}: Props): JSX.Element {
  const [searchText, setSearchText] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const _onInput = async (event: FormEvent<HTMLInputElement>): Promise<void> => {
    const { value: searchText } = (event.target as HTMLInputElement);

    setSearchText(searchText);
    onInput(searchText);
  };

  return (
    <InputGroup className="d-flex flex-column mb-2">
      {hasLabel
        ? <Form.Label htmlFor={inputId || initialProps.inputId}>{labelText || initialProps.labelText}</Form.Label>
        : ''
      }
      <Form.Control
        onInput={_onInput}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={inputClassName || initialProps.inputClassName}
        id={inputId || initialProps.inputId}
        placeholder={placeholderText || initialProps.placeholderText}
        value={value || searchText}
        name="login"
        autoComplete="off"
      />
      <div className="icon-wrapper">
        <TwitterSearchIcon isActive={isFocused} />
      </div>
      {searchText.length
        ? (
          <div className="d-flex align-items-center justify-content-center">
            <TwitterSearchInputClearButton onClick={() => setSearchText('')}/>
          </div>
        )
        : ''
      }
    </InputGroup>
  );
}
