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
const WebDevelopment = () => {
  return (
    <>
      <Header>Web Development</Header>
      <SubHeader>
        A strong online presence is an effective medium of displaying your
        product and services among your target audience.
      </SubHeader>
      <Content>
        <p>
          Jast Tech Ltd Ltd delivers creative and professional web design,
          development and maintenance services to individuals, small businesses
          as well as large organizations in Uganda and outside. Whether you need
          a basic 5 page website, an e-commerce solution or a database driven
          dynamic web application, we have the required expertise & experience
          to deliver.
        </p>
        <p>
          We understand that, today websites have become one of the most
          important marketing & sales tool and that’s why we take care of all
          aspects of web design for our clients including graphics, programming,
          photography, and flash animations. Be sure that we will take care of
          everything related to your website services including website design,
          re-design or upgrade through our professional website maintenance and
          active management service using the latest Content management systems
          based on the latest technologies and industry trends.
        </p>
        <p>
          We design database driven and/or interactive websites depending on the
          client requirement and not just how it looks but how it works and
          after web design training giving you the power to manage and update
          your website regularly. Our Approach We always aim to develop a
          website basing on the client’s requirement, one that satisfies their
          needs. To achieve such professional work, we follow these steps to
          ensure you have a precise end-product
        </p>
        <ul>
          <li>
            Liaise with the contact person at the client side to agree on the
            content delivery schedule.
          </li>
          <li>
            Develop a coherent content generation plan to be used by the content
            generators.
          </li>
          <li>
            Prepare an FTP repository and a mail account were content will be
            constantly deposited by the contact person for update.
          </li>
          <li>
            Continually improve the visibility of the portal by increasing Meta
            data richness.
          </li>
          <li>
            Continually improve the skin, preferably on a monthly basis or
            bi-monthly.
          </li>
          <li>Planning, discussion and gaining approval</li>
          <li>Website deployment</li>
          <li>Website maintenance / Internet Marketing</li>
        </ul>
      </Content>
    </>
  );
};

export default WebDevelopment;
