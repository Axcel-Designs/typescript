export type ButtonType = {
  label: string;
  type?: "submit" | "button" | "reset";
};

export type InputType = {
  type: string;
  holder: string;
  id: string;
  label: string;
  value?: string;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
}