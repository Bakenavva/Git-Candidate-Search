import type { Candidate } from '../interfaces/Candidate.interface';
import { IoRemoveCircle } from 'react-icons/io5';

// To be rendered in the SavedCandidateList
type SavedCandidateProps = {
  candidate: Candidate;
  rejectCandidate: (id: number) => void;
};

const SavedCandidate = ({ candidate, rejectCandidate }: SavedCandidateProps) => {
  if (!candidate) {
    return (
      <tr>
        <td colSpan={7}>
          <h2>No Candidates at this time</h2>
        </td>
      </tr>
    );
  }
  
  // Extracted styles
  const styles = {
    avatar: {
      width: '70px',
      borderRadius: '10px',
      display: 'block',
      margin: '0 auto',
    },
    name: {
      color: 'white',
    },
    removeButton: {
      color: 'red',
      margin: '0 auto',
      display: 'block',
      cursor: 'pointer',
      fontSize: '50px',
    },
  };



  
}



export default SavedCandidate;