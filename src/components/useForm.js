import { useCallback, useState } from 'react';

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Tiny form helper: tracks values, touched state and errors; runs `validate` on blur and submit.
 * Avoids pulling in a form library for two short forms.
 */
export default function useForm(initial, validate) {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  }, []);

  const onBlur = useCallback(
    (e) => {
      const { name } = e.target;
      setTouched((t) => ({ ...t, [name]: true }));
      setErrors(validate({ ...values }));
    },
    [validate, values],
  );

  const handleSubmit = (onValid) => async (e) => {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    setTouched(Object.fromEntries(Object.keys(values).map((k) => [k, true])));
    if (Object.keys(next).length) return;
    setSubmitting(true);
    try {
      await onValid(values);
    } finally {
      setSubmitting(false);
    }
  };

  const field = (name) => ({
    name,
    value: values[name],
    onChange,
    onBlur,
    error: Boolean(touched[name] && errors[name]),
    helperText: touched[name] ? errors[name] : ' ',
  });

  return { values, errors, submitting, field, handleSubmit };
}
