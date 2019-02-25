import styled from 'styled-components';

const ContentHeader = styled.h2`
  position: relative;
  text-align: center;
  text-transform: uppercase;
  --belt-size: 11px;

  &::before {
    background-color: var(--white);
    height: var(--belt-size);
    width: 52px;
    content: '';
    display: inline-block;
    top: -1rem;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
  }

  &::after {
    background-color: var(--black);
    height: var(--belt-size);
    width: 16px;
    content: '';
    display: inline-block;
    top: -1rem;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
  }
`;

export default ContentHeader;
