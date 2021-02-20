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
const IctConsultancy = () => {
  return (
    <>
      <Header>Ict Consultancy</Header>
      <SubHeader>
        We are a dedicated team with experience in business computing and
        technical operations.
      </SubHeader>
      <Content>
        <p>
          From requirements gathering to IT infrastructure strategy, we provide
          a full range of consultancy services and support to help take the
          hustles out of your IT projects. When you cannot find the exact IT
          solution you are looking for, before turning to a bespoke solution, we
          shall advise on how to minimize the risks and get the best out of a
          new project.
        </p>
        <ul>
          <li>Requirements Engineering</li>
          <li>System Testing and Evaluation</li>
          <li>ICT needs assessment</li>
          <li>IT Systems Audit</li>
          <li>Product Selection</li>
          <li>Contractual and Legal Guidance</li>
          <li>Development of Service Level Agreements</li>
          <li>Procurement Management</li>
        </ul>
        At Jast Tech, we have the best, innovative and experienced software
        developers who can be outsourced to your organization for a short period
        of time on a specific project within your organization.
      </Content>
    </>
  );
};

export { IctConsultancy };
