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
}("+AutoSwitch", {
    "+AutoSwitch": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)addthis\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)d2dpogu56nifyc\.cloudfront\.net$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)maps\.googleapis\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)gstatic\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)google\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)gitlab\.com$/.test(host)) return "+SingaporeProxy";
        if (/^161\.91\.26\.168$/.test(host)) return "DIRECT";
        if (/^161\.91\.26\.166$/.test(host)) return "DIRECT";
        if (/(?:^|\.)mathjax\.org$/.test(host)) return "+NetherlandsProxy";
        if (/(?:^|\.)github\.com$/.test(host)) return "+SingaporeProxy";
        if (/^130\.147\.180\.88$/.test(host)) return "+SystemProxy";
        if (/(?:^|\.)code-ur-life\.blogspot\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)adspsp\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)werally\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)doubleclick\.net$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)redhat\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)concursolutions\.com$/.test(host)) return "+SystemProxy";
        if (/(?:^|\.)google\.co\.uk$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)iobit\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)adroll\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)rubiconproject\.com$/.test(host)) return "+SingaporeProxy";
        if (/^130\.147\.180\./.test(host)) return "DIRECT";
        if (/^161\.91\.26\./.test(host)) return "DIRECT";
        if (/(?:^|\.)philips\.com$/.test(host)) return "+SystemProxy";
        if (/(?:^|\.)cyberciti\.org$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)tlscontact\.com$/.test(host)) return "+SingaporeProxy";
        if (/^130\.147\.180\./.test(host)) return "+SystemProxy";
        if (/(?:^|\.)51cto\.com$/.test(host)) return "+SystemProxy";
        if (/(?:^|\.)csdn\.net$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)vmware\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)brightedge\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)foobar2000\.org$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)content\.googleapis\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)baidu\.com$/.test(host)) return "+SystemProxy";
        if (/(?:^|\.)googlevideo\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)youtube-nocookie\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)vim\.org$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)google\.com\.my$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)webtype\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)qq\.com$/.test(host)) return "+SystemProxy";
        if (/(?:^|\.)miaozhen\.com$/.test(host)) return "+SystemProxy";
        if (/(?:^|\.)foxitsoftware\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)w3schools\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)footprintdns\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)googleusercontent\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)chart\.googleapis\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)westfield\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)tiqcdn\.com$/.test(host)) return "+SingaporeProxy";
        if (/^161\.91\.4\.88$/.test(host)) return "DIRECT";
        if (/(?:^|\.)d1zw7v9lpbbx9f\.cloudfront\.net$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)madcatzhosting\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)ssl-images-amazon\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)madcatz\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)google-analytics\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)windowsnetworking\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)2mdn\.net$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)serving-sys\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)wp\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)addthisedge\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)gfi\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)facebook\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)nsstatic\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)yahoo\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)scorecardresearch\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)crwdcntrl\.net$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)fbcdn\.net$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)addictivetips\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)disqus\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)btrll\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)adform\.net$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)sociomantic\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)sekindo\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)bing\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)msn\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)adnxs\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)www\.googleapis\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)intellitxt\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)mindtouch\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)typekit\.net$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)rtbidder\.net$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)revcontent\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)bluekai\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)windowscentral\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)gravatar\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)adzerk\.net$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)tribalfusion\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)stacksocial\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)stackcommerce\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)exponential\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)guidingtech\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)sina\.cn$/.test(host)) return "+SystemProxy";
        if (/(?:^|\.)mathtag\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)flashtalking\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)bbc\.co\.uk$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)outbrain\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)chartbeat\.net$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)krxd\.net$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)bbci\.co\.uk$/.test(host)) return "+SingaporeProxy";
        if (/^130\.147\.182\.218$/.test(host)) return "DIRECT";
        if (/(?:^|\.)soundcloud\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)thegeekstuff\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)w\.org$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)contextweb\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)sinaimg\.cn$/.test(host)) return "+SystemProxy";
        if (/^161\.91\.4\.100$/.test(host)) return "+SystemProxy";
        if (/(?:^|\.)t\.co$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)ads-twitter\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)philips\.com\.cn$/.test(host)) return "+SystemProxy";
        if (/(?:^|\.)u-flying\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)licensebuttons\.net$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)s3\.amazonaws\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)jenkins\.io$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)adzerk-www\.s3\.amazonaws\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)imgur\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)vanillaforums\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)gwallet\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)adtechus\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)atdmt\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)betrad\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)jenkins-ci\.org$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)appchangelog\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)beams\.io$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)digitalocean\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)storage\.googleapis\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)ggpht\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)raw\.githubusercontent\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)oracle\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)d28q6miprfdsbe\.cloudfront\.net$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)d2uowa935fr33t\.cloudfront\.net$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)d1ixbz5qgnvms3\.cloudfront\.net$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)quantserve\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)creativemarket\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)ytimg\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)adsrvr\.org$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)jivox\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)adsymptotic\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)agkn\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)doubleverify\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)akamai\.net$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)mookie1\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)googletagservices\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)pinterest\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)googlesyndication\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)userstyles\.org$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)lijit\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)gmossp-sp\.jp$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)trackjs\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)atlassian\.net$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)adskom\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)pingdom\.net$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)inspectlet\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)launchdarkly\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)d2zah9y47r7bi2\.cloudfront\.net$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)typekit\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)switchads\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)newrelic\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)kiosked\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)grammarly\.io$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)openx\.net$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)adingo\.jp$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)rlcdn\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)nr-data\.net$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)twitter\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)bidswitch\.net$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)intercomcdn\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)casalemedia\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)googleadservices\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)atlassian\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)googletagmanager\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)lytics\.io$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)intercom\.io$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)facebook\.net$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)segment\.io$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)optimizely\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)segment\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)wufoo\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)youtube\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)duckduckgo\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)jsdelivr\.net$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)rawgit\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)cloudflare\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)tenforums\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)githubapp\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)avatars3\.githubusercontent\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)avatars0\.githubusercontent\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)d3ezl4ajpp2zy8\.cloudfront\.net$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)crsspxl\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)slashdotmedia\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)truste\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)pro-market\.net$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)ml314\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)fonts\.googleapis\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)fsdn\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)ajax\.googleapis\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)sstatic\.net$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)stackexchange\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)superuser\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)stackoverflow\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)sourceforge\.net$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.).*\.google\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.).*\.google\.com$/.test(host)) return "+SingaporeProxy";
        if (/(?:^|\.)etravel\.china\.philips\.com\.cn$/.test(host)) return "+SystemProxy";
        return "+SystemProxy";
    },
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
    }.call(this),
    "+SingaporeProxy": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^[^:]+:\/\/::1\//.test(url) || /^localhost$/.test(host)) return "DIRECT";
        return "PROXY 165.225.96.34:10015";
    },
    "+NetherlandsProxy": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^[^:]+:\/\/::1\//.test(url) || /^localhost$/.test(host)) return "DIRECT";
        return "PROXY 185.46.212.34:10015";
    }
});