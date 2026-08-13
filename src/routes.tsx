import type { RouteRecord } from 'vite-react-ssg';
import { MarketingLayout } from './pages/MarketingLayout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { guideDocs, guideIndexDoc, isRoutableDoc, type GuideDoc } from './lib/guideContent';

// react-markdown/remark-gfm/rehype-raw and all the Guide's rendering components only load
// when a /guide/* route is actually visited, instead of shipping in every marketing page's
// bundle. The lazy loader is duplicated (rather than factored into one shared import) per
// vite-react-ssg's requirement: it statically scans each route's own `lazy` function body
// for `import(...)` calls to associate that route's chunk/CSS at build time.
function guideDocLazy(doc: GuideDoc) {
    return {
        lazy: async () => {
            const { GuidePage } = await import('./pages/guide/GuidePage');
            return { Component: () => <GuidePage doc={doc} /> };
        },
    };
}

const guideChildren: RouteRecord[] = guideDocs
    .filter(doc => doc.guidePath !== 'README.md' && isRoutableDoc(doc))
    .map(doc => ({
        path: doc.route.replace(/^\/guide\/?/, ''),
        ...guideDocLazy(doc),
    }));

export const routes: RouteRecord[] = [
    {
        path: '/',
        element: <MarketingLayout />,
        children: [
            { index: true, element: <HomePage /> },
            { path: 'about', element: <AboutPage /> },
        ],
    },
    {
        path: '/guide',
        lazy: () => import('./pages/guide/GuideLayout'),
        children: [
            ...(guideIndexDoc ? [{ index: true as const, ...guideDocLazy(guideIndexDoc) }] : []),
            ...guideChildren,
        ],
    },
];
