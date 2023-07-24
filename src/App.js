import './App.css';
import Tracker from './components/expense tracker/Tracker';
import Metronome from './components/metronome/Metronome';
import ToDo from './components/todo/ToDo';
import Card from './components/weather/Card';

function App() {
  return (
    <>
    <h1 className='text-black text-8xl text-center p-8 fancy-font '>All in One App</h1>
    <div className="App flex flex-row gap-[20px] flex-wrap">
          <ToDo/>
          <Card/>
          <Tracker/>
          <Metronome/>
    </div>
    </>
  );
}

export default App;
