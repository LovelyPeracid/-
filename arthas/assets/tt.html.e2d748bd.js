import{_ as p,o as i,c as r,a as n,b as a,w as o,e as s,d as e,r as c}from"./app.b42f861b.js";const d={},u=n("h1",{id:"tt",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tt","aria-hidden":"true"},"#"),s(" tt")],-1),m={href:"https://arthas.aliyun.com/doc/arthas-tutorials.html?language=en&id=command-tt",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"tt",-1),h=s(" online tutorial"),k=e('<p>Check the <code>parameters</code>, <code>return values</code> and <code>exceptions</code> of the methods at different times.</p><p><code>watch</code> is a powerful command but due to its feasibility and complexity, it&#39;s quite hard to locate the issue effectively.</p><p>In such difficulties, <code>tt</code> comes into play.</p><p>With the help of <code>tt</code> (<em>TimeTunnel</em>), you can check the contexts of the methods at different times in execution history.</p><h2 id="precautions" tabindex="-1"><a class="header-anchor" href="#precautions" aria-hidden="true">#</a> Precautions</h2><ul><li>The implementation of the tt command is to save the input parameters/return values of the function into a <code>Map&lt;Integer, TimeFragment&gt;</code>. The default size is 100.</li><li>After using tt related functions, you need to manually release the memory, otherwise OOM may occur for a long time. Exiting arthas will not automatically clear tt&#39;s cache map.</li></ul><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><h3 id="start-demo" tabindex="-1"><a class="header-anchor" href="#start-demo" aria-hidden="true">#</a> Start Demo</h3>',8),v=s("Start "),f=n("code",null,"math-game",-1),g=s(" in "),x=s("Quick Start"),_=s("."),T=e(`<h3 id="record-method-calls" tabindex="-1"><a class="header-anchor" href="#record-method-calls" aria-hidden="true">#</a> Record method calls</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ tt <span class="token parameter variable">-t</span> demo.MathGame primeFactors
Press Ctrl+C to abort.
Affect<span class="token punctuation">(</span>class-cnt:1 , method-cnt:1<span class="token punctuation">)</span> cost <span class="token keyword">in</span> <span class="token number">66</span> ms.
 INDEX   TIMESTAMP            COST<span class="token punctuation">(</span>ms<span class="token punctuation">)</span>  IS-RET  IS-EXP   OBJECT         CLASS                          METHOD
-------------------------------------------------------------------------------------------------------------------------------------
 <span class="token number">1000</span>    <span class="token number">2018</span>-12-04 <span class="token number">11</span>:15:38  <span class="token number">1.096236</span>  <span class="token boolean">false</span>   <span class="token boolean">true</span>     0x4b67cf4d     MathGame                       primeFactors
 <span class="token number">1001</span>    <span class="token number">2018</span>-12-04 <span class="token number">11</span>:15:39  <span class="token number">0.191848</span>  <span class="token boolean">false</span>   <span class="token boolean">true</span>     0x4b67cf4d     MathGame                       primeFactors
 <span class="token number">1002</span>    <span class="token number">2018</span>-12-04 <span class="token number">11</span>:15:40  <span class="token number">0.069523</span>  <span class="token boolean">false</span>   <span class="token boolean">true</span>     0x4b67cf4d     MathGame                       primeFactors
 <span class="token number">1003</span>    <span class="token number">2018</span>-12-04 <span class="token number">11</span>:15:41  <span class="token number">0.186073</span>  <span class="token boolean">false</span>   <span class="token boolean">true</span>     0x4b67cf4d     MathGame                       primeFactors
 <span class="token number">1004</span>    <span class="token number">2018</span>-12-04 <span class="token number">11</span>:15:42  <span class="token number">17.76437</span>  <span class="token boolean">true</span>    <span class="token boolean">false</span>    0x4b67cf4d     MathGame                       primeFactors
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="specify-the-max-number-of-matched-classes" tabindex="-1"><a class="header-anchor" href="#specify-the-max-number-of-matched-classes" aria-hidden="true">#</a> Specify the max number of matched Classes</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ tt <span class="token parameter variable">-t</span> <span class="token parameter variable">-m</span> <span class="token number">1</span> demo.MathGame primeFactors
Press Q or Ctrl+C to abort.
Affect<span class="token punctuation">(</span>class count:1 , method count:1<span class="token punctuation">)</span> cost <span class="token keyword">in</span> <span class="token number">130</span> ms, listenerId: <span class="token number">1</span>.
 INDEX   TIMESTAMP            COST<span class="token punctuation">(</span>ms<span class="token punctuation">)</span>  IS-RET  IS-EXP   OBJECT         CLASS                          METHOD
-------------------------------------------------------------------------------------------------------------------------------------
 <span class="token number">1000</span>    <span class="token number">2022</span>-12-25 <span class="token number">19</span>:41:45  <span class="token number">2.629929</span>  <span class="token boolean">true</span>    <span class="token boolean">false</span>    0x3bf400       MathGame                       primeFactors
 <span class="token number">1001</span>    <span class="token number">2022</span>-12-25 <span class="token number">19</span>:41:55  <span class="token number">0.146161</span>  <span class="token boolean">false</span>   <span class="token boolean">true</span>     0x3bf400       MathGame                       primeFactors
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p><code>-t</code></p><p>record the calling context of the method <code>demo.MathGame primeFactors</code></p></li><li><p><code>-n 3</code></p><p>limit the number of the records (avoid overflow for too many records; with <code>-n</code> option, Arthas can automatically stop recording once the records reach the specified limit)</p></li><li><p><code>-m 1</code></p><p>limit the number of matched Classes to avoid JVM suspending when too many matched Classes. The default value is 50.</p></li><li><p>Property</p></li></ul><table><thead><tr><th>Name</th><th>Specification</th></tr></thead><tbody><tr><td>INDEX</td><td>the index for each call based on time</td></tr><tr><td>TIMESTAMP</td><td>time to invoke the method</td></tr><tr><td>COST(ms)</td><td>time cost of the method call</td></tr><tr><td>IS-RET</td><td>whether method exits with normal return</td></tr><tr><td>IS-EXP</td><td>whether method failed with exceptions</td></tr><tr><td>OBJECT</td><td><code>hashCode()</code> of the object invoking the method</td></tr><tr><td>CLASS</td><td>class name of the object invoking the method</td></tr><tr><td>METHOD</td><td>method being invoked</td></tr></tbody></table><ul><li>Condition expression</li></ul><p>Tips:</p><ol><li><code>tt -t *Test print params.length==1</code> with different amounts of parameters;</li><li><code>tt -t *Test print &#39;params[1] instanceof Integer&#39;</code> with different types of parameters;</li><li><code>tt -t *Test print params[0].mobile==&quot;13989838402&quot;</code> with specified parameter.</li></ol><p>Advanced:</p>`,10),E=s("Critical fields in expression"),M={href:"https://github.com/alibaba/arthas/issues/71",target:"_blank",rel:"noopener noreferrer"},S=s("Special usage"),I={href:"https://commons.apache.org/proper/commons-ognl/language-guide.html",target:"_blank",rel:"noopener noreferrer"},y=s("OGNL official guide"),C=e(`<h3 id="list-all-records" tabindex="-1"><a class="header-anchor" href="#list-all-records" aria-hidden="true">#</a> List all records</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ tt <span class="token parameter variable">-l</span>
 INDEX   TIMESTAMP            COST<span class="token punctuation">(</span>ms<span class="token punctuation">)</span>  IS-RET  IS-EXP   OBJECT         CLASS                          METHOD
-------------------------------------------------------------------------------------------------------------------------------------
 <span class="token number">1000</span>    <span class="token number">2018</span>-12-04 <span class="token number">11</span>:15:38  <span class="token number">1.096236</span>  <span class="token boolean">false</span>   <span class="token boolean">true</span>     0x4b67cf4d     MathGame                       primeFactors
 <span class="token number">1001</span>    <span class="token number">2018</span>-12-04 <span class="token number">11</span>:15:39  <span class="token number">0.191848</span>  <span class="token boolean">false</span>   <span class="token boolean">true</span>     0x4b67cf4d     MathGame                       primeFactors
 <span class="token number">1002</span>    <span class="token number">2018</span>-12-04 <span class="token number">11</span>:15:40  <span class="token number">0.069523</span>  <span class="token boolean">false</span>   <span class="token boolean">true</span>     0x4b67cf4d     MathGame                       primeFactors
 <span class="token number">1003</span>    <span class="token number">2018</span>-12-04 <span class="token number">11</span>:15:41  <span class="token number">0.186073</span>  <span class="token boolean">false</span>   <span class="token boolean">true</span>     0x4b67cf4d     MathGame                       primeFactors
 <span class="token number">1004</span>    <span class="token number">2018</span>-12-04 <span class="token number">11</span>:15:42  <span class="token number">17.76437</span>  <span class="token boolean">true</span>    <span class="token boolean">false</span>    0x4b67cf4d     MathGame                       primeFactors
                              <span class="token number">9</span>
 <span class="token number">1005</span>    <span class="token number">2018</span>-12-04 <span class="token number">11</span>:15:43  <span class="token number">0.4776</span>    <span class="token boolean">false</span>   <span class="token boolean">true</span>     0x4b67cf4d     MathGame                       primeFactors
Affect<span class="token punctuation">(</span>row-cnt:6<span class="token punctuation">)</span> cost <span class="token keyword">in</span> <span class="token number">4</span> ms.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="searching-for-records" tabindex="-1"><a class="header-anchor" href="#searching-for-records" aria-hidden="true">#</a> Searching for records</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ tt <span class="token parameter variable">-s</span> <span class="token string">&#39;method.name==&quot;primeFactors&quot;&#39;</span>
 INDEX   TIMESTAMP            COST<span class="token punctuation">(</span>ms<span class="token punctuation">)</span>  IS-RET  IS-EXP   OBJECT         CLASS                          METHOD
-------------------------------------------------------------------------------------------------------------------------------------
 <span class="token number">1000</span>    <span class="token number">2018</span>-12-04 <span class="token number">11</span>:15:38  <span class="token number">1.096236</span>  <span class="token boolean">false</span>   <span class="token boolean">true</span>     0x4b67cf4d     MathGame                       primeFactors
 <span class="token number">1001</span>    <span class="token number">2018</span>-12-04 <span class="token number">11</span>:15:39  <span class="token number">0.191848</span>  <span class="token boolean">false</span>   <span class="token boolean">true</span>     0x4b67cf4d     MathGame                       primeFactors
 <span class="token number">1002</span>    <span class="token number">2018</span>-12-04 <span class="token number">11</span>:15:40  <span class="token number">0.069523</span>  <span class="token boolean">false</span>   <span class="token boolean">true</span>     0x4b67cf4d     MathGame                       primeFactors
 <span class="token number">1003</span>    <span class="token number">2018</span>-12-04 <span class="token number">11</span>:15:41  <span class="token number">0.186073</span>  <span class="token boolean">false</span>   <span class="token boolean">true</span>     0x4b67cf4d     MathGame                       primeFactors
 <span class="token number">1004</span>    <span class="token number">2018</span>-12-04 <span class="token number">11</span>:15:42  <span class="token number">17.76437</span>  <span class="token boolean">true</span>    <span class="token boolean">false</span>    0x4b67cf4d     MathGame                       primeFactors
                              <span class="token number">9</span>
 <span class="token number">1005</span>    <span class="token number">2018</span>-12-04 <span class="token number">11</span>:15:43  <span class="token number">0.4776</span>    <span class="token boolean">false</span>   <span class="token boolean">true</span>     0x4b67cf4d     MathGame                       primeFactors
Affect<span class="token punctuation">(</span>row-cnt:6<span class="token punctuation">)</span> cost <span class="token keyword">in</span> <span class="token number">607</span> ms.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Advanced:</p>`,5),A=s("Critical fields in expression"),w=e(`<h3 id="check-context-of-the-call" tabindex="-1"><a class="header-anchor" href="#check-context-of-the-call" aria-hidden="true">#</a> Check context of the call</h3><p>Using <code>tt -i &lt;index&gt;</code> to check a specific calling details.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ tt <span class="token parameter variable">-i</span> <span class="token number">1003</span>
 INDEX            <span class="token number">1003</span>
 GMT-CREATE       <span class="token number">2018</span>-12-04 <span class="token number">11</span>:15:41
 COST<span class="token punctuation">(</span>ms<span class="token punctuation">)</span>         <span class="token number">0.186073</span>
 OBJECT           0x4b67cf4d
 CLASS            demo.MathGame
 METHOD           primeFactors
 IS-RETURN        <span class="token boolean">false</span>
 IS-EXCEPTION     <span class="token boolean">true</span>
 PARAMETERS<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>    @Integer<span class="token punctuation">[</span>-564322413<span class="token punctuation">]</span>
 THROW-EXCEPTION  java.lang.IllegalArgumentException: number is: -564322413, need <span class="token operator">&gt;=</span> <span class="token number">2</span>
                    at demo.MathGame.primeFactors<span class="token punctuation">(</span>MathGame.java:46<span class="token punctuation">)</span>
                    at demo.MathGame.run<span class="token punctuation">(</span>MathGame.java:24<span class="token punctuation">)</span>
                    at demo.MathGame.main<span class="token punctuation">(</span>MathGame.java:16<span class="token punctuation">)</span>

Affect<span class="token punctuation">(</span>row-cnt:1<span class="token punctuation">)</span> cost <span class="token keyword">in</span> <span class="token number">11</span> ms.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="replay-record" tabindex="-1"><a class="header-anchor" href="#replay-record" aria-hidden="true">#</a> Replay record</h3><p>Since Arthas stores the context of the call, you can even <em>replay</em> the method calling afterwards with extra option <code>-p</code> to replay the issue for advanced troubleshooting, option <code>--replay-times</code> define the replay execution times, option <code>--replay-interval</code> define the interval(unit in ms,with default value 1000) of replays</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ tt <span class="token parameter variable">-i</span> <span class="token number">1004</span> <span class="token parameter variable">-p</span>
 RE-INDEX       <span class="token number">1004</span>
 GMT-REPLAY     <span class="token number">2018</span>-12-04 <span class="token number">11</span>:26:00
 OBJECT         0x4b67cf4d
 CLASS          demo.MathGame
 METHOD         primeFactors
 PARAMETERS<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>  @Integer<span class="token punctuation">[</span><span class="token number">946738738</span><span class="token punctuation">]</span>
 IS-RETURN      <span class="token boolean">true</span>
 IS-EXCEPTION   <span class="token boolean">false</span>
 RETURN-OBJ     @ArrayList<span class="token punctuation">[</span>
                    @Integer<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>,
                    @Integer<span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span>,
                    @Integer<span class="token punctuation">[</span><span class="token number">17</span><span class="token punctuation">]</span>,
                    @Integer<span class="token punctuation">[</span><span class="token number">2531387</span><span class="token punctuation">]</span>,
                <span class="token punctuation">]</span>
Time fragment<span class="token punctuation">[</span><span class="token number">1004</span><span class="token punctuation">]</span> successfully replayed.
Affect<span class="token punctuation">(</span>row-cnt:1<span class="token punctuation">)</span> cost <span class="token keyword">in</span> <span class="token number">14</span> ms.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="watch-express" tabindex="-1"><a class="header-anchor" href="#watch-express" aria-hidden="true">#</a> Watch express</h3><p><code>-w, --watch-express</code> watch the time fragment by ognl express.</p>`,8),G=s("You can used all variables in "),O=s("fundamental fields in expressions"),F=s(" for the watch express\u3002"),P=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>arthas@10718<span class="token punctuation">]</span>$ tt <span class="token parameter variable">-t</span> demo.MathGame run <span class="token parameter variable">-n</span> <span class="token number">5</span>
Press Q or Ctrl+C to abort.
Affect<span class="token punctuation">(</span>class count: <span class="token number">1</span> , method count: <span class="token number">1</span><span class="token punctuation">)</span> cost <span class="token keyword">in</span> <span class="token number">56</span> ms, listenerId: <span class="token number">1</span>
 INDEX      TIMESTAMP                   COST<span class="token punctuation">(</span>ms<span class="token punctuation">)</span>     IS-RET     IS-EXP      OBJECT              CLASS                                     METHOD
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 <span class="token number">1000</span>       <span class="token number">2021</span>-01-08 <span class="token number">21</span>:54:17         <span class="token number">0.901091</span>     <span class="token boolean">true</span>       <span class="token boolean">false</span>       0x7699a589          MathGame                                  run
<span class="token punctuation">[</span>arthas@10718<span class="token punctuation">]</span>$ tt <span class="token parameter variable">-w</span> <span class="token string">&#39;target.illegalArgumentCount&#39;</span>  <span class="token parameter variable">-x</span> <span class="token number">1</span> <span class="token parameter variable">-i</span> <span class="token number">1000</span>
@Integer<span class="token punctuation">[</span><span class="token number">60</span><span class="token punctuation">]</span>
Affect<span class="token punctuation">(</span>row-cnt:1<span class="token punctuation">)</span> cost <span class="token keyword">in</span> <span class="token number">7</span> ms.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Get a static field and calling a static method</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token punctuation">[</span>arthas@10718<span class="token punctuation">]</span>$ tt <span class="token parameter variable">-t</span> demo.MathGame run <span class="token parameter variable">-n</span> <span class="token number">5</span>
Press Q or Ctrl+C to abort.
Affect<span class="token punctuation">(</span>class count: <span class="token number">1</span> , method count: <span class="token number">1</span><span class="token punctuation">)</span> cost <span class="token keyword">in</span> <span class="token number">56</span> ms, listenerId: <span class="token number">1</span>
 INDEX      TIMESTAMP                   COST<span class="token punctuation">(</span>ms<span class="token punctuation">)</span>     IS-RET     IS-EXP      OBJECT              CLASS                                     METHOD
----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 <span class="token number">1000</span>       <span class="token number">2021</span>-01-08 <span class="token number">21</span>:54:17         <span class="token number">0.901091</span>     <span class="token boolean">true</span>       <span class="token boolean">false</span>       0x7699a589          MathGame                                  run
<span class="token punctuation">[</span>arthas@10718<span class="token punctuation">]</span>$ tt <span class="token parameter variable">-w</span> <span class="token string">&#39;@demo.MathGame@random.nextInt(100)&#39;</span>  <span class="token parameter variable">-x</span> <span class="token number">1</span> <span class="token parameter variable">-i</span> <span class="token number">1000</span>
@Integer<span class="token punctuation">[</span><span class="token number">46</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),R=s("Note that "),N=n("code",null,"com.taobao.arthas.core.advisor.Advice#getLoader",-1),L=s(" is used here, and that it is better to use the exact "),D=n("code",null,"classloader",-1),X=s(),B=s("ognl"),J=s("."),H=s("Advanced usage "),$={href:"https://github.com/alibaba/arthas/issues/482",target:"_blank",rel:"noopener noreferrer"},j=s("get spring context to call the bean method"),q=e(`<p>F.Y.I</p><ol><li><p><strong>Loss</strong> of the <code>ThreadLocal</code></p><p>Arthas save params into an array, then invoke the method with the params again. The method execute in another thread, so the <code>ThreadLocal</code> <strong>lost</strong>.</p></li><li><p>params may be modified</p><p>Arthas save params into an array, they are object references. The Objects may be modified by other code.</p></li></ol><h3 id="delete-the-specified-tt-record-by-index" tabindex="-1"><a class="header-anchor" href="#delete-the-specified-tt-record-by-index" aria-hidden="true">#</a> Delete the specified tt record by index</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tt -d 1001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="clear-all-tt-records" tabindex="-1"><a class="header-anchor" href="#clear-all-tt-records" aria-hidden="true">#</a> Clear all tt records</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>tt --delete-all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,6);function U(V,Q){const l=c("ExternalLinkIcon"),t=c("RouterLink");return i(),r("div",null,[u,n("p",null,[n("a",m,[b,h,a(l)])]),k,n("p",null,[v,f,g,a(t,{to:"/en/doc/quick-start.html"},{default:o(()=>[x]),_:1}),_]),T,n("ul",null,[n("li",null,[a(t,{to:"/en/doc/advice-class.html"},{default:o(()=>[E]),_:1})]),n("li",null,[n("a",M,[S,a(l)])]),n("li",null,[n("a",I,[y,a(l)])])]),C,n("ul",null,[n("li",null,[a(t,{to:"/en/doc/advice-class.html"},{default:o(()=>[A]),_:1})])]),w,n("ul",null,[n("li",null,[G,a(t,{to:"/en/doc/advice-class.html"},{default:o(()=>[O]),_:1}),F])]),P,n("p",null,[R,N,L,D,X,a(t,{to:"/en/doc/ognl.html"},{default:o(()=>[B]),_:1}),J]),n("p",null,[H,n("a",$,[j,a(l)])]),q])}const Y=p(d,[["render",U],["__file","tt.html.vue"]]);export{Y as default};
