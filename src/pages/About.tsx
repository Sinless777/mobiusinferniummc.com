import { Grid, Box } from '@mui/material'
import { MICard } from './components/Card'
import { Logo } from './components/Logo'
import { useMediaQuery } from '@mui/material';
import Typography from "@mui/material/Typography";

export default function About() {
    const isSmallScreen = useMediaQuery('(max-width:800px)');
    const isMediumScreen = useMediaQuery('(max-width:1000px)');
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
            <Grid container spacing={4} sx={{
                    justifyContent: 'center',
                    alignItems: 'center'
            }}>
                <Grid item>
                    {(isSmallScreen || isMediumScreen) && <Logo width={550} height={550} />}
                </Grid>
                <Grid item>
                    <MICard title="What is Mobius Infernium?" sx={{ height: 525 }}>
                        <Typography  sx={{ fontSize: 20}}>
                            Mobius Infernium is an MMORPG (Massively Multiplayer Online Role-Playing Game) Minecraft server running on
                            the 1.18.2 version of the game. It offers a unique and immersive gaming experience by incorporating various
                            mods and custom features into the Minecraft universe. Players can delve into a rich and expansive world,
                            complete quests, engage in epic battles, and customize their gameplay through the server&apos;s modded
                            content. Mobius Infernium strives to provide a captivating and dynamic environment, where adventurers can
                            collaborate, explore, and embark on exciting quests, all within the enchanting backdrop of Minecraft&apos;s
                            blocky universe.
                        </Typography>
                    </MICard>
                </Grid>
                <Grid item>
                    {!(isSmallScreen || isMediumScreen) && <Logo width={550} height={550} />}
                </Grid>
                <Grid item>
                    <MICard title="What does Mobius Infernium Offer?"  sx={{ height: 525 }}>
                        <Typography  sx={{ fontSize: 20 }}>
                            Mobius Infernium offers an immersive MMORPG (Massively Multiplayer Online Role-Playing Game) experience
                            within the Minecraft universe. It provides players with a vast and dynamic virtual world enriched by over
                            300+ mods and 20+ plugins. Within this environment, players can embark on epic quests, engage in battles,
                            and explore a richly detailed and customized Minecraft landscape. Mobius Infernium is designed to deliver
                            a unique and captivating gameplay experience, fostering community interaction and providing a platform for
                            collaborative adventures and creative exploration.
                        </Typography>
                    </MICard>
                </Grid>
                {/** DIVIDER **/}
                <Grid item>
                    <MICard title="Quests?"  sx={{ height: 525 }}>
                        <Typography  sx={{ fontSize: 20 }}>
                            In Mobius Infernium, quests are a central gameplay element that adds depth and excitement to the MMORPG
                            experience. Players can undertake a wide variety of quests, each with its own objectives, challenges,
                            and rewards. These quests often involve tasks such as defeating powerful monsters, exploring hidden
                            dungeons, collecting rare items, or helping NPCs (Non-Player Characters) with their unique requests.
                            Completing quests not only advances the player&apos;s character but also contributes to the overall
                            narrative and progression of the game, making them a fundamental aspect of the adventure within Mobius
                            Infernium.
                        </Typography>
                    </MICard>
                </Grid>
                <Grid item>
                    <MICard title="Custom Mobs with Mythic Mobs and Mods!"  sx={{ height: 525 }}>
                        <Typography  sx={{ fontSize: 20 }}>
                            Mobius Infernium MC takes your Minecraft experience to the next level by introducing custom mobs through
                            Mythic Mobs and various mods. These custom mobs bring a whole new dimension of challenges and excitement
                            to the game. With Mythic Mobs and other modded content, you&apos;ll encounter a diverse range of creatures,
                            each with its own abilities, behaviors, and loot drops. Whether you&apos;re facing off against formidable
                            bosses, uncovering hidden dungeons guarded by unique mobs, or encountering entirely new creatures not
                            found in vanilla Minecraft, custom mobs enhance the sense of adventure and discovery within Mobius
                            Infernium MC.
                        </Typography>
                    </MICard>
                </Grid>
                <Grid item>
                    <MICard title="Factions and Guilds!"  sx={{ height: 525 }}>
                        <Typography  sx={{ fontSize: 20 }}>
                            Mobius Infernium MC introduces a dynamic social aspect to the game with the inclusion of factions and
                            guilds. Players can band together, forming factions or guilds, to collaborate, compete, and achieve common
                            goals within the MMORPG world. Factions often involve political alliances and territory control, where
                            groups vie for dominance over in-game regions. Guilds, on the other hand, are typically focused on specific
                            activities, such as crafting, adventuring, or trading, and provide a platform for like-minded players to
                            work together. These social structures foster camaraderie, strategy, and a sense of community, enriching
                            the player experience and adding depth to the gameplay within Mobius Infernium MC.
                        </Typography>
                    </MICard>
                </Grid>
                {/** DIVIDER **/}
                <Grid item>
                    <MICard title="Magic And Tech!"  sx={{ height: 525 }}>
                        <Typography  sx={{ fontSize: 20 }}>
                            Mobius Infernium MC seamlessly blends the realms of magic and technology, offering players a diverse range
                            of gameplay options. With an array of magic-focused mods like Ars Nouveau and technology-oriented mods like
                            Applied Energistics 2, players can choose their preferred path, whether it&apos;s mastering arcane spells,
                            harnessing advanced machinery, or even combining both for a unique hybrid playstyle. This fusion of magic
                            and tech creates a dynamic and immersive gaming experience, allowing players to explore the endless
                            possibilities of the Minecraft universe within the server.
                        </Typography>
                    </MICard>
                </Grid>
                <Grid item>
                    <MICard title="MMORPG in Minecraft?"  sx={{ height: 525 }}>
                        <Typography  sx={{ fontSize: 20 }}>
                            Indeed, an MMORPG (Massively Multiplayer Online Role-Playing Game) in Minecraft is a remarkable fusion of
                            two gaming genres. Servers like Mobius Infernium MC achieve this by incorporating a wide array of mods,
                            plugins, and custom content that transform the traditional sandbox world of Minecraft into a dynamic and
                            immersive RPG experience. Players can embark on quests, explore diverse landscapes, engage in epic battles,
                            and collaborate with others in a persistent, ever-evolving virtual world. The MMORPG aspect adds depth,
                            storylines, character progression, and social interaction to the Minecraft gameplay, creating a unique
                            and captivating gaming experience for enthusiasts of both genres.
                        </Typography>
                    </MICard>
                </Grid>
                <Grid item>
                    <MICard title="Future Plans?"  sx={{ height: 525 }}>
                        <Typography  sx={{ fontSize: 20 }}>
                            In the future, we plan to expand Mobius Infernium MC by adding new dimensions, quests, custom mobs, and
                            exciting gameplay features. We&apos;re committed to enhancing cross-server interactions, fostering a vibrant
                            community, and staying at the forefront of Minecraft modding. Our goal is to continue providing players with
                            a dynamic and thrilling MMORPG experience, defined by innovation and passion. In addition, we will introduce
                            regular community-driven events and competitions to ensure that Mobius Infernium MC remains a dynamic and
                            engaging platform for players to explore and enjoy.
                        </Typography>
                    </MICard>
                </Grid>
            </Grid>
        </Box>
    )
}