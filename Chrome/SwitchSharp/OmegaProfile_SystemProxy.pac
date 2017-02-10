var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+SystemProxy", {
    "+SystemProxy": function() {
        ;
// CHINA VIP PAC file version 2017-01-31 //

function FindProxyForURL(url, host) {

if ((isPlainHostName(host)) ||
    (localHostOrDomainIs(host,"127.0.0.1")) ||
    (localHostOrDomainIs(host,"localhost")) ||
    (shExpMatch(host,"pac.zscalertwo.net")) ||
    (shExpMatch(host,"pww*")) ||
    (shExpMatch(host,"archive.philips.com")) ||
    (shExpMatch(host,"autodiscover.philips.com")) ||
    (shExpMatch(host,"bas.philips.com")) ||
    (shExpMatch(host,"cmp.philips.com")) ||
    (shExpMatch(host,"cms.philips.com")) ||
    (shExpMatch(host,"docs.philips.com")) ||
    (shExpMatch(host,"edit.boxlocalhost.com")) ||
    (shExpMatch(host,"filesearch.philips.com")) ||
    (shExpMatch(host,"fs.pamtst.philips.com")) ||
    (shExpMatch(host,"intranet.philips.com")) ||
    (shExpMatch(host,"*iras*.philips.com*")) ||
    (shExpMatch(host,"legaldms.philips.com")) ||
    (shExpMatch(host,"lyncdiscover.philips.com")) ||
    (shExpMatch(host,"mail.philips.com")) ||
    (shExpMatch(host,"mail-*.philips.com")) ||
    (shExpMatch(host,"meet.philips.com")) ||
    (shExpMatch(host,"mysite.philips.com")) ||
    (shExpMatch(host,"o365wac.philips.com")) ||
    (shExpMatch(host,"*philips.sofoncloud.com")) ||
    (shExpMatch(host,"ppeintranet.philips.com")) ||
    (shExpMatch(host,"ppemysite.philips.com")) ||
    (shExpMatch(host,"ppeshare.philips.com")) ||
    (shExpMatch(host,"ppeshare-intra.philips.com")) ||
    (shExpMatch(host,"share.philips.com")) ||
    (shExpMatch(host,"share-intra.philips.com")) ||
    (shExpMatch(host,"sip.philips.com")) ||
    (shExpMatch(host,"sipexternal.philips.com")) ||
    (shExpMatch(host,"sipfed.philips.com")) ||
    (shExpMatch(host,"tc-eu.asml.com")) ||
    (shExpMatch(host,"*webmeeting*.philips.com")) ||
    (shExpMatch(host,"www.crs.lighting.philips.com")) ||
    (shExpMatch(host,"www.instadose.com")) ||
    (shExpMatch(host,"mail.o365.lighting.com")) ||
    (shExpMatch(host,"mail-*.lighting.com")) ||
    (shExpMatch(host,"docs.lighting.com")) ||
    (shExpMatch(host,"mail.lighting.com")) ||
    (shExpMatch(host,"sip.lighting.com")) ||
    (dnsDomainIs(host,".011d.dedicated.lync.com")) ||
    (dnsDomainIs(host,".amec.cdc.philips.com")) ||
    (dnsDomainIs(host,".ao-srv.com")) ||
    (dnsDomainIs(host,".intra.lighting.com")) ||
    (dnsDomainIs(host,".remoteaccess.lighting.com")) ||
    (dnsDomainIs(host,".livemeeting.com")) ||
    (dnsDomainIs(host,".o365.philips.com")) ||
    (dnsDomainIs(host,".ocsweb.philips.com")) ||
    (dnsDomainIs(host,".placeware.com")) ||
    (dnsDomainIs(host,".sso.philips.com")) ||
    (dnsDomainIs(host,".local")))
      {
      return "DIRECT";
      }

var PrivateIP = /^(0|10|127|192\.168|172\.1[6789]|172\.2[0-9]|172\.3[01]|169\.254|192\.88\.99)\.[0-9.]+$/;

if ((PrivateIP.test(host)) ||
    (shExpMatch(host,"130.138.*")) ||
    (shExpMatch(host,"130.139.*")) ||
    (shExpMatch(host,"130.140.*")) ||
    (shExpMatch(host,"130.141.*")) ||
    (shExpMatch(host,"130.142.*")) ||
    (shExpMatch(host,"130.143.*")) ||
    (shExpMatch(host,"130.144.*")) ||
    (shExpMatch(host,"130.145.*")) ||
    (shExpMatch(host,"130.146.*")) ||
    (shExpMatch(host,"130.147.*")) ||
    (shExpMatch(host,"137.55.*")) ||
    (shExpMatch(host,"144.54.*")) ||
    (shExpMatch(host,"149.59.*")) ||
    (shExpMatch(host,"161.83.*")) ||
    (shExpMatch(host,"161.84.*")) ||
    (shExpMatch(host,"161.85.*")) ||
    (shExpMatch(host,"161.86.*")) ||
    (shExpMatch(host,"161.87.*")) ||
    (shExpMatch(host,"161.88.*")) ||
    (shExpMatch(host,"161.91.*")) ||
    (shExpMatch(host,"161.92.*")) ||
    (shExpMatch(host,"167.81.*")))
      {
      return "DIRECT";
      }

var InsidePGN = isInNet(dnsResolve("in-or-out-pgn-check.pixs.philips.com"), "130.139.105.21", "255.255.255.255");

if (((dnsDomainIs(host,"aok.arcot.com")) ||
     (dnsDomainIs(host,"aokpreview.arcot.co.in")) ||
     (shExpMatch(host,"58.32.235.155")) ||
     (dnsDomainIs(host,".macromedia.com")) ||
     (dnsDomainIs(host,".adobe.com"))) &&
     (!InsidePGN))
       {
       return "DIRECT";
       }

if (dnsDomainIs(host,".cn")) return "PROXY 180.166.223.109:10015; PROXY 140.207.91.234:10015; DIRECT";

if (!InsidePGN) return "PROXY 180.166.223.108:10015; PROXY 140.207.91.234:10015; DIRECT";

if ((!dnsDomainIs(host,".philips.com")) &&
    (!dnsDomainIs(host,".respironics.com")) &&
    (!dnsDomainIs(host,".ad-unisensor.dk")) &&
    (!dnsDomainIs(host,".allpartsmedical.com")) &&
    (!dnsDomainIs(host,".breezemedia.theonlinelearningcenter.com")) &&
    (!dnsDomainIs(host,".canlyte.com")) &&
    (!dnsDomainIs(host,".childmed.com")) &&
    (!dnsDomainIs(host,".colorkinetics.com")) &&
    (!dnsDomainIs(host,".dameca.dk")) &&
    (!dnsDomainIs(host,".discusdental.com")) &&
    (!dnsDomainIs(host,".genlyte.com")) &&
    (!dnsDomainIs(host,".i-gdc.com")) &&
    (!dnsDomainIs(host,".intellispaceconnect.com")) &&
    (!dnsDomainIs(host,".intermagnetics.com")) &&
    (!dnsDomainIs(host,".intranet.saeco")) &&
    (!dnsDomainIs(host,".ledalite.com")) &&
    (!dnsDomainIs(host,".lightolier.com")) &&
    (!dnsDomainIs(host,".lumec-intranet.com")) &&
    (!dnsDomainIs(host,".lumileds.org")) &&
    (!dnsDomainIs(host,".medsagetechnologies.com")) &&
    (!dnsDomainIs(host,".microdose.se")) &&
    (!dnsDomainIs(host,".philips.net")) &&
    (!dnsDomainIs(host,".teletrol.com")) &&
    (!dnsDomainIs(host,".t-systems.com")) &&
    (!dnsDomainIs(host,".volcanocorp.com")) &&
    (!dnsDomainIs(host,".volcanotherapeutics.com")))
      {
      return "PROXY 42.99.164.34:10015; PROXY 185.46.212.34:10015; DIRECT";
      }

var ResolvedIP = dnsResolve(host);

if ((!isResolvable(host)) ||
    (isInNet(ResolvedIP, "130.138.224.0", "255.255.224.0")) ||
    (isInNet(ResolvedIP, "161.84.224.0", "255.255.224.0")) ||
    (isInNet(ResolvedIP, "161.85.112.0", "255.255.240.0")) ||
    (isInNet(ResolvedIP, "161.88.224.0", "255.255.224.0")))
      {
      return "PROXY 42.99.164.34:10015; PROXY 185.46.212.34:10015; DIRECT";
      }

if ((PrivateIP.test(ResolvedIP)) ||
    (isInNet(ResolvedIP, "130.138.0.0", "255.254.0.0")) ||
    (isInNet(ResolvedIP, "130.140.0.0", "255.252.0.0")) ||
    (isInNet(ResolvedIP, "130.144.0.0", "255.252.0.0")) ||
    (isInNet(ResolvedIP, "137.55.0.0", "255.255.0.0")) ||
    (isInNet(ResolvedIP, "144.54.0.0", "255.255.0.0")) ||
    (isInNet(ResolvedIP, "149.59.0.0", "255.255.0.0")) ||
    (isInNet(ResolvedIP, "161.83.0.0", "255.255.0.0")) ||
    (isInNet(ResolvedIP, "161.84.0.0", "255.252.0.0")) ||
    (isInNet(ResolvedIP, "161.88.0.0", "255.255.0.0")) ||
    (isInNet(ResolvedIP, "161.91.0.0", "255.255.0.0")) ||
    (isInNet(ResolvedIP, "161.92.0.0", "255.255.0.0")) ||
    (isInNet(ResolvedIP, "167.81.0.0", "255.255.0.0")) ||
    (isInNet(ResolvedIP, "192.68.49.0", "255.255.255.0")))
      {
      return "DIRECT";
      }

return "PROXY 42.99.164.34:10015; PROXY 185.46.212.34:10015; DIRECT";
}

/* End of PAC */;
        return FindProxyForURL;
    }.call(this)
});