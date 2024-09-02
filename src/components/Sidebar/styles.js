const styles = {
  container: {
    width: '40vh',
    height: '100vh',
    backgroundColor: 'rgb(43,49,55)',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    borderRadius: '50px',
},
  avatar: {
    width: 250,
    height: 250,
    margin: '30px',
    '&:hover': {
        width: 255,
        height: 255
    }
},
  typography: {
    fontFamily: 'Inter, sans-serif',
    color: 'rgb(205, 217, 229)',
  },
  typographyName: {
    fontWeight: 'bold',
    marginBottom: '5px'
  },
  buttonsContainer: {
    margin: '30px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  button: {
    width: '250px',
    marginBottom: '5px',
    fontFamily: 'Inter, sans-serif',
    color: 'rgb(205, 217, 229)',
    backgroundColor: 'rgb(36,41,45)',
    borderRadius: '20px'
  }
}

export default styles;