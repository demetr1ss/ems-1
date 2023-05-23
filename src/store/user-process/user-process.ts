import {createSlice} from '@reduxjs/toolkit';
import {AuthorizationStatus, NameSpace} from 'const';
import {dropToken, saveToken} from '../../services/token';

export type UserProcessType = {
  authorizationStatus: AuthorizationStatus;
  userName?: string;
};

const initialState: UserProcessType = {
  authorizationStatus: AuthorizationStatus.NoAuth,
};

export const userProcess = createSlice({
  name: NameSpace.UserProcess,
  initialState,
  reducers: {
    logIn: (state, action) => {
      saveToken(action.payload);
      state.userName = action.payload;
      state.authorizationStatus = AuthorizationStatus.Auth;
    },
    logOut: (state) => {
      dropToken();
      state.userName = undefined;
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    },
  },
});

export const {logIn, logOut} = userProcess.actions;
