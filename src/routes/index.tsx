import LandingPageLayout from '../layouts/LandingPageLayout';
import { landingPageRoutes, routeInterface } from './routesData';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const genRoutes = (Layout: any, routes: Array<any>) =>
    routes.map(
        ({ children, path, component: Component, breadcrumb }: routeInterface, index: number) =>
            children
                ? children.map(
                    ({ path, component: Component, breadcrumb }: routeInterface, index: number) =>
                        <Route
                            key={index}
                            path={path}
                            element={
                                <Layout breadCrumb={breadcrumb}>
                                    <Component />
                                </Layout>
                            }
                        />)
                : <Route
                    key={index}
                    path={path}
                    element={
                        <Layout breadCrumb={breadcrumb}>
                            <Component />
                        </Layout>
                    }
                />)


export const RoutePaths = () => {
    return <BrowserRouter>
        <Routes>
            {genRoutes(LandingPageLayout, landingPageRoutes)}
        </Routes>
    </BrowserRouter>
}