function Steps() {
  return (
    <div>
      <span className="close">&times;</span>

      <div className="steps">
        <div className="numbers">
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>

        <div className="message">
          <h3>Step X</h3>
          <p>MOJA PORUKA X</p>
        </div>

        <div className="buttons">
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  );
}

export default Steps;
