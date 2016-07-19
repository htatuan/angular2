
import {Component} from "angular2/core";
import {MailService} from "./mailService";
@Component({
    templateUrl: "app/components/mailsComponents.html"
})
export class MailsComponent{
    public selectedMailItem: any;
    public mails: Array<any>=
    [
           
    ];
    public onMailClicked (mailItem :any)
    {
         this.selectedMailItem =mailItem;
        console.log(mailItem.title);
        
    }
    constructor (mailService:MailService)
    {

        //let mailService:MailService = new MailService();   
        this.mails=mailService.getMails();     
    }
   
}