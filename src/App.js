import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const users = [
    {name:"Jeeva Reha",
    pic:"https://static.zerochan.net/Yor.Briar.full.3641429.jpg"
    },{
      name:"Eren Yeager", 
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

function Counter(){
  //let like = 10;
  const[like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);
  const styles = {background : like > 5 ? "deepskyblue" : "orange"}
  return (
    <div className='counter-container'>
      {like>10 ? <p>You have won many ❤️! </p>: null}
      <progress className='progress-container' max="100" value={ (like / (like + disLike)) *100} ></progress>
       
       <div className='button-container'>
      <button style={styles} onClick={()=> setLike(like +1)}>👍 {like}</button>
      <button onClick={()=> setDisLike(disLike+1)}>👎 {disLike}</button>
      </div>
    </div>
  );
}

function Msg({name,pic}) {
  return (
    <div>
    <img className="profile-pic" src={pic} alt={name}/>
      <h1>Hello, {name} 🎉🎊🥳🤗</h1>
      <Counter />
      <br /> <br />
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
