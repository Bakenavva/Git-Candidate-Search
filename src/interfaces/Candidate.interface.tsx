// TODO: Create an interface for the Candidate objects returned by the API
export interface Candidate {
  id?: number;
  login?: string;
  email?: string;
  html_url?: string;
  name?: string;
  avatar_url?: string;
  bio?: string;
  company?: string;
  location?: string;
}