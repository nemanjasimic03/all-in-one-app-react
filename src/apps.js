import { FaTasks, FaMoneyBill } from 'react-icons/fa';
import { BsFileEarmarkMusicFill } from 'react-icons/bs';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import Tracker from './components/expense tracker/Tracker';
import Metronome from './components/metronome/Metronome';
import ToDo from './components/todo/ToDo';
import Card from './components/weather/Card';



export let apps = [
    // name - kako se zove na sidebaru, icon-icon, jsx - ime componente bez .jsx
    { name: 'To Do App', icon: FaTasks, jsx: ToDo },
    { name: 'Weather', icon: TiWeatherPartlySunny, jsx: Card },
    { name: 'Finance Tracker', icon: FaMoneyBill, jsx: Tracker },
    { name: 'Metronome', icon: BsFileEarmarkMusicFill, jsx: Metronome },
  ];

  export const updateApps = (updatedApps) => {
    apps = updatedApps;
  };