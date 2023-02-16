import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/system';
import { Button } from '@mui/material';
import { useState } from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import jwt from 'jwt-decode';
import NFL from '../../public/NFL-Logo-650x366.png'
import NBA from '../../public/nba.png'
import NHL from '../../public/Logo_LNH.svg.png'
import Logo from '../../public/logo-white.png'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const data = { email: email, password: password };
  const router = useRouter();


  const checkRole = async () => {
    const response = await fetch('http://10.10.22.253:8888/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    console.log(json)
    if (!json.message) {
      localStorage.setItem('token', json.access_token);
      const token = localStorage.getItem('token');
      const decode = jwt(json.access_token);
      if (token != undefined) {
        if (decode.role_id === 2) {
          router.push('/dashboardadmin');
        }
        else {
          alert('Vous n\'êtes pas admin')
        }
      }
    } else {
      alert(json.message)
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (!email || !password) {
        alert('Veuillez remplir tout les champs')
      } else {
        checkRole();
      }
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Veuillez remplir tout les champs')
    } else {
      checkRole();
    }
  };



  return (
    <>
      <Head>
        <title>Admin panel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Box
          component="form"
          sx={{

            '& .MuiTextField-root': { m: 3, width: '50ch' },
          }}
          autoComplete="off"
        >
          <Stack
            className={styles.icon}
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={0.5}
            position="relative">
            <Image src={NBA}></Image>
            <Image src={NFL}></Image>
            <Image src={NHL}></Image>

          </Stack>
          <Stack
            className={styles.logo}
            direction="row"
            justifyContent="center"
            alignItems="center"
            position="relative">
            <Image className={styles.logo} src={Logo}></Image>
          </Stack>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={0.5}
          >
            <TextField
              required
              id="standard-required"
              label="Email"
              variant="standard"
              onKeyDown={handleKeyDown}
              onChange={e => setEmail(e.target.value)}
            />

            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              onKeyDown={handleKeyDown}
              onChange={e => setPassword(e.target.value)}
            />
            <Button onClick={handleSubmit} variant="contained">Se connecter</Button>

          </Stack>
        </Box>
      </main>
    </>
  )

}

