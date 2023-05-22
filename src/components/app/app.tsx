import browserHistory from 'components/browser-history';
import HistoryRouter from 'components/history-route/history-route';
import PrivateRoute from 'components/private-route/private-route';
import {AppRoute} from 'const';
import LoginScreen from 'pages/login-screen/login-screen';
import MainScreen from 'pages/main-screen/main-screen';
import NotFoundScreen from 'pages/not-found-screen/not-found-screen';
import ProfileScreen from 'pages/profile-screen/profile-screen';
import RegistrationScreen from 'pages/registration-screen/registration-screen';
import {Route, Routes} from 'react-router-dom';

export default function App() {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen />} />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route path={AppRoute.Registration} element={<RegistrationScreen />} />
        <Route
          path={AppRoute.Profile}
          element={
            <PrivateRoute>
              <ProfileScreen />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<NotFoundScreen />} />
      </Routes>
    </HistoryRouter>
  );
}
