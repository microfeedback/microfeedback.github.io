webpackJsonp([39286604669785],{296:function(e,t){e.exports={data:{markdownRemark:{html:'<p>The microfeedback-github backend collects user feedback to your GitHub\nrepo’s issue tracker.</p>\n<p>GitHub source: <a href="https://github.com/MicroFeedback/microfeedback-github">MicroFeedback/microfeedback-github</a></p>\n<h2 id="api"><a href="#api" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>API</h2>\n<h3 id="post-githubusergithubrepo"><a href="#post-githubusergithubrepo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="gatsby-code-text">POST /&lt;githubUser&gt;/&lt;githubRepo&gt;</code></h3>\n<p>Post a new feedback message on the issue tracker for the given GitHub\nrepo.</p>\n<p>A single instance may be used to post issues to multiple GitHub repos.</p>\n<p>The <strong>path</strong> includes:</p>\n<ul>\n<li><code class="gatsby-code-text">githubUser</code> (required): Github username or organization.</li>\n<li><code class="gatsby-code-text">githubRepo</code> (required): Repo name.</li>\n</ul>\n<p>The JSON <strong>payload</strong> contains the following keys:</p>\n<ul>\n<li><code class="gatsby-code-text">body</code> (required): The feedback content.</li>\n<li><code class="gatsby-code-text">screenshotURL</code>: Optional URL to a screenshot image.</li>\n<li><code class="gatsby-code-text">extra</code>: Optional object containing optional information to include in the issue.</li>\n</ul>\n<h2 id="deploy-to-now"><a href="#deploy-to-now" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Deploy to Now</h2>\n<p>If you already have a <a href="https://zeit.co/now">Now</a> account and a GitHub\nAPI token associated with your feedback bot, you can deploy\nmicrofeedback-github to now using the <code class="gatsby-code-text">now</code> CLI.</p>\n<h3 id="one-command-deploy"><a href="#one-command-deploy" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>One command deploy</h3>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="gatsby-code-text"><code class="gatsby-code-text">now microfeedback/microfeedback-github</code></pre>\n      </div>\n<p>You will be prompted to enter the GitHub API token associated\nwith your feedback bot’s GitHub account.</p>\n<p>For more detailed setup instructions, see the next section.</p>\n<h3 id="detailed-instructions"><a href="#detailed-instructions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Detailed instructions</h3>\n<ul>\n<li>Sign in to the GitHub account that will post issues, e.g. <code class="gatsby-code-text">myapp-issuebot</code>.</li>\n<li>Go <a href="https://github.com/settings/tokens/new">here</a> to generate a new personal access token.</li>\n<li>Enter a description, e.g. “For posting issues” and select the “repo” scope.</li>\n</ul>\n<p><img src="https://user-images.githubusercontent.com/2379650/35210363-dd5e03aa-ff8c-11e7-9ffd-fb707d58f793.png"></p>\n<ul>\n<li>\n<p>Click “Generate token” and copy the token.</p>\n</li>\n<li>\n<p><a href="https://zeit.co/login">Create an account with Now</a> and install the <code class="gatsby-code-text">now</code> CLI.</p>\n</li>\n</ul>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="gatsby-code-text"><code class="gatsby-code-text">npm i -g now</code></pre>\n      </div>\n<ul>\n<li>Deploy the service with <code class="gatsby-code-text">now</code>. When prompted, pass the GitHub token you generated previously.</li>\n</ul>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="gatsby-code-text"><code class="gatsby-code-text">now microfeedback/microfeedback-github</code></pre>\n      </div>\n<ul>\n<li>You’re done! Copy the URL returned by <code class="gatsby-code-text">now</code>. This is the URL that clients will use to access the service.</li>\n</ul>\n<h2 id="deploy-to-heroku"><a href="#deploy-to-heroku" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Deploy to Heroku</h2>\n<p>If you prefer to deploy to Heroku, use the deployment button below or\ndeploy with Git.</p>\n<h3 id="one-click-deploy"><a href="#one-click-deploy" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>One click deploy</h3>\n<p><a href="https://heroku.com/deploy?template=https://github.com/microfeedback/microfeedback-github"><img src="https://www.herokucdn.com/deploy/button.svg" alt="Deploy to Heroku"></a></p>\n<h3 id="deployment-with-git"><a href="#deployment-with-git" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Deployment with Git</h3>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="gatsby-code-text"><code class="gatsby-code-text">git clone https://github.com/microfeedback/microfeedback-github.git\ncd microfeedback-github\nheroku create\nheroku config:set GH_TOKEN=your-bot-token\ngit push heroku master</code></pre>\n      </div>\n<h2 id="configuration"><a href="#configuration" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Configuration</h2>\n<p>Configuration is defined through environment variables and can be passed\nwhen you deploy microfeedback-github.</p>\n<div class="gatsby-highlight" data-language="text">\n      <pre class="gatsby-code-text"><code class="gatsby-code-text">now microfeedback/microfeedback-github -e GH_TOKEN=abc123 -e ALLOWED_REPOS=sloria/website,sloria/another-website</code></pre>\n      </div>\n<p>The following options are available:</p>\n<ul>\n<li><code class="gatsby-code-text">GH_TOKEN</code> (required): The GitHub API token associated with your\nfeedback bot’s account.</li>\n<li><code class="gatsby-code-text">ALLOWED_REPOS</code>: A comma-delimited list of GitHub repos that maybe\nposted to. If <code class="gatsby-code-text">&#39;*&#39;</code>, allow posting to any repo\nthat the <code class="gatsby-code-text">GH_TOKEN</code> has access to (incl. any\npublic repos). Default: <code class="gatsby-code-text">&#39;*&#39;</code></li>\n</ul>\n<h3 id="spam-detection-with-akismet-optional"><a href="#spam-detection-with-akismet-optional" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Spam detection with Akismet (Optional)</h3>\n<p>microfeedback-github supports spam detection using\n<a href="https://akismet.com/">Akismet</a>.</p>\n<ul>\n<li><code class="gatsby-code-text">AKISMET_API_KEY</code>: Akismet API key to use for spam detection. If set,\nall input will be checked using the Akismet API. An error response\nwill be returned when spam is detected.</li>\n<li><code class="gatsby-code-text">AKISMET_ENABLED</code>: Spam checking will automatically be enabled if\n<code class="gatsby-code-text">AKISMET_API_KEY</code> is set. If you want to disable spam checking\nanyway, set <code class="gatsby-code-text">AKISMET_ENABLED</code> to <code class="gatsby-code-text">false</code>.</li>\n</ul>\n<h3 id="toxicity-scoring-with-perspective-api-optional"><a href="#toxicity-scoring-with-perspective-api-optional" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Toxicity scoring with Perspective API (Optional)</h3>\n<p>microfeedback-github supports toxicity scoring using the <a href="https://www.perspectiveapi.com/">Perspective\nAPI</a>.</p>\n<ul>\n<li><code class="gatsby-code-text">PERSPECTIVE_API_KEY</code>: Perspective API key to use for toxicity\nscoring. Toxicity information will be included in posted issues.</li>\n<li><code class="gatsby-code-text">PERSPECTIVE_ENABLED</code>: Toxicity scoring will automatically be enabled if\n<code class="gatsby-code-text">PERSPECTIVE_API_KEY</code> is set. If you want to disable toxicity scoring anyway,\nset <code class="gatsby-code-text">PERSPECTIVE_ENABLED</code> to <code class="gatsby-code-text">false</code>.</li>\n</ul>',headings:[{value:"API",depth:2},{value:null,depth:3},{value:"Deploy to Now",depth:2},{value:"One command deploy",depth:3},{value:"Detailed instructions",depth:3},{value:"Deploy to Heroku",depth:2},{value:"One click deploy",depth:3},{value:"Deployment with Git",depth:3},{value:"Configuration",depth:2},{value:"Spam detection with Akismet (Optional)",depth:3},{value:"Toxicity scoring with Perspective API (Optional)",depth:3}],frontmatter:{title:"microfeedback-github"},fields:{sectionList:'[{"title":"Backends","items":[{"id":"microfeedback-github","title":"microfeedback-github","slug":"/backends/microfeedback-github"},{"id":"microfeedback-jira","title":"microfeedback-jira","slug":"/backends/microfeedback-jira"},{"id":"writing-your-own-backend","title":"Writing Your Own Backend (Coming Soon)","slug":"/backends/writing-your-own-backend"}]}]',path:"backends/microfeedback-github.md",slug:"/backends/microfeedback-github",dir:"backends"}}},pathContext:{slug:"/backends/microfeedback-github"}}}});
//# sourceMappingURL=path---backends-microfeedback-github-348319fbcec0d7ea5f93.js.map