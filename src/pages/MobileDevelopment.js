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
const MobileDevelopment = () => {
  return (
    <>
      <Header>Mobile App Development</Header>
      <SubHeader>
        With Mobile technology taking center stage in today’s world,
        organizations are keen on making significant advancements in the mobile
        space.
      </SubHeader>
      <Content>
        <p>
          As mobile technology gives businesses the opportunity to stay
          connected to customers almost all the time, enterprises are moving
          beyond the desktop world to keep attuned to their customer’s needs.
          Jast Tech offers mobile application solutions that help organizations
          to communicate with their customers through custom mobile devices.
        </p>
        <p>
          Leveraging our industry intelligence and technological background, we
          design and build mobile applications that are customer-friendly and
          facilitate easy and quick data collection and processing. We have
          established an international reputation for mobile based applications
          with systems such as M4W (Mobile for Water) with Organizations in the
          water sector in Uganda.
        </p>
        <p>
          With our experience in developing mobile based applications, we are
          more than capable of developing systems for quick data surveys (or
          data collection), ” monitoring and evaluation In addition, we provide
          mobile services that go beyond the fundamental role of voice
          communication. We provide Value Added SMS-based services (e.g
          reminders, alerts, campaigns, notifications, e.t.c) to all telecom
          networks in and outside Uganda.
        </p>
        <p>
          <strong>Technologies</strong>
          <ul>
            <li>Android</li>
            <li>iOS</li>
          </ul>
        </p>
      </Content>
    </>
  );
};

export default MobileDevelopment;
