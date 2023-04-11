import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnaliticComponent } from './components/analitic/analitic.component';
import { ColumnComponent } from './components/base/form/column/column.component';
import { TableComponent } from './components/base/form/table/table.component';
import { FinanceComponent } from './components/finance/finance.component';
import { InvestingComponent } from './components/investing/investing.component';
import { NewsComponent } from './components/news/news.component';
import { PostsComponent } from './components/posts/posts.component';
import { TraidingComponent } from './components/traiding/traiding.component';
import { NotFoundComponent } from './components/not.found/not.found.component';
import { SearchComponent } from './components/UI/header/search/search.component';

const routes: Routes = [
  {path: '', redirectTo: 'table', pathMatch: 'full'},

  {path: 'table', component: TableComponent},
  {path: 'search', component: SearchComponent},
  {path: 'postitems', component: PostsComponent},
  {path: 'postitem', component: PostsComponent},
  //{path: 'postitem/:id', component: PostsComponent},
  {path: 'list', component: ColumnComponent},
  
  {path: 'news', component: NewsComponent},
  {path: 'finance', component: FinanceComponent},
  {path: 'traiding', component: TraidingComponent},
  {path: 'analitics', component: AnaliticComponent},
  {path: 'investing', component: InvestingComponent},

  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
