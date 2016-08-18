
import {Component} from "angular2/core";
import {MailService} from "./mailService";
import {Router} from "angular2/router";
import {EmailObject} from "./emailObject";
import {Route} from "./routeConst";
import {EventManager} from "./eventManager"  ;
@Component({
    templateUrl: "app/components/mailsComponents.html"
})
export class MailsComponent {
    public selectedMailItem: any;
    public router: Router;
    public mails: Array<EmailObject> = [];
    public emailDetail: EmailObject;
    public mailService: MailService;
    public errors:any=[];
    constructor(mailService: MailService, router: Router) {
        let self = this;
        self.router = router;
        self.mailService = mailService;
        mailService.getMails().then(function (mails: Array<EmailObject>) {
            self.mails = mails;
        });
         EventManager.getInstance().subcribe("mail.getAllMail", function (errors: any) {
            self.handleError(errors);
        });
        EventManager.getInstance().subcribe("mail.deleteEmail", function (errors: any) {
            self.handleError(errors);
        });
        EventManager.getInstance().subcribe("mail.updateMail", function (errors: any) {
            self.handleError(errors);
        });
    }

    public onMailClicked(id: any) {
        let self = this;
        self.mailService.getMail(id).then(function (mail: EmailObject) {
            self.emailDetail = mail;
        });
    }

    public onSendMailClicked() {
        this.router.navigate([Route.sendMail]);
    }

    public onDetailClicked(id: any) {
        let self = this;
        self.router.navigate([Route.edit, { id: id }]);
    }

    public onDeleteClicked(id: any) {
        let self = this;
        self.mailService.deleteEmail(id).then(function () {
            var removedMail = self.mails.find(m => m.id == id);
            var index = self.mails.indexOf(removedMail);
            self.mails.splice(index, 1);
        });
    }
     private handleError(errors: any) {
        console.log(errors);
        this.errors=errors;
    }
}