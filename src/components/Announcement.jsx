import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 500px;
`

const Announcement = () => {
  return (
    <Container>Free Shipping on orders above 500rs</Container>
  )
}

export default Announcement