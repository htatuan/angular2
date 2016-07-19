import { bootstrap } from "angular2/platform/browser";
import {HTTP_PROVIDERS, Http} from "angular2/http";
import {ROUTER_PROVIDERS} from "angular2/router";
import {provide, enableProdMode} from "angular2/core";
import {DefaultLayout} from "./layout";
import {MailService} from "./components/mailService";
bootstrap(DefaultLayout, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  MailService,
])
  .catch(err => console.error(err));

