export interface InfoUserType {
  id: string;
  fullName: string;
  email: string;
  password: string;
  type: string;
}

export interface ShowDataTablePropType {
  selectUser: ({}: { id: string; checked: boolean }) => void;
}
