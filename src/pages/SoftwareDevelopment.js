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

const SoftwareDevelopment = () => {
  return (
    <>
      <Header>Software Development</Header>
      <SubHeader>
        In the current economic environment, companies, organizations and
        institutions are seeking ways to reduce costs, improve business
        processes and add value to their marketing and communications
        strategies.
      </SubHeader>
      <Content>
        <p>
          Development of new software products is vital for accelerating growth
          of any business. At Jast Tech, we help invent new software
          applications for your business. Our understanding of business
          processes and our project management skills are combined to deliver
          quality and efficient products for you. We employ a flexible approach
          to deliver business solutions that are tailored to your business
          need(s). We draw from our vast experience and work with our clients to
          understand their business processes and requirements to customize
          technology-based solutions that deliver the required functionality and
          if needed, with continuous enhancement.
        </p>
        <p>
          We have the capacity and expertise to build platforms and tools that
          bring together the different component sub-systems into one to ensure
          holistic efficiency and functionality. We work with our clients to
          strategize, evaluate, design, develop and implement systems and
          processes that can best transform business.
        </p>
        <p>
          Jast Tech will avail you with customized software to help you manage
          your business by leveraging Web, mobile and desktop technologies to
          meet your needs. We develop Accounting software, Customer Relationship
          Management software, Logistics and Fleet management, Monitoring and
          Evaluation software, to mention but a few.
        </p>
      </Content>
    </>
  );
};

export default SoftwareDevelopment;
