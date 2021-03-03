type FieldType = 'all' | 'win' | 'loose' | 'tie';
// {
//   all: number;
//   win: number;
//   loose: number;
//   tie: number;
// };

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
}

export default Storage;
