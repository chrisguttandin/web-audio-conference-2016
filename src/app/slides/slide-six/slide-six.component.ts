import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wac-slide-six',
    templateUrl: './slide-six.component.html'
})
export class SlideSixComponent {}
