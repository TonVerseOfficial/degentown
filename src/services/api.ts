import { GameStats } from '../types/api';
import { URLS } from '../config/urls';

export const fetchGameStats = async (): Promise<GameStats> => {
  try {
    const response = await fetch(`${URLS.API_BASE}/stats`);
    const data: GameStats = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching game stats:', error);
    return {
      degenTownPlayers: 0,
      totalUsdRaised: 0,
      totalSolRaised: 0
    };
  }
}; 