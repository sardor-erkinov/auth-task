import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useStyles } from './header.styles';
import {
  Container,
  Group,
  Text,
  Tabs,
  Menu,
  Divider,
  Center,
  Box,
  Button,
  useMantineTheme,
  Burger,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import LogoIcon from '../icons/logo.icon';
import LoginModal from './login';
import { useCollectUser } from '../../context/user/user.state';
import { CaretDownIcon, ExitIcon, TrashIcon } from '@modulz/radix-icons';
import { logout } from '../../context/user/user.action';
import LogoutModal from './logout';
import { LogoPng } from '../assets';

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);
  const [openLogout, setOpenLogout] = useState<boolean>(false);
  const { classes } = useStyles();
  const [burgerOpen, setBurgerOpen] = useState(false);
  const { isLoggedIn } = useCollectUser();
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const hashLinks = [
    {
      id: 1,
      name: 'Asosiy',
      hashtag: '#main',
    },
    {
      id: 2,
      name: 'Imtiyozlar',
      hashtag: '#privilege',
    },
    // {
    //   id: 3,
    //   name: 'Yangiliklar',
    //   hashtag: '#news',
    // },
    {
      id: 4,
      name: 'Statistikalar',
      hashtag: '#statistics',
    },
  ];
  return (
    <header className={classes.header}>
      <Container px={12} py={27} size={'xl'}>
        <Group position="apart">
          <div onClick={() => router.push('/')} style={{ cursor: 'pointer' }}>
            <p>LOGO</p>
          </div>

          <Group spacing={40}>
            {isLoggedIn ? (
              <Menu withArrow transition={'scale-y'} shadow="md">
                <Menu.Target>
                  <Center>
                    <Text weight={500} color={'blue'} size="xs">
                      Mening profilim
                    </Text>
                    <CaretDownIcon color="blue" width={28} height={28} />
                  </Center>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Label>Tizimdan chiqish</Menu.Label>
                  <Menu.Item
                    onClick={() => setOpenLogout(true)}
                    color="red"
                    icon={<ExitIcon height={24} width={24} />}
                  >
                    Chiqish
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            ) : (
              <Button
                size="xl"
                sx={{ color: 'black', fontSize: '20px' }}
                onClick={() => setOpen(true)}
                color={'yellow'}
              >
                Kirish
              </Button>
            )}
          </Group>
        </Group>
      </Container>
      <LoginModal setOpen={setOpen} open={open} />
      <LogoutModal setOpen={setOpenLogout} open={openLogout} />
    </header>
  );
};

export default Header;
