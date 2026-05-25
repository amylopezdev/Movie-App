import "./Error.css";

const Error = () => {
  return (
    <div className="error-container">
      <span className="error-icon" aria-hidden="true">⚠</span>
      <h2 className="error-title">Something went wrong</h2>
      <p className="error-message">We couldn't load the movies. Please try again later.</p>
    </div>
  );
};

export default Error;
