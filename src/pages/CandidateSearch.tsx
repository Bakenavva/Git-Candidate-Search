import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type {Candidate} from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {
  const [results, setResults] = useState<Candidate[]>([]);
  const [currentUser, setCurrentUser] = useState<Candidate | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Fetch initial list of candidates on component mount
  useEffect(() => {
    fetchCandidates();
  }, []);



  return (



  )

}

export default CandidateSearch;