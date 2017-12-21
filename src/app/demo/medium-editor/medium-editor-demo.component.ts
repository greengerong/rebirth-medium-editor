import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 're-medium-editor-demo',
  templateUrl: './medium-editor-demo.component.html',
  styles: [`
    .toolbar {
      position: relative;
      height: 52px;
      margin-bottom: 4px;
    }

    ::ng-deep .toolbar .medium-editor-toolbar {
      visibility: visible;
      width: 100%;
      z-index: 100;
    }
  `]
})
export class MediumEditorDemoComponent implements OnInit {


  @ViewChild('toolbar') toolbar: ElementRef;
  html: string = `<div><h1>Getting started</h1>
        <blockquote>
        <p>Angular UI plugin with MediumEditor</p>
        </blockquote>
        <h2 >Welcome</h2>
        <p>Welcome to <code>@Rebirth/MediumEditor</code>. This repo is Angular ui library for MediumEditor. And it is being built from scratch in Typescript.</p>
        <p>You can check <a href="/rebirth-medium-editor">Demo Showcase</a> &amp; <a href="/rebirth-medium-editor/compodocs/overview.html">API document</a>.</p>
        <h2 >Dependencies</h2>
        <p><code>@Rebirth/MediumEditor</code> is all base on Angular and MediumEditor.</p>
        <h2>FAQ</h2>
        <ul>
        <li>Please check <a href="https://github.com/greengerong/rebirth-medium-editor/issues">github</a> issue for your common problems / solutions.</li>
        </ul>
    </div>
`;

  staticOptions: any;

  ngOnInit(): void {
    this.staticOptions = {
      placeholder: {
        text: 'Type your text',
        hideOnClick: true
      },
      toolbar: {
        buttons: ['bold', 'italic', 'underline', 'anchor'],
        relativeContainer: this.toolbar.nativeElement,
        static: true
      }
    }
  }
}

