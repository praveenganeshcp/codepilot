import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import("../landing-page/components/landing-page-feature-host/landing-page-feature-host").then(
            c => c.LandingPageFeatureHost
        )
    }
];
