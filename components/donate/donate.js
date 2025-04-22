import React, { useState } from 'react';
import styled from 'styled-components';

const Donate1= () => {
  const [donationAmount, setDonationAmount] = useState('');

  const handleDonate = () => {
    if (!donationAmount || isNaN(donationAmount) || donationAmount <= 0) {
      alert('Please enter a valid donation amount!');
      return;
    }
    // Add the donation functionality here (e.g., interacting with a smart contract)
    alert(`Donation of ₹${donationAmount} successful!`);
  };

  const handleAmountChange = (e) => {
    setDonationAmount(e.target.value);
  };

  return (
    <DonatePage>
      <CampaignDetails>
        <Card>
          <CardImg>
            <img src="https://th.bing.com/th/id/OIP.DwWt5mLMLJxuvzEKXfB1LwHaE8?rs=1&pid=ImgDetMain" alt="Campaign Image" />
          </CardImg>
          <Title>Startup</Title>
          <CardData>
            <Text>Amount Needed: $50,000</Text>
          </CardData>
          <CardData>
            <Text>Days Left: 5</Text>
          </CardData>
        </Card>
      </CampaignDetails>

      <CampaignStory>
        <StoryTitle>Story</StoryTitle>
        <StoryText>
        Support the dream of entrepreneurship by funding startups. Your contribution can help bring innovative ideas to life.
        </StoryText>
      </CampaignStory>

      <DonationForm>
        <AmountLabel>Enter Donation Amount:</AmountLabel>
        <AmountInput
          type="number"
          value={donationAmount}
          onChange={handleAmountChange}
          placeholder="₹ Amount"
        />
      </DonationForm>

      <ButtonContainer>
        <Button onClick={handleDonate}>Donate Now</Button>
      </ButtonContainer>
    </DonatePage>
  );
};
const Donate2= () => {
    const [donationAmount, setDonationAmount] = useState('');
  
    const handleDonate = () => {
      if (!donationAmount || isNaN(donationAmount) || donationAmount <= 0) {
        alert('Please enter a valid donation amount!');
        return;
      }
      // Add the donation functionality here (e.g., interacting with a smart contract)
      alert(`Donation of ₹${donationAmount} successful!`);
    };
  
    const handleAmountChange = (e) => {
      setDonationAmount(e.target.value);
    };
  
    return (
      <DonatePage>
        <CampaignDetails>
          <Card>
            <CardImg>
              <img src="https://th.bing.com/th/id/OIP.LlPXEGqF3K8LGYjfyd9qzAHaE8?rs=1&pid=ImgDetMain" alt="Campaign Image" />
            </CardImg>
            <Title>Free Education</Title>
            <CardData>
              <Text>Amount Needed: $50,000</Text>
            </CardData>
            <CardData>
              <Text>Days Left: 5</Text>
            </CardData>
          </Card>
        </CampaignDetails>
  
        <CampaignStory>
          <StoryTitle> Free EDucation</StoryTitle>
          <StoryText>
          Support the dream of learning by funding free education.
          </StoryText>
        </CampaignStory>
  
        <DonationForm>
          <AmountLabel>Enter Donation Amount:</AmountLabel>
          <AmountInput
            type="number"
            value={donationAmount}
            onChange={handleAmountChange}
            placeholder="₹ Amount"
          />
        </DonationForm>
  
        <ButtonContainer>
          <Button onClick={handleDonate}>Donate Now</Button>
        </ButtonContainer>
      </DonatePage>
    );
  };
  const Donate3 = () => {
    const [donationAmount, setDonationAmount] = useState('');
  
    const handleDonate = () => {
      if (!donationAmount || isNaN(donationAmount) || donationAmount <= 0) {
        alert('Please enter a valid donation amount!');
        return;
      }
      // Add the donation functionality here (e.g., interacting with a smart contract)
      alert(`Donation of ₹${donationAmount} successful!`);
    };
  
    const handleAmountChange = (e) => {
      setDonationAmount(e.target.value);
    };
  
    return (
      <DonatePage>
        <CampaignDetails>
          <Card>
            <CardImg>
              <img src="https://ichef.bbci.co.uk/news/464/mcs/media/images/68575000/jpg/_68575776_heart_donation_spl.jpg" alt="Campaign Image" />
            </CardImg>
            <Title>Heart Operation</Title>
            <CardData>
              <Text>Amount Needed: $50,000</Text>
            </CardData>
            <CardData>
              <Text>Days Left: 5</Text>
            </CardData>
          </Card>
        </CampaignDetails>
  
        <CampaignStory>
          <StoryTitle>Story</StoryTitle>
          <StoryText>
          Help save lives by contributing to heart operation funding. 
          Your generous donation can provide life-changing surgeries for those in Needed.
          </StoryText>
        </CampaignStory>
  
        <DonationForm>
          <AmountLabel>Enter Donation Amount:</AmountLabel>
          <AmountInput
            type="number"
            value={donationAmount}
            onChange={handleAmountChange}
            placeholder="₹ Amount"
          />
        </DonationForm>
  
        <ButtonContainer>
          <Button onClick={handleDonate}>Donate Now</Button>
        </ButtonContainer>
      </DonatePage>
    );
  };

export {Donate1, Donate2, Donate3};

const DonatePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

const CampaignDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 
    rgba(0, 0, 0, 0.4) 0px 2px 4px, 
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, 
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardImg = styled.div`
  position: relative;
  height: 200px;
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const Title = styled.h2`
  font-family: 'Roboto';
  font-size: 22px;
  margin: 10px 0;
  color: #333333;
`;

const CardData = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
  width: 100%;
  background-color: ${(props) => props.theme.bgSubDiv};
  padding: 5px;
  color: #333333;
`;

const Text = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  margin: 0;
`;

const CampaignStory = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  margin-bottom: 10px;
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow:
  rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StoryTitle = styled.h3`
  font-family: 'Roboto';
  font-size: 24px;
  color: #333333;
  margin-bottom: 10px;
`;

const StoryText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #333333;
  line-height: 1.6;
`;

const DonationForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const AmountLabel = styled.label`
  font-family: 'Roboto';
  font-size: 18px;
  margin-bottom: 10px;
  color: #333333;
`;

const AmountInput = styled.input`
  font-family: 'Roboto';
  font-size: 16px;
  padding: 10px;
  width: 200px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  text-align: center;
  &:focus {
    outline: none;
    border-color: #00b712;
  }
`;

const ButtonContainer = styled.div`
 margin-top: 0.03px; /* You can decrease this to bring the button up */
  margin-bottom: 50px; /* Add if there's too much space at the bottom */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  background-color: #c2fbd7;
  border-radius: 100px;
  box-shadow:
    rgba(44, 187, 99, 0.2) 0 -25px 18px -14px inset,
    rgba(44, 187, 99, 0.15) 0 1px 2px,
    rgba(44, 187, 99, 0.15) 0 2px 4px,
    rgba(44, 187, 99, 0.15) 0 4px 8px,
    rgba(44, 187, 99, 0.15) 0 8px 16px,
    rgba(44, 187, 99, 0.15) 0 16px 32px;
  color: green;
  cursor: pointer;
  display: inline-block;
  font-family: CerebriSans-Regular, -apple-system, system-ui, Roboto, sans-serif;
  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms ease-in-out;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    box-shadow:
      rgba(44, 187, 99, 0.35) 0 -25px 18px -14px inset,
      rgba(44, 187, 99, 0.25) 0 1px 2px,
      rgba(44, 187, 99, 0.25) 0 2px 4px,
      rgba(44, 187, 99, 0.25) 0 4px 8px,
      rgba(44, 187, 99, 0.25) 0 8px 16px,
      rgba(44, 187, 99, 0.25) 0 16px 32px;
    transform: scale(1.05) rotate(-1deg);
  }
`;