const AUTH_TOKEN_KEY_NAME = 'is-user-auth';

export type Token = boolean;

export const getToken = (): Token => {
  const token = !!localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token;
};

export const saveToken = (token: Token): void => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, JSON.stringify(token));
};

export const dropToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};
