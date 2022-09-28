import styled from 'styled-components'

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
  padding: 0 1.25rem 1.25rem;
  width: 16rem;
  height: 19.375rem;
  background-color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 36px 6px 36px;

  img {
    margin: -1.25rem auto 0.75rem;
  }
`
export const ProductTagsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin: 1rem 0 1.25rem;
  flex-wrap: wrap;
`

export const ProductTag = styled.span`
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  font-size: ${({ theme }) => theme.textSizes['components-tag']};
  font-weight: 700;
  text-transform: uppercase;

  color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  background-color: ${({ theme }) => theme.colors['brand-yellow-light']};
`

export const ProductName = styled.h2`
  margin-bottom: 0.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors['base-subtitle']};
  font-size: ${({ theme }) => theme.textSizes['title-s']};
`
export const ProductDescription = styled.p`
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors['base-label']};
  font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
`
export const ProductFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ProductPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`

export const AddToCartWrapper = styled.div`
  width: 7.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const AddToCartButton = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors['brand-purple-dark']};
  color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px;
  margin-left: 0.3rem;

  transition: background-color 200ms ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors['brand-purple']};
  }
`
