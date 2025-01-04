function App(props) {
  const currDate = new Date();

  return (
    <div>
      <h1>Hello, Michelle!</h1>
      <h2>The date is {currDate.toLocaleDateString()}.</h2>
      <h2>The time is {currDate.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default App;