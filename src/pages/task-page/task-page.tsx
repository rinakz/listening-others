import { Flex } from "antd";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { StyledProgress } from "./styles";
import { LayoutTaskPage } from "../../layouts/layout-page";
import {
  EighthStep,
  FifthStep,
  FirstStep,
  FourthStep,
  SecondStep,
  SeventhStep,
  SixthStep,
  ThirdStep,
} from "../../components/features/tasks-steps";

export const TaskPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [steps, setSteps] = useState(6);
  const [questionsData, setQuestionsData] = useState({});

  useEffect(() => {
    if (Number(id) < 15) {
      setSteps(6);
    } else if (Number(id) < 21) {
      setSteps(7);
    } else {
      setSteps(8);
    }
  }, [id]);

  const nextButtonClick = (stepProp: number, data?: string[]) => {
    if (steps === stepProp - 1) {
      navigate("/tasks");
    } else {
      setStep(stepProp);
      if (data) {
        setQuestionsData(() => ({ ...questionsData, [stepProp - 1]: data }));
      }
    }
  };

  return (
    <LayoutTaskPage>
      <Flex vertical style={{ height: "100%", width: "100%", gap: 24 }}>
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
        {step === 3 && (
          <ThirdStep nextButtonClick={nextButtonClick} day={Number(id)} />
        )}
        {step === 4 && (
          <FourthStep nextButtonClick={nextButtonClick} day={Number(id)} />
        )}
        {step === 5 && (
          <FifthStep nextButtonClick={nextButtonClick} day={Number(id)} />
        )}
        {step === 6 && (
          <SixthStep nextButtonClick={nextButtonClick} day={Number(id)} />
        )}
        {step === 7 && (
          <SeventhStep nextButtonClick={nextButtonClick} day={Number(id)} />
        )}
        {step === 8 && (
          <EighthStep nextButtonClick={nextButtonClick} day={Number(id)} />
        )}
      </Flex>
    </LayoutTaskPage>
  );
};
