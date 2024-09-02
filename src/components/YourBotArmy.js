import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ botArmy, removeBot }) {
  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botArmy.map((bot) => (
            <BotCard key={bot.id} bot={bot} onClick={() => removeBot(bot)} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
