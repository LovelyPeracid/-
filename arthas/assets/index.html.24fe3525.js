import{_ as i}from"./arthas.b23d3e5a.js";import{_ as a,o as r,c as n,a as e,b as s,d as l,e as t,r as c}from"./app.b42f861b.js";const d={},h=l('<h1 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h1><p><img src="'+i+'" alt=""></p><p>Arthas is a Java diagnostic tool open-sourced by Alibaba middleware team. It is widely adopted and popular among the developers inside Alibaba. Arthas helps developers in trouble-shooting issues in production environment for Java based applications without modifying code or restarting servers.</p><h2 id="background" tabindex="-1"><a class="header-anchor" href="#background" aria-hidden="true">#</a> Background</h2><p>Oftentimes the production system network is inaccessible from local development environment. If issues are encountered in production systems, it is impossible to use IDE to debug the application remotely. What&#39;s even worse, debugging in production environment is unacceptable, as it will suspend all the threads, leading to services downtime.</p><p>Developers could always try to reproduce the same issue on the test/staging environment. However, this is tricky as some issues cannot be reproduced easily in a different environment, or even disappear once restarted.</p><p>And if you&#39;re thinking of adding some logs to your code to help trouble-shoot the issue, you will have to go through the following lifecycle: test, staging, and then to production. Time is money! This approach is inefficient! Worse still, the issue may not be fixed since it might be irreproducible once the JVM is restarted, as described above.</p><p>Arthas is built to solve these issues. A developer can troubleshoot production issues on the fly. No JVM restart, no additional code changes. Arthas works as an observer, that is, it will never suspend your running threads.</p><h2 id="key-features" tabindex="-1"><a class="header-anchor" href="#key-features" aria-hidden="true">#</a> Key features</h2><ul><li>Check whether a class is loaded? Or where the class is loaded from? (Useful for trouble-shooting jar file conflicts)</li><li>Decompile a class to ensure the code is running as expected.</li><li>Check classloader statistics, e.g. the number of classloaders, the number of classes loaded per classloader, the classloader hierarchy, possible classloader leaks, etc.</li><li>Check the method invocation details, e.g. method parameter, returned values, exceptions and etc.</li><li>Check the stack trace of specified method invocation. This is useful when a developer wants to know the caller of the method.</li><li>Trace the method invocation to find slow sub-invocations.</li><li>Monitor method invocation statistics, e.g. QPS (Query Per Second), RT (Return Time), success rate and etc.</li><li>Monitor system metrics, thread states and CPU usage, GC statistics and etc.</li><li>Supports command line interactive mode, with auto-complete feature enabled.</li><li>Supports telnet and WebSocket, which enables both local and remote diagnostics with command line and browsers.</li><li>Supports profiler/Flame Graph</li><li>Support get objects in the heap that are instances of the specified class.</li><li>Supports JDK 6+</li><li>Supports Linux/Mac/Windows</li></ul>',10),u=t("If you are using Arthas, please let us know. Your feedback is very important to us: "),p={href:"https://github.com/alibaba/arthas/issues/111",target:"_blank",rel:"noopener noreferrer"},m=t("View"),b=e("h2",{id:"contributors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#contributors","aria-hidden":"true"},"#"),t(" Contributors")],-1),f={href:"https://github.com/alibaba/arthas/graphs/contributors",target:"_blank",rel:"noopener noreferrer"},g=e("img",{src:"https://opencollective.com/arthas/contributors.svg?width=890&button=false",alt:""},null,-1);function v(_,w){const o=c("ExternalLinkIcon");return r(),n("div",null,[h,e("p",null,[e("strong",null,[u,e("a",p,[m,s(o)])])]),b,e("p",null,[e("a",f,[g,s(o)])])])}const x=a(d,[["render",v],["__file","index.html.vue"]]);export{x as default};
