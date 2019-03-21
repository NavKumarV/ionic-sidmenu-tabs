import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SnHeaderComponent } from './sn-header/sn-header';
@NgModule({
	declarations: [SnHeaderComponent],
	imports: [],
	exports: [SnHeaderComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
