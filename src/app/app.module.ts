import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

import { Routes, RouterModule } from "@angular/router";
import { AuthService } from "./shared/services/auth.service";
import { AuthGuard } from "./shared/guards/auth.guard";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./shared/interceptors/auth.interceptor";
import { NoticiasService } from "./shared/services/noticias.service";
import { ComunicadosService } from "./shared/services/comunicados.service";
import { HistoriasService } from "./shared/services/historias.service";
import { HorariosService } from "./shared/services/horarios.service";
import { RutasService } from "./shared/services/rutas.service";




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
  imports: [BrowserModule, RouterModule.forRoot(routes), HttpClientModule], 
  exports: [RouterModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    ComunicadosService,
    NoticiasService,
    HistoriasService,
    HorariosService,
    RutasService,
    Tari
  ]
})
export class AppModule {}