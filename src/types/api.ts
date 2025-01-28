export interface GameStats {
  degenTownPlayers: number;
  usdRaised: number;
  totalSolRaised: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
} 