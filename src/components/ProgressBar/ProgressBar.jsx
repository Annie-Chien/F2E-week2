import { SProgressBar, SStep, Dot } from './ProgressBar.styles';
import { useMatch } from 'react-router-dom';

/*
Notes:
Progress 有三種狀態：
- default(未完成): stepIndex > currentStep
- active (進行中): stepIndex = currentStep
- done (已完成): stepIndex < currentStep
*/

const ProgressBar = () => {
  const STEP_LIST = [
    { param: 'upload', name: '上傳檔案' },
    { param: 'edit', name: '簽署文件' },
    { param: 'finish', name: '簽署完成' },
  ];

  const param = useMatch('/*').params['*'];

  const curStepIndex = STEP_LIST.findIndex((step) => step.param === param);
  const checkStepStatus = (stepIndex) => {
    if (stepIndex === curStepIndex) {
      return 'active';
    } else if (stepIndex > curStepIndex) {
      return 'default';
    } else {
      return 'done';
    }
  };

  return (
    <SProgressBar>
      {STEP_LIST.map((step, index) => (
        <SStep key={index} status={checkStepStatus(index)}>
          <Dot status={checkStepStatus(index)} index={index} />
          <span>{step.name}</span>
        </SStep>
      ))}
    </SProgressBar>
  );
};

export default ProgressBar;
