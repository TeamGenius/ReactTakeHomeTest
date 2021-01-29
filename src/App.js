import React, { useState, useMemo } from 'react';
import players from './_players.json';
import { PLAYER_TABLE_DISPLAY_LIMIT, playersTableColumns } from './players.constants.js'
import { paginatePlayerTableItems } from './players.utils.js'

const App = () => {
  const [displayIndex, setDisplayIndex] = useState(0);
  const [playerSummary, setPlayerSummary] = useState(null);

  // Memoized to prevent re-running calculation when selecting a player summary to view
  const playersToDisplay = useMemo(
    () => paginatePlayerTableItems(players, displayIndex, PLAYER_TABLE_DISPLAY_LIMIT), 
    [displayIndex]
  );

  const isFirstPage = displayIndex === 0;
  const isLastPage = displayIndex >= players.length - PLAYER_TABLE_DISPLAY_LIMIT;

  return (
    <div>
      <div>
        <h1>Players Table</h1>
        <h3>{`Displaying ${displayIndex + 1}-${isLastPage ? players.length : displayIndex + PLAYER_TABLE_DISPLAY_LIMIT} of ${players.length} players`}</h3>
      </div>
      <button 
        onClick={() => setDisplayIndex(displayIndex - PLAYER_TABLE_DISPLAY_LIMIT)} 
        disabled={isFirstPage}
      >
        PREVIOUS
      </button>
      <button 
        onClick={() => setDisplayIndex(displayIndex + PLAYER_TABLE_DISPLAY_LIMIT)} 
        disabled={isLastPage}
      >
        NEXT
      </button>
      <table>
        <thead>
          <tr>
            {playersTableColumns.map(header => <th key={header.key}>{header.display}</th>)}
          </tr>
        </thead>
        <tbody>
        {playersToDisplay.map(player => {
          return (
            <tr key={`${player.email}`} onClick={() => setPlayerSummary(player)}>
              {playersTableColumns.map(header => {
                return header.key === 'picture' ? 
                  <td key={`${header.key}-${player.picture}`}><img alt='player' src={player.picture} width="32" height="32"/></td> :
                  <td key={`${header.key}-${player[header.key]}`}>{player[header.key]}</td> 
              })}
            </tr>
          )
        })}
        </tbody>
      </table>
      <div>
        <h1>Player Summary</h1>
        <button onClick={() => setPlayerSummary(null)} disabled={!playerSummary}>
          CLEAR SUMMARY
        </button>
        <div >
          {playerSummary ? 
            <>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img alt='player' src={playerSummary.picture} width="64" height="64"/>
                <div>
                  <h3>{`${playerSummary.nameFirst} ${playerSummary.nameLast} -- ${playerSummary.organization}`}</h3>
                  <p>{`${playerSummary.nameFirst} is ${playerSummary.age}-year-old, ${playerSummary.handedness.toLowerCase()} handed, and plays the ${playerSummary.position.toLowerCase()} position.`}</p>
                </div>
              </div>
              <div>
                <h4>Contact</h4>
                <p>{`Phone: ${playerSummary.phone}`}</p>
                <p>{`Email: ${playerSummary.email}`}</p>
              </div>
            </>
            : 
            <h3 style={{ color: '#a6a6a6' }}>--no player selected--</h3>
          }
        </div>
      </div>
    </div>
  );
}

export default App;