import React from 'react'
import { MICard } from './components/Card'
import Grid from '@mui/material/Grid'
import { Button } from '@mui/material'
import Box from '@mui/material/Box'
import Image from 'next/image'
import styles from '@/styles/Home.module.scss'
import Typography from "@mui/material/Typography";


export default function Home() {
  return (
      <Box sx={{
          paddingBottom: 15,
          paddingLeft: 2,
          paddingRight: 2,
          paddingTop: 5,
          justifyContent: 'center',
          alignItems: 'center'
      }}>
        <Grid container spacing={5} justifyContent="center" alignItems="center">
          <Grid item>
            <Image src={'/images/server-icon.png'} alt="logo" width={600} height={600}/>
          </Grid>
          <Grid item>
            <MICard title="Welcome To Mobius Infernium MC!">
              <Typography sx={{ fontSize: 20 }}>
                  Welcome to Mobius Infernium MC, your gateway to an extraordinary Minecraft adventure. Immerse yourself in a
                  world where over 300+ mods and 20+ plugins come together to create an MMORPG experience like no other. Whether
                  you&apos;re a master of magic, a tech enthusiast, or a seasoned explorer, our server offers a diverse range of
                  gameplay styles to suit your preferences. Embark on epic quests, face off against custom mobs, and join factions
                  or guilds to forge alliances and rivalries. With paid McMMO, Mythic Mobs, and various RPG-related plugins and
                  mods, your journey promises endless opportunities for growth and excitement. Explore our asynchronous world where
                  seamless cross-server interactions redefine the boundaries of multiplayer gaming. Join our vibrant community and
                  become a part of the Mobius Infernium MC legacy today!
              </Typography>
              <br/>
              <Button href="https://discord.gg/pHhYPKFV5K" sx={{
                  color: 'rgb(219, 215, 214)', backgroundColor: 'rgba(30, 28, 26, 0.7)',
                  border: '.5px solid rgba(189, 155, 217, 0.7)', borderRadius: '50px',
                  padding: '10px',
                  fontSize: 20,
              }}>
                𝔐𝔬𝔟𝔦𝔲𝔰 ℑ𝔫𝔣𝔢𝔯𝔫𝔦𝔲𝔪 | 𝑴𝑪 Discord
              </Button>
              <br/>
              <br/>
            </MICard>
          </Grid>
        </Grid>
      </Box>
  )
}
