import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wac-slide-four',
    templateUrl: './slide-four.component.html'
})
export class SlideFourComponent {}
