/**
 * Staff Pages
 */
import * as React from 'react'
import { MICard } from './components/Card'
import { Grid } from '@mui/material'

export default function Staff() {

    return (
        <Grid
            container
            spacing={4}
            sx={{
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
                    sx={{ minWidth: 250 }}
                >
                    <h3>Owner</h3>
                    <ul>
                        <li>Sinless777#0420</li>
                    </ul>
                    <h3>Co-Owner</h3>
                    <ul>
                        <li>Setsu#5404</li>
                    </ul>
                </MICard>
            </Grid>
            <Grid item>
                <MICard
                    title={<h1>Lead Staff</h1>}
                    sx={{ minWidth: 250 }}
                >
                 <p>

                 </p>
                </MICard>
            </Grid>
            <Grid item>
                <MICard
                    title={<h1>Developers</h1>}
                    sx={{ minWidth: 250 }}
                >
                    <ul>
                        <li>Sinless777#0420</li>
                        <li>Dope#7062</li>
                        <li>RAFA#8662</li>
                    </ul>
                </MICard>
            </Grid>
            <Grid item>
                <MICard
                    title={<h1>Admins</h1>}
                    sx={{ minWidth: 250 }}
                >
                    <ul>
                        <li>Løst#9426</li>
                    </ul>
                </MICard>
            </Grid>
            <Grid item>
                <MICard
                    title={<h1>Moderators</h1>}
                    sx={{ minWidth: 250 }}
                >
                    <p>

                    </p>
                </MICard>
            </Grid>
            <Grid item>
                <MICard
                    title={<h1>Junior Staff</h1>}
                    sx={{ minWidth: 250 }}
                >
                    <h3>Developers</h3>
                    <ul>
                        <li>Løst#9426</li>
                    </ul>
                    <h3>Admins</h3>

                    <h3>Moderators</h3>
                    <ul>
                        <li>darionuno#0723</li>
                    </ul>
                </MICard>
            </Grid>
        </Grid>
    )
}