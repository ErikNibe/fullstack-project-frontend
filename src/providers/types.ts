export interface iContact {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  createdAt: string;
}

export interface iClient {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  createdAt: string;
  contacts: [] | iContact[];
}
