import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrismComponent } from './prism/prism.component';
import { SlideEightComponent } from './slide-eight/slide-eight.component';
import { SlideEighteenComponent } from './slide-eighteen/slide-eighteen.component';
import { SlideElevenComponent } from './slide-eleven/slide-eleven.component';
import { SlideFifteenComponent } from './slide-fifteen/slide-fifteen.component';
import { SlideFiveComponent } from './slide-five/slide-five.component';
import { SlideFourComponent } from './slide-four/slide-four.component';
import { SlideFourteenComponent } from './slide-fourteen/slide-fourteen.component';
import { SlideNineComponent } from './slide-nine/slide-nine.component';
import { SlideNineteenComponent } from './slide-nineteen/slide-nineteen.component';
import { SlideOneComponent } from './slide-one/slide-one.component';
import { SlideSevenComponent } from './slide-seven/slide-seven.component';
import { SlideSeventeenComponent } from './slide-seventeen/slide-seventeen.component';
import { SlideSixComponent } from './slide-six/slide-six.component';
import { SlideSixteenComponent } from './slide-sixteen/slide-sixteen.component';
import { SlideTenComponent } from './slide-ten/slide-ten.component';
import { SlideThirteenComponent } from './slide-thirteen/slide-thirteen.component';
import { SlideThreeComponent } from './slide-three/slide-three.component';
import { SlideTwelveComponent } from './slide-twelve/slide-twelve.component';
import { SlideTwentyOneComponent } from './slide-twenty-one/slide-twenty-one.component';
import { SlideTwentyThreeComponent } from './slide-twenty-three/slide-twenty-three.component';
import { SlideTwentyTwoComponent } from './slide-twenty-two/slide-twenty-two.component';
import { SlideTwentyComponent } from './slide-twenty/slide-twenty.component';
import { SlideTwoComponent } from './slide-two/slide-two.component';
import { SlidesRoutingModule } from './slides-routing.module';
import { SlidesComponent } from './slides.component';

@NgModule({
    declarations: [
        PrismComponent,
        SlideEightComponent,
        SlideEighteenComponent,
        SlideElevenComponent,
        SlideFifteenComponent,
        SlideFiveComponent,
        SlideFourComponent,
        SlideFourteenComponent,
        SlideNineComponent,
        SlideNineteenComponent,
        SlideOneComponent,
        SlideSevenComponent,
        SlideSeventeenComponent,
        SlideSixComponent,
        SlideSixteenComponent,
        SlideTenComponent,
        SlideThirteenComponent,
        SlideThreeComponent,
        SlideTwelveComponent,
        SlideTwentyOneComponent,
        SlideTwentyThreeComponent,
        SlideTwentyTwoComponent,
        SlideTwentyComponent,
        SlideTwoComponent,
        SlidesComponent
    ],
    imports: [
        CommonModule,
        SlidesRoutingModule
    ]
})
export class SlidesModule { }
