import { Outlet } from 'react-router-dom';
import { NavBar } from './ui/NavBar';

const Layout = (): JSX.Element => {
    return (
        <div className="container">
            <div className="row">
                <div className='ps-3'>
                    <NavBar />
                    <Outlet />
                </div>
            </div>
        </div>

    );
};

export { Layout };
