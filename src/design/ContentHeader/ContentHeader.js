import styled from 'styled-components';

const ContentHeader = styled.h2`
  text-align: center;
  position: relative;

  &::before {
    background-color: var(--white);
    height: 0.5rem;
    width: 2.8rem;
    content: '';
    display: inline-block;
    top: -1rem;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
  }

  &::after {
    background-color: var(--black);
    height: 0.5rem;
    width: 1rem;
    content: '';
    display: inline-block;
    top: -1rem;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
  }
`;

export default ContentHeader;
