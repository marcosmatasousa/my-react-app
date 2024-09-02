import { Box } from '@mui/material';

import Sidebar from '../Sidebar/Siderbar';
import Display from '../Display/Display';

import styles from './styles';


function App() {
  return (
    <>
    <Box sx={styles.body}>     
      <Sidebar />
      <Display />
    </Box>
    </>    
  )
}

export default App;
