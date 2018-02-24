import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/collector', pathMatch: 'full' },
    {
        path: 'collector',
        loadChildren: './collector/collector.module#CollectorModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
