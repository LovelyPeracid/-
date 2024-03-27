import{_ as d,o as h,c,a,b as t,w as n,e,d as r,r as i}from"./app.b42f861b.js";const l={},_=a("h1",{id:"faq",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#faq","aria-hidden":"true"},"#"),e(" FAQ")],-1),u={class:"custom-container tip"},p=a("p",{class:"custom-container-title"},"\u63D0\u793A",-1),b=e("\u4E0D\u5728\u672C\u5217\u8868\u91CC\u7684\u95EE\u9898\uFF0C\u8BF7\u5230 issue \u91CC\u641C\u7D22\u3002 "),m={href:"https://github.com/alibaba/arthas/issues",target:"_blank",rel:"noopener noreferrer"},g=e("https://github.com/alibaba/arthas/issues"),f=a("h3",{id:"\u65E5\u5FD7\u6587\u4EF6\u5728\u54EA\u91CC",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u65E5\u5FD7\u6587\u4EF6\u5728\u54EA\u91CC","aria-hidden":"true"},"#"),e(" \u65E5\u5FD7\u6587\u4EF6\u5728\u54EA\u91CC\uFF1F")],-1),v=a("p",null,[e("\u65E5\u5FD7\u6587\u4EF6\u8DEF\u5F84\uFF1A "),a("code",null,"~/logs/arthas/arthas.log")],-1),k=a("h3",{id:"arthas-attach-\u4E4B\u540E\u5BF9\u539F\u8FDB\u7A0B\u6027\u80FD\u6709\u591A\u5927\u7684\u5F71\u54CD",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#arthas-attach-\u4E4B\u540E\u5BF9\u539F\u8FDB\u7A0B\u6027\u80FD\u6709\u591A\u5927\u7684\u5F71\u54CD","aria-hidden":"true"},"#"),e(" Arthas attach \u4E4B\u540E\u5BF9\u539F\u8FDB\u7A0B\u6027\u80FD\u6709\u591A\u5927\u7684\u5F71\u54CD")],-1),x={href:"https://github.com/alibaba/arthas/issues/44",target:"_blank",rel:"noopener noreferrer"},j=e("https://github.com/alibaba/arthas/issues/44"),w=a("h3",{id:"target-process-not-responding-or-hotspot-vm-not-loaded",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#target-process-not-responding-or-hotspot-vm-not-loaded","aria-hidden":"true"},"#"),e(" target process not responding or HotSpot VM not loaded")],-1),C=a("p",null,"com.sun.tools.attach.AttachNotSupportedException: Unable to open socket file: target process not responding or HotSpot VM not loaded",-1),y=a("li",null,"\u68C0\u67E5\u5F53\u524D\u7528\u6237\u548C\u76EE\u6807 java \u8FDB\u7A0B\u662F\u5426\u4E00\u81F4\u3002\u5982\u679C\u4E0D\u4E00\u81F4\uFF0C\u5219\u5207\u6362\u5230\u540C\u4E00\u7528\u6237\u3002JVM \u53EA\u80FD attach \u540C\u6837\u7528\u6237\u4E0B\u7684 java \u8FDB\u7A0B\u3002",-1),V=a("li",null,[e("\u5C1D\u8BD5\u4F7F\u7528 "),a("code",null,"jstack -l $pid"),e("\uFF0C\u5982\u679C\u8FDB\u7A0B\u6CA1\u6709\u53CD\u5E94\uFF0C\u5219\u8BF4\u660E\u8FDB\u7A0B\u53EF\u80FD\u5047\u6B7B\uFF0C\u65E0\u6CD5\u54CD\u5E94 JVM attach \u4FE1\u53F7\u3002\u6240\u4EE5\u540C\u6837\u57FA\u4E8E attach \u673A\u5236\u7684 Arthas \u65E0\u6CD5\u5DE5\u4F5C\u3002\u5C1D\u8BD5\u4F7F\u7528"),a("code",null,"jmap"),e(" heapdump \u540E\u5206\u6790\u3002")],-1),q=e("\u5C1D\u8BD5\u6309"),A=e("quick-start"),L=e("\u91CC\u7684\u65B9\u5F0F attach math-game\u3002"),E=e("\u66F4\u591A\u60C5\u51B5\u53C2\u8003\uFF1A "),M={href:"https://github.com/alibaba/arthas/issues/347",target:"_blank",rel:"noopener noreferrer"},S=e("https://github.com/alibaba/arthas/issues/347"),B=r(`<h3 id="trace-watch-\u7B49\u547D\u4EE4\u80FD\u5426\u589E\u5F3A-jdk-\u91CC\u7684\u7C7B" tabindex="-1"><a class="header-anchor" href="#trace-watch-\u7B49\u547D\u4EE4\u80FD\u5426\u589E\u5F3A-jdk-\u91CC\u7684\u7C7B" aria-hidden="true">#</a> trace/watch \u7B49\u547D\u4EE4\u80FD\u5426\u589E\u5F3A jdk \u91CC\u7684\u7C7B\uFF1F</h3><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\u4F1A\u8FC7\u6EE4\u6389<code>java.</code>\u5F00\u5934\u7684\u7C7B\u548C\u88AB<code>BootStrap ClassLoader</code>\u52A0\u8F7D\u7684\u7C7B\u3002\u53EF\u4EE5\u901A\u8FC7\u53C2\u6570\u5F00\u542F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>options unsafe <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),I=e("\u66F4\u591A\u53C2\u8003 "),O=e("options"),F=r(`<div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u901A\u8FC7 java.lang.instrument.Instrumentation#appendToBootstrapClassLoaderSearch append \u5230<code>Bootstrap ClassLoader</code>\u7684 jar \u5305\u9700\u8981\u5F00\u542F unsafe\u3002</p></div><h3 id="\u600E\u4E48\u4EE5json\u683C\u5F0F\u67E5\u770B\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u600E\u4E48\u4EE5json\u683C\u5F0F\u67E5\u770B\u7ED3\u679C" aria-hidden="true">#</a> \u600E\u4E48\u4EE5<code>json</code>\u683C\u5F0F\u67E5\u770B\u7ED3\u679C</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>options json-format <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),N=e("\u66F4\u591A\u53C2\u8003 "),H=e("options"),J=a("h3",{id:"arthas-\u80FD\u5426\u8DDF\u8E2A-native-\u51FD\u6570",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#arthas-\u80FD\u5426\u8DDF\u8E2A-native-\u51FD\u6570","aria-hidden":"true"},"#"),e(" Arthas \u80FD\u5426\u8DDF\u8E2A native \u51FD\u6570")],-1),U=a("p",null,"\u4E0D\u80FD\u3002",-1),$=a("h3",{id:"\u80FD\u4E0D\u80FD\u67E5\u770B\u5185\u5B58\u91CC\u67D0\u4E2A\u53D8\u91CF\u7684\u503C",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u80FD\u4E0D\u80FD\u67E5\u770B\u5185\u5B58\u91CC\u67D0\u4E2A\u53D8\u91CF\u7684\u503C","aria-hidden":"true"},"#"),e(" \u80FD\u4E0D\u80FD\u67E5\u770B\u5185\u5B58\u91CC\u67D0\u4E2A\u53D8\u91CF\u7684\u503C")],-1),G=e("\u53EF\u4EE5\u4F7F\u7528"),Q=a("code",null,"vmtool",-1),R=e("\u547D\u4EE4\u3002"),T=e("\u53EF\u4EE5\u7528\u4E00\u4E9B\u6280\u5DE7\uFF0C\u7528"),z=a("code",null,"tt",-1),D=e("\u547D\u4EE4\u62E6\u622A\u5230\u5BF9\u8C61\uFF0C\u6216\u8005\u4ECE\u9759\u6001\u51FD\u6570\u91CC\u53D6\u5230\u5BF9\u8C61\u3002"),K=a("h3",{id:"\u65B9\u6CD5\u540C\u540D\u8FC7\u6EE4",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u65B9\u6CD5\u540C\u540D\u8FC7\u6EE4","aria-hidden":"true"},"#"),e(" \u65B9\u6CD5\u540C\u540D\u8FC7\u6EE4")],-1),P=e("\u540C\u540D\u65B9\u6CD5\u8FC7\u6EE4\u53EF\u4EE5\u901A\u8FC7\u5339\u914D\u8868\u8FBE\u5F0F,\u53EF\u4EE5\u4F7F\u7528"),W=e("\u8868\u8FBE\u5F0F\u6838\u5FC3\u53D8\u91CF"),X=e("\u4E2D\u6240\u6709\u53D8\u91CF\u4F5C\u4E3A\u5DF2\u77E5\u6761\u4EF6,\u53EF\u4EE5\u901A\u8FC7\u5224\u65AD\u53C2\u6570\u4E2A\u6570"),Y=a("code",null,"params.length ==1",-1),Z=e(", \u53C2\u6570\u7C7B\u578B"),aa=a("code",null,"params[0] instanceof java.lang.Integer",-1),ea=e("\u3001\u8FD4\u56DE\u503C\u7C7B\u578B "),ta=a("code",null,"returnObj instanceof java.util.List",-1),sa=e(" \u7B49\u7B49\u4E00\u79CD\u6216\u8005\u591A\u79CD\u7EC4\u5408\u8FDB\u884C\u8FC7\u6EE4\u3002"),oa=e("\u53EF\u4EE5\u4F7F\u7528 "),na=a("code",null,"-v",-1),ra=e(" \u67E5\u770B\u89C2\u5BDF\u5339\u914D\u8868\u8FBE\u5F0F\u7684\u6267\u884C\u7ED3\u679C "),ia={href:"https://github.com/alibaba/arthas/issues/1348",target:"_blank",rel:"noopener noreferrer"},da=e("https://github.com/alibaba/arthas/issues/1348"),ha=e("\u4F8B\u5B50"),ca=e("math-game"),la=r(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">watch</span> demo.MathGame primeFactors <span class="token string">&#39;{params,returnObj,throwExp}&#39;</span> <span class="token string">&#39;params.length &gt;0 &amp;&amp; returnObj instanceof java.util.List&#39;</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u600E\u4E48-watch\u3001trace-\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u600E\u4E48-watch\u3001trace-\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> \u600E\u4E48 watch\u3001trace \u6784\u9020\u51FD\u6570 \uFF1F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">watch</span> demo.MathGame <span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token string">&#39;{params,returnObj,throwExp}&#39;</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u600E\u6837-watch\u3001trace-\u5185\u90E8\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u600E\u6837-watch\u3001trace-\u5185\u90E8\u7C7B" aria-hidden="true">#</a> \u600E\u6837 watch\u3001trace \u5185\u90E8\u7C7B\uFF1F</h3><p>\u5728 JVM \u89C4\u8303\u91CC\u5185\u90E8\u7C7B\u7684\u683C\u5F0F\u662F<code>OuterClass$InnerClass</code>\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">watch</span> OuterClass<span class="token variable">$InnerClass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u8F93\u5165\u4E2D\u6587-unicode-\u5B57\u7B26" tabindex="-1"><a class="header-anchor" href="#\u8F93\u5165\u4E2D\u6587-unicode-\u5B57\u7B26" aria-hidden="true">#</a> \u8F93\u5165\u4E2D\u6587/Unicode \u5B57\u7B26</h3><p>\u628A\u4E2D\u6587/Unicode \u5B57\u7B26\u8F6C\u4E3A<code>\\u</code>\u8868\u793A\u65B9\u6CD5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ognl <span class="token string">&#39;@java.lang.System@out.println(&quot;Hello \\u4e2d\\u6587&quot;)&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="java-lang-classformaterror-null\u3001skywalking-arthas-\u517C\u5BB9\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#java-lang-classformaterror-null\u3001skywalking-arthas-\u517C\u5BB9\u4F7F\u7528" aria-hidden="true">#</a> java.lang.ClassFormatError: null\u3001skywalking arthas \u517C\u5BB9\u4F7F\u7528</h3><p>\u5F53\u51FA\u73B0\u8FD9\u4E2A\u9519\u8BEF\u65E5\u5FD7<code>java.lang.ClassFormatError: null</code>,\u901A\u5E38\u60C5\u51B5\u4E0B\u90FD\u662F\u88AB\u5176\u4ED6\u5B57\u8282\u7801\u5DE5\u5177\u4FEE\u6539\u8FC7\u4E0E arthas \u4FEE\u6539\u5B57\u8282\u7801\u4E0D\u517C\u5BB9\u3002</p>`,11),_a=e("\u6BD4\u5982: \u4F7F\u7528 skywalking V8.1.0 \u4EE5\u4E0B\u7248\u672C "),ua={href:"https://github.com/alibaba/arthas/issues/1141",target:"_blank",rel:"noopener noreferrer"},pa=e("\u65E0\u6CD5 trace\u3001watch \u88AB skywalking agent \u589E\u5F3A\u8FC7\u7684\u7C7B"),ba=e(", V8.1.0 \u4EE5\u4E0A\u7248\u672C\u53EF\u4EE5\u517C\u5BB9\u4F7F\u7528,\u66F4\u591A\u53C2\u8003 skywalking \u914D\u7F6E "),ma={href:"https://github.com/apache/skywalking/blob/master/docs/en/FAQ/Compatible-with-other-javaagent-bytecode-processing.md#",target:"_blank",rel:"noopener noreferrer"},ga=e("skywalking compatible with other javaagent bytecode processing"),fa=e("\u3002"),va=a("h4",{id:"class-redefinition-failed-attempted-to-change-the-schema-add-remove-fields",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#class-redefinition-failed-attempted-to-change-the-schema-add-remove-fields","aria-hidden":"true"},"#"),e(" class redefinition failed: attempted to change the schema (add/remove fields)")],-1),ka=e("\u53C2\u8003\uFF1A "),xa={href:"https://github.com/alibaba/arthas/issues/2165",target:"_blank",rel:"noopener noreferrer"},ja=e("https://github.com/alibaba/arthas/issues/2165"),wa=a("h3",{id:"arthas-\u80FD\u4E0D\u80FD\u79BB\u7EBF\u4F7F\u7528",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#arthas-\u80FD\u4E0D\u80FD\u79BB\u7EBF\u4F7F\u7528","aria-hidden":"true"},"#"),e(" Arthas \u80FD\u4E0D\u80FD\u79BB\u7EBF\u4F7F\u7528")],-1),Ca=e("\u53EF\u4EE5\u3002\u4E0B\u8F7D\u5168\u91CF\u5305\u89E3\u538B\u5373\u53EF\uFF0C\u53C2\u8003: "),ya=e("\u4E0B\u8F7D"),Va=e("\u3002"),qa=a("h3",{id:"attach-docker-k8s-\u91CC\u7684-pid-\u4E3A-1-\u7684\u8FDB\u7A0B\u5931\u8D25",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#attach-docker-k8s-\u91CC\u7684-pid-\u4E3A-1-\u7684\u8FDB\u7A0B\u5931\u8D25","aria-hidden":"true"},"#"),e(" Attach docker/k8s \u91CC\u7684 pid \u4E3A 1 \u7684\u8FDB\u7A0B\u5931\u8D25")],-1),Aa=e("\u53C2\u8003\uFF1A "),La={href:"https://github.com/alibaba/arthas/issues/362#issuecomment-448185416",target:"_blank",rel:"noopener noreferrer"},Ea=e("https://github.com/alibaba/arthas/issues/362#issuecomment-448185416"),Ma=a("h3",{id:"\u4E3A\u4EC0\u4E48\u4E0B\u8F7D\u4E86\u65B0\u7248\u672C\u7684-arthas-\u8FDE\u63A5\u7684\u5374\u662F\u65E7\u7248\u672C",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u4E3A\u4EC0\u4E48\u4E0B\u8F7D\u4E86\u65B0\u7248\u672C\u7684-arthas-\u8FDE\u63A5\u7684\u5374\u662F\u65E7\u7248\u672C","aria-hidden":"true"},"#"),e(" \u4E3A\u4EC0\u4E48\u4E0B\u8F7D\u4E86\u65B0\u7248\u672C\u7684 Arthas\uFF0C\u8FDE\u63A5\u7684\u5374\u662F\u65E7\u7248\u672C\uFF1F")],-1),Sa=a("p",null,[e("\u6BD4\u5982\u542F\u52A8\u7684 "),a("code",null,"as.sh/arthas-boot.jar"),e(" \u7248\u672C\u662F 3.5._ \u7684\uFF0C\u4F46\u662F\u8FDE\u63A5\u4E0A\u4E4B\u540E\uFF0C\u6253\u5370\u7684 arthas \u7248\u672C\u662F 3.4._ \u7684\u3002")],-1),Ba=a("p",null,[e("\u53EF\u80FD\u662F\u4E4B\u524D\u4F7F\u7528\u65E7\u7248\u672C\u7684 arthas \u8BCA\u65AD\u8FC7\u76EE\u6807\u8FDB\u7A0B\u3002\u53EF\u4EE5\u5148\u6267\u884C"),a("code",null,"stop"),e("\u505C\u6B62\u6389\u65E7\u7248\u672C\u7684 arthas\uFF0C\u518D\u91CD\u65B0\u4F7F\u7528\u65B0\u7248\u672C attach\u3002")],-1);function Ia(Oa,Fa){const s=i("ExternalLinkIcon"),o=i("RouterLink");return h(),c("div",null,[_,a("div",u,[p,a("p",null,[b,a("a",m,[g,t(s)])])]),f,v,k,a("p",null,[a("a",x,[j,t(s)])]),w,C,a("ol",null,[y,V,a("li",null,[q,t(o,{to:"/doc/quick-start.html"},{default:n(()=>[A]),_:1}),L]),a("li",null,[E,a("a",M,[S,t(s)])])]),B,a("p",null,[I,t(o,{to:"/doc/options.html"},{default:n(()=>[O]),_:1})]),F,a("p",null,[N,t(o,{to:"/doc/options.html"},{default:n(()=>[H]),_:1})]),J,U,$,a("ol",null,[a("li",null,[G,t(o,{to:"/doc/vmtool.html"},{default:n(()=>[Q]),_:1}),R]),a("li",null,[T,t(o,{to:"/doc/tt.html"},{default:n(()=>[z]),_:1}),D])]),K,a("p",null,[P,t(o,{to:"/doc/advice-class.html"},{default:n(()=>[W]),_:1}),X,Y,Z,aa,ea,ta,sa]),a("p",null,[oa,na,ra,a("a",ia,[da,t(s)])]),a("p",null,[ha,t(o,{to:"/doc/quick-start.html"},{default:n(()=>[ca]),_:1})]),la,a("p",null,[_a,a("a",ua,[pa,t(s)]),ba,a("a",ma,[ga,t(s)]),fa]),va,a("p",null,[ka,a("a",xa,[ja,t(s)])]),wa,a("p",null,[Ca,t(o,{to:"/doc/download.html"},{default:n(()=>[ya]),_:1}),Va]),qa,a("p",null,[Aa,a("a",La,[Ea,t(s)])]),Ma,Sa,Ba])}const Ha=d(l,[["render",Ia],["__file","faq.html.vue"]]);export{Ha as default};
