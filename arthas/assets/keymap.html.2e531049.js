import{_ as o,o as r,c,a as t,b as a,e,d as n,r as i}from"./app.b42f861b.js";const l={},u=t("h1",{id:"keymap",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#keymap","aria-hidden":"true"},"#"),e(" keymap")],-1),s={href:"https://arthas.aliyun.com/doc/arthas-tutorials.html?language=en&id=command-keymap",target:"_blank",rel:"noopener noreferrer"},h=t("code",null,"keymap",-1),m=e(" online tutorial"),q=n(`<p>Use <code>keymap</code> command to print the current keymap:</p><p>The default keymap is:</p><table><thead><tr><th>Shortcut</th><th>Shortcut Description</th><th>Command Name</th><th>Command Description</th></tr></thead><tbody><tr><td><code>&quot;\\C-a&quot;</code></td><td>ctrl + a</td><td>beginning-of-line</td><td>go to the beginning of the line</td></tr><tr><td><code> &quot;\\C-e&quot;</code></td><td>ctrl + e</td><td>end-of-line</td><td>go to the end of the line</td></tr><tr><td><code>&quot;\\C-f&quot;</code></td><td>ctrl + f</td><td>forward-word</td><td>forward a word</td></tr><tr><td><code>&quot;\\C-b&quot;</code></td><td>ctrl + b</td><td>backward-word</td><td>backward a word</td></tr><tr><td><code>&quot;\\e[D&quot;</code></td><td>left arrow</td><td>backward-char</td><td>backward a character</td></tr><tr><td><code>&quot;\\e[C&quot;</code></td><td>right arrow</td><td>forward-char</td><td>forward a character</td></tr><tr><td><code>&quot;\\e[B&quot;</code></td><td>down arrow</td><td>next-history</td><td>show next history command</td></tr><tr><td><code>&quot;\\e[A&quot;</code></td><td>up arrow</td><td>previous-history</td><td>show previous history command</td></tr><tr><td><code>&quot;\\C-h&quot;</code></td><td>ctrl + h</td><td>backward-delete-char</td><td>backward delete a character</td></tr><tr><td><code>&quot;\\C-?&quot;</code></td><td>ctrl + shift + /</td><td>backward-delete-char</td><td>backward delete a character</td></tr><tr><td><code>&quot;\\C-u&quot;</code></td><td>ctrl + u</td><td>undo</td><td>clear current line</td></tr><tr><td><code>&quot;\\C-d&quot;</code></td><td>ctrl + d</td><td>delete-char</td><td>delete the character of the current cursor</td></tr><tr><td><code>&quot;\\C-k&quot;</code></td><td>ctrl + k</td><td>kill-line</td><td>delete all characters from the current cursor to the end of the line</td></tr><tr><td><code>&quot;\\C-i&quot;</code></td><td>ctrl + i</td><td>complete</td><td>Auto completion, equivalent to <code>TAB</code></td></tr><tr><td><code>&quot;\\C-j&quot;</code></td><td>ctrl + j</td><td>accept-line</td><td>end the current line, equivalent to <code>enter</code></td></tr><tr><td><code>&quot;\\C-m&quot;</code></td><td>ctrl + m</td><td>accept-line</td><td>end the current line, equivalent to <code>enter</code></td></tr><tr><td><code>&quot;\\C-w&quot;</code></td><td></td><td>backward-delete-word</td><td></td></tr><tr><td><code>&quot;\\C-x\\e[3~&quot;</code></td><td></td><td>backward-kill-line</td><td></td></tr><tr><td><code>&quot;\\e\\C-?&quot;</code></td><td></td><td>backward-kill-word</td><td></td></tr></tbody></table><ul><li>Press <code>tab</code> to enable auto-completion prompt at any time.</li><li>Enter command and <code>-</code> or <code>--</code>, then press <code>tab</code> to display the concrete options for the current command.</li></ul><h2 id="custom-shortcuts" tabindex="-1"><a class="header-anchor" href="#custom-shortcuts" aria-hidden="true">#</a> Custom shortcuts</h2><p>Specify customization in <code>$USER_HOME/.arthas/conf/inputrc</code> file in the current user home directory.</p><p>Vim user may want to map <code>ctrl+h</code> to moving the cursor forward one character. To achieve this, copy the default configuration first,</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&quot;\\C-a&quot;: beginning-of-line
&quot;\\C-e&quot;: end-of-line
&quot;\\C-f&quot;: forward-word
&quot;\\C-b&quot;: backward-word
&quot;\\e[D&quot;: backward-char
&quot;\\e[C&quot;: forward-char
&quot;\\e[B&quot;: next-history
&quot;\\e[A&quot;: previous-history
&quot;\\C-h&quot;: backward-delete-char
&quot;\\C-?&quot;: backward-delete-char
&quot;\\C-u&quot;: undo
&quot;\\C-d&quot;: delete-char
&quot;\\C-k&quot;: kill-line
&quot;\\C-i&quot;: complete
&quot;\\C-j&quot;: accept-line
&quot;\\C-m&quot;: accept-line
&quot;\\C-w&quot;: backward-delete-word
&quot;\\C-x\\e[3~&quot;: backward-kill-line
&quot;\\e\\C-?&quot;: backward-kill-word
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>then replace <code>&quot;\\C-h&quot;: backward-delete-char</code> with <code>&quot;\\C-h&quot;: backward-char</code>, then reconnect to Arthas console to take effect.</p><h2 id="shortcuts-for-jobs" tabindex="-1"><a class="header-anchor" href="#shortcuts-for-jobs" aria-hidden="true">#</a> Shortcuts for jobs</h2><ul><li><code>ctrl + c</code>: Terminates current command</li><li><code>ctrl + z</code>: Suspends the current command, you can restore this command with <code>bg</code>/<code>fg</code>, or <code>kill</code> it.</li><li><code>ctrl + a</code>: Go to the beginning the line</li><li><code>ctrl + e</code>: Go to the end of the line</li></ul>`,11);function b(p,v){const d=i("ExternalLinkIcon");return r(),c("div",null,[u,t("p",null,[t("a",s,[h,m,a(d)])]),q])}const f=o(l,[["render",b],["__file","keymap.html.vue"]]);export{f as default};
