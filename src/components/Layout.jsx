import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';

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