import { Alert, Box, Notification, Stack, Tabs, Text } from '@mantine/core';
import { Dispatch, FormEvent, SetStateAction } from 'react';
import DatePicker from '../../date-picker';
import Modal from '../../modal';
import StyledTabs from '../../tabs';
import TextInput from '../../text-input';
import { CalendarIcon } from '@modulz/radix-icons';
import NumberInput from '../../number-input';
import { useStyles } from './login.styles';
import Button from '../../button';
import PasswordInput from '../../password-input';
import { useCollectUser } from '../../../context/user/user.state';
import { loginAction } from '../../../context/user/user.action';
import { showNotification } from '@mantine/notifications';

interface LoginModalProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  open: boolean;
}
const LoginModal = ({ setOpen, open }: LoginModalProps) => {
  const { dispatch } = useCollectUser();
  const { classes } = useStyles();
  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    // @ts-expect-error
    if (e.target.tel.value.length && e.target.parol.value.length && e.target.parol.value === "Oybek") {
      showNotification({
        title: `Ro'yxatdan o'tish`,
        message: "Siz ro'yxatdan muvaffaqiyatli o'tdingiz. ✋",
      });
      dispatch(loginAction('token123'));
      setOpen(false);
    } else {
      showNotification({
        color: 'red',
        title: `Ro'yxatdan o'tish`,
        message: "Login yoki parol noto'g'ri",
      });
    }

  };
  const handleVerification = (e: FormEvent) => {
    e.preventDefault();
    // dispatch(loginAction(''));
  };

  return (
    <Modal title="Kirish yoki ro'yxatdan o'tish" onClose={() => setOpen(false)} opened={open}>
      <StyledTabs defaultValue="Tizimga kirish">
        <Tabs.List grow>
          <Tabs.Tab value="Tizimga kirish">Tizimga kirish</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="Tizimga kirish">
          <form onSubmit={handleLogin}>
            <Stack spacing={25}>
              <TextInput
                required
                name="tel"
                placeholder="Login"
                label="Login"
              />
              <PasswordInput
                name="parol"
                minLength={5}
                placeholder="Password"
                label="Password"
                required
              />
              <Text sx={{ cursor: 'pointer' }} align="right" size="xs" color="gray">
                Parolni unutdingizmi?
              </Text>
              <Button type="submit" className={classes.signUpBtn}>
                Kirish
              </Button>
            </Stack>
          </form>
        </Tabs.Panel>
      </StyledTabs>
    </Modal>
  );
};

export default LoginModal;
