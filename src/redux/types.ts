export interface User {
  name: { title: string; first: string; last: string };
  id: { value: string; name: string };
  login: { username: string };
  email: string;
  picture: { thumbnail: string; large: string };
  location: {
    street: string;
    city: string;
    state: string;
    postcode: string;
  };
  phone: string;
  cell: string;
}

export interface UserState {
  list: User[];
  cursor: number;
  pageNr: 0;
  user?: User;
}

export interface SettingsState {
  nationality: string;
}

export interface State {
  users: UserState;
  settings: SettingsState;
}
