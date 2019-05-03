import { NgModule } from '@angular/core';

import { MonomerAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [MonomerAppSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [MonomerAppSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MonomerAppSharedCommonModule {}
