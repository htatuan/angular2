import {Component} from "angular2/core";
import {RouteConfig, RouterOutlet, RouterLink} from "angular2/router";
import{MailsComponent} from "./components/mailsComponent";
import{MailDetailComponent} from "./components/mailDetailComponent";
import{SendMailComponent} from "./components/sendMailComponent";
import {Route} from "./components/routeConst"
@Component({
    selector: "default-layout",
    templateUrl: "app/layout.html",
    directives:[RouterOutlet]
})
@RouteConfig([
    {path:"/emails",name:Route.mails,component:MailsComponent,useAsDefault:true},
    {path:"/email-detail",name:Route.detail,component:MailDetailComponent},
    {path:"/send-mail",name:Route.sendMail,component:SendMailComponent},
    {path:"/edit-mail/:id",name:Route.edit,component:MailDetailComponent}

])
export class DefaultLayout {
}