import { Injectable, Type } from '@angular/core';
import {
  MediumEditorDemoComponent
  // component import
} from '../../demo';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class DemoConfigService {
  constructor(private domSanitizer: DomSanitizer) {

  }

  gettingStarted = {
    readMe: this.domSanitizer.bypassSecurityTrustHtml(require('!html-loader!markdown-loader!../../exports/README.md'))
  };

  components: { name: string, cmp: Type<any>, directory?: string, readMe?: any, html?: string, ts?: string }[] = [
    {
      name: 'MediumEditor',
      directory: 'medium-editor',
      cmp: MediumEditorDemoComponent,
      readMe: this.domSanitizer.bypassSecurityTrustHtml(require('!html-loader!markdown-loader!../../exports/medium-editor/README.md')),
      html: require('!raw-loader!../../demo/medium-editor/medium-editor-demo.component.html'),
      ts: require('!raw-loader!../../demo/medium-editor/medium-editor-demo.component.ts'),
    },
    // component declare
  ];
}
