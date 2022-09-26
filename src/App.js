import logo from './logo.svg';
import './App.css';

function App() {
  const users = [
    {name:"Jeeva Reha",
    pic:"https://static.zerochan.net/Yor.Briar.full.3641429.jpg"
    },{
      name:"Eren Jeager", 
    pic:"https://i.pinimg.com/564x/44/92/f2/4492f2948473a9271158bc37246f4e3f.jpg"
    },{
      name:"Mikasa Ackerman",
      pic:"https://i.pinimg.com/originals/b6/23/be/b623bebb32a2e8833d3b9aa1b6c77b05.jpg"

    }
  ]
  return (
    <div className="App">
      
      {users.map(({name,pic})=>(
        <Msg name={name} pic={pic} />
      ))}
    </div>
  );
}

function Msg({name,pic}) {
  return (
    <div>
    <img className="profile-pic" src={pic} alt={name}/>
      <h1>Hello, {name} 🎉🎊🥳🤗</h1>
    </div>
  );
}

function Welcome({name}) {
  return (
    <div>
      <h1>Hello, {name} 🎉🎊🥳🤗</h1>
    </div>
  );
}

export default App;
