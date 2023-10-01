import React from "react";
import Logo from "@/pages/components/Logo";
import Typography from "@mui/material/Typography";


export default function Store() {

  return (
    <div>
      <Typography component='h1' sx={{
        fontSize: 60
      }}>
        Store
      </Typography>
      <Logo width={600} height={600} />
      <Typography component='h1' sx={{
        fontSize: 40,
        fontWeight: 'bolder',
        textShadow: '5px 5px 5px rgba(189, 155, 217, 0.9)'
      }}>
        Coming soon ...
      </Typography>

    </div>
  )
}