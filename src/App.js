import "./App.css";
import Header from "./Header";
import Legend from "./Legend";
import PlayerCard from "./PlayerCard";
import Positions from "./Positions";
import Stats from "./Stats";
import { PlayerInformation } from "./playerData";

// import { useState } from 'react';

function App() {
    // const[price, setPrice] = useState(0);
    return (
        <div className="App">
            <div>
                <Header />
                <Legend />
                <div className="grid-container">
                    <div className="filterBar">
                        <Positions />
                        <Stats />
                    </div>
                    <div className="Item-grid">
                        {PlayerInformation.map(
                            (
                                player // TODO: map bakeryData to BakeryItem components
                            ) => (
                                <PlayerCard player={player} />
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
