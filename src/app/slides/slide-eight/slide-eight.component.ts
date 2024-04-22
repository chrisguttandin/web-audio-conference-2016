import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrismComponent } from '../prism/prism.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PrismComponent],
    selector: 'wac-slide-eight',
    standalone: true,
    templateUrl: './slide-eight.component.html'
})
export class SlideEightComponent {}
