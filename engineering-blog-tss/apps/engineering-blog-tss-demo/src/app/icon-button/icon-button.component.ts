import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { css } from '@emotion/css';
import { bookmarkFilledSVG, bookmarkSVG } from './icon-svg';

const colors = {
  primary: '#0071BB',
} as const;

const ICON_BUTTON_SIZE = '50px';

@Component({
  selector: 'engineering-blog-tss-icon-button',
  template: `
  <button [disabled]="disabled">
    <div [class]="iconClass" [innerHTML]="svg"></div>
  </button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  constructor(private sanitizer: DomSanitizer) {}

  @Input() active: boolean;
  @Input() disabled: boolean;

  get iconClass() {
    return css({
      width: ICON_BUTTON_SIZE,
      height: ICON_BUTTON_SIZE,
      fill: colors.primary,
      opacity: this.disabled ? 0.5 : undefined,
      cursor: this.disabled ? 'initial' : 'pointer',
    })
  }

  get svg() {
    const svg = this.active ? bookmarkFilledSVG : bookmarkSVG;
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
