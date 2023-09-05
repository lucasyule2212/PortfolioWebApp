import { useStepContext } from '@/contexts/StepperContext';
import React, { useMemo } from 'react';
import { IconType } from 'react-icons';
import { Button } from '../ui/button';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

interface StepProps {
  stepIndex: number;
  currentIndex: number;
  isActive: boolean;
  hasNext: boolean;
  icon: IconType;
}

const Step: React.FC<StepProps> = ({ currentIndex, stepIndex, isActive, icon: Icon, hasNext }) => {
  return (
    <li
      className="flex data-[hasNext=true]:w-full items-center 
      data-[active=true]:text-discord-gray-7
      text-primary 
      data-[hasNext=true]:after:content-[''] 
      data-[hasNext=true]:after:w-full 
      data-[hasNext=true]:after:h-1 
      data-[hasNext=true]:after:border-b 
       after:border-discord-gray-7
      data-[hasPast=true]:after:border-discord-green-1
      data-[hasNext=true]:after:border-4 
      data-[hasNext=true]:after:inline-block
      after:transition-colors
      after:duration-500
      after:linear     
      "
      data-active={isActive}
      data-hasPast={currentIndex > stepIndex}
      data-hasNext={hasNext}
    >
      <span
        className="flex items-center justify-center w-10 h-10 data-[active=true]:bg-discord-green-1 
        data-[hasPast=true]:bg-discord-green-1
        bg-discord-gray-7 rounded-full lg:h-12 lg:w-12 shrink-0"
        data-active={isActive}
        data-hasPast={currentIndex > stepIndex}
      >
        {currentIndex > stepIndex ? (
          <svg
            className="w-3.5 h-3.5 text-discord-gray-7 lg:w-4 lg:h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5.917 5.724 10.5 15 1.5"
            />
          </svg>
        ) : (
          <Icon size={25} />
        )}
      </span>
    </li>
  );
};

interface StepperHeaderProps {
  steps: {
    icon: IconType;
    children: React.ReactNode;
  }[];
}

const StepperHeader: React.FC<StepperHeaderProps> = ({ steps }) => {
  const { state } = useStepContext();
  const { currentStep } = state;

  return (
    <ol className="flex items-center w-full px-10 py-6 ">
      {steps.map((step, index) => (
        <Step
          key={index}
          stepIndex={index}
          currentIndex={currentStep}
          isActive={currentStep === index}
          hasNext={index < steps.length - 1}
          icon={step.icon}
        />
      ))}
    </ol>
  );
};
type StepperFooterProps = {
  steps: {
    icon: IconType;
    children: React.ReactNode;
    allowNext?: boolean;
  }[];
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const StepperFooter: React.FC<StepperFooterProps> = ({ steps, setIsLoading }) => {
  const { t } = useTranslation();
  const { state, dispatch } = useStepContext();

  const handleNextStep = () => {
    dispatch({ type: 'NEXT_STEP' });
  };

  const handlePrevStep = () => {
    dispatch({ type: 'PREV_STEP' });
  };

  const isFirstStep = useMemo(() => {
    return state.currentStep === 0;
  }, [state.currentStep]);

  const isLastStep = useMemo(() => {
    return state.currentStep === steps?.length - 1;
  }, [state.currentStep, steps]);

  const router = useRouter();

  const handleFinish = () => {
    setIsLoading(true);
    router.push('/home');
  };

  return (
    <div className="flex items-center justify-between w-full px-10 py-4">
      {!isFirstStep && (
        <Button className="font-semibold" variant="default-discord" onClick={handlePrevStep}>
          {t('button_back')}
        </Button>
      )}
      {isLastStep ? (
        <Button onClick={handleFinish} variant="confirm" className="font-semibold">
          {t('button_finish')}
        </Button>
      ) : (
        <Button
          variant="default-discord"
          className="ml-auto font-semibold"
          onClick={handleNextStep}
          disabled={!steps[state.currentStep]?.allowNext}
        >
          {t('button_next')}
        </Button>
      )}
    </div>
  );
};

interface StepperProps {
  steps: {
    icon: IconType;
    children: React.ReactNode;
  }[];
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Stepper: React.FC<StepperProps> = ({ steps, setIsLoading }) => {
  const { state } = useStepContext();
  const { currentStep } = state;

  const slideVariants = {
    'slide-enter': { transform: 'translateX(20%)' },
    'slide-enter-active': { transform: 'translateX(0%)' },
    'slide-exit': { transform: 'translateX(0%)' },
    'slide-exit-active': { transform: 'translateX(-20%)' },
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <StepperHeader steps={steps} />
      <motion.div
        key={currentStep}
        className="flex flex-col items-center justify-center w-full h-full"
        initial={'slide-enter'}
        animate={'slide-enter-active'}
        exit={'slide-exit'}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
          type: 'tween',
        }}
        variants={slideVariants}
      >
        {steps[currentStep]?.children}
      </motion.div>
      <StepperFooter setIsLoading={setIsLoading} steps={steps} />
    </div>
  );
};

export { Stepper, Step };
