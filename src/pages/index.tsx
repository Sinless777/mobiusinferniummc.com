import React from 'react'
import { MICard } from './components/Card'
import Grid from '@mui/material/Grid'
import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'


export default function Home() {
  return (
      <Box
          sx={{
            paddingBottom: 15,
            paddingLeft: 2,
            paddingRight: 2,
            paddingTop: 5,
            justifyContent: 'center',
            alignItems: 'center'
          }}
      >
        <Grid
            container
            spacing={5}
            justifyContent="center"
            alignItems="center"
        >
          <Grid item>
            <Image
                src={
                  '/images/server-icon.png'
                }
                alt="logo"
                width={500}
                height={500}
            />
          </Grid>
          <Grid item>
            <MICard
                title="Under Development"
                sx={{ maxWidth: 350 }}
            >
              <p>
                The website is currently under
                development. Please join our
                discord server for more
                information and to keep up to
                date with the latest news.
              </p>
              <Button
                  href="https://discord.gg/pHhYPKFV5K"
                  sx={{
                    color: 'rgb(219, 215, 214)',
                    backgroundColor:
                        'rgba(30, 28, 26, 0.7)',
                    border: '.5px solid rgba(189, 155, 217, 0.7)',
                    borderRadius: '50px',
                    padding: '10px'
                  }}
              >
                𝔐𝔬𝔟𝔦𝔲𝔰 ℑ𝔫𝔣𝔢𝔯𝔫𝔦𝔲𝔪 | 𝑴𝑪 Discord
              </Button>
            </MICard>
          </Grid>
        </Grid>
      </Box>
  )
}
