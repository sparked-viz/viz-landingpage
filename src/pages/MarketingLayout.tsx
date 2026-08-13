import { Outlet, useLocation } from 'react-router-dom';
import '../styles/marketing.css';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';

export function MarketingLayout() {
    const { pathname } = useLocation();
    const activePage = pathname.startsWith('/about') ? 'about' : 'home';

    return (
        <div className="marketing-page">
            <SiteHeader activePage={activePage} />
            <Outlet />
            <SiteFooter />
        </div>
    );
}
