import {Component} from "angular2/core";
import {MailService} from "./mailService";
import {Router} from "angular2/router";
import {EmailObject} from "./emailObject";
import {Route} from "./routeConst"
import {RouteParams} from "angular2/router";
import {EventManager} from "./eventManager";
@Component({
    templateUrl: "/app/components/mailDetailComponent.html"
})
export class MailDetailComponent {

    private mailService: MailService;
    private id: string;
    private email: EmailObject;
    private router: Router;
    public errors: any = [];
    constructor(routeParams: RouteParams, mailService: MailService, router: Router) {
        let self = this;
        self.id = routeParams.get("id");
        self.mailService = mailService;
        self.router = router;

        self.mailService.getMail(self.id).then(function (response: any) {
            self.email = response;
        });
        EventManager.getInstance().subcribe("mail.getMailDetail", function (errors: any) {
            self.handleError(self.errors);
        });
    }

    public updateMailClicked(id: any, email: EmailObject) {
        let self = this;
        self.mailService.updateEmail(id, email).then(function () {
         
            self.router.navigate([Route.mails]);
        });
    }

    private handleError(errors: any) {
        console.log(errors);
        this.errors = errors;
    }
}