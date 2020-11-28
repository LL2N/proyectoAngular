import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { PagesComponent } from "./pages/pages.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "pages", pathMatch: "full" },
  {
    path: "pages",
    component: PagesComponent
    /*loadChildren: () =>
      import("./pages/pages.module").then(
        m => m.PagesModule
      )*/ /*component: PagesComponent */
  }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)], 
  exports: [RouterModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}