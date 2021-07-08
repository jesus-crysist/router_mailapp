import {Repo} from "./model";
import {ActivatedRouteSnapshot} from "@angular/router";

export function conversationsResolver(repo: Repo) {
    return (route: ActivatedRouteSnapshot) => repo.conversations(route.params['folder']);
}

export function conversationResolver(repo: Repo) {
    return (route: ActivatedRouteSnapshot) => repo.conversation(+route.params['id']);
}

export function messagesResolver(repo: Repo) {
    // @ts-ignore
    return (route: ActivatedRouteSnapshot) =>  repo.messageTitles(+route.parent.params['id']);
}

export function messageResolver(repo: Repo) {
    return (route: ActivatedRouteSnapshot) => repo.message(+route.params['id']);
}
