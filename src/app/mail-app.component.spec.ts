import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MailAppComponent } from './mail-app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        MailAppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(MailAppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'router-mailapp'`, () => {
    const fixture = TestBed.createComponent(MailAppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('router-mailapp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(MailAppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('router-mailapp app is running!');
  });
});
