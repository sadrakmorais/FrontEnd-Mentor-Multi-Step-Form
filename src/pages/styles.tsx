import { url } from 'inspector';
import styled from 'styled-components';
import BGDESKTOP from '/assets/images/bg-sidebar-desktop.svg';

export const ContainerGlobal = styled.div`
  width: 100%;
  height: 100vh;
  background: hsl(229, 24%, 87%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 3rem;
`;

export const MainContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  background: hsl(0, 0%, 100%);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
  border-radius: 1rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 1rem;
`;
export const WrapperSteps = styled.section`
  border-radius: 1rem;
  padding: 1rem;
  background-image: url('/assets/images/bg-sidebar-desktop.svg');
  background-repeat: no-repeat;
  background-size: cover;
  width: 230px;
  height: 70vh;
`;
export const WrapperForm = styled.section`
  border-radius: 1rem;
  padding: 1rem;
`;
