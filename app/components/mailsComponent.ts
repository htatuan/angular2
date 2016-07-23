
import {Component} from "angular2/core";
import {MailService} from "./mailService";
import {Router} from "angular2/router";
@Component({
    templateUrl: "app/components/mailsComponents.html"
})
export class MailsComponent {
    public selectedMailItem: any;
    public router: Router;
    public mails: Array<any> = [];
    constructor(mailService: MailService, router: Router) {
        this.mails = mailService.getMails();
        this.router = router;
    }
    public onMailClicked(mailItem: any) {
        this.selectedMailItem = mailItem;
        console.log(mailItem.title);
    }
    public onSendMailClicked() {
        this.router.navigate(["EmailCreate"]);
    }

}