export interface MenuDataType {
  id: number;
  title: string;
  link: string;
}

export interface MenuItemType extends MenuDataType {
  selectTab: number;
  alterSelecetTab: (id: number) => void;
}
