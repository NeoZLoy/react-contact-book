import { Outlet } from 'react-router-dom';
import { Navigation } from './GuestNav/Navigation';

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <Navigation/>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};