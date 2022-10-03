import Start from './start';
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";
import Step4 from "./step4";
import Step5 from "./step5";
import Step6 from "./step6";
import SwipeableViews from "react-swipeable-views";
import React from "react";
import {useForm} from "../../context/formContext";

const Form = ({ handleStepChange, nextStep, houses }) => {

  const { step, setStep } = useForm();

  return(
    <SwipeableViews index={step} onChangeIndex={handleStepChange}>
      <Start nextStep={nextStep} />
      <Step1 houses={houses} />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 />
      <Step6 />
    </SwipeableViews>
  )
}

export default Form