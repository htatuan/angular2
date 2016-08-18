import {Component} from "angular2/core";
import {MailService} from "./mailService"
import {Router} from "angular2/router"
import {EmailObject} from "./emailObject"
import {Route} from "./routeConst"
import {EventManager} from "./eventManager"
@Component({
    templateUrl: "app/components/sendMailComponent.html"
})
export class SendMailComponent {
    public email: EmailObject;
    public mailService: MailService;
    public router: Router;
    public errors:any =[];
    constructor(mailService: MailService, router: Router) {
        this.mailService = mailService;
        this.router = router;
        this.email = new EmailObject();
        let self = this;
        EventManager.getInstance().subcribe("mail.createEmail", function (errors: any) {
            self.handleError(errors);
        });
    }
    public sendMailClicked(emailItem: EmailObject) {
        let self = this;
        console.log(emailItem);

        this.mailService.sendMail(emailItem).then(function (mail: EmailObject) {
           // self.router.navigate([Route.mails]);
        });

    }
    private handleError(errors: any) {
        console.log(errors);
        this.errors=errors;
    }
}