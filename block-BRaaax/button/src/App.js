//import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


function App() {
  return (
    <div className="App">
      <Stack spacing={2} direction="row">
      <Button variant="text">Button</Button>
      <Button variant="contained">contaiend-Button</Button>
      <Button variant="outlined">outlined-Button</Button>
      <Button variant="outlined" disabled>disable-Button</Button>
      <Button>Button</Button>
      <Button disabled>disabled-Button</Button>
      <Button variant="contained" size = "medium">med-Button</Button>
      <Button variant="contained" size = "medium" disabled>med-Button-disabled</Button>
      </Stack>
    </div>
  );
}

export default App;
