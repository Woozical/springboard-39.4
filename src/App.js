import answers from './answers';
import EightBall from './EightBall';

function App() {
  return (
    <div>
      <EightBall answers={answers}/>
    </div>
  );
}

export default App;
