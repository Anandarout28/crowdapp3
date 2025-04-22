import React from 'react';
import styled from 'styled-components';

const Dashboard = () => {
  // Dummy Data - replace with real data later (e.g., from Web3, backend, etc.)
  const accountBalance = '₹ 12,450';
  const createdCampaigns = [
    { id: 1, title: 'Heart Operation', goal: '₹50,000', raised: '₹30,000' },
    { id: 2, title: 'School Fund', goal: '₹20,000', raised: '₹18,000' }
  ];
  const donations = [
    { id: 1, campaign: 'Clean Water Project', amount: '₹2,000' },
    { id: 2, campaign: 'Animal Shelter', amount: '₹1,500' }
  ];

  return (
    <Container>
      <Heading>📊 My Dashboard</Heading>

      <Section>
        <SectionTitle>💰 Account Balance</SectionTitle>
        <Card>{accountBalance}</Card>
      </Section>

      <Section>
        <SectionTitle>📦 Created Campaigns</SectionTitle>
        {createdCampaigns.length ? (
          createdCampaigns.map(campaign => (
            <Card key={campaign.id}>
              <strong>{campaign.title}</strong>
              <p>Goal: {campaign.goal}</p>
              <p>Raised: {campaign.raised}</p>
            </Card>
          ))
        ) : (
          <Card>No campaigns created yet.</Card>
        )}
      </Section>

      <Section>
        <SectionTitle>🤝 Donations</SectionTitle>
        {donations.length ? (
          donations.map(donation => (
            <Card key={donation.id}>
              <strong>{donation.campaign}</strong>
              <p>Donated: {donation.amount}</p>
            </Card>
          ))
        ) : (
          <Card>No donations made yet.</Card>
        )}
      </Section>
    </Container>
  );
};

export default Dashboard;

// Styled Components
const Container = styled.div`
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  font-size: 32px;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 22px;
  margin-bottom: 10px;
`;

const Card = styled.div`
  background: white;
  padding: 20px;
  margin: 10px 0;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0,0,0,0.1);
  font-size: 16px;
`;

