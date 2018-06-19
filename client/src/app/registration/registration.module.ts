import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { RegistrationService } from './registration.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        RegistrationRoutingModule,
        SharedModule
    ],
    declarations: [RegistrationComponent],
    providers: [RegistrationService]
})
export class RegistrationModule {}
