import { useState } from 'react';
import * as S from './styles';

export function Steps() {
  const [choosedStep, setChoosedStep] = useState(1);

  return (
    <S.Wrapper>
      <S.Step active={choosedStep === 1} onClick={() => setChoosedStep(1)}>
        <aside>1</aside>
        <div>
          <span>STEP 1</span>
          <h1>YOUR INFO</h1>
        </div>
      </S.Step>
      <S.Step active={choosedStep === 2} onClick={() => setChoosedStep(2)}>
        <aside>2</aside>
        <div>
          <span>STEP 2</span>
          <h1>SELECT PLAN</h1>
        </div>
      </S.Step>
      <S.Step active={choosedStep === 3} onClick={() => setChoosedStep(3)}>
        <aside>3</aside>
        <div>
          <span>STEP 3</span>
          <h1>ADD-ONS</h1>
        </div>
      </S.Step>
      <S.Step active={choosedStep === 4} onClick={() => setChoosedStep(4)}>
        <aside>4</aside>
        <div>
          <span>STEP 4</span>
          <h1>SUMMARY</h1>
        </div>
      </S.Step>
    </S.Wrapper>
  );
}
