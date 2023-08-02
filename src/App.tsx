import { Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Main } from './pages/Main';
import { Users } from './pages/Users';
import { User } from './pages/User';
import { NotFound } from './pages/NotFound';
import { UserFormPage } from './pages/UserFormPage';
import { Layout } from './components/LayOut';
import { AppRoute } from './Consts';

const App = (): JSX.Element => {
    return (
        <Routes>
            <Route path={AppRoute.Root} element={<Layout />}>
                <Route index element={<Main />} />
                <Route path={AppRoute.Login} element={<Login />} />
                <Route path={AppRoute.Users} >
                    <Route path="" element={<Users />} />
                    <Route path={AppRoute.UserId} element={<User />} />
                    <Route path={AppRoute.UserEdit} element={<UserFormPage />} />
                </Route>
                <Route path={AppRoute.NotFound} element={<NotFound />} />
            </Route>
        </Routes>
    );
};

export { App };
