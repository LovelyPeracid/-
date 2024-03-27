import{_ as t,o,c as r,a as s,b as e,e as n,d as l,r as i}from"./app.b42f861b.js";const c={},p=s("h1",{id:"retransform",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#retransform","aria-hidden":"true"},"#"),n(" retransform")],-1),d={href:"https://arthas.aliyun.com/doc/arthas-tutorials?language=en&id=command-mc-retransform",target:"_blank",rel:"noopener noreferrer"},u=s("code",null,"mc-retransform",-1),m=n(" online tutorial"),h=s("div",{class:"custom-container tip"},[s("p",{class:"custom-container-title"},"TIP"),s("p",null,[n("Load the external "),s("code",null,"*.class"),n(" files to retransform the loaded classes in JVM.")])],-1),v=n("Reference: "),k={href:"https://docs.oracle.com/javase/8/docs/api/java/lang/instrument/Instrumentation.html#retransformClasses-java.lang.Class...-",target:"_blank",rel:"noopener noreferrer"},f=n("Instrumentation#retransformClasses"),b=l(`<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>   retransform /tmp/Test.class
   retransform <span class="token parameter variable">-l</span>
   retransform <span class="token parameter variable">-d</span> <span class="token number">1</span>                    <span class="token comment"># delete retransform entry</span>
   retransform <span class="token parameter variable">--deleteAll</span>             <span class="token comment"># delete all retransform entries</span>
   retransform <span class="token parameter variable">--classPattern</span> demo.*   <span class="token comment"># triger retransform classes</span>
   retransform <span class="token parameter variable">-c</span> 327a647b /tmp/Test.class /tmp/Test<span class="token punctuation">\\</span><span class="token variable">$Inner</span>.class
   retransform <span class="token parameter variable">--classLoaderClass</span> <span class="token string">&#39;sun.misc.Launcher$AppClassLoader&#39;</span> /tmp/Test.class
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="retransform-the-specified-class-file" tabindex="-1"><a class="header-anchor" href="#retransform-the-specified-class-file" aria-hidden="true">#</a> retransform the specified .class file</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ retransform /tmp/MathGame.class
retransform success, size: <span class="token number">1</span>, classes:
demo.MathGame
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Load the specified .class file, then parse out the class name, and then retransform the corresponding class loaded in the jvm. Every time a <code>.class</code> file is loaded, a retransform entry is recorded.</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If retransform is executed multiple times to load the same class file, there will be multiple retransform entries.</p></div><h2 id="view-retransform-entry" tabindex="-1"><a class="header-anchor" href="#view-retransform-entry" aria-hidden="true">#</a> View retransform entry</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ retransform <span class="token parameter variable">-l</span>
Id              ClassName       TransformCount  LoaderHash      LoaderClassName
<span class="token number">1</span>               demo.MathGame   <span class="token number">1</span>               null            null
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>TransformCount counts the times of attempts to return the .class file corresponding to the entry in the ClassFileTransformer#transform method, but it does not mean that the transform must be successful.</li></ul><h2 id="delete-the-specified-retransform-entry" tabindex="-1"><a class="header-anchor" href="#delete-the-specified-retransform-entry" aria-hidden="true">#</a> Delete the specified retransform entry</h2><p>Need to specify id:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>retransform <span class="token parameter variable">-d</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="delete-all-retransform-entries" tabindex="-1"><a class="header-anchor" href="#delete-all-retransform-entries" aria-hidden="true">#</a> Delete all retransform entries</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>retransform <span class="token parameter variable">--deleteAll</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="explicitly-trigger-retransform" tabindex="-1"><a class="header-anchor" href="#explicitly-trigger-retransform" aria-hidden="true">#</a> Explicitly trigger retransform</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ retransform <span class="token parameter variable">--classPattern</span> demo.MathGame
retransform success, size: <span class="token number">1</span>, classes:
demo.MathGame
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Note: For the same class, when there are multiple retransform entries, if retransform is explicitly triggered, the entry added last will take effect (the one with the largest id).</p></div><h2 id="eliminate-the-influence-of-retransform" tabindex="-1"><a class="header-anchor" href="#eliminate-the-influence-of-retransform" aria-hidden="true">#</a> Eliminate the influence of retransform</h2><p>If you want to eliminate the impact after performing retransform on a class, you need to:</p><ul><li>Delete the retransform entry corresponding to this class</li><li>Re-trigger retransform</li></ul><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you do not clear all retransform entries and trigger retransform again, the retransformed classes will still take effect when arthas stop.</p></div><h2 id="use-with-the-jad-mc-command" tabindex="-1"><a class="header-anchor" href="#use-with-the-jad-mc-command" aria-hidden="true">#</a> Use with the jad/mc command</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>jad --source-only com.example.demo.arthas.user.UserController <span class="token operator">&gt;</span> /tmp/UserController.java

<span class="token function">mc</span> /tmp/UserController.java <span class="token parameter variable">-d</span> /tmp

retransform /tmp/com/example/demo/arthas/user/UserController.class
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Use <code>jad</code> command to decompile bytecode, and then you can use other editors, such as vim to modify the source code.</li><li><code>mc</code> command to compile the modified code</li><li>Load new bytecode with <code>retransform</code> command</li></ul><h2 id="tips-for-uploading-class-files-to-the-server" tabindex="-1"><a class="header-anchor" href="#tips-for-uploading-class-files-to-the-server" aria-hidden="true">#</a> Tips for uploading .class files to the server</h2><p>The <code>mc</code> command may fail. You can modify the code locally, compile it, and upload it to the server. Some servers do not allow direct uploading files, you can use the <code>base64</code> command to bypass.</p><ol><li><p>Convert the <code>.class</code> file to base64 first, then save it as result.txt</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Base64 <span class="token operator">&lt;</span> Test.class <span class="token operator">&gt;</span> result.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Login the server, create and edit <code>result.txt</code>, copy the local content, paste and save</p></li><li><p>Restore <code>result.txt</code> on the server to <code>.class</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Base64 -d &lt; result.txt &gt; Test.class
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Use the md5 command to verify that the <code>.class</code> files are consistent.</p></li></ol><h2 id="restrictions-of-the-retransform-command" tabindex="-1"><a class="header-anchor" href="#restrictions-of-the-retransform-command" aria-hidden="true">#</a> Restrictions of the retransform command</h2><ul><li>New field/method is not allowed</li><li>The function that is running, no exit can not take effect, such as the new <code>System.out.println</code> added below, only the <code>run()</code> function will take effect.</li></ul><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MathGame</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token class-name">MathGame</span> game <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MathGame</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            game<span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">TimeUnit</span><span class="token punctuation">.</span><span class="token constant">SECONDS</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// This doesn&#39;t work because the code keeps running in while</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;in loop&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        <span class="token comment">// This works because the run() function ends completely every time</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function g(y,x){const a=i("ExternalLinkIcon");return o(),r("div",null,[p,s("p",null,[s("a",d,[u,m,e(a)])]),h,s("p",null,[v,s("a",k,[f,e(a)])]),b])}const _=t(c,[["render",g],["__file","retransform.html.vue"]]);export{_ as default};
