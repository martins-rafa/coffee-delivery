import styled from 'styled-components'

export const ProductsContainer = styled.section`
  width: 100%;
  margin-top: 2rem;
`
export const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(256px, 1fr));
  row-gap: 2.5rem;
  column-gap: 2rem;
  place-items: center;
  margin-top: 3rem;
`
