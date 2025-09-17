import { Flex } from "antd";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { StyledProgress } from "./styles";
import { LayoutPage } from "../../layouts/layout-page";
import { FirstStep } from "../../components/features/tasks-steps/first-step";
import { SecondStep } from "../../components/features/tasks-steps/second-step";
import { ThirdStep } from "../../components/features/tasks-steps/third-step";
import { FourthStep } from "../../components/features/tasks-steps/fourth-step";

export const TaskPage = () => {
  const { id } = useParams();
  const [step, setStep] = useState(1);
  const [steps, setSteps] = useState(5);
  const [questionsData, setQuestionsData] = useState({});

  const nextButtonClick = (stepProp: number, data?: string[]) => {
    console.log(questionsData, "LLLL");
    setStep(stepProp);
    if (data) {
      setQuestionsData(() => ({ ...questionsData, [stepProp - 1]: data }));
    }
  };

  console.log(questionsData);

  return (
    <LayoutPage>
      <Flex vertical style={{ height: "100%", width: "100%", gap: 48 }}>
        <StyledProgress
          size={10}
          type="line"
          strokeColor="#8bc4d1"
          trailColor="#edf6f8"
          showInfo={false}
          steps={steps}
          percent={(step / steps) * 100}
          percentPosition={{ align: "end", type: "outer" }}
        />
        {step === 1 && <FirstStep nextButtonClick={nextButtonClick} />}
        {step === 2 && <SecondStep nextButtonClick={nextButtonClick} />}
        {step === 3 && <ThirdStep nextButtonClick={nextButtonClick} />}
        {step === 4 && (
          <FourthStep nextButtonClick={nextButtonClick} day={Number(id)} />
        )}
        {step === 5 && <div></div>}
      </Flex>
    </LayoutPage>
  );
};
