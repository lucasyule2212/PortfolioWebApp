import React, { createContext, useContext, useReducer } from 'react';

interface StepState {
  currentStep: number;
}

type StepAction = { type: 'NEXT_STEP' } | { type: 'PREV_STEP' };

interface StepContextType {
  state: StepState;
  dispatch: React.Dispatch<StepAction>;
}

type StepProviderProps = {
  children: React.ReactNode;
};

const StepContext = createContext<StepContextType | undefined>({} as StepContextType);

const initialState: StepState = {
  currentStep: 0,
};

const stepReducer = (state: StepState, action: StepAction): StepState => {
  switch (action.type) {
    case 'NEXT_STEP':
      return { currentStep: state.currentStep + 1 };
    case 'PREV_STEP':
      return { currentStep: state.currentStep - 1 };
    default:
      return state;
  }
};

const StepProvider: React.FC<StepProviderProps> = ({ children }: StepProviderProps) => {
  const [state, dispatch] = useReducer(stepReducer, initialState);

  return (
    <StepContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </StepContext.Provider>
  );
};

const useStepContext = (): StepContextType => {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error('useStepContext must be used within a StepProvider');
  }
  return context;
};

export { StepProvider, useStepContext };
