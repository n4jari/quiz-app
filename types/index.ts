export interface IThemeContext {
  toggleMode: () => void;
  mode: string;
}

export interface IQuestions {
  id: number;
  question: string;
  awnsers: string[];
  carrectAwnser: string;
}

export interface IResultProps {
  points: number;
  count: number;
}
