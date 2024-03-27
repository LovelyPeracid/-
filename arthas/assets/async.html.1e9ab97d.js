import{_ as o,o as s,c,a as e,b as a,e as t,d as i,r as d}from"./app.b42f861b.js";const r={},l=e("h1",{id:"arthas-async-jobs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#arthas-async-jobs","aria-hidden":"true"},"#"),t(" Arthas Async Jobs")],-1),u={href:"https://arthas.aliyun.com/doc/arthas-tutorials?language=en&id=case-async-jobs",target:"_blank",rel:"noopener noreferrer"},h=e("code",null,"Async Jobs",-1),p=t(" online tutorial"),b=t("Asynchronous jobs in arthas. The idea is borrowed from "),m={href:"http://man7.org/linux/man-pages/man1/jobs.1p.html",target:"_blank",rel:"noopener noreferrer"},g=t("linux jobs"),f=t("."),k=i(`<h2 id="_1-use-to-run-the-command-in-the-background" tabindex="-1"><a class="header-anchor" href="#_1-use-to-run-the-command-in-the-background" aria-hidden="true">#</a> 1. Use &amp; to run the command in the background</h2><p>For example, execute the trace command in the background:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>trace Test t <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>By doing this, the current command is put to the background to run, you can continue to execute other commands in the console.</p><h2 id="_2-list-background-jobs" tabindex="-1"><a class="header-anchor" href="#_2-list-background-jobs" aria-hidden="true">#</a> 2. List background jobs</h2><p>If you want to list all background jobs, you can execute the <code>jobs</code> command and the results are as follows:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">jobs</span>
<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span>*
       Stopped           <span class="token function">watch</span> com.taobao.container.Test <span class="token builtin class-name">test</span> <span class="token string">&quot;params[0].{? #this.name == null }&quot;</span> <span class="token parameter variable">-x</span> <span class="token number">2</span>
       execution count <span class="token builtin class-name">:</span> <span class="token number">19</span>
       start <span class="token function">time</span>      <span class="token builtin class-name">:</span> Fri Sep <span class="token number">22</span> 09:59:55 CST <span class="token number">2017</span>
       <span class="token function">timeout</span> <span class="token function">date</span>    <span class="token builtin class-name">:</span> Sat Sep <span class="token number">23</span> 09:59:55 CST <span class="token number">2017</span>
       session         <span class="token builtin class-name">:</span> 3648e874-5e69-473f-9eed-7f89660b079b <span class="token punctuation">(</span>current<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can see that there is currently a background job executing:</p><ul><li>job id is 10, <code>*</code> indicates that this job is created by the current session.</li><li>status is <code>Stopped</code></li><li>execution count is the number of executions, which have been executed 19 times since the start.</li><li>timeout date: timeout timestamp, when the time exceeds this timestamp, the job will be automatically timeout and exit.</li></ul><h2 id="_3-suspend-and-cancel-job" tabindex="-1"><a class="header-anchor" href="#_3-suspend-and-cancel-job" aria-hidden="true">#</a> 3. Suspend and cancel job</h2><p>When the job is executing in the foreground, for example, directly executing the command <code>trace Test t</code>, or executing the background job command <code>trace Test t &amp;</code>, then putting the job back to the foreground via <code>fg</code> command, the console cannot continue to execute other command, but can receive and process the following keyboard events:</p><ul><li>\u2018ctrl + z\u2019: Suspends the job, the job status will change to <code>Stopped</code>, and the job can be restarted by <code>bg &lt;job-id&gt;</code> or <code>fg &lt;job-id&gt;</code></li><li>\u2018ctrl + c\u2019: Stops the job</li><li>\u2018ctrl + d\u2019: According to linux semantics this should lead to exit the terminal, right now Arthas has not implemented this yet, therefore simply ignore this keystroke.</li></ul><h2 id="_4-fg-bg-switch-the-job-from-the-foreground-to-the-background-and-vise-verse" tabindex="-1"><a class="header-anchor" href="#_4-fg-bg-switch-the-job-from-the-foreground-to-the-background-and-vise-verse" aria-hidden="true">#</a> 4. fg/bg, switch the job from the foreground to the background, and vise verse</h2><ul><li>When a job is executed in the background or in suspended status (use <code>ctrl + z</code> to suspend job), <code>fg &lt;job-id&gt;</code> can transfer the job to the foreground to continue to run.</li><li>When a job is in suspended status (use <code>ctrl + z</code> to suspend job), <code>bg &lt;job-id&gt;</code> can put the job to the background to continue to run.</li><li>A job created by other session can only be put to the foreground to run by using <code>fg</code> in the current session.</li></ul><h2 id="_5-redirect-the-output" tabindex="-1"><a class="header-anchor" href="#_5-redirect-the-output" aria-hidden="true">#</a> 5. Redirect the output</h2><p>The job output can be redirect to the specified file by <code>&gt;</code> or <code>&gt;&gt;</code>, and can be used together with <code>&amp;</code>. By doing this, you can achieve running commands asynchronously, for example:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ trace Test t <span class="token operator">&gt;&gt;</span> test.out <span class="token operator">&amp;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>At this time, the trace command will be executed in the background, and the result will be output to the <code>test.out</code> file under the <code>working directory</code> of the application. You can continue to execute other commands. And you can view the command execution result in the file. You can execute the <code>pwd</code> command to view the <code>working directory</code> of the current application.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">cat</span> test.out
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If no redirect file is specified, the result will be output to the <code>~/logs/arthas-cache/</code> directory, for example:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ trace Test t <span class="token operator">&gt;&gt;</span> <span class="token operator">&amp;</span>
job <span class="token function">id</span> <span class="token builtin class-name">:</span> <span class="token number">2</span>
cache location <span class="token builtin class-name">:</span> /Users/admin/logs/arthas-cache/28198/2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>At this time, the command will be executed asynchronously in the background, and the result will be asynchronously saved in the file (<code>~/logs/arthas-cache/\${PID}/\${JobId}</code>);</p><ul><li>At this time, the execution of the task is not affected by the session disconnection; the default timeout period of the task is 1 day, and the default timeout period can be modified through the global <code>options</code> command;</li><li>The result of this command will be output asynchronously to the file; at this time, regardless of whether <code>save-result</code> is true or not, the result will not be written asynchronously to <code>~/logs/arthas-cache/result.log</code>.</li></ul><h2 id="_6-stop-job" tabindex="-1"><a class="header-anchor" href="#_6-stop-job" aria-hidden="true">#</a> 6. Stop job</h2><p>If you want to stop background job, just <code>kill &lt;job-id&gt;</code>.</p><h2 id="_7-others" tabindex="-1"><a class="header-anchor" href="#_7-others" aria-hidden="true">#</a> 7. Others</h2><ul><li>Support up to 8 commands at the same time to redirect the output to the log files.</li><li>Do not open too many background jobs at the same time to avoid negative performance effect to the target JVM.</li><li>If you do not want to stop the Arthas service and continue to perform background tasks, you can exit the Arthas console by executing <code>quit</code> command (<code>stop</code> command will stop the Arthas service)</li></ul>`,27);function v(x,j){const n=d("ExternalLinkIcon");return s(),c("div",null,[l,e("p",null,[e("a",u,[h,p,a(n)])]),e("p",null,[b,e("a",m,[g,a(n)]),f]),k])}const _=o(r,[["render",v],["__file","async.html.vue"]]);export{_ as default};
