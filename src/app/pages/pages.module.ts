import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { PagesRoutingModule } from "./pages.routing";
import { ComponentsModule } from "../components/components.module";

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        PagesRoutingModule,
        ComponentsModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class PagesModule{}