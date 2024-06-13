import { TapPage } from '@/pages/TapPage/TapPage.jsx';
import {BoostPage} from "@/pages/StatsPage/BoostPage.jsx";
import {StatsPage} from "@/pages/BoostPage/StatsPage.jsx";
import {RefPage} from "@/pages/RefPage/RefPage.jsx";
import {TrophyPage} from "@/pages/TrophyPage/TrophyPage.jsx";
import {TaskPage} from "@/pages/TaskPage/TaskPage.jsx";
// import { InitDataPage } from '@/pages/InitDataPage/InitDataPage';
// import { LaunchParamsPage } from '@/pages/LaunchParamsPage/LaunchParamsPage.jsx';
// import { ThemeParamsPage } from '@/pages/ThemeParamsPage/ThemeParamsPage.jsx';
// import { TONConnectPage } from '@/pages/TONConnectPage/TONConnectPage';

/**
 * @typedef {object} Route
 * @property {string} path
 * @property {import('react').ComponentType} Component
 * @property {string} [title]
 * @property {import('react').JSX.Element} [icon]
 */

/**
 * @type {Route[]}
 */
export const routes = [
    { path: '/', Component: TapPage },
    { path: '/boost', Component: BoostPage },
    { path: '/stat', Component: StatsPage },
    { path: '/task', Component: TaskPage },
    { path: '/trophy', Component: TrophyPage },
    { path: '/ref', Component: RefPage },
];
