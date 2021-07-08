import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeComponent } from './compose.component';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {ComposeCmp} from "../../../src-old/app/conversations";

describe('ComposeComponent', () => {
  let component: ComposeComponent;
  let fixture: ComponentFixture<ComposeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('submits an action', () => {
    const actions = new BehaviorSubject(null);

    const route = {
      snapshot: {
        root: {
          firstChild: {
            firstChild: { params: { id: 11 } }
          }
        }
      }
    };

    const c = new ComposeCmp(<any>route, null, actions);
    c.form.setValue({title: 'actualTitle', body: 'actualBody'});
    c.onSubmit();

    expect(actions.value.conversationId).toEqual(11);
    expect(actions.value.payload).toEqual({title: 'actualTitle', body: 'actualBody'});
  });
});
