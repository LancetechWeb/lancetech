import React, { useEffect, useRef } from "react";
import useStepContext from "../hooks/useStepContext";

export const Step = ({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}) => {
  const { registerStep, setActiveStep } = useStepContext();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerStep(id, ref);
  }, [id, registerStep]);

  return (
    <div ref={ref} onClick={()=>setActiveStep(id)}>
      {children}
    </div>
  );
};
