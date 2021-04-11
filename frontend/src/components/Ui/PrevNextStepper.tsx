import React, { useState } from 'react';
import TwitterButton from './TwitterButton';

export enum POSITIONS {
  TOP = 'top',
  BOTTOM = 'bottom'
}

type Step = JSX.Element;
type Props = {
  steps: Step[],
  position?: POSITIONS.TOP | POSITIONS.BOTTOM
}

const _isLastStep = (stepIndex: number, stepsCount: number): boolean => (stepIndex + 1) === stepsCount;
const _isFirstStep = (stepIndex: number): boolean => stepIndex === 0;
const _getNextStep = (stepIndex: number): number => stepIndex + 1;
const _getPrevStep = (stepIndex: number): number => stepIndex - 1;

export default function PrevNextStepper({ steps, position }: Props): JSX.Element {
  const [currentStepIndex, setStepIndex] = useState<number>(0);

  return (
    <div className={position === POSITIONS.BOTTOM ? 'mt-3' : 'mb-3'}>
      {position === POSITIONS.BOTTOM
        ? <div>
          {steps[currentStepIndex]}
        </div>
        : ''
      }
      <div className="d-flex justify-content-center">
        <TwitterButton
          className="mr-2"
          text="Prev"
          onClick={() => setStepIndex(_isFirstStep(currentStepIndex) ? currentStepIndex : _getPrevStep(currentStepIndex))}
          isDisabled={_isFirstStep(currentStepIndex)}
        />
        <TwitterButton
          text="Next"
          onClick={() => setStepIndex(_isLastStep(currentStepIndex, steps.length) ? currentStepIndex : _getNextStep(currentStepIndex))}
          isDisabled={_isLastStep(currentStepIndex, steps.length)}
        />
      </div>
      {position === POSITIONS.TOP
        ? <div>
          {steps[currentStepIndex]}
        </div>
        : ''
      }
    </div>
  );
}
