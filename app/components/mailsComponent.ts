
import {Component} from "angular2/core";
@Component({
    templateUrl: "app/components/mailsComponents.html"
})
export class MailsComponent{
    public selectedMailItem: any;
    public mails: Array<any>=
    [
            {title: "mail 1", sender:"tuanhoang@gmail.com", date:"1/1/1"},
             {title: "mail 2", sender:"tuanhaong@yahoo.com", date:"1/1/1"}

    ];
    public onMailClicked (mailItem :any)
    {
         this.selectedMailItem =mailItem;
        console.log(mailItem.title);
        
    }
    
   
}