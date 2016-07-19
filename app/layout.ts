import {Component} from "angular2/core";
import {RouteConfig, RouterOutlet, RouterLink} from "angular2/router";
import{MailsComponent} from "./components/mailsComponent";
import{MailDetailComponent} from "./components/mailDetailComponent";
@Component({
    selector: "default-layout",
    templateUrl: "app/layout.html",
    directives:[RouterOutlet]
})
@RouteConfig([
    {path:"/emails",name:"Mails",component:MailsComponent,useAsDefault:true},
    {path:"/email-detail",name:"MailDetail",component:MailDetailComponent},
])
export class DefaultLayout {
}