import styled, { css } from 'styled-components';

type StepProps = {
  active:boolean;
}

export const Wrapper = styled.nav`
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  margin-top: 1rem;

`;
export const Step = styled.button<StepProps>`
  ${({active}) => css`
  display: flex;
  gap: 1rem;
  align-items: center;
  background: transparent;
  border: 0;
  text-align: left;
  font-family: 'Ubuntu', sans-serif;

  aside {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${active ? 'hsl(206, 94%, 87%)' : 'transparent'};
    border: 1px solid hsl(206, 94%, 87%);
    color: ${active ? 'hsl(213, 96%, 18%)' : 'hsl(206, 94%, 87%)'};
    transition:  0.2s all ease;
  }
  div{
    span{
      color: hsl(229, 24%, 87%);
      font-size: 0.75rem;
    }
    h1{
      color: hsl(229, 24%, 87%);
      font-size: 1rem;
      font-family: 'Ubuntu', sans-serif;
    }
  }
  `}

`;
