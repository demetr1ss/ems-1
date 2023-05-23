import {AuthorizationStatus, NameSpace} from 'const';
import {StateType} from 'types/state-type';

export const getAuthorizationStatus = (state: StateType): AuthorizationStatus =>
  state[NameSpace.UserProcess].authorizationStatus;

export const getUserName = (state: StateType): string | undefined =>
  state[NameSpace.UserProcess].userName;
