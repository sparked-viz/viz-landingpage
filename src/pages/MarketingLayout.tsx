import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import '../styles/marketing.css';
import { SiteHeader } from '../components/SiteHeader';
import { SiteFooter } from '../components/SiteFooter';

export function MarketingLayout() {
    const { pathname, hash } = useLocation();
    const activePage = pathname.startsWith('/about') ? 'about' : 'home';

    // Client-side navigation keeps the old scroll position, so links in the footer would open
    // the new page scrolled to its bottom. Jump to the top, or to the #anchor if there is one.
    useEffect(() => {
        const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
        if (target) target.scrollIntoView();
        else window.scrollTo({ top: 0, behavior: 'instant' });
    }, [pathname, hash]);

    return (
        <div className="marketing-page">
            <SiteHeader activePage={activePage} />
            <Outlet />
            <SiteFooter />
        </div>
    );
}
