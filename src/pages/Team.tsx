import { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const TeamPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [setNode, entry] = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    if (ref.current) {
      setNode(ref.current);
    }
  }, [setNode]);

  const isIntersecting = entry?.isIntersecting;

  return (
    <div
      ref={ref}
      className={`container mt-5 ${isIntersecting ? 'reveal' : 'hidden'}`}
    >
      <h1 className="text-center mb-4">Our Team</h1>
      <div className="row">
        {/* Placeholder for team members */}
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-white">
            <div className="card-body">
              <h5 className="card-title">Team Member 1</h5>
              <p className="card-text">Role/Position</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-white">
            <div className="card-body">
              <h5 className="card-title">Team Member 2</h5>
              <p className="card-text">Role/Position</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card bg-dark text-white">
            <div className="card-body">
              <h5 className="card-title">Team Member 3</h5>
              <p className="card-text">Role/Position</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
