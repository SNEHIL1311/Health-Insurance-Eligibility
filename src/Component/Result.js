

const Result = ({ result }) => {
  return (
    <div className="result-container">
      <h2 className={`result-heading ${result > 25 ? 'eligible' : 'not-eligible'}`}>
        {result > 25 ? "Congratulations! You are eligible." : "Sorry! You are not eligible."}
      </h2>
      <p className="result-score">Your Final Score is: <span>{result}</span></p>
    </div>
  );
};

export default Result;
