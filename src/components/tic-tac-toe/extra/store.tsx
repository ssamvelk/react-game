import { SYMBOLS, LENS } from '../constants';

type FieldType = 'all' | 'win' | 'loose' | 'tie';

type HistoryType = {
  squares: Array<string | null>,
  lastClick: number | null,
};
class Storage {
  static getField(field:FieldType, fieldLen: number) {
    const localField = localStorage.getItem(`TicTacToe_${field}_${fieldLen}`);
    return !localField ? 0 : +localField;
  }

  static setField(value:number, field:FieldType, fieldLen: number) {
    localStorage.setItem(`TicTacToe_${field}_${fieldLen}`, JSON.stringify(value));
  }

  static getIcon(iconCount:number) {
    const localIcon = localStorage.getItem(`TicTacToe_icon_${iconCount}`);
    return !localIcon ? 0 : +localIcon;
  }

  static setIcon(value:number, iconCount:number) {
    localStorage.setItem(`TicTacToe_icon_${iconCount}`, JSON.stringify(value));
  }

  static setLen(len:number) {
    localStorage.setItem('TicTacToe_len', len.toString());
  }

  static getLen() {
    const localLen = localStorage.getItem('TicTacToe_len');
    return localLen ? +localLen : LENS[0];
  }

  static getGameHistory() {
    const history = sessionStorage.getItem('TicTacToe_history');
    return history ? JSON.parse(history) : [{
      squares: Array(9).fill(null),
      lastClick: null,
    }];
  }

  static saveGameHistory(history: HistoryType[]) {
    sessionStorage.setItem('TicTacToe_history', JSON.stringify(history));
  }
}

export default Storage;
