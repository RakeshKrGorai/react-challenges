import Profile from "./assets/avatar.jpg";
import "./App.css";
import Qualities from "./qualities";

function Avatar() {
  return (
    <div>
      <img src={Profile} alt="avatar" />
    </div>
  );
}

function Skills({ qualityObj }) {
  const style = { backgroundColor: qualityObj.color };
  return (
    <div className="skill" style={style}>
      <li className="list">
        {qualityObj.name}
        {qualityObj.difficulty}
      </li>
    </div>
  );
}

function Data() {
  return (
    <div>
      <p>
        Monkey D. Luffy, commonly known as "Straw Hat Luffy" or simply "Straw
        Hat", is the founder, captain, and strongest combatant of the
        increasingly infamous and powerful Straw Hat Pirates. He fearlessly
        pursues the legendary treasure of the late Gol D. Roger in order to
        become the new Pirate King,and reach a further, untold dream (currently
        known to only his crew and closest friends).He believes that being the
        Pirate King means having the most freedom in the world.
      </p>
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <p>Monkey D. Luffy</p>
    </div>
  );
}

function List() {
  return (
    <ul className="list">
      {Qualities.map((quality) => (
        <Skills qualityObj={quality} key={quality.name} />
      ))}
    </ul>
  );
}

function App() {
  return (
    <div className="container">
      <Avatar />
      <Header />
      <div className="data">
        <Data />
        <List />
      </div>
    </div>
  );
}

export default App;
