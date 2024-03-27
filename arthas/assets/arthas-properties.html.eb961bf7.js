import{_ as e,o as t,c as a,d as s}from"./app.b42f861b.js";const r={},i=s(`<h1 id="arthas-properties" tabindex="-1"><a class="header-anchor" href="#arthas-properties" aria-hidden="true">#</a> Arthas Properties</h1><p><code>arthas.properties</code>\u6587\u4EF6\u5728 arthas \u7684\u76EE\u5F55\u4E0B\u3002</p><ul><li>\u5982\u679C\u662F\u81EA\u52A8\u4E0B\u8F7D\u7684 arthas\uFF0C\u5219\u76EE\u5F55\u5728<code>~/.arthas/lib/3.x.x/arthas/</code>\u4E0B\u9762</li><li>\u5982\u679C\u662F\u4E0B\u8F7D\u7684\u5B8C\u6574\u5305\uFF0C\u5728 arthas \u89E3\u538B\u76EE\u5F55\u4E0B</li></ul><h2 id="\u652F\u6301\u7684\u914D\u7F6E\u9879" tabindex="-1"><a class="header-anchor" href="#\u652F\u6301\u7684\u914D\u7F6E\u9879" aria-hidden="true">#</a> \u652F\u6301\u7684\u914D\u7F6E\u9879</h2><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u6CE8\u610F\u914D\u7F6E\u5FC5\u987B\u662F<code>\u9A7C\u5CF0</code>\u7684\uFF0C\u548C spring boot \u7684<code>-</code>\u98CE\u683C\u4E0D\u4E00\u6837\u3002spring boot \u5E94\u7528\u624D\u540C\u65F6\u652F\u6301<code>\u9A7C\u5CF0</code> \u548C <code>-</code>\u98CE\u683C\u7684\u914D\u7F6E\u3002</p></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#arthas.config.overrideAll=true
arthas.telnetPort=3658
arthas.httpPort=8563
arthas.ip=127.0.0.1

# seconds
arthas.sessionTimeout=1800

#arthas.appName=demoapp
#arthas.tunnelServer=ws://127.0.0.1:7777/ws
#arthas.agentId=mmmmmmyiddddd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u5982\u679C\u914D\u7F6E <code>arthas.telnetPort</code>\u4E3A -1 \uFF0C\u5219\u4E0D listen telnet \u7AEF\u53E3\u3002<code>arthas.httpPort</code>\u7C7B\u4F3C\u3002</li><li>\u5982\u679C\u914D\u7F6E <code>arthas.telnetPort</code>\u4E3A 0 \uFF0C\u5219\u968F\u673A telnet \u7AEF\u53E3\uFF0C\u5728<code>~/logs/arthas/arthas.log</code>\u91CC\u53EF\u4EE5\u627E\u5230\u5177\u4F53\u7AEF\u53E3\u65E5\u5FD7\u3002<code>arthas.httpPort</code>\u7C7B\u4F3C\u3002</li></ul><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5982\u679C\u662F\u9632\u6B62\u4E00\u4E2A\u673A\u5668\u4E0A\u542F\u52A8\u591A\u4E2A arthas \u7AEF\u53E3\u51B2\u7A81\u3002\u53EF\u4EE5\u914D\u7F6E\u4E3A\u968F\u673A\u7AEF\u53E3\uFF0C\u6216\u8005\u914D\u7F6E\u4E3A -1\uFF0C\u5E76\u4E14\u901A\u8FC7 tunnel server \u6765\u4F7F\u7528 arthas\u3002</p></div><h3 id="\u7981\u6B62\u6307\u5B9A\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u7981\u6B62\u6307\u5B9A\u547D\u4EE4" aria-hidden="true">#</a> \u7981\u6B62\u6307\u5B9A\u547D\u4EE4</h3><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>since 3.5.2</p></div><p>\u6BD4\u5982\u914D\u7F6E\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>arthas.disabledCommands=stop,dump
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4E5F\u53EF\u4EE5\u5728\u547D\u4EE4\u884C\u914D\u7F6E\uFF1A <code>--disabled-commands stop,dump</code> \u3002</p><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Carthas-spring-boot-starter \u4F1A\u7981\u6389<code>stop</code>\u547D\u4EE4\u3002</p></div><h2 id="\u914D\u7F6E\u7684\u4F18\u5148\u7EA7" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u7684\u4F18\u5148\u7EA7" aria-hidden="true">#</a> \u914D\u7F6E\u7684\u4F18\u5148\u7EA7</h2><p>\u914D\u7F6E\u7684\u4F18\u5148\u7EA7\u662F\uFF1A\u547D\u4EE4\u884C\u53C2\u6570 &gt; System Env &gt; System Properties &gt; arthas.properties \u3002</p><p>\u6BD4\u5982\uFF1A</p><ul><li><code>./as.sh --telnet-port 9999</code> \u4F20\u5165\u7684\u914D\u7F6E\u4F1A\u8986\u76D6\u6389<code>arthas.properties</code>\u91CC\u7684\u9ED8\u8BA4\u503C<code>arthas.telnetPort=3658</code>\u3002</li><li>\u5982\u679C\u5E94\u7528\u81EA\u8EAB\u8BBE\u7F6E\u4E86 system properties <code>arthas.telnetPort=8888</code>\uFF0C\u5219\u4F1A\u8986\u76D6\u6389<code>arthas.properties</code>\u91CC\u7684\u9ED8\u8BA4\u503C<code>arthas.telnetPort=3658</code>\u3002</li></ul><p>\u5982\u679C\u60F3\u8981 <code>arthas.properties</code>\u7684\u4F18\u5148\u7EA7\u6700\u9AD8\uFF0C\u5219\u53EF\u4EE5\u914D\u7F6E <code>arthas.config.overrideAll=true</code> \u3002</p>`,19),d=[i];function o(n,c){return t(),a("div",null,d)}const p=e(r,[["render",o],["__file","arthas-properties.html.vue"]]);export{p as default};
