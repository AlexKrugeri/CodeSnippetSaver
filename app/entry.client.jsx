import { RemixBrowser } from "@remix-run/react";
import { hydrate } from "react-dom";

hydrate(<RemixBrowser />, document);

if('serviceWorker' in navigator) {
    navigator.serviceWorker
         .register('/sw.js')
         .then(function() { console.log("Service Worker Registered"); });
}