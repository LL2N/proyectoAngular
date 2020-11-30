import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

import { Routes, RouterModule } from "@angular/router";



const routes: Routes = [
  { path: "", redirectTo: "pages", pathMatch: "full" },
  {
    path: "pages", loadChildren: () =>
      import("./pages/pages.module").then(
        m => m.PagesModule
      ) /*component: PagesComponent */
  },
  {
    path: "editor", loadChildren: () =>
      import("./editor/editor.module").then(
        m => m.EditorModule
      ) /*component: PagesComponent */
  }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)], 
  exports: [RouterModule],
  declarations: [AppComponent ],
  bootstrap: [AppComponent]
})
export class AppModule {}