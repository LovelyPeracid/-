import{_ as e,o as l,c,a,b as t,e as s,d as o,r as p}from"./app.b42f861b.js";const i={},r=a("h1",{id:"logger",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#logger","aria-hidden":"true"},"#"),s(" logger")],-1),d={href:"https://arthas.aliyun.com/doc/arthas-tutorials?language=cn&id=command-logger",target:"_blank",rel:"noopener noreferrer"},u=a("code",null,"logger",-1),v=s("\u5728\u7EBF\u6559\u7A0B"),g=o(`<div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u67E5\u770B logger \u4FE1\u606F\uFF0C\u66F4\u65B0 logger level</p></div><h2 id="\u4F7F\u7528\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u53C2\u8003" aria-hidden="true">#</a> \u4F7F\u7528\u53C2\u8003</h2><h3 id="\u67E5\u770B\u6240\u6709-logger-\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6240\u6709-logger-\u4FE1\u606F" aria-hidden="true">#</a> \u67E5\u770B\u6240\u6709 logger \u4FE1\u606F</h3><p>\u4EE5\u4E0B\u9762\u7684<code>logback.xml</code>\u4E3A\u4F8B\uFF1A</p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>APPLICATION<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ch.qos.logback.core.rolling.RollingFileAppender<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>file</span><span class="token punctuation">&gt;</span></span>app.log<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>file</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>rollingPolicy</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ch.qos.logback.core.rolling.SizeAndTimeBasedRollingPolicy<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>fileNamePattern</span><span class="token punctuation">&gt;</span></span>mylog-%d{yyyy-MM-dd}.%i.txt<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>fileNamePattern</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maxFileSize</span><span class="token punctuation">&gt;</span></span>100MB<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maxFileSize</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>maxHistory</span><span class="token punctuation">&gt;</span></span>60<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>maxHistory</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>totalSizeCap</span><span class="token punctuation">&gt;</span></span>2GB<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>totalSizeCap</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>rollingPolicy</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>encoder</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pattern</span><span class="token punctuation">&gt;</span></span>%logger{35} - %msg%n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pattern</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>encoder</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>appender</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ASYNC<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ch.qos.logback.classic.AsyncAppender<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender-ref</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>APPLICATION<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>appender</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>CONSOLE<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ch.qos.logback.core.ConsoleAppender<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>encoder</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pattern</span><span class="token punctuation">&gt;</span></span>%-4relative [%thread] %-5level %logger{35} - %msg %n
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pattern</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>charset</span><span class="token punctuation">&gt;</span></span>utf8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>charset</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>encoder</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>appender</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>root</span> <span class="token attr-name">level</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>INFO<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender-ref</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>CONSOLE<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>appender-ref</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ASYNC<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>root</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F7F\u7528<code>logger</code>\u547D\u4EE4\u6253\u5370\u7684\u7ED3\u679C\u662F\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>arthas@2062<span class="token punctuation">]</span>$ logger
 name                                   ROOT
 class                                  ch.qos.logback.classic.Logger
 classLoader                            sun.misc.Launcher<span class="token variable">$AppClassLoader</span>@2a139a55
 classLoaderHash                        2a139a55
 level                                  INFO
 effectiveLevel                         INFO
 additivity                             <span class="token boolean">true</span>
 codeSource                             file:/Users/hengyunabc/.m2/repository/ch/qos/logback/logback-classic/1.2.3/logback-classic-1.2.3.jar
 appenders                              name            CONSOLE
                                        class           ch.qos.logback.core.ConsoleAppender
                                        classLoader     sun.misc.Launcher<span class="token variable">$AppClassLoader</span>@2a139a55
                                        classLoaderHash 2a139a55
                                        target          System.out
                                        name            APPLICATION
                                        class           ch.qos.logback.core.rolling.RollingFileAppender
                                        classLoader     sun.misc.Launcher<span class="token variable">$AppClassLoader</span>@2a139a55
                                        classLoaderHash 2a139a55
                                        <span class="token function">file</span>            app.log
                                        name            ASYNC
                                        class           ch.qos.logback.classic.AsyncAppender
                                        classLoader     sun.misc.Launcher<span class="token variable">$AppClassLoader</span>@2a139a55
                                        classLoaderHash 2a139a55
                                        appenderRef     <span class="token punctuation">[</span>APPLICATION<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4ECE<code>appenders</code>\u7684\u4FE1\u606F\u91CC\uFF0C\u53EF\u4EE5\u770B\u5230</p><ul><li><code>CONSOLE</code> logger \u7684 target \u662F<code>System.out</code></li><li><code>APPLICATION</code> logger \u662F<code>RollingFileAppender</code>\uFF0C\u5B83\u7684 file \u662F<code>app.log</code></li><li><code>ASYNC</code>\u5B83\u7684<code>appenderRef</code>\u662F<code>APPLICATION</code>\uFF0C\u5373\u5F02\u6B65\u8F93\u51FA\u5230\u6587\u4EF6\u91CC</li></ul><h3 id="\u67E5\u770B\u6307\u5B9A\u540D\u5B57\u7684-logger-\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6307\u5B9A\u540D\u5B57\u7684-logger-\u4FE1\u606F" aria-hidden="true">#</a> \u67E5\u770B\u6307\u5B9A\u540D\u5B57\u7684 logger \u4FE1\u606F</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>arthas@2062<span class="token punctuation">]</span>$ logger <span class="token parameter variable">-n</span> org.springframework.web
 name                                   org.springframework.web
 class                                  ch.qos.logback.classic.Logger
 classLoader                            sun.misc.Launcher<span class="token variable">$AppClassLoader</span>@2a139a55
 classLoaderHash                        2a139a55
 level                                  null
 effectiveLevel                         INFO
 additivity                             <span class="token boolean">true</span>
 codeSource                             file:/Users/hengyunabc/.m2/repository/ch/qos/logback/logback-classic/1.2.3/logback-classic-1.2.3.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u67E5\u770B\u6307\u5B9A-classloader-\u7684-logger-\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6307\u5B9A-classloader-\u7684-logger-\u4FE1\u606F" aria-hidden="true">#</a> \u67E5\u770B\u6307\u5B9A classloader \u7684 logger \u4FE1\u606F</h3><p>\u6CE8\u610F hashcode \u662F\u53D8\u5316\u7684\uFF0C\u9700\u8981\u5148\u67E5\u770B\u5F53\u524D\u7684 ClassLoader \u4FE1\u606F\uFF0C\u63D0\u53D6\u5BF9\u5E94 ClassLoader \u7684 hashcode\u3002</p><p>\u5982\u679C\u4F60\u4F7F\u7528<code>-c</code>\uFF0C\u4F60\u9700\u8981\u624B\u52A8\u8F93\u5165 hashcode\uFF1A<code>-c &lt;hashcode&gt;</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>arthas@2062<span class="token punctuation">]</span>$ logger <span class="token parameter variable">-c</span> 2a139a55
 name                                   ROOT
 class                                  ch.qos.logback.classic.Logger
 classLoader                            sun.misc.Launcher<span class="token variable">$AppClassLoader</span>@2a139a55
 classLoaderHash                        2a139a55
 level                                  DEBUG
 effectiveLevel                         DEBUG
 additivity                             <span class="token boolean">true</span>
 codeSource                             file:/Users/hengyunabc/.m2/repository/ch/qos/logback/logback-classic/1.2.3/logback-classic-1.2.3.jar
 appenders                              name            CONSOLE
                                        class           ch.qos.logback.core.ConsoleAppender
                                        classLoader     sun.misc.Launcher<span class="token variable">$AppClassLoader</span>@2a139a55
                                        classLoaderHash 2a139a55
                                        target          System.out
                                        name            APPLICATION
                                        class           ch.qos.logback.core.rolling.RollingFileAppender
                                        classLoader     sun.misc.Launcher<span class="token variable">$AppClassLoader</span>@2a139a55
                                        classLoaderHash 2a139a55
                                        <span class="token function">file</span>            app.log
                                        name            ASYNC
                                        class           ch.qos.logback.classic.AsyncAppender
                                        classLoader     sun.misc.Launcher<span class="token variable">$AppClassLoader</span>@2a139a55
                                        classLoaderHash 2a139a55
                                        appenderRef     <span class="token punctuation">[</span>APPLICATION<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E8E\u53EA\u6709\u552F\u4E00\u5B9E\u4F8B\u7684 ClassLoader \u53EF\u4EE5\u901A\u8FC7<code>--classLoaderClass</code>\u6307\u5B9A class name\uFF0C\u4F7F\u7528\u8D77\u6765\u66F4\u52A0\u65B9\u4FBF\uFF1A</p><p><code>logger --classLoaderClass sun.misc.Launcher$AppClassLoader</code></p><ul><li>\u6CE8: \u8FD9\u91CC classLoaderClass \u5728 java 8 \u662F sun.misc.Launcher$AppClassLoader\uFF0C\u800Cjava 11\u7684classloader\u662Fjdk.internal.loader.ClassLoaders$AppClassLoader\u3002</li></ul><p><code>--classLoaderClass</code> \u7684\u503C\u662F ClassLoader \u7684\u7C7B\u540D\uFF0C\u53EA\u6709\u5339\u914D\u5230\u552F\u4E00\u7684 ClassLoader \u5B9E\u4F8B\u65F6\u624D\u80FD\u5DE5\u4F5C\uFF0C\u76EE\u7684\u662F\u65B9\u4FBF\u8F93\u5165\u901A\u7528\u547D\u4EE4\uFF0C\u800C<code>-c &lt;hashcode&gt;</code>\u662F\u52A8\u6001\u53D8\u5316\u7684\u3002</p><h3 id="\u66F4\u65B0-logger-level" tabindex="-1"><a class="header-anchor" href="#\u66F4\u65B0-logger-level" aria-hidden="true">#</a> \u66F4\u65B0 logger level</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>arthas@2062<span class="token punctuation">]</span>$ logger <span class="token parameter variable">--name</span> ROOT <span class="token parameter variable">--level</span> debug
update logger level success.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6307\u5B9A-classloader-\u66F4\u65B0-logger-level" tabindex="-1"><a class="header-anchor" href="#\u6307\u5B9A-classloader-\u66F4\u65B0-logger-level" aria-hidden="true">#</a> \u6307\u5B9A classloader \u66F4\u65B0 logger level</h3><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0Clogger \u547D\u4EE4\u4F1A\u5728 SystemClassloader \u4E0B\u6267\u884C\uFF0C\u5982\u679C\u5E94\u7528\u662F\u4F20\u7EDF\u7684<code>war</code>\u5E94\u7528\uFF0C\u6216\u8005 spring boot fat jar \u542F\u52A8\u7684\u5E94\u7528\uFF0C\u90A3\u4E48\u9700\u8981\u6307\u5B9A classloader\u3002</p><p>\u53EF\u4EE5\u5148\u7528 <code>sc -d yourClassName</code> \u6765\u67E5\u770B\u5177\u4F53\u7684 classloader hashcode\uFF0C\u7136\u540E\u5728\u66F4\u65B0 level \u65F6\u6307\u5B9A classloader\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>arthas@2062<span class="token punctuation">]</span>$ logger <span class="token parameter variable">-c</span> 2a139a55 <span class="token parameter variable">--name</span> ROOT <span class="token parameter variable">--level</span> debug
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u67E5\u770B\u6CA1\u6709-appender-\u7684-logger-\u7684\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6CA1\u6709-appender-\u7684-logger-\u7684\u4FE1\u606F" aria-hidden="true">#</a> \u67E5\u770B\u6CA1\u6709 appender \u7684 logger \u7684\u4FE1\u606F</h3><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C<code>logger</code>\u547D\u4EE4\u53EA\u6253\u5370\u6709 appender \u7684 logger \u7684\u4FE1\u606F\u3002\u5982\u679C\u60F3\u67E5\u770B\u6CA1\u6709<code>appender</code>\u7684 logger \u7684\u4FE1\u606F\uFF0C\u53EF\u4EE5\u52A0\u4E0A\u53C2\u6570<code>--include-no-appender</code>\u3002</p><p>\u6CE8\u610F\uFF0C\u901A\u5E38\u8F93\u51FA\u7ED3\u679C\u4F1A\u5F88\u957F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>arthas@2062<span class="token punctuation">]</span>$ logger --include-no-appender
 name                                   ROOT
 class                                  ch.qos.logback.classic.Logger
 classLoader                            sun.misc.Launcher<span class="token variable">$AppClassLoader</span>@2a139a55
 classLoaderHash                        2a139a55
 level                                  DEBUG
 effectiveLevel                         DEBUG
 additivity                             <span class="token boolean">true</span>
 codeSource                             file:/Users/hengyunabc/.m2/repository/ch/qos/logback/logback-classic/1.2.3/logback-classic-1.2.3.jar
 appenders                              name            CONSOLE
                                        class           ch.qos.logback.core.ConsoleAppender
                                        classLoader     sun.misc.Launcher<span class="token variable">$AppClassLoader</span>@2a139a55
                                        classLoaderHash 2a139a55
                                        target          System.out
                                        name            APPLICATION
                                        class           ch.qos.logback.core.rolling.RollingFileAppender
                                        classLoader     sun.misc.Launcher<span class="token variable">$AppClassLoader</span>@2a139a55
                                        classLoaderHash 2a139a55
                                        <span class="token function">file</span>            app.log
                                        name            ASYNC
                                        class           ch.qos.logback.classic.AsyncAppender
                                        classLoader     sun.misc.Launcher<span class="token variable">$AppClassLoader</span>@2a139a55
                                        classLoaderHash 2a139a55
                                        appenderRef     <span class="token punctuation">[</span>APPLICATION<span class="token punctuation">]</span>

 name                                   com
 class                                  ch.qos.logback.classic.Logger
 classLoader                            sun.misc.Launcher<span class="token variable">$AppClassLoader</span>@2a139a55
 classLoaderHash                        2a139a55
 level                                  null
 effectiveLevel                         DEBUG
 additivity                             <span class="token boolean">true</span>
 codeSource                             file:/Users/hengyunabc/.m2/repository/ch/qos/logback/logback-classic/1.2.3/logback-classic-1.2.3.jar

 name                                   com.alibaba
 class                                  ch.qos.logback.classic.Logger
 classLoader                            sun.misc.Launcher<span class="token variable">$AppClassLoader</span>@2a139a55
 classLoaderHash                        2a139a55
 level                                  null
 effectiveLevel                         DEBUG
 additivity                             <span class="token boolean">true</span>
 codeSource                             file:/Users/hengyunabc/.m2/repository/ch/qos/logback/logback-classic/1.2.3/logback-classic-1.2.3.jar
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function k(m,b){const n=p("ExternalLinkIcon");return l(),c("div",null,[r,a("p",null,[a("a",d,[u,v,t(n)])]),g])}const L=e(i,[["render",k],["__file","logger.html.vue"]]);export{L as default};
