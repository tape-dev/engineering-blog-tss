import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { bookmarkFilledSVG, bookmarkSVG } from '../icon';

@Component({
  selector: 'engineering-blog-tss-icon-button-css',
  template: `
  <button [disabled]="disabled">
    <div class="icon" [ngClass]="{'icon-active': active, 'icon-disabled': disabled}" [innerHTML]="svg"></div>
  </button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./icon-button-css.component.css']
})
export class IconButtonCssComponent {
  constructor(private sanitizer: DomSanitizer) {}

  @Input() active: boolean;
  @Input() disabled: boolean;

  get svg() {
    const svg = this.active ? bookmarkFilledSVG : bookmarkSVG;
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
