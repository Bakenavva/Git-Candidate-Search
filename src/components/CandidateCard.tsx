import type { Candidate } from '../interfaces/Candidate.interface';
import { IoAddCircle, IoRemoveCircle } from 'react-icons/io5';

type CandidateCardProps = {
  currentUser: Candidate;
  userChoice: (isSelected: boolean) => void;
};