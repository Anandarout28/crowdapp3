import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';

const HeaderNav = () => {
  const Router = useRouter();

  return (
    <HeaderNavWrapper>
      <Link passHref href={'/'}><HeaderNavLinks active={Router.pathname == "/" ? true : false} >
        Campaigns
      </HeaderNavLinks></Link>
      <Link passHref href={'/createcampaign'}><HeaderNavLinks active={Router.pathname == "/createcampaign" ? true : false} >
        Create Campaign
      </HeaderNavLinks></Link>
      <Link passHref href={'/dashboard1'}><HeaderNavLinks active={Router.pathname == "/dashboard1" ? true : false} >
        Dashboard
      </HeaderNavLinks></Link>
    </HeaderNavWrapper>
  )
}

const HeaderNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* Center nav links horizontally */
  gap: 20px; /* Space between links */
  background-color: ${(props) => props.theme.bgDiv};
  padding: 10px 20px;
  border-radius: 12px;
  margin: 20px auto; /* Center it horizontally with auto margins */
  width: fit-content; /* Adjusts to content width */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for definition */
`;

const HeaderNavLinks = styled.div`
  background-color: ${(props) => props.active ? props.theme.bgSubDiv : props.theme.bgDiv};
  color: ${(props) => props.theme.text};
  font-family: 'Roboto', sans-serif;
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 0.9rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.bgSubDiv};
    transform: scale(1.05);
  }
`;

export default HeaderNav