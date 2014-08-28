Broswer Config
=============

The configuration for Firefox and plugins, vimperator, etc

## Content
- [Firefox](https://github.com/Marslo/BrowserConfig#firefox)
    - [Plugins](https://github.com/Marslo/BrowserConfig#plugins)
        - [Lists](https://github.com/Marslo/BrowserConfig#lists)
            - [Linux](https://github.com/Marslo/BrowserConfig#plugins)
            - [Windows](https://github.com/Marslo/BrowserConfig#windows)
            - [Apperance](https://github.com/Marslo/BrowserConfig#apperance)
        - [Plugin Usage](https://github.com/Marslo/BrowserConfig#plugins)
            - [Vimperator](https://github.com/Marslo/BrowserConfig#vimperator-configuration-usage)
            - [Flashplayer](https://github.com/Marslo/BrowserConfig#flashplayer)
            - [FoxyProxy](https://github.com/Marslo/BrowserConfig#foxyproxy)
            - [GoAgent](https://github.com/Marslo/BrowserConfig#goagent)
            - ~~[Goagent + Autoproxy](https://github.com/Marslo/BrowserConfig#goagent--autoproxy)~~
    - [Search Engine](https://github.com/Marslo/BrowserConfig#search-engine)
    - [Screenshots](https://github.com/Marslo/BrowserConfig#screenshot)
- [Chrome](https://github.com/Marslo/BrowserConfig#chrome)
    - [SwitchSharp](https://github.com/Marslo/BrowserConfig#use-switchysharp)
    - [Extensions](https://github.com/Marslo/BrowserConfig#extensions)

# Firefox
## Plugins

### Lists
#### Linux
- CNTVLive2 plugin for Firefox | [Download](http://t.live.cntv.cn/newp2pb/plugins/npCNTVLive2_Linux_32.xpi)
- BaiduSearch 1.0.5 | [Download](https://addons.mozilla.org/en-US/firefox/addon/baidu-search/?src=search)
- FireGestures 1.8.2 | [Download](https://addons.mozilla.org/firefox/downloads/latest/6366/addon-6366-latest.xpi) | [Official Website](http://www.xuldev.org/firegestures/)
- FireShot 0.98.47 | [Download](https://addons.mozilla.org/firefox/downloads/latest/5648/platform:5/addon-5648-latest.xpi)
- Vimperator 3.8.1 | [Download](https://addons.cdn.mozilla.net/storage/public-staging/4891/vimperator-3.8.1-fx.xpi) | [Official Website](http://www.vimperator.org/)
- FoxyProxy Standard 4.2.4 | [Download](https://addons.mozilla.org/firefox/downloads/file/241444/foxyproxy_standard-4.2.4-fx+tb+sm.xpi?src=dp-btn-primary)
- ~~AutoProxy~~

#### Windows
- FoxyProxy Standard 4.2.4 | [Download](https://addons.mozilla.org/firefox/downloads/file/241444/foxyproxy_standard-4.2.4-fx+tb+sm.xpi?src=dp-btn-primary)
- BaiduSearch 1.0.5 | [Download](https://addons.mozilla.org/en-US/firefox/addon/baidu-search/?src=search)
- Download Statusbar 0.9.10 | [Download](https://addons.mozilla.org/en-US/firefox/addon/download-statusbar/?src=ss)
- Firebug 1.12.6 | [Download](https://addons.mozilla.org/firefox/downloads/latest/1843/addon-1843-latest.xpi) | [Official Website](https://www.getfirebug.com/)
- FireGestures 1.8.2 | [Download](https://addons.mozilla.org/firefox/downloads/latest/6366/addon-6366-latest.xpi) | [Official Website](http://www.xuldev.org/firegestures/)
- FireShot 0.98.47 | [Download](https://addons.mozilla.org/firefox/downloads/latest/5648/platform:5/addon-5648-latest.xpi)
- Vimperator 3.8.1 | [Download](https://addons.cdn.mozilla.net/storage/public-staging/4891/vimperator-3.8.1-fx.xpi) | [Official Website](http://www.vimperator.org/)
- DownloadHelper 4.9.21 | [Download](https://addons.mozilla.org/firefox/downloads/latest/3006/addon-3006-latest.xpi) | [Official Website](http://www.downloadhelper.net/)
- ~~AutoProxy 0.4b2.2013051811 | [Download](https://addons.mozilla.org/en-US/firefox/addon/autoproxy/?src=search)~~
- ~~SearchReset 0.3 | [Download](https://addons.mozilla.org/firefox/downloads/file/203374/searchreset-0.3-fx.xpi)~~

### Apperance
- **FT DeepDark 10.0.1** | [Download](https://addons.mozilla.org/firefox/downloads/latest/295337/platform:5/addon-295337-latest.xpi)
- **FT DeepDark 9.5.4** | [Download](https://addons.mozilla.org/firefox/downloads/latest/295337/platform:2/addon-295337-latest.xpi)
- **FT DeepDark 9.4.7** | [Download](https://addons.cdn.mozilla.net/storage/public-staging/295337/ft_deepdark-9.4.7-fx-windows.xpi)
- **FT DeepDark 9.3.3.3** | [Download](https://addons.cdn.mozilla.net/storage/public-staging/295337/ft_deepdark-9.3.3.3-fx-windows.xpi)

## Plugins information
### Vimperator configuration Usage
#### For Windows:
- Copy **_vimperatorrc** to <code>%HOMEPATH%</code>
    - **WIN7**: <code>%HOMEPATH%</code> would be <code>C:\Users\\\<UserName></code>
    - **XP**:<code>%HOMEPATH%</code> would be <code>C:\Document and Settings\\\<UserName></code>
#### For Linux
- Copy **.vimperatorrc** to <code>$HOME</code>

### Flashplayer:
#### Flashplugin-installer download:
- [Pool partner](http://archive.canonical.com/pool/partner/a/adobe-flashplugin/)
- [Adobe Flash Player](http://get.adobe.com/flashplayer/)

#### Install flashplugin for Ubuntu firefox
- Extract the `tar.gz`
- Copy `libflashplayer.so` to `/usr/lib/mozilla/plugins/`
    <pre><code># mkdir -p /usr/lib/mozilla/plugins/
    # cp adobe-flashplugin-xx.xx.xxx.xxx/i386/libflashplayer.so  /usr/lib/mozilla/plugins/
    </code></pre>
- Copy `adobe-flashplugin-xx.xx.xxx.xxx/i386/usr` to `/usr`
    <pre><code># sudo cp -r adobe-flashplugin-xx.xx.xxx.xxx/i385/usr/* /usr
    </code></pre>

#### [Reference](http://askubuntu.com/questions/11/how-do-i-install-adobe-flash-player/184031#184031)

### FoxyProxy
#### Download
- Download FoxyProxy Standard 4.2.4 by click [here](https://addons.mozilla.org/firefox/downloads/file/241444/foxyproxy_standard-4.2.4-fx+tb+sm.xpi?src=dp-btn-primary)

#### Configuraton
- Select `Tools` -> `Add-ons` in Firefox (Or click shortcut key <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>A</kbd> in Linux/Ubuntu)
- Select `Preferences` button of **FoxyProxy Standard** in **Extensions** field and click `Add New Proxy` in **Proxies** Tab
- Input Proxy informations:
    - **Proxy Name**: `GoAgent` (or whatever you want)
    - Manual Proxy Configuration
        - **Hosts or IP Address**: `127.0.0.1`
        - **Port**: `8087`
    - Automatic Proxy Configuration (by PAC)
        - **Automatic proxy configuration URL**: `http://127.0.0.1:8086/proxy.pac`
    - It looks like
    ![proxies](https://github.com/Marslo/BrowserConfig/blob/master/Screenshots/foxyproxy.png?raw=true)
- Select Mode as `Use proxy "GoAgent for all URLs"` and `Add New Pattern Subscriptions` as below:
    - **Subscription Name**: `gfwlist`
    - **Subscription URL**: `http://autoproxy-gfwlist.googlecode.com/svn/trunk/gfwlist.txt`
    - Set `GoAgent` as the added Proxies
    - **Format**: `AutoProxy`
    - **Obfuscation**: `Base64`
    - It looks like:
    ![Subscription](https://github.com/Marslo/BrowserConfig/blob/master/Screenshots/sbuscription.png?raw=true)

### Goagent
- Details has been found at: https://github.com/Marslo/GoagentConfig

### ~~Goagent + AutoProxy~~

## Search Engine
- Installation:
    - Copy `BrowserConfig\Firefox\SearchEnger` to `%appdata%\Mozilla\Firefox\Profiles\[DefaultProfile]`

- Generator new search engine:
    - [Custom Search Creator](http://www.tobtu.com/customsearch.php)
    - New Icon URL:
        <pre><code>data:image/x-icon;base64,AAABAAIAEBAAAAAAAAB9AQAAJgAAACAgAAAAAAAA8gIAAKMBAACJUE5HDQoaCgAAAA1JSERSAAAAEAAAABAIBgAAAB/z/2EAAAFESURBVDjLpZNJSwNBEIXnt4lE4kHxovgT9BDwJHqPy0HEEOJBiAuCRg+KUdC4QS4KrpC4gCBGE3NQ48JsnZ6eZ3UOM6gjaePhQU93v6+qq2q0pqgeJj2S8EdJT1hr0OxBtKCD5iEd8QxDYpvhvOBAuMDKURX9C9aPu4GA1GEVkzvMg10UBfYveWAWgYAP00V01fa+R9M2bA51wJvhIn3qR+ybt3D3JNQBE5sMjCIOLFpoHzOwdsLRO22qA6R6kiZiWwxUvy/PUQZIhYZ1vFM9cvcOOsYNdcBgysISdSJBnZjJMlR0Fw8vAp0xoz5gao/h+NZBy4i/10XGwrPA+hmvDyhVRG2Avu/LwcrkFADZa16L1h330w1RNgc3DiJzCpPYRm1bpveXX11clQR28xwblHpk1vq1iP/5mcoS0CoXDZiL0vsJ+dzfl+3T/VYAAAAASUVORK5CYIKJUE5HDQoaCgAAAA1JSERSAAAAIAAAACAIBgAAAHN6evQAAAK5SURBVFjDxVfrSxRRFJ9/Jta/oyWjF5XQm6D6EkHRgygIIgjUTcueVgqVWSRRkppEUQYWWB8ye1iGWilWlo/Ude489s7M6Zw7D9dlt53dmd29cFiWvXvO77x+51xpaaUsoSxBaUWZQ4ECy5xji2xKZDyCMlMEw6lCNiOSgwZKJK1SkcKeSealfP64t0mBjl4Ow39MkDUL0p2RSROOtqhZdeUEYM1pBl39XCg/fEeFtWcY7G9W4csvUxjlBkCsQ4Nt9QyWVfvT6RsAKXw3aoDGATZeYIt+W1kjw7cJG0RctWDTRebbKd8A6h5pwsDb70ba3w/eUr3wt/cmwgfw6Yft4TNMQaY7o1P2ncm4FT4ANQH/jQBJ2xv7kqIXEADDql8eS3+n8bku7oxNm+EDIM/dU92upb3T/NJGeaNbDx/AsbsLRUY5Xn92caWXY5d8RV6gWllxSg4fAEnTC90DQW13BLlgXR2D3dcUeDVkwOthA1bXspxILWcm3HdThcfvufB26LcJpkOEAz9NKI/lzqpSEC7feol5EWnpSeSlIxCALUkApmULdjUqxQVAQnl3D/X/yQda4QBEq2TYc12By091MQ17Bg3R88nHKlQbVmHvj89awNBLYrwT9zXY2aBAxTkGFdiSxP/Jp6FLDw+AS7GfsdJTJ2EqSO5khD43nGfBARy/ZxOQgZHe7GPM1jzUvChUtmnBAXQPcKGMJp3fdFGq6NByEhiAO4b/YptFfQJwNyQ/bZkVQGcf90Ja25ndIyrKBOa/f8wIpwi3X1G8UcxNu7ozUS7tiH0jBswwS3RIaF1w6LYKU/ML2+8sGnjygQswtKrVIy/Qd9qQP6LnO64q4fPAKpxyZIymHo1jWk6p1ag2BsdNwQMHcC+M5kHFJX+YlPxpVlbCx2mZ5DzPI04k4kUwHHdskU3pH76iftG8yWlkAAAAAElFTkSuQmCC</code></pre>
    - Older Icon URL:
        <pre><code>data:image/png;base64,AAABAAEAEBAAAAEAGABoAwAAFgAAACgAAAAQAAAAIAAAAAEAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADs9Pt8xetPtu9FsfFNtu%2BTzvb2%2B%2Fne4dFJeBw0egA%2FfAJAfAA8ewBBegAAAAD%2B%2FPtft98Mp%2BwWsfAVsvEbs%2FQeqvF8xO7%2F%2F%2F63yqkxdgM7gwE%2FggM%2BfQA%2BegBDeQDe7PIbotgQufcMufEPtfIPsvAbs%2FQvq%2Bfz%2Bf%2F%2B%2B%2FZKhR05hgBBhQI8hgBAgAI9ewD0%2B%2Fg3pswAtO8Cxf4Kw%2FsJvvYAqupKsNv%2B%2Fv7%2F%2FP5VkSU0iQA7jQA9hgBDgQU%2BfQH%2F%2Ff%2FQ6fM4sM4KsN8AteMCruIqqdbZ7PH8%2Fv%2Fg6Nc%2Fhg05kAA8jAM9iQI%2BhQA%2BgQDQu6b97uv%2F%2F%2F7V8Pqw3eiWz97q8%2Ff%2F%2F%2F%2F7%2FPptpkkqjQE4kwA7kAA5iwI8iAA8hQCOSSKdXjiyflbAkG7u2s%2F%2B%2F%2F39%2F%2F7r8utrqEYtjQE8lgA7kwA7kwA9jwA9igA9hACiWSekVRyeSgiYSBHx6N%2F%2B%2Fv7k7OFRmiYtlAA5lwI7lwI4lAA7kgI9jwE9iwI4iQCoVhWcTxCmb0K%2BooT8%2Fv%2F7%2F%2F%2FJ2r8fdwI1mwA3mQA3mgA8lAE8lAE4jwA9iwE%2BhwGfXifWvqz%2B%2Ff%2F58u%2Fev6Dt4tr%2B%2F%2F2ZuIUsggA7mgM6mAM3lgA5lgA6kQE%2FkwBChwHt4dv%2F%2F%2F728ei1bCi7VAC5XQ7kz7n%2F%2F%2F6bsZkgcB03lQA9lgM7kwA2iQktZToPK4r9%2F%2F%2F9%2F%2F%2FSqYK5UwDKZAS9WALIkFn%2B%2F%2F3%2F%2BP8oKccGGcIRJrERILYFEMwAAuEAAdX%2F%2Ff7%2F%2FP%2B%2BfDvGXQLIZgLEWgLOjlf7%2F%2F%2F%2F%2F%2F9QU90EAPQAAf8DAP0AAfMAAOUDAtr%2F%2F%2F%2F7%2B%2Fu2bCTIYwDPZgDBWQDSr4P%2F%2Fv%2F%2F%2FP5GRuABAPkAA%2FwBAfkDAPAAAesAAN%2F%2F%2B%2Fz%2F%2F%2F64g1C5VwDMYwK8Yg7y5tz8%2Fv%2FV1PYKDOcAAP0DAf4AAf0AAfYEAOwAAuAAAAD%2F%2FPvi28ymXyChTATRrIb8%2F%2F3v8fk6P8MAAdUCAvoAAP0CAP0AAfYAAO4AAACAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAQAA</code></pre>


## Screenshot
### On Linux
![My_Firefox_Addons](https://github.com/Marslo/FirefoxConfig/blob/master/Screenshots/firefox_addons.png?raw=true)

### On Win7
![My_firefox_theme](https://github.com/Marslo/FirefoxConfig/blob/master/Screenshots/firefox_addons_window7.png?raw=true)

# Chrome
## Default Settings
### Font
- Standard font: `Times New Roman` | `16`
- Serif font: `Times New Roman` | `16`
- Sans-serif font: `Arial` | `16`
- Fixed-width font: `Consolas`
- minimum font size: `Tiny`
- Encoding: `Western (ISO-8859-1)`

## Install SwitchySharp
- Go to [Chrome Extersions Page](chrome://chrome/extensions/)
- Drag & drop the [Proxy-SwitchySharp_v1.10.4.crx]() into the Chrome
- Import [SwitchyOptions.bak]() by clicking **Options** -> **Import/Export** -> **Restore from file**
- Update the list by clicking **Switch Rules** -> **Update List Now**

## Use SwitchySharp
- Run the command to import CA.crt for Chrome
    <pre><code>$ certutil -d sql:$HOME/.pki/nssdb -A -t TC -n "goagent" -i $HOME/Tools/Software/Proxy/google_appengine/goagent/local/CA.crt
    </code></pre>

## Extensions
#### Custom key mappings
    <pre><code>map h previousTab
    map l nextTab
    map d removeTab
    map u restoreTab
    map gt scrollLeft
    map gT scrollRight
    map y copyCurrentUrl
    </code></pre>

#### Scroll step size

    30 px

#### CSS for link hints

    div > .vimiumHintMarker {
    /* linkhint boxes */
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#FFF785),
      color-stop(100%,#FFC542));
    border: 1px solid #E3BE23;
    }

    div > .vimiumHintMarker span {
    /* linkhint text */
    color: black;
    font-weight: bold;
    font-size: 12px;
    }

    div > .vimiumHintMarker > .matchingCharacter {
    }


#### Characters used for link hints

    sadfjklewcmpgh

#### Search

    http://www.google.ca/search?q=

## Other tips
#### Extension Download:
- [Chrome Extension Downloader](http://chrome-extension-downloader.com/)
