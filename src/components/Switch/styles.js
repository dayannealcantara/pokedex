import styled from 'styled-components';

export const Container = styled.div`
  display: inline-block;

  span {
    position: relative;
    width: 39px;
    height: 27px;
    float: left;

    input {
      display: none;
      &:checked + .slider {
       
      }
      &:checked + .slider:before {
        transform: translateX(15px);
      }
      &:focus + .slider {
        box-shadow: 0 0 1px #EC0344;
      }
    }

  }
  label {
    line-height: 34px;
    margin-left: 12px;
    cursor: pointer;
  }

  .slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    border: 0;
    outline: none;
    transition: 0.4s;
    border-radius: 34px;
    border: 1px solid #EC0344;
    cursor: pointer;
    &:before {
      position: absolute;
      content: '';
      height: 15px;
      width: 15px;
      left: 4px;
      bottom: 5px;
      background-color: ${({ isChecked }) => (isChecked ? '#8D8B92' : '#EC0344')};
      transition: 0.4s;
      border-radius: 50%;
    }
  }
`;
