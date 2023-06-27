import { useCallback, useState } from 'react';

function validation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    const error = e.target.validationMessage;
    const isValid = e.target.closest('form').checkValidity();
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: error });
    setIsValid(isValid);
  }

  const resetValidation = useCallback(
    (newErrors = {}, newValues = {}, newIsValid = false) => {
      setErrors(newErrors);
      setValues(newValues);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    errors,
    values,
    isValid,
    handleChange,
    resetValidation,
  };
}

export default validation;
