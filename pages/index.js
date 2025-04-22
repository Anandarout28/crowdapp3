import styled from 'styled-components';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PaidIcon from '@mui/icons-material/Paid';
import EventIcon from '@mui/icons-material/Event';
import Image from 'next/image';
import { ethers } from 'ethers';
import CampaignFactory from '../artifacts/contracts/Campaign.sol/CampaignFactory.json'
import { useState } from 'react';
import Link from 'next/link';
import Dashboard from './dashboard1';


import { from } from '@web3-storage/w3up-client/principal/ed25519';

export default function Index({AllData, HealthData, EducationData,AnimalData}) {
  const [filter, setFilter] = useState(AllData);

  return (
    <HomeWrapper>

      {/* Filter Section */}
      <FilterWrapper>
        <FilterAltIcon style={{fontSize:40}} />
        <Category onClick={() => setFilter(AllData)}>All</Category>
        <Category onClick={() => setFilter(HealthData)}>Health</Category>
        <Category onClick={() => setFilter(EducationData)}>Education</Category>
        <Category onClick={() => setFilter(AnimalData)}>Animal</Category>
      </FilterWrapper>
      <div
  className="card"
  style={{
    width: '22rem',
    position: 'absolute',
    top: '50%',
    left: '20%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow:
      'rgba(141, 46, 46, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
  }}
>
  <img
    className="card-img-top"
    src="https://th.bing.com/th/id/OIP.DwWt5mLMLJxuvzEKXfB1LwHaE8?rs=1&pid=ImgDetMain" alt="Blockchain Crowdfunding"
    style={{ width: '100%', height: 'auto' }}
  />
  <div className="card-body" style={{ padding: '1rem', backgroundColor: '#f9f9ff' }}>
    <h3 className="card-title" style={{ fontWeight: 'bold' }}>Startup</h3>
    <p className="card-text" style={{ fontSize: '0.95rem', color: '#333' }}>
    Support the dream of entrepreneurship by funding startups. Your contribution can help bring innovative ideas to life.
    </p>
   
    <Link href="/donate/startup">
    <Button >
        Go to Campagin
      </Button>
    </Link>
  </div>
</div>
<div className="card"
     style={{ 
       width: '22rem', 
       position: 'absolute', 
       top: '50%', 
       left: '50%',              // ✅ Change here: move it right
       transform: 'translate(-50%, -50%)' ,
       borderRadius: '12px',
       overflow: 'hidden',
       boxShadow:
         'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
       backgroundColor: '#f9f9ff',
     }}>
   <img
    className="card-img-top"
    src="https://th.bing.com/th/id/OIP.LlPXEGqF3K8LGYjfyd9qzAHaE8?rs=1&pid=ImgDetMain"  
     alt="Blockchain Crowdfunding"
    style={{ width: '100%', height: 'auto' }}
  />
  <div className="card-body" style={{ padding: '1rem', backgroundColor: '#f9f9ff' }}>
    <h3 className="card-title" style={{ fontWeight: 'bold' }}>Free Education</h3>
    <p className="card-text" style={{ fontSize: '0.95rem', color: '#333' }}>
    Support the dream of learning by funding free education.  </p>
    {/* Link to donate.js */}
    <Link href="/donate/edu">
    <Button >
        Go to Campagin
      </Button>
    </Link>
  </div>
</div>
 <div
  className="card"
  style={{
    width: '22rem',
    position: 'absolute',
    top: '50%',
    left: '80%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow:
      'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset',
  }}
>
  <img
    className="card-img-top"
    src="https://ichef.bbci.co.uk/news/464/mcs/media/images/68575000/jpg/_68575776_heart_donation_spl.jpg" alt="Blockchain Crowdfunding"
    style={{ width: '100%', height: 'auto' }}
  />
  <div className="card-body" style={{ padding: '1rem', backgroundColor: '#f9f9ff' }}>
    <h3 className="card-title" style={{ fontWeight: 'bold' }}>Heart Operation</h3>
    <p className="card-text" style={{ fontSize: '0.95rem', color: '#333' }}>
    Help save lives by contributing to heart operation funding. 
    Your generous donation can provide life-changing surgeries for those in Needed.</p>
    <Link href="/donate/heart">
    <Button >
        Go to Campagin
      </Button>
    </Link>
  </div>
</div>

</HomeWrapper>
  )
}

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin-top: 15px;
`;

const Category = styled.div`
  padding: 10px 15px;
  background-color: ${(props) => props.theme.bgDiv};
  margin: 0px 15px;
  border-radius: 8px;
  font-family: 'Poppins';
  font-weight: normal;
  cursor: pointer;
  color: #333333; /* Changed font color */
`;

const CardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
  margin-top: 25px;
`;

const CardContainer = styled.div`
  position: relative;
  width: 300px;
  margin-bottom: 30px;

  &:hover ${'' /* Reveal action button on hover */} {
    button {
      opacity: 1;
      transform: translateX(-50%) translateY(0px);
    }
  }
`;

const Card = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 
    rgba(0, 0, 0, 0.4) 0px 2px 4px, 
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, 
    rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  color: #333333; /* Changed font color */
`;

const CardImg = styled.div`
  position: relative;
  height: 120px;
  width: 100%;
`;

const Title = styled.h2`
  font-family: 'Roboto';
  font-size: 18px;
  margin: 2px 0px;
  background-color: ${(props) => props.theme.bgSubDiv};
  padding: 5px;
  cursor: pointer;
  font-weight: normal;
  color: #333333; /* Changed font color */
`;

const CardData = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2px 0px;
  background-color: ${(props) => props.theme.bgSubDiv};
  padding: 5px;
  cursor: pointer;
  color: #333333; /* Changed font color */
`;

const Text = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
  color: #333333; /* Changed font color */
`;

const Button = styled.button`
  background-color:rgb(249, 253, 253);
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