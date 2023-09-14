import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { PagesRoutingModule } from "./pages.routing";
import { ComponentsModule } from "../shared/components/components.module";
import { ContentComponent } from './content/content.component';
import { BrowserModule } from "@angular/platform-browser";


@NgModule({
    declarations: [
        HomeComponent,
        ContentComponent
    ],
    exports: [ComponentsModule],
    imports: [
        PagesRoutingModule,
        ComponentsModule,
        BrowserModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class PagesModule{}