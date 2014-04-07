Broswer Config
=============

The configuration for Firefox and plugins, vimperator, etc

## Content
- [Firefox](https://github.com/Marslo/BrowserConfig#firefox)
    - [Plugins](https://github.com/Marslo/BrowserConfig#plugins)
        - [Linux](https://github.com/Marslo/BrowserConfig#plugins)
        - [Windows](https://github.com/Marslo/BrowserConfig#windows)
        - [Apperance](https://github.com/Marslo/BrowserConfig#apperance)
    - [Plugin Usage](https://github.com/Marslo/BrowserConfig#plugins)
        - [Vimperator](https://github.com/Marslo/BrowserConfig#vimperator-configuration-usage)
        - [Flashplayer](https://github.com/Marslo/BrowserConfig#flashplayer)
        - ~~[Goagent + Autoproxy](https://github.com/Marslo/BrowserConfig#goagent--autoproxy)~~
        - [GoAgent + FoxyProxy](https://github.com/Marslo/BrowserConfig#goagent--foxyproxy)
        - [FoxyProxy]()
    - [Screenshots](https://github.com/Marslo/BrowserConfig#screenshot)
- [Chrome](https://github.com/Marslo/BrowserConfig#chrome)
    - [SwitchSharp](https://github.com/Marslo/BrowserConfig#use-switchysharp)
    - [Extensions](https://github.com/Marslo/BrowserConfig#extensions)

# Firefox

## Plugins
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

###Apperance
- **FT DeepDark 9.3.3.3** | [Download](https://addons.cdn.mozilla.net/storage/public-staging/295337/ft_deepdark-9.3.3.3-fx-windows.xpi)
- **FT DeepDark 9.4.7** | [Download](https://addons.cdn.mozilla.net/storage/public-staging/295337/ft_deepdark-9.4.7-fx-windows.xpi)
- **FT DeepDark 9.5.4** | [Download](https://addons.mozilla.org/firefox/downloads/latest/295337/platform:2/addon-295337-latest.xpi)


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

### ~~Goagent + AutoProxy~~
### Goagent + FoxyProxy
- Details has been uploaded to: https://github.com/Marslo/GoagentConfig

### Configurations in FoxyProxy
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

## Screenshot
### On Linux
![My_Firefox_Addons](https://github.com/Marslo/FirefoxConfig/blob/master/Screenshots/firefox_addons.png?raw=true)

### On Win7
![My_firefox_theme](https://github.com/Marslo/FirefoxConfig/blob/master/Screenshots/firefox_addons_window7.png?raw=true)

# Chrome
## Use SwitchySharp
- Run the command to import CA.crt for Chrome
    <pre><code>$ certutil -d sql:$HOME/.pki/nssdb -A -t TC -n "goagent" -i $HOME/Tools/Software/Proxy/google_appengine/goagent/local/CA.crt
    </code></pre>

## Extensions
#### Custom key mappings:
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
