import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/system';
import { Button } from '@mui/material';
import { useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email, password)
    // Your code here to handle the form submission
  }
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
            <Button onClick={handleSubmit} variant="contained">S'enregistrer</Button>

          </Stack>
        </Box>
      </main>
    </>
  )
}
