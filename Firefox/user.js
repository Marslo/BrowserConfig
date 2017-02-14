// turn off application updates:
user_pref("app.update.enabled", false);
user_pref("app.update.auto", false);
user_pref("app.update.silent", false);
user_pref("browser.download.manager.flashCount",5);
user_pref("general.warnOnAboutConfig", false);

// DNT, don't track me
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.sanitize.migrateFx3user_prefs", true);

// Network related
user_pref("network.http.pipelining.ssl" , true);
user_pref("network.http.pipelining.firstrequest", true);
user_pref("network.http.pipelining", true);
user_pref("network.http.pipelining.maxrequests", 8);
user_pref("network.http.proxy.pipelining", true);
user_pref("content.interrupt.parsing", true);
user_pref("content.max.tokenizing.time", 2250000);
user_pref("content.notify.interval", 750000);
user_pref("content.notify.ontimer", true);
user_pref("content.notify.backoffcount", 5);
user_pref("content.switch.threshold", 750000);
user_pref("nglayout.initialpaint.delay", 0);

// Disable warning for install non-valid add-ons
user_pref("xpinstall.signatures.required", false);

// Un-trust link
// user_pref("browser.xul.error_pages.expert_bad_cert", true);
// disable certification OCSP
// user_pref("security.OCSP.enabled", 0);
