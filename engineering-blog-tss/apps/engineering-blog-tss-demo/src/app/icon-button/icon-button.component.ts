import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { css } from '@emotion/css';
import {iconSVG} from './icon-svg'

@Component({
  selector: 'engineering-blog-tss-icon-button',
  template: `
  <button>
    <div [class]="iconClass" [innerHTML]="svg"></div>
  </button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent  {
    constructor(private sanitizer: DomSanitizer) { }

  @Input() active: boolean;
  @Input() disabled: boolean;

  iconClass = css({width: '100px', height: '100px'})

  readonly svg = this.sanitizer.bypassSecurityTrustHtml(iconSVG);
}
