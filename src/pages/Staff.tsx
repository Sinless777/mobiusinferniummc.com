/**
 * Staff Pages
 */
import * as React from 'react'
import { MICard } from './components/Card'
import { Grid } from '@mui/material'
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Staff() {

    return (
        <Grid container spacing={4} sx={{
                flexGrow: 1,
                paddingBottom: 15,
                margin: 0,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Grid item>
                <MICard
                    title={<h1>Owners</h1>}
                    sx={{height: 600}}
                >
                    <Typography sx={{
                        fontSize: 20
                    }}>
                        A Minecraft server owner or co-owner is responsible for managing the server, establishing rules, maintaining
                        gameplay, resolving conflicts, and ensuring smooth performance, making them pivotal in creating an enjoyable
                        gaming community.
                    </Typography>
                    <br/>
                    <Box>
                        <Typography component='h3' sx={{padding: 2, fontSize: 30}}>Owner</Typography>
                        <Typography>Sinless777</Typography>

                        <Typography component='h3' sx={{fontSize: 30, padding: 2}}>Co-Owner</Typography>
                        <Typography>Setsu</Typography>
                    </Box>
                </MICard>
            </Grid>
            <Grid item>
                <MICard title={<h1>Lead Staff</h1>}
                        sx={{height: 600}}
                >
                    <Typography sx={{
                        fontSize: 20,
                    }}>
                        The Lead Staff of a Minecraft server provides leadership and coordination for the server&apos;s administrative
                        team. They oversee staff, enforce rules, and maintain a fair gaming environment while also making important
                        decisions about server management and player issues.
                    </Typography>
                    <br/>
                    <Box>
                        <Typography component='h3' sx={{fontSize: 30}}>Admin</Typography>
                        <Typography>Admin: </Typography>

                        <Typography component='h3' sx={{fontSize: 30}}>Developer</Typography>
                        <Typography>Sinless777</Typography>

                        <Typography component='h3' sx={{fontSize: 30}}>Moderator</Typography>
                        <Typography></Typography>
                    </Box>
                </MICard>
            </Grid>
            <Grid item>
                <MICard
                    title={<h1>Developers</h1>}
                    sx={{height: 600}}
                >
                    <Typography sx={{fontSize: 20,}}>
                        Minecraft server developers create and maintain custom plugins, features, and optimizations to enhance
                        gameplay. They collaborate closely with server administrators to shape the server&apos;s unique experience
                        and ensure its smooth operation.
                    </Typography>
                    <br/>
                    <Box>
                        <Typography>Sinless777</Typography>
                    </Box>
                </MICard>
            </Grid>
            <Grid item>
                <MICard
                    title={<h1>Admins</h1>}
                    sx={{height: 600}}
                >
                    <Typography sx={{fontSize: 20,}}>
                        Minecraft server admins enforce rules, resolve disputes, and monitor player behavior to maintain a positive
                        gaming environment. They collaborate on server decisions and contribute to its overall success.
                    </Typography>
                    <br/>
                    <Box>
                        <Typography></Typography>
                    </Box>
                </MICard>
            </Grid>
            <Grid item>
                <MICard
                    title={<h1>Moderators</h1>}
                    sx={{height: 600}}
                >
                    <Typography sx={{fontSize: 20,}}>
                        Minecraft server moderators enforce rules, maintain a positive atmosphere, and assist players. They monitor
                        player behavior, address rule violations, and promote a friendly community environment.
                    </Typography>
                    <br/>
                    <Box>
                        <Typography></Typography>
                    </Box>
                </MICard>
            </Grid>
        </Grid>
    )
}