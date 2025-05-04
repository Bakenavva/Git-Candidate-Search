import { useEffect, useState } from 'react';
import SavedCandidate from './SavedCandidate';
import type { Candidate } from '../interfaces/Candidate.interface';

const SavedCandidateList = () => {
  const [potentialCandidates, setPotentialCandidates] = useState<Candidate[]>([]);

  useEffect(() => {
    const savedCandidates = localStorage.getItem('savedCandidates');
    const candidates = savedCandidates ? JSON.parse(savedCandidates) : [];
    const validCandidates = candidates.filter(
      (candidate: Candidate) => candidate.id && candidate.login
    );
    setPotentialCandidates(validCandidates);
  }, []);
    
  const rejectCandidate = (id: number) => {
    const updatedCandidates = potentialCandidates.filter(
      (candidate) => candidate.id !== id
    );
    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
    setPotentialCandidates(updatedCandidates);
  };


}

export default SavedCandidateList;