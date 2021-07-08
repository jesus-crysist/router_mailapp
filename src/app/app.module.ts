import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {MailAppComponent} from './mail-app.component';
import {Actions, Repo} from "./shared/model";
import {conversationResolver, conversationsResolver, messageResolver, messagesResolver} from "./shared/resolvers";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ComposeComponent} from './compose/compose.component';
import {ConversationListComponent} from './conversations/conversation-list/conversation-list.component';
import {ConversationComponent} from './conversations/conversation/conversation.component';
import {MessageListComponent} from './messages/message-list/message-list.component';
import {MessageComponent} from './messages/message/message.component';
import {CommonModule} from "@angular/common";


@NgModule({
    declarations: [
        MailAppComponent,
        ComposeComponent,
        ConversationListComponent,
        ConversationComponent,
        MessageListComponent,
        MessageComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
    ],
    providers: [
        Repo,
        Actions,
        {provide: 'conversationsResolver', useFactory: conversationsResolver, deps: [Repo]},
        {provide: 'conversationResolver', useFactory: conversationResolver, deps: [Repo]},
        {provide: 'messagesResolver', useFactory: messagesResolver, deps: [Repo]},
        {provide: 'messageResolver', useFactory: messageResolver, deps: [Repo]}
    ],
    bootstrap: [MailAppComponent]
})
export class AppModule {
}
