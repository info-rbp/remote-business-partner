export interface AuthentikUser {
  pk: number;
  username: string;
  name: string;
  is_active: boolean;
  email?: string;
  attributes?: Record<string, any>;
}
