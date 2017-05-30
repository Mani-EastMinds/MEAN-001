import {NgModule} from "@angular/core";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {SigninComponent} from "./signin.component";
import {SignupComponent} from "./signup.component";
import {LogoutComponent} from "./logout.component";
import { authRouting} from "./auth.routing";

@NgModule({
    declarations: [
        SigninComponent,
        SignupComponent,
        LogoutComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        authRouting
    ]
})

export class AuthModule {

}