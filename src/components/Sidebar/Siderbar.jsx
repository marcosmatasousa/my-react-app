import styles from './styles' 
import { Avatar, Box, Button, Typography } from '@mui/material';

import { createTheme, ThemeProvider } from '@mui/material/styles';


import profilePic from '../../assets/my-avatar/profile.jpg';

/*const theme = createTheme({
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    fontWeightBold: 700, // Define o peso para negrito
    h1: {
      fontWeight: 700, // Negrito para títulos grandes
    },
    body1: {
      fontWeight: 700, // Negrito para texto do corpo
    },
  },
});*/

export default function Sidebar() {
  return (
    <Box sx={styles.container}>
     <Avatar
     alt="my-avatar"
     src={profilePic}
     sx={styles.avatar} />
     <Typography sx={[styles.typography, styles.typographyName]} variant='h5'>Marcos</Typography>
     <Typography sx={styles.typography} variant='subtitle'>teste</Typography>
     <Box sx={styles.buttonsContainer}>
      <Button sx={styles.button}>TEST</Button>
      <Button sx={styles.button}>TEST</Button>
      <Button sx={styles.button}>TEST</Button>
      <Button sx={styles.button}>TEST</Button>
     </Box>

    </Box>
  );
}

/*<img src={profilePic} alt="avatar-me" className={styles.avatarImg} />
<Box className={styles.header}>
  <h1>Marcos</h1>
  <h2>Text</h2>
</Box>
<Box className={styles.buttonsBox} gap='15px'>
  <Button className={styles.button}>Teste</Button>
  <Button className={styles.button}>Teste</Button>
  <Button className={styles.button}>Teste</Button>
  <button className={styles.button}>teste</button>
</Box>*/