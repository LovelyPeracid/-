import{_ as h,o as c,c as d,a as e,b as a,w as n,e as t,d as r,r as i}from"./app.b42f861b.js";const l={},u=e("h1",{id:"faq",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#faq","aria-hidden":"true"},"#"),t(" FAQ")],-1),p={class:"custom-container tip"},m=e("p",{class:"custom-container-title"},"TIP",-1),_=t("For questions that are not in this list, please search in issues. "),b={href:"https://github.com/alibaba/arthas/issues",target:"_blank",rel:"noopener noreferrer"},f=t("https://github.com/alibaba/arthas/issues"),g=e("h3",{id:"where-is-the-log-file",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#where-is-the-log-file","aria-hidden":"true"},"#"),t(" Where is the log file?")],-1),v=e("p",null,[t("Log file path: "),e("code",null,"~/logs/arthas/arthas.log")],-1),w=e("h3",{id:"how-much-impact-does-arthas-attach-have-on-the-performance-of-the-original-process",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-much-impact-does-arthas-attach-have-on-the-performance-of-the-original-process","aria-hidden":"true"},"#"),t(" How much impact does Arthas attach have on the performance of the original process?")],-1),k={href:"https://github.com/alibaba/arthas/issues/44",target:"_blank",rel:"noopener noreferrer"},x=t("https://github.com/alibaba/arthas/issues/44"),y=e("h3",{id:"target-process-not-responding-or-hotspot-vm-not-loaded",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#target-process-not-responding-or-hotspot-vm-not-loaded","aria-hidden":"true"},"#"),t(" target process not responding or HotSpot VM not loaded")],-1),j=e("p",null,"com.sun.tools.attach.AttachNotSupportedException: Unable to open socket file: target process not responding or HotSpot VM not loaded",-1),C=e("li",null,"Check whether the current user and the target java process are consistent. If they are inconsistent, switch to the same user. JVM can only attach java processes under the same user.",-1),I=e("li",null,[t("Try to use "),e("code",null,"jstack -l $pid"),t(". If the process does not respond, it means that the process may freeze and fail to respond to the JVM attach signal. So Arthas based on the attach mechanism cannot work. Try to use "),e("code",null,"jmap"),t(" heapdump to analyze.")],-1),V=t("Try to attach math-game in "),q=t("quick-start"),E=t("."),F=t("For more information: "),L={href:"https://github.com/alibaba/arthas/issues/347",target:"_blank",rel:"noopener noreferrer"},S=t("https://github.com/alibaba/arthas/issues/347"),H=r(`<h3 id="can-commands-such-as-trace-watch-enhance-the-classes-in-jdk" tabindex="-1"><a class="header-anchor" href="#can-commands-such-as-trace-watch-enhance-the-classes-in-jdk" aria-hidden="true">#</a> Can commands such as trace/watch enhance the classes in jdk?</h3><p>By default, classes beginning with <code>java.</code> or the classes loaded by the <code>Bootstrap ClassLoader</code> are filtered out, but they can be turned on:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>options unsafe <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),T=t("See more at "),A=t("options"),M=r(`<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>To support the jars appended by java.lang.instrument.Instrumentation#appendToBootstrapClassLoaderSearch need to enable unsafe.</p></div><h3 id="how-to-view-the-result-in-json-format" tabindex="-1"><a class="header-anchor" href="#how-to-view-the-result-in-json-format" aria-hidden="true">#</a> How to view the result in <code>json</code> format</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>options json-format <span class="token boolean">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,3),B=t("See more at "),N=t("options"),O=e("h3",{id:"can-arthas-trace-native-methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#can-arthas-trace-native-methods","aria-hidden":"true"},"#"),t(" Can arthas trace native methods")],-1),Y=e("p",null,"No.",-1),z=e("h3",{id:"can-arthas-view-the-value-of-a-variable-in-memory",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#can-arthas-view-the-value-of-a-variable-in-memory","aria-hidden":"true"},"#"),t(" Can arthas view the value of a variable in memory?")],-1),J=t("You can use "),R=e("code",null,"vmtool",-1),U=t(" command."),W=t("You can use some tricks to intercept the object with the "),$=e("code",null,"tt",-1),G=t(" command, or fetch it from a static method."),P=e("h3",{id:"how-to-filter-method-with-the-same-name",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-to-filter-method-with-the-same-name","aria-hidden":"true"},"#"),t(" How to filter method with the same name?")],-1),Q=t("You can used all variables in "),D=t("fundamental fields in expressions"),K=t(" for the condition express to filter method with the same name, you can use the number of parameters "),X=e("code",null,"params.length ==1",-1),Z=t(",parameter type "),ee=e("code",null,"params[0] instanceof java.lang.Integer",-1),te=t(",return value type "),ae=e("code",null,"returnObj instanceof java.util.List",-1),se=t(" and so on in one or more combinations as condition express."),oe=t("You can use "),ne=e("code",null,"-v",-1),re=t(" to view the condition express result "),ie={href:"https://github.com/alibaba/arthas/issues/1348",target:"_blank",rel:"noopener noreferrer"},he=t("https://github.com/alibaba/arthas/issues/1348"),ce=t("example "),de=t("math-game"),le=r(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">watch</span> demo.MathGame primeFactors <span class="token string">&#39;{params,returnObj,throwExp}&#39;</span> <span class="token string">&#39;params.length &gt;0 &amp;&amp; returnObj instanceof java.util.List&#39;</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="how-to-watch-or-trace-constructor" tabindex="-1"><a class="header-anchor" href="#how-to-watch-or-trace-constructor" aria-hidden="true">#</a> How to watch or trace constructor?</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">watch</span> demo.MathGame <span class="token operator">&lt;</span>init<span class="token operator">&gt;</span> <span class="token string">&#39;{params,returnObj,throwExp}&#39;</span> <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="how-to-watch-or-trace-inner-classes" tabindex="-1"><a class="header-anchor" href="#how-to-watch-or-trace-inner-classes" aria-hidden="true">#</a> How to watch or trace inner classes?</h3><p>In the JVM specification the name of inner classes is <code>OuterClass$InnerClass</code>.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">watch</span> OuterClass<span class="token variable">$InnerClass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="enter-unicode-characters" tabindex="-1"><a class="header-anchor" href="#enter-unicode-characters" aria-hidden="true">#</a> Enter Unicode characters</h3><p>Convert Unicode characters to <code>\\u</code> representation:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ognl <span class="token string">&#39;@java.lang.System@out.println(&quot;Hello \\u4e2d\\u6587&quot;)&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="java-lang-classformaterror-null-skywalking-arthas-compatible-use" tabindex="-1"><a class="header-anchor" href="#java-lang-classformaterror-null-skywalking-arthas-compatible-use" aria-hidden="true">#</a> java.lang.ClassFormatError: null, skywalking arthas compatible use</h3><p>When error log appear <code>java.lang.ClassFormatError: null</code>, it is usually modified by other bytecode tools that are not compatible with arthas modified bytecode.</p>`,11),ue=t("For example: use skywalking V8.1.0 below "),pe={href:"https://github.com/alibaba/arthas/issues/1141",target:"_blank",rel:"noopener noreferrer"},me=t("cannot trace, watch classes enhanced by skywalking agent"),_e=t(", V8.1.0 or above is compatible, refer to skywalking configuration for more details. "),be={href:"https://github.com/apache/skywalking/blob/master/docs/en/FAQ/Compatible-with-other-javaagent-bytecode-processing.md#",target:"_blank",rel:"noopener noreferrer"},fe=t("skywalking compatible with other javaagent bytecode processing"),ge=t("."),ve=e("h4",{id:"class-redefinition-failed-attempted-to-change-the-schema-add-remove-fields",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#class-redefinition-failed-attempted-to-change-the-schema-add-remove-fields","aria-hidden":"true"},"#"),t(" class redefinition failed: attempted to change the schema (add/remove fields)")],-1),we=t("Reference: "),ke={href:"https://github.com/alibaba/arthas/issues/2165",target:"_blank",rel:"noopener noreferrer"},xe=t("https://github.com/alibaba/arthas/issues/2165"),ye=e("h3",{id:"can-i-use-arthas-offline",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#can-i-use-arthas-offline","aria-hidden":"true"},"#"),t(" Can I use arthas offline?")],-1),je=t("Yes. Just download the full size package and unzip it, refer to: "),Ce=t("Download"),Ie=t("."),Ve=e("h3",{id:"attach-the-process-with-pid-1-in-docker-k8s-failed",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#attach-the-process-with-pid-1-in-docker-k8s-failed","aria-hidden":"true"},"#"),t(" Attach the process with pid 1 in docker/k8s failed")],-1),qe=t("Reference: "),Ee={href:"https://github.com/alibaba/arthas/issues/362#issuecomment-448185416",target:"_blank",rel:"noopener noreferrer"},Fe=t("https://github.com/alibaba/arthas/issues/362#issuecomment-448185416"),Le=e("h3",{id:"why-is-the-new-version-of-arthas-downloaded-but-the-old-version-is-connected",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#why-is-the-new-version-of-arthas-downloaded-but-the-old-version-is-connected","aria-hidden":"true"},"#"),t(" Why is the new version of Arthas downloaded, but the old version is connected?")],-1),Se=e("p",null,[t("For example, the started version of "),e("code",null,"as.sh/arthas-boot.jar"),t(" is 3.5."),e("em",null,", but after connecting, the printed arthas version is 3.4."),t(".")],-1),He=e("p",null,[t("It may be that the target process has been diagnosed with the old version of arthas before. You can execute "),e("code",null,"stop"),t(" to stop the old version of arthas, and then reuse the new version to attach.")],-1);function Te(Ae,Me){const s=i("ExternalLinkIcon"),o=i("RouterLink");return c(),d("div",null,[u,e("div",p,[m,e("p",null,[_,e("a",b,[f,a(s)])])]),g,v,w,e("p",null,[e("a",k,[x,a(s)])]),y,j,e("ol",null,[C,I,e("li",null,[V,a(o,{to:"/en/doc/quick-start.html"},{default:n(()=>[q]),_:1}),E]),e("li",null,[F,e("a",L,[S,a(s)])])]),H,e("p",null,[T,a(o,{to:"/en/doc/options.html"},{default:n(()=>[A]),_:1})]),M,e("p",null,[B,a(o,{to:"/en/doc/options.html"},{default:n(()=>[N]),_:1})]),O,Y,z,e("ol",null,[e("li",null,[J,a(o,{to:"/en/doc/vmtool.html"},{default:n(()=>[R]),_:1}),U]),e("li",null,[W,a(o,{to:"/en/doc/tt.html"},{default:n(()=>[$]),_:1}),G])]),P,e("p",null,[Q,a(o,{to:"/en/doc/advice-class.html"},{default:n(()=>[D]),_:1}),K,X,Z,ee,te,ae,se]),e("p",null,[oe,ne,re,e("a",ie,[he,a(s)])]),e("p",null,[ce,a(o,{to:"/en/doc/quick-start.html"},{default:n(()=>[de]),_:1})]),le,e("p",null,[ue,e("a",pe,[me,a(s)]),_e,e("a",be,[fe,a(s)]),ge]),ve,e("p",null,[we,e("a",ke,[xe,a(s)])]),ye,e("p",null,[je,a(o,{to:"/en/doc/download.html"},{default:n(()=>[Ce]),_:1}),Ie]),Ve,e("p",null,[qe,e("a",Ee,[Fe,a(s)])]),Le,Se,He])}const Ne=h(l,[["render",Te],["__file","faq.html.vue"]]);export{Ne as default};
