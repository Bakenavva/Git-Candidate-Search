import type { Candidate } from '../interfaces/Candidate.interface';
import { IoRemoveCircle } from 'react-icons/io5';

// To be rendered in the SavedCandidateList
type SavedCandidateProps = {
  candidate: Candidate;
  rejectCandidate: (id: number) => void;
};




export default SavedCandidate;