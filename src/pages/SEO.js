import styled from 'styled-components';

const Header = styled.h2`
  font-weight: 900;
  font-size: 3rem;
  color: #6f6f6f;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
const SubHeader = styled.h4`
  color: #90d1db;
  font-size: 2rem;
  margin-bottom: 2rem;
`;
const Content = styled.section`
  color: #a5a6a6;
`;
const SEO = () => {
  return (
    <>
      <Header>Search Engine Optimization (SEO)</Header>
      <SubHeader>
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
        consectetur, adipisci velit.
      </SubHeader>
      <Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ut magna
          purus. Etiam euismod purus risus, ac lacinia nisl volutpat nec. Proin
          pharetra tellus non sem bibendum, nec suscipit neque malesuada.
          Vivamus sodales turpis ac est lobortis, vitae iaculis est iaculis.
          Curabitur dictum tincidunt neque at laoreet. Vivamus nibh metus,
          pharetra vitae mauris ac, volutpat tincidunt magna. Vivamus vitae
          velit a odio ultrices facilisis. Curabitur lobortis venenatis dolor,
          quis bibendum tortor. Ut posuere eleifend nunc a congue.{' '}
        </p>
        <p>
          Morbi at metus sed quam lobortis porta. Etiam ornare nibh varius
          tincidunt tincidunt. Sed vel ullamcorper nulla. Nullam suscipit felis
          nec augue aliquet, in vestibulum eros sagittis. Nam consequat risus
          sed eros luctus, in fermentum odio finibus. Donec tortor nulla,
          ullamcorper ac ligula cursus, vehicula fringilla mauris.
        </p>
        <p>
          Cras sagittis orci egestas, blandit ligula non, dignissim diam.
          Curabitur congue feugiat ligula et faucibus. Vestibulum quam nulla,
          pretium vel fermentum sit amet, sagittis eget turpis. Suspendisse id
          iaculis est, volutpat pulvinar urna. Pellentesque pharetra non massa
          ut suscipit. Aliquam ut imperdiet sem. Integer iaculis dui non varius
          consectetur. Aliquam sit amet arcu enim. Morbi tincidunt auctor
          tellus, vitae posuere eros condimentum at. Mauris a nulla dolor. Nunc
          volutpat dolor non odio dignissim vehicula. Vestibulum a sagittis
          velit. Vestibulum mollis lobortis aliquet.{' '}
        </p>
      </Content>
    </>
  );
};

export default SEO;
