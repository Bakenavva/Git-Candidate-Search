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

  const fetchSpecificUser = async (user: string) => {
    if (!user) {
      console.error('No user login provided');
      return;
    }
    const data = await searchGithubUser(user);
    setCurrentUser(data);
  };

  // Fetch all candidates and set the first user as the current user
  const fetchCandidates = async () => {
    const candidatesData = await searchGithub();
    setResults(candidatesData);
    if (candidatesData.length > 0) {
      await fetchSpecificUser(candidatesData[0].login || '');
    }
  };

  const userChoice = async (isSelected: boolean) => {
    if (isSelected && currentUser) {
      saveCandidate(currentUser);
    }

    // Move to next candidate or reset search
    const nextIndex = currentIndex + 1;
    if (nextIndex < results.length) {
      setCurrentIndex(nextIndex);
      await fetchSpecificUser(results[nextIndex].login || '');
    } else {
      setCurrentIndex(0);
      await fetchCandidates();
    }
  };


  return (



  )

}

export default CandidateSearch;