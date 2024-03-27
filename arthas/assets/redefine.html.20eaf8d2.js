import{_ as l,o as p,c as i,a as n,b as a,w as c,e as s,d,r as o}from"./app.b42f861b.js";const r={},u=n("h1",{id:"redefine",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#redefine","aria-hidden":"true"},"#"),s(" redefine")],-1),m={class:"custom-container tip"},k=n("p",{class:"custom-container-title"},"\u63D0\u793A",-1),v=s("\u63A8\u8350\u4F7F\u7528 "),h=s("retransform"),b=s(" \u547D\u4EE4"),f={href:"https://arthas.aliyun.com/doc/arthas-tutorials?language=cn&id=command-mc-redefine",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"mc-redefine",-1),g=s("\u5728\u7EBF\u6559\u7A0B"),x=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"\u63D0\u793A"),n("p",null,[s("\u52A0\u8F7D\u5916\u90E8\u7684"),n("code",null,".class"),s("\u6587\u4EF6\uFF0Credefine jvm \u5DF2\u52A0\u8F7D\u7684\u7C7B\u3002")])],-1),y=s("\u53C2\u8003\uFF1A"),w={href:"https://docs.oracle.com/javase/8/docs/api/java/lang/instrument/Instrumentation.html#redefineClasses-java.lang.instrument.ClassDefinition...-",target:"_blank",rel:"noopener noreferrer"},j=s("Instrumentation#redefineClasses"),C=n("h2",{id:"\u5E38\u89C1\u95EE\u9898",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5E38\u89C1\u95EE\u9898","aria-hidden":"true"},"#"),s(" \u5E38\u89C1\u95EE\u9898")],-1),L={class:"custom-container tip"},I=n("p",{class:"custom-container-title"},"\u63D0\u793A",-1),S=s("\u63A8\u8350\u4F7F\u7528 "),T=s("retransform"),E=s(" \u547D\u4EE4"),q=d(`<ul><li><p>redefine \u7684 class \u4E0D\u80FD\u4FEE\u6539\u3001\u6DFB\u52A0\u3001\u5220\u9664\u7C7B\u7684 field \u548C method\uFF0C\u5305\u62EC\u65B9\u6CD5\u53C2\u6570\u3001\u65B9\u6CD5\u540D\u79F0\u53CA\u8FD4\u56DE\u503C</p></li><li><p>\u5982\u679C mc \u5931\u8D25\uFF0C\u53EF\u4EE5\u5728\u672C\u5730\u5F00\u53D1\u73AF\u5883\u7F16\u8BD1\u597D class \u6587\u4EF6\uFF0C\u4E0A\u4F20\u5230\u76EE\u6807\u7CFB\u7EDF\uFF0C\u4F7F\u7528 redefine \u70ED\u52A0\u8F7D class</p></li><li><p>\u76EE\u524D redefine \u548C watch/trace/jad/tt \u7B49\u547D\u4EE4\u51B2\u7A81\uFF0C\u4EE5\u540E\u91CD\u65B0\u5B9E\u73B0 redefine \u529F\u80FD\u4F1A\u89E3\u51B3\u6B64\u95EE\u9898</p></li></ul><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>\u6CE8\u610F\uFF0C redefine \u540E\u7684\u539F\u6765\u7684\u7C7B\u4E0D\u80FD\u6062\u590D\uFF0Credefine \u6709\u53EF\u80FD\u5931\u8D25\uFF08\u6BD4\u5982\u589E\u52A0\u4E86\u65B0\u7684 field\uFF09\uFF0C\u53C2\u8003 jdk \u672C\u8EAB\u7684\u6587\u6863\u3002</p></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p><code>reset</code>\u547D\u4EE4\u5BF9<code>redefine</code>\u7684\u7C7B\u65E0\u6548\u3002\u5982\u679C\u60F3\u91CD\u7F6E\uFF0C\u9700\u8981<code>redefine</code>\u539F\u59CB\u7684\u5B57\u8282\u7801\u3002</p></div><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p><code>redefine</code>\u547D\u4EE4\u548C<code>jad</code>/<code>watch</code>/<code>trace</code>/<code>monitor</code>/<code>tt</code>\u7B49\u547D\u4EE4\u4F1A\u51B2\u7A81\u3002\u6267\u884C\u5B8C<code>redefine</code>\u4E4B\u540E\uFF0C\u5982\u679C\u518D\u6267\u884C\u4E0A\u9762\u63D0\u5230\u7684\u547D\u4EE4\uFF0C\u5219\u4F1A\u628A<code>redefine</code>\u7684\u5B57\u8282\u7801\u91CD\u7F6E\u3002 \u539F\u56E0\u662F jdk \u672C\u8EAB redefine \u548C Retransform \u662F\u4E0D\u540C\u7684\u673A\u5236\uFF0C\u540C\u65F6\u4F7F\u7528\u4E24\u79CD\u673A\u5236\u6765\u66F4\u65B0\u5B57\u8282\u7801\uFF0C\u53EA\u6709\u6700\u540E\u4FEE\u6539\u7684\u4F1A\u751F\u6548\u3002</p></div><h2 id="\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> \u53C2\u6570\u8BF4\u660E</h2><table><thead><tr><th style="text-align:right;">\u53C2\u6570\u540D\u79F0</th><th style="text-align:left;">\u53C2\u6570\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:right;">[c:]</td><td style="text-align:left;">ClassLoader \u7684 hashcode</td></tr><tr><td style="text-align:right;"><code>[classLoaderClass:]</code></td><td style="text-align:left;">\u6307\u5B9A\u6267\u884C\u8868\u8FBE\u5F0F\u7684 ClassLoader \u7684 class name</td></tr></tbody></table><h2 id="\u4F7F\u7528\u53C2\u8003" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u53C2\u8003" aria-hidden="true">#</a> \u4F7F\u7528\u53C2\u8003</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>   redefine /tmp/Test.class
   redefine <span class="token parameter variable">-c</span> 327a647b /tmp/Test.class /tmp/Test<span class="token punctuation">\\</span><span class="token variable">$Inner</span>.class
   redefine <span class="token parameter variable">--classLoaderClass</span> sun.misc.Launcher<span class="token variable">$AppClassLoader</span> /tmp/Test.class /tmp/Test<span class="token punctuation">\\</span><span class="token variable">$Inner</span>.class
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7ED3\u5408-jad-mc-\u547D\u4EE4\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u5408-jad-mc-\u547D\u4EE4\u4F7F\u7528" aria-hidden="true">#</a> \u7ED3\u5408 jad/mc \u547D\u4EE4\u4F7F\u7528</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>jad --source-only com.example.demo.arthas.user.UserController <span class="token operator">&gt;</span> /tmp/UserController.java

<span class="token function">mc</span> /tmp/UserController.java <span class="token parameter variable">-d</span> /tmp

redefine /tmp/com/example/demo/arthas/user/UserController.class
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>jad \u547D\u4EE4\u53CD\u7F16\u8BD1\uFF0C\u7136\u540E\u53EF\u4EE5\u7528\u5176\u5B83\u7F16\u8BD1\u5668\uFF0C\u6BD4\u5982 vim \u6765\u4FEE\u6539\u6E90\u7801</li><li>mc \u547D\u4EE4\u6765\u5185\u5B58\u7F16\u8BD1\u4FEE\u6539\u8FC7\u7684\u4EE3\u7801</li><li>\u7528 redefine \u547D\u4EE4\u52A0\u8F7D\u65B0\u7684\u5B57\u8282\u7801</li></ul><h2 id="\u4E0A\u4F20-class-\u6587\u4EF6\u5230\u670D\u52A1\u5668\u7684\u6280\u5DE7" tabindex="-1"><a class="header-anchor" href="#\u4E0A\u4F20-class-\u6587\u4EF6\u5230\u670D\u52A1\u5668\u7684\u6280\u5DE7" aria-hidden="true">#</a> \u4E0A\u4F20 .class \u6587\u4EF6\u5230\u670D\u52A1\u5668\u7684\u6280\u5DE7</h2><p>\u4F7F\u7528<code>mc</code>\u547D\u4EE4\u6765\u7F16\u8BD1<code>jad</code>\u7684\u53CD\u7F16\u8BD1\u7684\u4EE3\u7801\u6709\u53EF\u80FD\u5931\u8D25\u3002\u53EF\u4EE5\u5728\u672C\u5730\u4FEE\u6539\u4EE3\u7801\uFF0C\u7F16\u8BD1\u597D\u540E\u518D\u4E0A\u4F20\u5230\u670D\u52A1\u5668\u4E0A\u3002\u6709\u7684\u670D\u52A1\u5668\u4E0D\u5141\u8BB8\u76F4\u63A5\u4E0A\u4F20\u6587\u4EF6\uFF0C\u53EF\u4EE5\u4F7F\u7528<code>base64</code>\u547D\u4EE4\u6765\u7ED5\u8FC7\u3002</p><ol><li><p>\u5728\u672C\u5730\u5148\u8F6C\u6362<code>.class</code>\u6587\u4EF6\u4E3A base64\uFF0C\u518D\u4FDD\u5B58\u4E3A result.txt</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>base64 <span class="token operator">&lt;</span> Test.class <span class="token operator">&gt;</span> result.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5230\u670D\u52A1\u5668\u4E0A\uFF0C\u65B0\u5EFA\u5E76\u7F16\u8F91<code>result.txt</code>\uFF0C\u590D\u5236\u672C\u5730\u7684\u5185\u5BB9\uFF0C\u7C98\u8D34\u518D\u4FDD\u5B58</p></li><li><p>\u628A\u670D\u52A1\u5668\u4E0A\u7684 <code>result.txt</code>\u8FD8\u539F\u4E3A<code>.class</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>base64 -d &lt; result.txt &gt; Test.class
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u7528 md5 \u547D\u4EE4\u8BA1\u7B97\u54C8\u5E0C\u503C\uFF0C\u6821\u9A8C\u662F\u5426\u4E00\u81F4</p></li></ol><h2 id="redefine-\u7684\u9650\u5236" tabindex="-1"><a class="header-anchor" href="#redefine-\u7684\u9650\u5236" aria-hidden="true">#</a> redefine \u7684\u9650\u5236</h2><ul><li>\u4E0D\u5141\u8BB8\u65B0\u589E\u52A0 field/method</li><li>\u6B63\u5728\u8DD1\u7684\u51FD\u6570\uFF0C\u6CA1\u6709\u9000\u51FA\u4E0D\u80FD\u751F\u6548\uFF0C\u6BD4\u5982\u4E0B\u9762\u65B0\u589E\u52A0\u7684<code>System.out.println</code>\uFF0C\u53EA\u6709<code>run()</code>\u51FD\u6570\u91CC\u7684\u4F1A\u751F\u6548</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MathGame</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token class-name">MathGame</span> game <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MathGame</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            game<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// \u8FD9\u4E2A\u4E0D\u751F\u6548\uFF0C\u56E0\u4E3A\u4EE3\u7801\u4E00\u76F4\u8DD1\u5728 while\u91CC</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;in loop&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u8FD9\u4E2A\u751F\u6548\uFF0C\u56E0\u4E3Arun()\u51FD\u6570\u6BCF\u6B21\u90FD\u53EF\u4EE5\u5B8C\u6574\u7ED3\u675F</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;call run()&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">int</span> number <span class="token operator">=</span> random<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> primeFactors <span class="token operator">=</span> <span class="token function">primeFactors</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">print</span><span class="token punctuation">(</span>number<span class="token punctuation">,</span> primeFactors<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;illegalArgumentCount:%3d, &quot;</span><span class="token punctuation">,</span> illegalArgumentCount<span class="token punctuation">)</span> <span class="token operator">+</span> e<span class="token punctuation">.</span><span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function N(U,M){const e=o("RouterLink"),t=o("ExternalLinkIcon");return p(),i("div",null,[u,n("div",m,[k,n("p",null,[v,a(e,{to:"/doc/retransform.html"},{default:c(()=>[h]),_:1}),b])]),n("p",null,[n("a",f,[_,g,a(t)])]),x,n("p",null,[y,n("a",w,[j,a(t)])]),C,n("div",L,[I,n("p",null,[S,a(e,{to:"/doc/retransform.html"},{default:c(()=>[T]),_:1}),E])]),q])}const A=l(r,[["render",N],["__file","redefine.html.vue"]]);export{A as default};
