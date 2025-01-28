export const formatNumber = (num: number): string => {
    if (Number.isInteger(num)) {
      // Eğer tam sayıysa, direkt dön
      if (num >= 1000000) {
        return `${(num / 1000000).toFixed(1)}M`;
      } else if (num >= 1000) {
        return `${(num / 1000).toFixed(1)}K`;
      } else if (num >= 10) {
        return `${num}`;
      }
      return `${num}`;
    } else {
      // Eğer ondalıklıysa, virgülden sonrası ile çalış
      if (num >= 1000000) {
        return `${(num / 1000000).toFixed(1)}M+`;
      } else if (num >= 1000) {
        return `${(num / 1000).toFixed(1)}K`;
      } else if (num >= 10) {
        return `${num.toFixed(0)}`;
      }
      return `${num.toFixed(1)}`;
    }
  };