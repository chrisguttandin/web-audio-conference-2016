import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wac-slide-seven',
    standalone: true,
    templateUrl: './slide-seven.component.html'
})
export class SlideSevenComponent {}
