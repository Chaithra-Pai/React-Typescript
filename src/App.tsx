import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';


function App() {
  const personName = {
    first: "Shanteri",
    last: "Kamakshi"
  }

  const nameList = [
    {
      first: "Krishnadas" ,
      last: "Pai"
    },
    {
      first: "Mamatha" ,
      last: "Pai"
    },
    {
      first: "Chaithra" ,
      last: "Pai"
    }
  ]

  return (
    <div className="App">
      <Greet name="Chai" msgcount={20} isLoggedIn={true}/>
      <Person name={personName}/>
      <PersonList names={nameList} />
      <Status status='success'/>
    </div>
  );
}

export default App;
