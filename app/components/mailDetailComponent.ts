import {Component} from "angular2/core";
import {MailService} from "./mailService";
import {Router} from "angular2/router";
import {EmailObject} from "./emailObject";
import {Route} from "./routeConst"
import {RouteParams} from "angular2/router"
@Component({
    templateUrl: "/app/components/mailDetailComponent.html"
})
export class MailDetailComponent {

    private mailService: MailService;
    private id: string;
    private email: EmailObject;
    private router: Router;
    constructor(routeParams: RouteParams, mailService: MailService, router: Router) {
        let self = this;
        self.id = routeParams.get("id");
        self.mailService = mailService;
        self.router = router;

        self.mailService.getMail(self.id).then(function (response:any) {
            self.email = response;
        });
    }

    public updateMailClicked(id:any, email: EmailObject) {
        let self = this;
        self.mailService.updateEmail(id,email).then(function () {
            console.log('done');
            self.router.navigate([Route.mails]);
        });
    }

}