import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/UI/header/header.component';
import { FotterComponent } from './components/UI/fotter/footer.component';
import { TopComponent } from './components/UI/header/top/top.component';
import { SearchComponent } from './components/UI/header/search/search.component';
import { ModuleComponent } from './components/UI/header/module/module.component';
import { ThemesComponent } from './components/UI/header/themes/themes.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseComponent } from './components/base/base.component';
import { FormComponent } from './components/base/form/form.component';
import { ColumnComponent } from './components/base/form/column/column.component';
import { TableComponent } from './components/base/form/table/table.component';
import {MatCardModule} from '@angular/material/card';
import { TablePages1Component } from './components/base/form/table/table.pages1/table';
import { ColumnPages1Component } from './components/base/form/column/column.pages1/column.pages1.component';
import { NewsComponent } from './components/news/news.component';
import { ModalWindowComponent } from './components/modal.window/modal.window.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostOneComponent } from './components/posts/post.one/post.one.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SwiperModule } from 'swiper/angular';
import { TablePostComponent } from './components/base/form/table/table.post/table.post.component';
import { FinanceComponent } from './components/finance/finance.component';
import { TraidingComponent } from './components/traiding/traiding.component';
import { AnaliticComponent } from './components/analitic/analitic.component';
import { InvestingComponent } from './components/investing/investing.component';
import { PostTwoComponent } from './components/posts/post.two/post.two.component';
import { NotFoundComponent } from './components/not.found/not.found.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './components/search/searchpipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { QuestionComponent } from './components/question/question'; 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FotterComponent,
    TopComponent,
    SearchComponent,
    ModuleComponent,
    ThemesComponent,
    BaseComponent,
    FormComponent,
    ColumnComponent,
    TableComponent,
    TablePages1Component,
    ColumnPages1Component,
    NewsComponent,
    ModalWindowComponent,
    PostsComponent,
    PostOneComponent,
    TablePostComponent,
    FinanceComponent,
    TraidingComponent,
    AnaliticComponent,
    InvestingComponent,
    PostTwoComponent,
    NotFoundComponent,
    SearchPipe,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    SwiperModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
