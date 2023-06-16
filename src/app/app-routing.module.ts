import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UrlListComponent } from './components/urls/url-list/url-list.component';
import { AddUrlComponent } from './components/urls/add-url/add-url.component';
import { EditUrlComponent } from './components/urls/edit-url/edit-url.component';

const routes: Routes = [
  {path: '', component: UrlListComponent},
  {path: 'urls', component: UrlListComponent},
  {path: 'urls/add', component: AddUrlComponent},
  {path: 'urls/edit/:id', component: EditUrlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
