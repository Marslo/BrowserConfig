FirefoxConfig
=============

The configuration for Firefox and plugins, vimperator, etc

# Firefox

## Plugins
#### Linux
- AutoProxy
- CNTVLive2 plugin for Firefox | [Download](http://t.live.cntv.cn/newp2pb/plugins/npCNTVLive2_Linux_32.xpi)
- FireGestures
- Vimperator
- BaiduSearch

#### Windows
- SearchReset 0.3 | [Download](https://addons.mozilla.org/firefox/downloads/file/203374/searchreset-0.3-fx.xpi)
- AutoProxy 0.4b2.2013051811 | [Download](https://addons.mozilla.org/en-US/firefox/addon/autoproxy/?src=search)
- BaiduSearch 1.0.5 | [Download](https://addons.mozilla.org/en-US/firefox/addon/baidu-search/?src=search)
- Download Statusbar 0.9.10 | [Download](https://addons.mozilla.org/en-US/firefox/addon/download-statusbar/?src=ss)
- Firebug 1.12.6 | [Download](https://addons.mozilla.org/firefox/downloads/latest/1843/addon-1843-latest.xpi) | [Official Website](https://www.getfirebug.com/)
- FireGestures 1.8.2 | [Download](https://addons.mozilla.org/firefox/downloads/latest/6366/addon-6366-latest.xpi) | [Official Website](http://www.xuldev.org/firegestures/)
- FireShot 0.98.47 | [Download](https://addons.mozilla.org/firefox/downloads/latest/5648/platform:5/addon-5648-latest.xpi)
- Vimperator 3.8.1 | [Download](https://addons.cdn.mozilla.net/storage/public-staging/4891/vimperator-3.8.1-fx.xpi) | [Official Website](http://www.vimperator.org/)
- DownloadHelper 4.9.21 | [Download](https://addons.mozilla.org/firefox/downloads/latest/3006/addon-3006-latest.xpi) | [Official Website](http://www.downloadhelper.net/)

###Apperance
- **FT DeepDark 9.3.3.3** | [Download](https://addons.cdn.mozilla.net/storage/public-staging/295337/ft_deepdark-9.3.3.3-fx-windows.xpi)
- **FT DeepDark 9.4.7** | [Download](https://addons.cdn.mozilla.net/storage/public-staging/295337/ft_deepdark-9.4.7-fx-windows.xpi)

### Plugins information

#### Vimperator configuration Usage
##### For Windows:
- Copy **_vimperatorrc** to <code>%HOMEPATH%</code>
    - **WIN7**: <code>%HOMEPATH%</code> would be <code>C:\Users\\\<UserName></code>
    - **XP**:<code>%HOMEPATH%</code> would be <code>C:\Document and Settings\\\<UserName></code>

##### For Linux
- Copy **.vimperatorrc** to <code>$HOME</code>

#### Flashplayer:
##### **Flashplugin-installer** could be downloaded from: http://archive.canonical.com/pool/partner/a/adobe-flashplugin/

##### Install flashplugin for Ubuntu firefox
- Download flashplugin:
    - [Pool partner](http://archive.canonical.com/pool/partner/a/adobe-flashplugin/)
    - [Adobe Flash Player](http://get.adobe.com/flashplayer/)
- Steps for installation
    - Extract the `tar.gz`
    - Copy `libflashplayer.so` to `/usr/lib/mozilla/plugins/`
        <pre><code># mkdir -p /usr/lib/mozilla/plugins/
        # cp adobe-flashplugin-xx.xx.xxx.xxx/i386/libflashplayer.so  /usr/lib/mozilla/plugins/
        </code></pre>
    - Copy `adobe-flashplugin-xx.xx.xxx.xxx/i386/usr` to `/usr`
        <pre><code># sudo cp -r adobe-flashplugin-xx.xx.xxx.xxx/i385/usr/* /usr
        </code></pre>
##### [Reference](http://askubuntu.com/questions/11/how-do-i-install-adobe-flash-player/184031#184031)

#### Goagent + AutoProxy:
- Details has been uploaded to: https://github.com/Marslo/GoagentConfig

#### Bookmarks
Get from https://github.com/Marslo/WindowsStuff/tree/master/Bookmarks

### Screenshot
#### On Linux
![My_Firefox_Addons](https://github.com/Marslo/FirefoxConfig/blob/master/Screenshots/firefox_addons.png?raw=true)

#### On Win7
![My_firefox_theme](https://github.com/Marslo/FirefoxConfig/blob/master/Screenshots/firefox_addons_window7.png?raw=true)

# Chrome
## Use SwitchySharp
- Run the command to import CA.crt for Chrome
    <pre><code>$ certutil -d sql:$HOME/.pki/nssdb -A -t TC -n "goagent" -i $HOME/Tools/Software/Proxy/google_appengine/goagent/local/CA.crt
    </code></pre>
## Extensions
#### Custom key mappings:

    map h previousTab
    map l nextTab
    map d removeTab
    map u restoreTab
    map gt scrollLeft
    map gT scrollRight
    map y copyCurrentUrl

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
