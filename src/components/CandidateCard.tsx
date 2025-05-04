import type { Candidate } from '../interfaces/Candidate.interface';
import { IoAddCircle, IoRemoveCircle } from 'react-icons/io5';

type CandidateCardProps = {
  currentUser: Candidate;
  userChoice: (isSelected: boolean) => void;
};

const CandidateCard = ({ currentUser, userChoice }: CandidateCardProps) => {
  if (!currentUser) {
    return <h2>No Candidates at this time</h2>;
  }

  const {
    avatar_url, 
    html_url,
    login,
    name,
    location,
    email,
    company,
    bio,
  } = currentUser;
    
  const avatarStyle = { width: '300px', borderRadius: '30px 30px 0 0' };
  const cardStyle = { backgroundColor: '#000', width: '280px', borderRadius: '0 0 30px 30px', padding: '0 10px 10px' };
  const buttonStyle = { fontSize: '80px', cursor: 'pointer' };
    
  return (




  )

}  

export default CandidateCard;