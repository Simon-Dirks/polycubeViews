import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CubeComponent } from './components/cube.component/cube.component';
import { ForceDirectedComponent } from './util/forceDirectedSimulation/forceDirectedSimulation'

const routes: Routes = [
    { path: 'home', component: CubeComponent },
    { path: 'fd', component: ForceDirectedComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
