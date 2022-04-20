import { useEffect } from 'react';
import Terminal from '../../controllers/Terminal';
export default function NavUserCard() {
  useEffect(() => {
    Terminal.log('Initialized NavUserCard');
  }, []);

  return (
    <div className="nav-user-card">
      <img
        src={`https://avatars.dicebear.com/api/big-smile/beagle.svg`}
        alt=""
      />
      Mr. Beagle Bot1
    </div>
  );
}
