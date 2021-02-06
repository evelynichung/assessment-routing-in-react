function JeopardyDisplay(props) {
  return (
    <div>
      <div>Category: {props.category}</div>
      <br />
      <div>Question: {props.question}</div>
      <br />
      <div>
        Points: {props.value} Score: {props.score}
      </div>
      <br />
      <div></div>

      <form onSubmit={props.handleSubmit}>
        <div>
          <label htmlFor="answer">Answer:</label>
          <input
            type="text"
            name="answer"
            value={props.answer}
            onChange={props.handleChange}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default JeopardyDisplay;
