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

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const data = { email: email, password: password };
  const router = useRouter();


  const checkRole = async () => {
    const response = await fetch('http://10.10.62.94:8888/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const json = await response.json();
    localStorage.setItem('token', json.access_token);
    const token = localStorage.getItem('token');
    if (token != undefined) {
      const decode = jwt(json.access_token);
      if (decode.role_id === 2) {
        router.push('/dashboardadmin');
      }
      else {
        alert('Vous n\'êtes pas admin')
      }
    }
  };




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
              onChange={e => setEmail(e.target.value)}
            />

            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              onChange={e => setPassword(e.target.value)}
            />
            <Button onClick={handleSubmit} variant="contained">Se connecter</Button>

          </Stack>
        </Box>
      </main>
    </>
  )
}
