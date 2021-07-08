import {async, fakeAsync, TestBed} from '@angular/core/testing';

import {ActivatedRoute} from "@angular/router";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {BehaviorSubject, of} from "rxjs";
import {addMatchers, advance} from "../../../../src-old/app/spec_utils";
import {ConversationListComponent} from "./conversation-list.component";

describe('ConversationsComponent', () => {
  let conversations: BehaviorSubject<any>;

  beforeEach(async(() => {
    addMatchers();

    conversations = new BehaviorSubject([
      { id: 1, title: 'Title1', user: {name: 'Kate', email: 'katez@example.com'} },
      { id: 2, title: 'Title2', user: {name: 'Corin', email: 'corin@example.com'} }
    ]);

    const params = of({folder: 'inbox'});
    const data = new BehaviorSubject<any>({conversations});

    TestBed.configureTestingModule({
      declarations: [ConversationListComponent],
      providers: [
        { provide: ActivatedRoute, useValue: {params, data} }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    TestBed.compileComponents();
  }));

  it('renders a list of conversations', fakeAsync(() => {
    const f = TestBed.createComponent(ConversationListComponent);
    advance(f);

    expect(f.debugElement.nativeElement).toContain('Title1');
    expect(f.debugElement.nativeElement).toContain('Title2');
  }));

  it('updates the list of conversations', fakeAsync(() => {
    const f = TestBed.createComponent(ConversationListComponent);
    advance(f);

    conversations.next([
      { id: 3, title: 'Title3', user: {name: 'Someone Else', email: 'someonelse@example.com'} }
    ]);

    advance(f);
    expect(f.debugElement.nativeElement).toContain('Title3');
  }));
});
