import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface OptionProps {
  checked: boolean;
  description?: string;
  onClick: () => void;
  title: string;
}

export default function Option({ onClick, title, checked, description }: OptionProps) {
  return (
    <OptionCheckStyled checked={checked}>
      <div className="main">
        <div className="checkbox" onClick={onClick}>
          <CheckMarkIcon icon={faCheck} />
        </div>
        <h3>{title}</h3>
      </div>
      {
        description ?
          <p className="check-option-extra">{description}</p> :
          null
      }
    </OptionCheckStyled>
  );
}

interface OptionsCheckStyledProps {
  checked: boolean;
}

const OptionCheckStyled = styled.div<OptionsCheckStyledProps>`
  .main {
    display: flex;
    margin: 15px 0;
  }

  h3 {
    margin: 0;
    color: white;
    font-weight: 500;
  }

  .check-option-extra {
    color: rgb(175, 175, 175);

    a, a:visited {
      color: rgb(175, 175, 175);
    }
  }

  .checkbox {
    margin: 0px 15px 0px 5px;
    background-color: ${props => props.checked ? '#e80606' : 'white'};
    display: inline-block;
    border: 1px solid rgb(141, 141, 141);
    height: 15px;
    width: 15px;
  }
`

const CheckMarkIcon = styled(FontAwesomeIcon)`
  color: white;
  margin: 1.5px;
  display: block;
`