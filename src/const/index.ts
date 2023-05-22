export const enum AppRoute {
  Main = '/',
  Login = '/login',
  Registration = '/registration',
  Profile = '/profile',
  NotFound = '*',
}

export const ToastType = {
  Error: 'error',
  Warn: 'warn',
} as const;

export const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
}

export const NameSpace = {
  UserProcess: 'USER-PROCESS',
} as const;

export const emailRegExp = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
