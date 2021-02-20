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

const SocialMediaMgt = () => {
  return (
    <>
      <Header>Social Media Management & Marketing</Header>
      <SubHeader>
        Engage and expand your audience across the web with social media
        marketing.
      </SubHeader>
      <Content>
        <p>
          Did you know that 72 percent of social marketers say social content
          has helped them close deals? Social media marketing is important for
          branding, lead generation and sales.{' '}
        </p>
        <p>
          {' '}
          We are a focused and experienced social media marketing agency —
          managing your social channels, digital PR, and social advertising to
          help you get measurable results.
          <br />
          Engage and expand your audience across the web with social media
          marketing.{' '}
        </p>
        <ul>
          <li>Target influencers in your niche.</li>
          <li>Increase word-of-mouth referrals.</li>
          <li>Stay on top of conversations about your industry and company.</li>
        </ul>
        <p>
          When you engage consumers on social channels, they become acquainted
          with your brand before clicking back to your site. Social content
          helps you attract audiences who choose to engage your company and are
          probably informed about your industry. They’re more likely to be loyal
          to your business and make purchases.
        </p>
      </Content>
    </>
  );
};

export default SocialMediaMgt;
