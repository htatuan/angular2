import {EmailObject} from "./emailObject";
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';
import {Injectable} from "angular2/core";
import {Http, Headers} from "angular2/http";
@Injectable()
export class MailService {
    private http: Http;
    private headers: Headers;
    private url: string;
    constructor(http: Http) {
        this.http = http;
        this.headers = new Headers();
        this.headers.append("Content-Type", "application/json");
        this.headers.append("Accept", "application/json");
        this.url = "http://localhost:50311/api/mails";
    }

    public getMails() {
        return this.http.get(this.url, { headers: this.headers })
            .toPromise()
            .then((response: any) => response.json());
    }

    public sendMail(emailItem: any) {
        return this.http.post(this.url, JSON.stringify(emailItem), { headers: this.headers })
            .toPromise()
            .then((response: any) => response.json());
    }

    public getMail(id: any) {
        var urlDetail = this.url + "/" + id;
        return this.http.get(urlDetail, { headers: this.headers })
            .toPromise()
            .then((response: any) => this.handleResponse(response));
    }

    public updateEmail(id: any, emailItem: any) {
        var urlDetail = this.url + "/" + id;
        return this.http.put(urlDetail, JSON.stringify(emailItem), { headers: this.headers })
            .toPromise().then((response: any) => response.json());
    }

    public deleteEmail(id: any) {
        var urlDelete = this.url + "/" + id;
        return this.http.delete(urlDelete, { headers: this.headers })
            .toPromise()
            .then((response: any) => response.json());
    }

    private handleResponse(response: any) {
        var result = response.json();
        if (result.status == 200) {
            return result.data;
        }
        else {
            var message = "";
            result.errors.forEach((item: any) => {
                message += item.message;
            });
            alert(message);
        }
    }
}