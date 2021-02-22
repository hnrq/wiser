import { useState, useCallback, useEffect } from 'react';
import TextField from 'components/TextField';
import PasswordField from 'components/PasswordField';
import { authRequest } from 'actions/authActions';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { Button } from 'components/Button';
import { emailRegex } from 'utils/regex';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5
    }
  }
};

const item = {
  hidden: { opacity: 0, y: '100%' },
  show: {
    opacity: 1,
    y: '0',
    transition: {
      duration: 1,
      type: 'spring'
    }
  }
};

const LoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [password, setPassword] = useState<string>('');
  const { loading } = useSelector((state: RootState) => state.authReducer);

  useEffect(() => {
    if (emailRegex.test(email) && password.length > 0) setIsFormValid(true);
    else setIsFormValid(false);
  }, [email, password]);

  const dispatch = useDispatch();
  const login = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(authRequest(email, password));
    },
    [email, password]
  );

  return (
    <motion.form
      variants={container}
      animate="show"
      initial="hidden"
      onSubmit={login}
    >
      <motion.div variants={item}>
        <TextField
          placeholder="user.name@email.com"
          label="E-mail"
          validate={{
            validateMessage: 'Digite um e-mail válido.',
            validateFn: (value: string) => emailRegex.test(value)
          }}
          onChange={setEmail}
        />
      </motion.div>
      <motion.div variants={item}>
        <PasswordField
          label="Senha"
          onChange={setPassword}
          placeholder="******"
        />
      </motion.div>
      <motion.div variants={item}>
        <Button fullWidth disabled={loading || !isFormValid} type="submit">
          {loading ? 'Carregando...' : 'Entrar'}
        </Button>
      </motion.div>
    </motion.form>
  );
};

export default LoginForm;
