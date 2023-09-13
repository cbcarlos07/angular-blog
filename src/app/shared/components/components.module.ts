import { NgModule } from "@angular/core";
import { MenuBarComponent } from './menu-bar/menu-bar.component'
import { MenuTitleComponent } from './menu-title/menu-title.component'
import { BigCardComponent } from './big-card/big-card.component'
import { SmallCardComponent } from './small-card/small-card.component'
@NgModule({
    declarations:[
        MenuBarComponent,
        MenuTitleComponent,
        BigCardComponent,
        SmallCardComponent
    ],
    exports: [
        MenuBarComponent,
        MenuTitleComponent,
        BigCardComponent,
        SmallCardComponent
    ]
})
export class ComponentsModule{}