import { Routes } from '@angular/router';
import { LandingPageFeatureHost } from '../landing-page/components/landing-page-feature-host/landing-page-feature-host';
import { TaskDetailsPage } from '../task-details/components/task-details-page/task-details-page';

export const routes: Routes = [
    {
        path: "",
        component: LandingPageFeatureHost
    },
    {
        path: "test",
        component: TaskDetailsPage
    }
];
