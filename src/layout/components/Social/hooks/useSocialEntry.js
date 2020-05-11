import { useContext } from 'react';
import { SocialContext } from '../context/SocialContextProvider';

const useSocialEntry = (name) => {
  const entries = useContext(SocialContext);

  // this is because of freaking SSR. No good
  return entries ? entries[name] : { id: 'invalid', url: '#' };
};

export default useSocialEntry;
