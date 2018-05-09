import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ListDetailComponent } from './list-detail/list-detail.component';

const routes: Routes = [
{path: '', redirectTo: '/test', pathMatch: 'full'},
{path: 'test', component: TestComponent},
{path: 'itemList', component: ItemListComponent},
{path: 'listDetail', component: ListDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
