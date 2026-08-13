import React, { useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { buildGuideNav, NON_ROUTABLE_SECTION_KEYS, type GuideDoc, type GuideNavGroup } from '../../lib/guideContent';

const navGroups = buildGuideNav();

function groupHasActiveRoute(group: GuideNavGroup, pathname: string): boolean {
    return (
        group.docs.some(doc => doc.route === pathname) ||
        !!group.subgroups?.some(sub => sub.docs.some(doc => doc.route === pathname))
    );
}

const docLinkClass = (isActive: boolean) =>
    `block rounded-md px-3 py-1.5 text-sm transition-colors ${
        isActive
            ? 'text-brand bg-brand-subtle font-medium'
            : 'text-ink-secondary hover:text-brand hover:bg-brand-subtle/40'
    }`;

const GuideNavDoc: React.FC<{ doc: GuideDoc; disabled?: boolean }> = ({ doc, disabled }) =>
    disabled ? (
        <li>
            <span className="block rounded-md px-3 py-1.5 text-sm text-ink-secondary cursor-not-allowed">
                {doc.title}
            </span>
        </li>
    ) : (
        <li>
            <NavLink to={doc.route} className={({ isActive }) => docLinkClass(isActive)}>
                {doc.title}
            </NavLink>
        </li>
    );

export const GuideLayout: React.FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="min-h-screen bg-bg">
            <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-line">
                <div className="flex items-center justify-between h-16 px-6 md:px-12">
                    <a href="/" className="flex items-center gap-2.5">
                        <img src="/assets/sparkEd_logo.webp" alt="SparkEdu" className="h-[34px] w-[34px] block" />
                        <span className="font-bold text-lg text-ink">SparkEdu Guide</span>
                    </a>
                    <a
                        href="/"
                        className="text-sm font-medium text-ink-secondary hover:text-brand transition-colors duration-150"
                    >
                        ← Back to sparkedu.com
                    </a>
                </div>
            </header>

            <div className="max-w-[1280px] flex items-start gap-10 py-10 px-6 md:px-12">
                <nav className="hidden md:block w-64 shrink-0 sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2">
                    <NavLink
                        to="/guide"
                        end
                        className={({ isActive }) => `${docLinkClass(isActive)} font-semibold mb-3`}
                    >
                        Guide Home
                    </NavLink>

                    <div className="space-y-1">
                        {navGroups.map(group => {
                            const comingSoon = NON_ROUTABLE_SECTION_KEYS.has(group.key);
                            return (
                                <details
                                    key={group.key}
                                    open={!comingSoon && groupHasActiveRoute(group, pathname)}
                                    className="group"
                                >
                                    <summary className="flex items-center justify-between gap-2 cursor-pointer select-none list-none marker:content-none px-3 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wide text-ink-tertiary hover:text-ink hover:bg-brand-subtle/40 transition-colors">
                                        <span className="flex items-center gap-2">
                                            {group.label}
                                            {comingSoon && (
                                                <span className="badge badge-neutral !text-[9px] !py-0.5 !px-2 normal-case tracking-normal">
                                                    Soon
                                                </span>
                                            )}
                                        </span>
                                        <ChevronRight className="w-3.5 h-3.5 shrink-0 text-ink-tertiary transition-transform duration-150 group-open:rotate-90" />
                                    </summary>

                                    <div
                                        className={`mt-1 mb-4 ml-3 pl-3 border-l border-line space-y-3 ${
                                            comingSoon ? 'grayscale opacity-50 pointer-events-none select-none' : ''
                                        }`}
                                    >
                                        {group.docs.length > 0 && (
                                            <ul className="space-y-0.5">
                                                {group.docs.map(doc => (
                                                    <GuideNavDoc key={doc.route} doc={doc} disabled={comingSoon} />
                                                ))}
                                            </ul>
                                        )}

                                        {group.subgroups?.map(sub => (
                                            <details
                                                key={sub.key}
                                                open={sub.docs.some(doc => doc.route === pathname)}
                                                className="group/sub"
                                            >
                                                <summary className="flex items-center justify-between gap-2 cursor-pointer select-none list-none marker:content-none px-3 py-1 rounded-md text-xs font-medium text-ink-tertiary hover:text-ink hover:bg-brand-subtle/40 transition-colors">
                                                    <span>{sub.label}</span>
                                                    <ChevronRight className="w-3 h-3 shrink-0 text-ink-tertiary transition-transform duration-150 group-open/sub:rotate-90" />
                                                </summary>
                                                <ul className="mt-1 space-y-0.5">
                                                    {sub.docs.map(doc => (
                                                        <GuideNavDoc key={doc.route} doc={doc} disabled={comingSoon} />
                                                    ))}
                                                </ul>
                                            </details>
                                        ))}
                                    </div>
                                </details>
                            );
                        })}
                    </div>
                </nav>

                <main className="min-w-0 flex-1 pb-24">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

// Named `Component` export so routes.tsx can reference this via the router's `lazy` route
// field (react-router/vite-react-ssg convention) — keeps this layout's rendering code, and
// (via GuidePage) react-markdown/remark-gfm/rehype-raw, out of the marketing pages' shared
// bundle. routes.tsx still needs guideContent.ts's doc list eagerly to enumerate paths, so
// the raw markdown text itself stays in the shared chunk — only the parsing/rendering code
// moves.
export { GuideLayout as Component };
