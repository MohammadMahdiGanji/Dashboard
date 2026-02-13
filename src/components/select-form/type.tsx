interface Option {
  label: string;
  value: string;
}

export interface FormSelectProps {
  name: string;
  label: string;
  options: Option[];
}