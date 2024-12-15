import { useState } from "react";

function App() {

  const [input, setInput] = useState<string>("");
  const [teamNames, setTeamNames] = useState<string[]>([]);
  const [favoriteNameTeam, SetfavoriteNameTeam] = useState<string[]>([]);

  const adjectives = [
    "Mighty", "Fearless", "Bold",
    "Sassy", "Explorers", "Warriors",
    "Mavericks", "Pioneers", "Wizards",
    "Jedi", "Vampires", "Ninjas"
  ];

  function handleInputChange(value: string) {
    setInput(value);
  }

  const generateTeamNames = () => {

    const uniqueNames: string[] = [];
    const usedIndexes = new Set<number>();

    while (uniqueNames.length < 5) {
      const randomIndex = Math.floor(Math.random() * adjectives.length);

      if (!usedIndexes.has(randomIndex)) {
        uniqueNames.push(`${input} ${adjectives[randomIndex]}`);
        usedIndexes.add(randomIndex);
      }
    }

    setTeamNames(uniqueNames);
  };

  const resetForm = () => {
    setTeamNames([]);
    setInput("");
  };

  const handleSavenameTeam = (text: string) => {
    SetfavoriteNameTeam((fav) => ([...fav, text]));
  }

  return (
    <>

      <form onSubmit={(e) => { e.preventDefault() }}>
        <input
          value={input}
          onChange={(e) => { handleInputChange(e.target.value) }}
        />
        <button type="button" onClick={generateTeamNames}>Generate</button>
      </form>

      {teamNames.length > 0 && (
        <ul>
          {teamNames.map((text, index) => (
            <li key={index}>
              <span>{text}</span>
              <span> <button onClick={() => { handleSavenameTeam(text) }}>Save</button> </span>
            </li>
          ))}
        </ul>
      )}

      {teamNames.length > 0 && (
        <div>
          <button onClick={resetForm}>Reset</button>
        </div>
      )}


      <div className="faverate">
        <p>Favorite Name Team</p>
        <ul>
          {favoriteNameTeam.map((text, index) => (
            <li key={index}>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>

    </>
  );
}

export default App;
