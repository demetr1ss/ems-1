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
