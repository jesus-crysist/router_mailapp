import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ComposeComponent} from "./compose/compose.component";
import {ConversationListComponent} from "./conversations/conversation-list/conversation-list.component";
import {ConversationComponent} from "./conversations/conversation/conversation.component";
import {MessageListComponent} from "./messages/message-list/message-list.component";
import {MessageComponent} from "./messages/message/message.component";

const routes = [
  {path: '', pathMatch: 'full', redirectTo: '/inbox'},
  {
    path: ':folder',
    children: [
      {
        path: '',
        component: ConversationListComponent,
        resolve: { conversations: 'conversationsResolver' }
      },
      {
        path: ':id',
        component: ConversationComponent,
        resolve: { conversation: 'conversationResolver' },
        children: [
          {
            path: '',
            component: MessageListComponent,
            resolve: { messages: 'messagesResolver'},
          },
          {
            path: 'messages/:id',
            component: MessageComponent,
            resolve: { messages: 'messagesResolver', message: 'messageResolver'},
          }
        ]
      }
    ]
  },
  {
    path: 'compose',
    component: ComposeComponent,
    outlet: 'popup'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
