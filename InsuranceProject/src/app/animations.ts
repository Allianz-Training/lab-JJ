import {
  animate,
  animateChild,
  group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('* => HomePage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        width: '100%',
      }),
    ]),
    query(':enter', [style({ opacity: 0 })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('0.5s ease-out', style({ opacity: 0 }))]),
      query(':enter', [animate('0.5s ease-out', style({ opacity: 1 }))]),
    ]),
    query(':enter', animateChild()),
  ]),
  transition('* => PackagesPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        width: '100%',
      }),
    ]),
    query(':enter', [style({ opacity: 0 })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('0.5s ease-out', style({ opacity: 0 }))]),
      query(':enter', [animate('0.5s ease-out', style({ opacity: 1 }))]),
    ]),
    query(':enter', animateChild()),
  ]),
  transition('* => QaPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        width: '100%',
      }),
    ]),
    query(':enter', [style({ opacity: 0 })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('0.5s ease-out', style({ opacity: 0 }))]),
      query(':enter', [animate('0.5s ease-out', style({ opacity: 1 }))]),
    ]),
    query(':enter', animateChild()),
  ]),
  transition('* => ContactPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        width: '100%',
      }),
    ]),
    query(':enter', [style({ opacity: 0 })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('0.5s ease-out', style({ opacity: 0 }))]),
      query(':enter', [animate('0.5s ease-out', style({ opacity: 1 }))]),
    ]),
    query(':enter', animateChild()),
  ]),
  transition('* => HistoryPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        width: '100%',
      }),
    ]),
    query(':enter', [style({ opacity: 0 })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('0.5s ease-out', style({ opacity: 0 }))]),
      query(':enter', [animate('0.5s ease-out', style({ opacity: 1 }))]),
    ]),
    query(':enter', animateChild()),
  ]),
  transition('* => ClaimPage', [
    style({ position: 'relative' }),
    query(':enter, :leave', [
      style({
        position: 'absolute',
        width: '100%',
      }),
    ]),
    query(':enter', [style({ opacity: 0 })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [animate('0.5s ease-out', style({ opacity: 0 }))]),
      query(':enter', [animate('0.5s ease-out', style({ opacity: 1 }))]),
    ]),
    query(':enter', animateChild()),
  ]),
]);
