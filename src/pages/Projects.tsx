import { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const ProjectsPage = () => {
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
      <h1 className="text-center mb-4">Our Projects</h1>
      <div className="row justify-content-center">
        {/* Placeholder for projects */}
        <div className="col-md-6 mb-4">
          <div className="card bg-dark text-white">
            <div className="card-body text-center">
              <h5 className="card-title">Project</h5>
              <p className="card-text">Lorem Ipsum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
