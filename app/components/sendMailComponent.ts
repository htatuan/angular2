import {Component} from "angular2/core";
import {MailService} from "./mailService"
import {Router} from "angular2/router"
import {EmailObject} from "./emailObject"
@Component({
    templateUrl: "app/components/sendMailComponent.html"
})
export class SendMailComponent {
    public email: EmailObject ;
    public mailService: MailService;
    public router: Router;
    constructor(mailService: MailService, router: Router ) {
        this.mailService = mailService;
        this.router = router;
        this.email=new EmailObject();
    }
    public sendMailClicked(emailItem:EmailObject) {
        this.mailService.sendMail(emailItem);
        this.router.navigate(["Mails"]);
    }
}