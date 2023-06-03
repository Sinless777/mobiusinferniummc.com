import React from 'react'
import { Grid, Box } from '@mui/material'
import { MICard } from './components/Card'
import { Logo } from './components/Logo'
import { MIButton } from './components/Button'

export default function About() {
    return(
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
                spacing={2}
                sx={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Grid
                    container
                    item
                    spacing={2}
                    sx={{
                        paddingLeft: 2,
                        paddingRight: 2,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Grid item>
                        <MICard
                            title="What is Mobius Infernium?"
                            sx={{ maxWidth: 250 }}
                        >
                            <p>
                                Mobius Infernium is a Latin
                                phrase that translates to
                                &quot;Worse than Hell&quot;
                                in English. We chose this
                                name as a representation of
                                the desired difficulty of
                                the gameplay.
                            </p>
                        </MICard>
                    </Grid>
                    <Grid item>
                        <MICard
                            title="What is 𝔐𝔬𝔟𝔦𝔲𝔰 ℑ𝔫𝔣𝔢𝔯𝔫𝔦𝔲𝔪 | 𝑴𝑪?"
                            sx={{ maxWidth: 250 }}
                        >
                            <p>
                                Mobius Infernium | MC is a
                                Minecraft server network
                                that is starting with their
                                first server. We hope and
                                plan to build a community of
                                like minded gamers that
                                enjoy playing Minecraft.
                            </p>
                        </MICard>
                    </Grid>
                    <Grid item>
                        <Logo width={350} height={350} />
                    </Grid>
                    <Grid item>
                        <MICard
                            title="What is our Flagship Server?"
                            sx={{ maxWidth: 250 }}
                        >
                            <p>
                                Our flagship server is a
                                modded 1.18.2 server running
                                our very own custom
                                Mod-pack. It is a
                                Factions/MMORPG server with
                                many more aspects like an
                                economy and empire building.
                            </p>
                        </MICard>
                    </Grid>
                    <Grid item>
                        <MICard
                            title="The Modpack"
                            sx={{ maxWidth: 250 }}
                        >
                            <p>
                                The Modpack is a custom
                                modpack that is built around
                                the idea of a Factions
                                MMORPG server. It is built
                                to be a hard modpack with a
                                lot of grind and a lot of
                                fun.
                            </p>
                            <MIButton href="https://www.curseforge.com/minecraft/modpacks/mobius-infernium">
                                Download
                            </MIButton>
                        </MICard>
                    </Grid>
                    <Grid item>
                        <MICard
                            title="Who owns Mobius Infernium MC?"
                            sx={{ maxWidth: 250 }}
                        >
                            <p>
                                Mobius Infernium is owned
                                and operated by SinLess
                                Games LLC, a small Game
                                design Studio in Montana,
                                Usa.
                            </p>
                            <MIButton href="https://sinlessgamesllc.com">
                                Visit SinLess Games
                            </MIButton>
                        </MICard>
                    </Grid>
                    <Grid item>
                        <MICard
                            title="What is the IP of the Server?"
                            sx={{ maxWidth: 250 }}
                        >
                            <p>
                                The IP of the server is
                                built into the mod-pack from
                                Curseforge
                            </p>
                        </MICard>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}