import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from "./pages/community/community.component";
import { GeneratorComponent } from "./pages/generator/generator.component";
import { HomeComponent } from "./pages/home/home.component";
import { PagenotfoundComponent } from "./shared/pagenotfound/pagenotfound.component";

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'community', component: CommunityComponent },
    { path: 'generator', component: GeneratorComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PagenotfoundComponent}
]