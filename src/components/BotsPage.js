import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const [bots, setBots] = useState([]); // State for all bots
  const [botArmy, setBotArmy] = useState([]); // State for the user's bot army

  // Fetch bots data from db.json
  useEffect(() => {
    fetch("http://localhost:8002/bots") // Adjust URL if needed
      .then((response) => response.json())
      .then((data) => setBots(data))
      .catch((error) => console.error("Error fetching bots:", error));
  }, []); // Empty dependency array means this effect runs once when the component mounts

  // Function to add a bot to the army
  const enlistBot = (bot) => {
    if (!botArmy.some((b) => b.id === bot.id)) {
      setBotArmy([...botArmy, bot]); // Add bot to army if not already enlisted
    }
  };

  // Function to remove a bot from the army
  const removeBot = (bot) => {
    setBotArmy(botArmy.filter((b) => b.id !== bot.id)); // Remove bot from army
  };

  return (
    <div>
      <YourBotArmy botArmy={botArmy} removeBot={removeBot} />
      <BotCollection bots={bots} enlistBot={enlistBot} />
    </div>
  );
}

export default BotsPage;
