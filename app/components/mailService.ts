import {EmailObject} from "./emailObject"
export class MailService
{
    private static emails:Array<EmailObject> =
    [
        {to:"thanhtuit27fdsfdf@", subject: "subject 1", message:"Hello a Tu", date:"24/07/2016"},
        {to:"tuanhaong@", subject: "subject 2",message:"hello Tuan", date:"24/01/2016"}
    ];
    public getMails()
    {
       return MailService.emails;
    }
    public sendMail(emailItem:any)
    {
        MailService.emails.push(emailItem);
    }

}