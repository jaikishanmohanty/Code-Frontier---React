import { AppBar, Toolbar, styled } from '@mui/material';

const Container = styled(AppBar)`
    background: #060606;
    height: 9vh;
    font-weight: bold;
`
const Header = () => {
  return (
    <Container position="static">
        <Toolbar>
            Code Frontier
        </Toolbar>
    </Container>
  )
}

export default Header