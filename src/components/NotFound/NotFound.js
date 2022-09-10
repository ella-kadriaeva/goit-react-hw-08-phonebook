import SentimentDissatisfiedRoundedIcon from '@mui/icons-material/SentimentDissatisfiedRounded';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
export default function NotFound() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          height: '50vh',
          minWidth: 275,
          textAlign: 'center',
          marginTop: '25vh',
        }}
      >
        <SentimentDissatisfiedRoundedIcon />
        <Typography variant="h5" minWidth="275" component="div">
          There is nothing here!
        </Typography>
      </Box>
    </Container>
  );
}
