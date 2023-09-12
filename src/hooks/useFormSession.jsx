import { useState } from "react";
import { useForm } from "react-hook-form";
const useFormSession = () => {
  /* order state */
  const [order, setOrder] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    selectedPlan: "",
    billingCycle: false,
    selectedAddons: [],
  });

  /* logic of the Form */
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmitForm = (e) => {
    setOrder((prev) => ({ ...prev, ...e }));
  };

  /* step controller */
  const [step, setStep] = useState(0);

  const goToStep = (number) => {
    let currentStep = step;
    setStep(number >= 1 && number <= 4 ? number : currentStep);
  };
  return {
    order,
    handleSubmit,
    register,
    errors,
    onSubmitForm,
    step,
    goToStep,
  };
};

export default useFormSession;
