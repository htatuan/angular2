import {Component} from "angular2/core";
import {MailService} from "./mailService"
import {Router} from "angular2/router"
import {EmailObject} from "./emailObject"
import {Route} from "./routeConst"
@Component({
    templateUrl: "app/components/sendMailComponent.html"
})
export class SendMailComponent {
    public email: EmailObject;
    public mailService: MailService;
    public router: Router;

    constructor(mailService: MailService, router: Router) {
        this.mailService = mailService;
        this.router = router;
        this.email = new EmailObject();
        let self = this;

    }
    public sendMailClicked(emailItem: EmailObject) {
        let self=this;
        console.log(emailItem);
        
        this.mailService.sendMail(emailItem).then(function (mail: EmailObject) {
            self.router.navigate([Route.mails]);
        }).catch(function (data) {
            //alert();
            console.log(data);
            
        });

    }
}