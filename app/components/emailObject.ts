
export class EmailObject {
    private _to: string;
    public get to(): string {
        return this._to;
    }
    public set to(v: string) {
        this._to = v;
    }


    private _subject: string;
    public get subject(): string {
        return this._subject;
    }
    public set subject(v: string) {
        this._subject = v;
    }



    private _message: string;
    public get message(): string {
        return this._message;
    }
    public set message(v: string) {
        this._message = v;
    }


    private _date: string;
    public get date(): string {
        return this._date;
    }
    public set date(v: string) {
        this._date = v;
    }

}