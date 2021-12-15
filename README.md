# X to Y extension

_Replace words and links_

![icon][icon]

Ever think it would be funny to replace a word with another? Sick and tired of a website deadnaming you? You are going to enjoy X to Y!

X to Y supports plain text, regex, and urls.

- To do regex just type regex (`/pattern/flags`) in the X field
- To replace links, just check the `Link Mode` checkbox


## Download

- [Safari for iOS and Mac](https://apps.apple.com/us/app/x-to-y/id1598259546)
- [Firefox for Desktop and Android](https://addons.mozilla.org/addon/x-to-y/)
- [Chrome](https://chrome.google.com/webstore/detail/ifgihheafoppkadpfneacgpdicmphpcl)
- [Edge](https://microsoftedge.microsoft.com/addons/detail/eodpmnookfpophmeocggibipjlfmnfpl)


## Folder Structure

- `'X to Y'` - the Xcode project for iOS and Mac
- `content-script` - javascript bundle for the extension's content script that replaces the text and links on webpages
- `popup-ui` - javascript bundle for the extension's user interface that loads when the toolbar icon is tapped
- `firefox` - The Firefox build
- `chrome` - The Edge and Chrome build


[icon]: https://github.com/girlfriend-technology/xtoy-extension/raw/main/X%20to%20Y/Shared%20(Extension)/Resources/images/icon-128.png "App Icon"