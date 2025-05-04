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
    <section>
      <img
        src={avatar_url || 'https://placehold.co/600x400'}
        alt={`Profile of ${login || 'Placeholder'}`}
        style={avatarStyle}
      />
      
      <section style={cardStyle}>
        {html_url && login && (
          <a href={html_url} target="_blank" rel="noreferrer">
            <h2 style={{ padding: 0, margin: '-7px 0 0 0', color: 'white' }}>
              {name} <em>({login})</em>
            </h2>
          </a>
        )}
        {location && <p>Location: {location}</p>}
        {email && <p>Email: <a href={`mailto:${email}`}>{email}</a></p>}
        {company && <p>Company: {company}</p>}
        {bio && <p>Bio: {bio}</p>}
      </section>

      <section style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
        <IoRemoveCircle
          style={{ ...buttonStyle, color: 'red' }}
          onClick={() => userChoice(false)}
        />

        <IoAddCircle
          style={{ ...buttonStyle, color: 'green' }}
          onClick={() => userChoice(true)}
        />
      </section>
    </section>
  );  
};  

export default CandidateCard;