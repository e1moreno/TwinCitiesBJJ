import { useContext } from 'react';
import { SocialContext } from '../context/SocialContextProvider';

const useSocialEntry = (name) => {
  const entries = useContext(SocialContext);
  if (!entries) {
    throw new Error('useSocialEntry must be wrapped around Social Context');
  }

  const entry = entries[name];

  if (!entry) {
    throw new Error('Invalid Social Entry');
  }

  return entry;
};

export default useSocialEntry;
