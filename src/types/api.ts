export interface GameStats {
  degenTownPlayers: number;
  totalUsdRaised: number;
  totalSolRaised: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  error?: string;
} 