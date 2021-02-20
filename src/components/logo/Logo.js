import Picture from '../../images/logo.png';
import styled from 'styled-components';

const Image = styled.img`
  height: 5rem;
  @media (max-width: 768px) {
    height: 3rem;
  }
`;
const Logo = () => (
  <>
    <Image src={Picture} alt="" />
  </>
);

export { Logo };
