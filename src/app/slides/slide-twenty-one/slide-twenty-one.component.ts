import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wac-slide-twenty-one',
    standalone: true,
    styleUrls: ['./slide-twenty-one.component.scss'],
    templateUrl: './slide-twenty-one.component.html'
})
export class SlideTwentyOneComponent {}
