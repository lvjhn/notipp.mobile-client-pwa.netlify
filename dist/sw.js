if(!self.define){let e,i={};const c=(c,n)=>(c=new URL(c+".js",n).href,i[c]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=i,document.head.appendChild(e)}else e=c,importScripts(c),i()})).then((()=>{let e=i[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,r)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const f=e=>c(e,s),a={module:{uri:s},exports:o,require:f};i[s]=Promise.all(n.map((e=>a[e]||f(e)))).then((e=>(r(...e),o)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-EP2G1TpX.js",revision:null},{url:"assets/index-S2RcAZ4s.css",revision:null},{url:"background/light.png",revision:"cf0a9ad0fe9941015037c5c3a4a14503"},{url:"fonts/Nunito/Nunito-Regular.ttf",revision:"b31d295edf1de6be9a475411bd8d07fe"},{url:"fonts/Roboto/Roboto-Regular.ttf",revision:"8a36205bd9b83e03af0591a004bc97f4"},{url:"icon.png",revision:"0f2307ba6aa735f4cff6314c0e98bc3c"},{url:"icons/browser-brave.png",revision:"3127f6b44ca234f78017cab81b6e8e90"},{url:"icons/browser-chrome.png",revision:"762fbfc20c5582b252e87cf2c696596d"},{url:"icons/browser-duckduckgo.png",revision:"18fac0753c10e65706c905482b2cc7c7"},{url:"icons/browser-edge.png",revision:"91cac700d89df523ffd4b6dc2d91fd0f"},{url:"icons/browser-firefox.png",revision:"62ee4ce09feec4bbed37a86f36714341"},{url:"icons/browser-generic.png",revision:"e64598b651e1b9cd2e1bef97dcdd03d8"},{url:"icons/browser-opera.png",revision:"6b0a4d9843bf66cb2fce09a3a8a144dc"},{url:"icons/browser-safari.png",revision:"90692c04d56d495cf80ca60e460e4a43"},{url:"icons/browser-vivaldi.png",revision:"608d6f969f791f583d897c3efa8b8aeb"},{url:"icons/certificate.png",revision:"0409d9686068c169789acec4f26051c1"},{url:"icons/close.png",revision:"a624106a8cff49ef7a2754306489526d"},{url:"icons/desktop.png",revision:"510deea38b7862484a8e26586f362152"},{url:"icons/error.png",revision:"4078f5239afbcedcd75241b2df696d5a"},{url:"icons/gear.png",revision:"97be0efe0b5f5dc42afc223b0fcd908a"},{url:"icons/home.png",revision:"b2d3c123335c5182ff2f059166adef17"},{url:"icons/lock.png",revision:"242d659cf6cf609ef30eb045ecf4a6be"},{url:"icons/more.png",revision:"8f48e721a7b386867c9bd52530384f9e"},{url:"icons/os-fedora.png",revision:"1a5ffcc52bd996b143da049efb2d1c01"},{url:"icons/os-ubuntu.png",revision:"427d9a31e5e67b8d2958c4d2a2fea292"},{url:"icons/parchment.png",revision:"0a91735c91ad82c41a5e6f0e54e9a642"},{url:"icons/qr-code-scan.png",revision:"ef298feb7be9d468861804f1817c35a0"},{url:"icons/search.png",revision:"ab417fd2a710fa024c5b4e3362c9805a"},{url:"icons/settings.png",revision:"97be0efe0b5f5dc42afc223b0fcd908a"},{url:"icons/smartphone.png",revision:"bd3114c53c7a8218d5e72d5b2511713e"},{url:"icons/sources",revision:"8f45b10e43c9ff5f830184431a6705ef"},{url:"icons/switch-off.png",revision:"34ab6235739ac4582856ee6d9b0a1e27"},{url:"icons/switch-on.png",revision:"f30527d48e714b1704747fe2fba1b947"},{url:"icons/tablet.png",revision:"b282a70613b188acb2749a46193279da"},{url:"icons/warning.png",revision:"fa659ce915c2e186b558969178e4c0f5"},{url:"index.html",revision:"ef2675f5e3d54d19886ee8e9db98b3d0"},{url:"install_nvm.sh",revision:"73d77833b3b8ffdd2068aa6e70a7968c"},{url:"install.sh",revision:"0a476035832b65b2b57910491c38e01a"},{url:"manifest.webmanifest",revision:"7752c46c3c3e7d0195134772d9de35dc"},{url:"ping.txt",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"spectre-css/spectre.min.css",revision:"d1f4ae16b38d4d1b3911102a53d0e062"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"icon.png",revision:"0f2307ba6aa735f4cff6314c0e98bc3c"},{url:"install.sh",revision:"0a476035832b65b2b57910491c38e01a"},{url:"install_nvm.sh",revision:"73d77833b3b8ffdd2068aa6e70a7968c"},{url:"ping.txt",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"sw.js",revision:"e58041bab36d2a0ebad842c615e34ded"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"background/light.png",revision:"cf0a9ad0fe9941015037c5c3a4a14503"},{url:"icons/browser-brave.png",revision:"3127f6b44ca234f78017cab81b6e8e90"},{url:"icons/browser-chrome.png",revision:"762fbfc20c5582b252e87cf2c696596d"},{url:"icons/browser-duckduckgo.png",revision:"18fac0753c10e65706c905482b2cc7c7"},{url:"icons/browser-edge.png",revision:"91cac700d89df523ffd4b6dc2d91fd0f"},{url:"icons/browser-firefox.png",revision:"62ee4ce09feec4bbed37a86f36714341"},{url:"icons/browser-generic.png",revision:"e64598b651e1b9cd2e1bef97dcdd03d8"},{url:"icons/browser-opera.png",revision:"6b0a4d9843bf66cb2fce09a3a8a144dc"},{url:"icons/browser-safari.png",revision:"90692c04d56d495cf80ca60e460e4a43"},{url:"icons/browser-vivaldi.png",revision:"608d6f969f791f583d897c3efa8b8aeb"},{url:"icons/certificate.png",revision:"0409d9686068c169789acec4f26051c1"},{url:"icons/close.png",revision:"a624106a8cff49ef7a2754306489526d"},{url:"icons/desktop.png",revision:"510deea38b7862484a8e26586f362152"},{url:"icons/error.png",revision:"4078f5239afbcedcd75241b2df696d5a"},{url:"icons/gear.png",revision:"97be0efe0b5f5dc42afc223b0fcd908a"},{url:"icons/home.png",revision:"b2d3c123335c5182ff2f059166adef17"},{url:"icons/lock.png",revision:"242d659cf6cf609ef30eb045ecf4a6be"},{url:"icons/more.png",revision:"8f48e721a7b386867c9bd52530384f9e"},{url:"icons/os-fedora.png",revision:"1a5ffcc52bd996b143da049efb2d1c01"},{url:"icons/os-ubuntu.png",revision:"427d9a31e5e67b8d2958c4d2a2fea292"},{url:"icons/parchment.png",revision:"0a91735c91ad82c41a5e6f0e54e9a642"},{url:"icons/qr-code-scan.png",revision:"ef298feb7be9d468861804f1817c35a0"},{url:"icons/search.png",revision:"ab417fd2a710fa024c5b4e3362c9805a"},{url:"icons/settings.png",revision:"97be0efe0b5f5dc42afc223b0fcd908a"},{url:"icons/smartphone.png",revision:"bd3114c53c7a8218d5e72d5b2511713e"},{url:"icons/sources",revision:"8f45b10e43c9ff5f830184431a6705ef"},{url:"icons/switch-off.png",revision:"34ab6235739ac4582856ee6d9b0a1e27"},{url:"icons/switch-on.png",revision:"f30527d48e714b1704747fe2fba1b947"},{url:"icons/tablet.png",revision:"b282a70613b188acb2749a46193279da"},{url:"icons/warning.png",revision:"fa659ce915c2e186b558969178e4c0f5"},{url:"spectre-css/spectre.min.css",revision:"d1f4ae16b38d4d1b3911102a53d0e062"},{url:"fonts/Nunito/Nunito-Regular.ttf",revision:"b31d295edf1de6be9a475411bd8d07fe"},{url:"fonts/Roboto/Roboto-Regular.ttf",revision:"8a36205bd9b83e03af0591a004bc97f4"},{url:"manifest.webmanifest",revision:"7752c46c3c3e7d0195134772d9de35dc"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
