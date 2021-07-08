import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {Actions} from "../shared/model";

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css']
})
export class ComposeComponent {
  form = new FormGroup({
    title: new FormControl('', Validators.required),
    body: new FormControl('')
  });

  private actions: Actions;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
  ) {
    this.actions = new Actions();
  }

  onSubmit() {
    // @ts-ignore
    const conversationRoute = this.route.snapshot.root.firstChild.firstChild;
    // @ts-ignore
    const conversationId = +conversationRoute.params['id'];

    this.actions.next({
      type: 'reply',
      conversationId: conversationId,
      payload: this.form.value,
      onSuccess: () => this.hidePopup()
    });
  }

  private hidePopup() {
    this.router.navigate(['/', {outlets: {popup: null}}]);
  }

}
