
    

  

<!DOCTYPE html>
<html>
  <head>
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="chrome=1">
    <script>var NREUMQ=[];NREUMQ.push(["mark","firstbyte",new Date().getTime()]);</script>
        <title>json2.js at master from douglascrockford/JSON-js - GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />

    <link href="https://d3nwyuy0nl342s.cloudfront.net/b5d0a8471557d0f44f5fcdbb6e11712779be039d/stylesheets/bundle_github.css" media="screen" rel="stylesheet" type="text/css" />
    

    <script type="text/javascript">
      if (typeof console == "undefined" || typeof console.log == "undefined")
        console = { log: function() {} }
    </script>
    <script type="text/javascript" charset="utf-8">
      var GitHub = {
        assetHost: 'https://d3nwyuy0nl342s.cloudfront.net'
      }
      var github_user = null
      
    </script>
    <script src="https://d3nwyuy0nl342s.cloudfront.net/javascripts/jquery/jquery-1.4.2.min.js" type="text/javascript"></script>
    <script src="https://d3nwyuy0nl342s.cloudfront.net/7cab3e9d1add167ab5899c26db95fd9dc72d95d2/javascripts/bundle_github.js" type="text/javascript"></script>


    
    <script type="text/javascript" charset="utf-8">
      GitHub.spy({
        repo: "douglascrockford/JSON-js"
      })
    </script>

    
  <link rel='canonical' href='/douglascrockford/JSON-js/blob/8e0b15cb492f63067a88ad786e4d5fc0fa89a241/json2.js'>

  <link href="https://github.com/douglascrockford/JSON-js/commits/master.atom" rel="alternate" title="Recent Commits to JSON-js:master" type="application/atom+xml" />

        <meta name="description" content="JSON-js - JSON in JavaScript" />
    <script type="text/javascript">
      GitHub.nameWithOwner = GitHub.nameWithOwner || "douglascrockford/JSON-js";
      GitHub.currentRef = 'master';
      GitHub.commitSHA = "8e0b15cb492f63067a88ad786e4d5fc0fa89a241";
      GitHub.currentPath = 'json2.js';
      GitHub.masterBranch = "master";

      
    </script>
  

        <script type="text/javascript">
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-3769691-2']);
      _gaq.push(['_setDomainName', 'none']);
      _gaq.push(['_trackPageview']);
      _gaq.push(['_trackPageLoadTime']);
      (function() {
        var ga = document.createElement('script');
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        ga.setAttribute('async', 'true');
        document.documentElement.firstChild.appendChild(ga);
      })();
    </script>

    
  </head>

  

  <body class="logged_out page-blob  windows env-production">
    

    

    

    

    <div class="subnavd" id="main">
      <div id="header" class="true">
        
          <a class="logo boring" href="https://github.com">
            
            <img alt="github" class="default" src="https://d3nwyuy0nl342s.cloudfront.net/images/modules/header/logov3.png" />
            <!--[if (gt IE 8)|!(IE)]><!-->
            <img alt="github" class="hover" src="https://d3nwyuy0nl342s.cloudfront.net/images/modules/header/logov3-hover.png" />
            <!--<![endif]-->
          </a>
        
        
        <div class="topsearch">
  
    <ul class="nav logged_out">
      
      <li class="pricing"><a href="/plans">Pricing and Signup</a></li>
      
      <li class="explore"><a href="/explore">Explore GitHub</a></li>
      <li class="features"><a href="/features">Features</a></li>
      
      <li class="blog"><a href="/blog">Blog</a></li>
      
      <li class="login"><a href="/login?return_to=%2Fdouglascrockford%2FJSON-js%2Fblob%2Fmaster%2Fjson2.js">Login</a></li>
    </ul>
  
</div>

      </div>

      
      
        
    <div class="site">
      <div class="pagehead repohead vis-public    instapaper_ignore readability-menu">

      

      <div class="title-actions-bar">
        <h1>
          <a href="/douglascrockford">douglascrockford</a> / <strong><a href="/douglascrockford/JSON-js">JSON-js</a></strong>
          
          
        </h1>

        
    <ul class="actions">
      

      
        <li class="for-owner" style="display:none"><a href="/douglascrockford/JSON-js/admin" class="minibutton btn-admin "><span><span class="icon"></span>Admin</span></a></li>
        <li>
          <a href="/douglascrockford/JSON-js/toggle_watch" class="minibutton btn-watch " id="watch_button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', '42922c7e1e1286b90bb10b3fd96c6d5572c6abfd'); f.appendChild(s);f.submit();return false;" style="display:none"><span><span class="icon"></span>Watch</span></a>
          <a href="/douglascrockford/JSON-js/toggle_watch" class="minibutton btn-watch " id="unwatch_button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', '42922c7e1e1286b90bb10b3fd96c6d5572c6abfd'); f.appendChild(s);f.submit();return false;" style="display:none"><span><span class="icon"></span>Unwatch</span></a>
        </li>
        
          
            <li class="for-notforked" style="display:none"><a href="/douglascrockford/JSON-js/fork" class="minibutton btn-fork " id="fork_button" onclick="var f = document.createElement('form'); f.style.display = 'none'; this.parentNode.appendChild(f); f.method = 'POST'; f.action = this.href;var s = document.createElement('input'); s.setAttribute('type', 'hidden'); s.setAttribute('name', 'authenticity_token'); s.setAttribute('value', '42922c7e1e1286b90bb10b3fd96c6d5572c6abfd'); f.appendChild(s);f.submit();return false;"><span><span class="icon"></span>Fork</span></a></li>
            <li class="for-hasfork" style="display:none"><a href="#" class="minibutton btn-fork " id="your_fork_button"><span><span class="icon"></span>Your Fork</span></a></li>
          

          
        
      
      
      <li class="repostats">
        <ul class="repo-stats">
          <li class="watchers"><a href="/douglascrockford/JSON-js/watchers" title="Watchers" class="tooltipped downwards">546</a></li>
          <li class="forks"><a href="/douglascrockford/JSON-js/network" title="Forks" class="tooltipped downwards">30</a></li>
        </ul>
      </li>
    </ul>

      </div>

        
  <ul class="tabs">
    <li><a href="/douglascrockford/JSON-js" class="selected" highlight="repo_source">Source</a></li>
    <li><a href="/douglascrockford/JSON-js/commits/master" highlight="repo_commits">Commits</a></li>
    <li><a href="/douglascrockford/JSON-js/network" highlight="repo_network">Network</a></li>
    <li><a href="/douglascrockford/JSON-js/pulls" highlight="repo_pulls">Pull Requests (0)</a></li>

    

    
      
      <li><a href="/douglascrockford/JSON-js/issues" highlight="issues">Issues (0)</a></li>
    

            
    <li><a href="/douglascrockford/JSON-js/graphs" highlight="repo_graphs">Graphs</a></li>

    <li class="contextswitch nochoices">
      <span class="toggle leftwards" >
        <em>Branch:</em>
        <code>master</code>
      </span>
    </li>
  </ul>

  <div style="display:none" id="pl-description"><p><em class="placeholder">click here to add a description</em></p></div>
  <div style="display:none" id="pl-homepage"><p><em class="placeholder">click here to add a homepage</em></p></div>

  <div class="subnav-bar">
  
  <ul>
    <li>
      
      <a href="/douglascrockford/JSON-js/branches" class="dropdown">Switch Branches (1)</a>
      <ul>
        
          
            <li><strong>master &#x2713;</strong></li>
            
      </ul>
    </li>
    <li>
      <a href="#" class="dropdown defunct">Switch Tags (0)</a>
      
    </li>
    <li>
    
    <a href="/douglascrockford/JSON-js/branches" class="manage">Branch List</a>
    
    </li>
  </ul>
</div>

  
  
  
  
  
  



        
    <div id="repo_details" class="metabox clearfix">
      <div id="repo_details_loader" class="metabox-loader" style="display:none">Sending Request&hellip;</div>

        <a href="/douglascrockford/JSON-js/downloads" class="download-source" id="download_button" title="Download source, tagged packages and binaries."><span class="icon"></span>Downloads</a>

      <div id="repository_desc_wrapper">
      <div id="repository_description" rel="repository_description_edit">
        
          <p>JSON in JavaScript
            <span id="read_more" style="display:none">&mdash; <a href="#readme">Read more</a></span>
          </p>
        
      </div>

      <div id="repository_description_edit" style="display:none;" class="inline-edit">
        <form action="/douglascrockford/JSON-js/admin/update" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="42922c7e1e1286b90bb10b3fd96c6d5572c6abfd" /></div>
          <input type="hidden" name="field" value="repository_description">
          <input type="text" class="textfield" name="value" value="JSON in JavaScript">
          <div class="form-actions">
            <button class="minibutton"><span>Save</span></button> &nbsp; <a href="#" class="cancel">Cancel</a>
          </div>
        </form>
      </div>

      
      <div class="repository-homepage" id="repository_homepage" rel="repository_homepage_edit">
        <p><a href="http://www.JSON.org/" rel="nofollow">http://www.JSON.org/</a></p>
      </div>

      <div id="repository_homepage_edit" style="display:none;" class="inline-edit">
        <form action="/douglascrockford/JSON-js/admin/update" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="42922c7e1e1286b90bb10b3fd96c6d5572c6abfd" /></div>
          <input type="hidden" name="field" value="repository_homepage">
          <input type="text" class="textfield" name="value" value="http://www.JSON.org/">
          <div class="form-actions">
            <button class="minibutton"><span>Save</span></button> &nbsp; <a href="#" class="cancel">Cancel</a>
          </div>
        </form>
      </div>
      </div>
      <div class="rule "></div>
      <div id="url_box" class="url-box">
  

  <ul class="clone-urls">
    
      
      <li id="http_clone_url"><a href="https://github.com/douglascrockford/JSON-js.git" data-permissions="Read-Only">HTTP</a></li>
      <li id="public_clone_url"><a href="git://github.com/douglascrockford/JSON-js.git" data-permissions="Read-Only">Git Read-Only</a></li>
    
    
  </ul>
  <input type="text" spellcheck="false" id="url_field" class="url-field" />
        <span style="display:none" id="url_box_clippy"></span>
      <span id="clippy_tooltip_url_box_clippy" class="clippy-tooltip tooltipped" title="copy to clipboard">
      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
              width="14"
              height="14"
              class="clippy"
              id="clippy" >
      <param name="movie" value="https://d3nwyuy0nl342s.cloudfront.net/flash/clippy.swf?v5"/>
      <param name="allowScriptAccess" value="always" />
      <param name="quality" value="high" />
      <param name="scale" value="noscale" />
      <param NAME="FlashVars" value="id=url_box_clippy&amp;copied=&amp;copyto=">
      <param name="bgcolor" value="#FFFFFF">
      <param name="wmode" value="opaque">
      <embed src="https://d3nwyuy0nl342s.cloudfront.net/flash/clippy.swf?v5"
             width="14"
             height="14"
             name="clippy"
             quality="high"
             allowScriptAccess="always"
             type="application/x-shockwave-flash"
             pluginspage="http://www.macromedia.com/go/getflashplayer"
             FlashVars="id=url_box_clippy&amp;copied=&amp;copyto="
             bgcolor="#FFFFFF"
             wmode="opaque"
      />
      </object>
      </span>

  <p id="url_description"><strong>Read+Write</strong> access</p>
</div>

    </div>

    <div class="frame frame-center tree-finder" style="display:none">
      <div class="breadcrumb">
        <b><a href="/douglascrockford/JSON-js">JSON-js</a></b> /
        <input class="tree-finder-input" type="text" name="query" autocomplete="off" spellcheck="false">
      </div>

      
        <div class="octotip">
          <p>
            <a href="/douglascrockford/JSON-js/dismiss-tree-finder-help" class="dismiss js-dismiss-tree-list-help" title="Hide this notice forever">Dismiss</a>
            <strong>Octotip:</strong> You've activated the <em>file finder</em> by pressing <span class="kbd">t</span>
            Start typing to filter the file list. Use <span class="kbd badmono">↑</span> and <span class="kbd badmono">↓</span> to navigate,
            <span class="kbd">enter</span> to view files.
          </p>
        </div>
      

      <table class="tree-browser" cellpadding="0" cellspacing="0">
        <tr class="js-header"><th>&nbsp;</th><th>name</th></tr>
        <tr class="js-no-results no-results" style="display: none">
          <th colspan="2">No matching files</th>
        </tr>
        <tbody class="js-results-list">
        </tbody>
      </table>
    </div>

    <div id="jump-to-line" style="display:none">
      <h2>Jump to Line</h2>
      <form>
        <input class="textfield" type="text">
        <div class="full-button">
          <button type="submit" class="classy">
            <span>Go</span>
          </button>
        </div>
      </form>
    </div>


        

      </div><!-- /.pagehead -->

      

  







<script type="text/javascript">
  GitHub.downloadRepo = '/douglascrockford/JSON-js/archives/master'
  GitHub.revType = "master"

  GitHub.repoName = "JSON-js"
  GitHub.controllerName = "blob"
  GitHub.actionName     = "show"
  GitHub.currentAction  = "blob#show"

  
    GitHub.loggedIn = false
  

  
</script>




<div class="flash-messages"></div>


  <div id="commit">
    <div class="group">
        
  <div class="envelope commit">
    <div class="human">
      
        <div class="message"><pre><a href="/douglascrockford/JSON-js/commit/8e0b15cb492f63067a88ad786e4d5fc0fa89a241">!isFinite</a> <a href="/douglascrockford/JSON-js/commit/8e0b15cb492f63067a88ad786e4d5fc0fa89a241#comments"><img alt="Comment" height="16" src="https://d3nwyuy0nl342s.cloudfront.net/images/modules/dashboard/news/comment.png" width="16" /></a></pre></div>
      

      <div class="actor">
        <div class="gravatar">
          
          <img src="https://secure.gravatar.com/avatar/b871de839c31ddb1d9db8e33e0cb88a6?s=140&d=https://d3nwyuy0nl342s.cloudfront.net%2Fimages%2Fgravatars%2Fgravatar-140.png" alt="" width="30" height="30"  />
        </div>
        <div class="name"><a href="/douglascrockford">douglascrockford</a> <span>(author)</span></div>
        <div class="date">
          <abbr class="relatize" title="2011-03-05 17:29:18">Sat Mar 05 17:29:18 -0800 2011</abbr>
        </div>
      </div>

      

    </div>
    <div class="machine">
      <span>c</span>ommit&nbsp;&nbsp;<a href="/douglascrockford/JSON-js/commit/8e0b15cb492f63067a88ad786e4d5fc0fa89a241" hotkey="c">8e0b15cb492f63067a88</a><br />
      <span>t</span>ree&nbsp;&nbsp;&nbsp;&nbsp;<a href="/douglascrockford/JSON-js/tree/8e0b15cb492f63067a88ad786e4d5fc0fa89a241/json2.js" hotkey="t">9e05e291e08d380e73ee</a><br />
      
        <span>p</span>arent&nbsp;
        
        <a href="/douglascrockford/JSON-js/commit/ad6079cbd8dc362a3cc42e1f97c01aa5ccd48bfe" hotkey="p">ad6079cbd8dc362a3cc4</a>
      

    </div>
  </div>

    </div>
  </div>



  <div id="slider">

  

    <div class="breadcrumb" data-path="json2.js/">
      <b><a href="/douglascrockford/JSON-js/tree/8e0b15cb492f63067a88ad786e4d5fc0fa89a241">JSON-js</a></b> / json2.js       <span style="display:none" id="clippy_132">json2.js</span>
      
      <object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
              width="110"
              height="14"
              class="clippy"
              id="clippy" >
      <param name="movie" value="https://d3nwyuy0nl342s.cloudfront.net/flash/clippy.swf?v5"/>
      <param name="allowScriptAccess" value="always" />
      <param name="quality" value="high" />
      <param name="scale" value="noscale" />
      <param NAME="FlashVars" value="id=clippy_132&amp;copied=copied!&amp;copyto=copy to clipboard">
      <param name="bgcolor" value="#FFFFFF">
      <param name="wmode" value="opaque">
      <embed src="https://d3nwyuy0nl342s.cloudfront.net/flash/clippy.swf?v5"
             width="110"
             height="14"
             name="clippy"
             quality="high"
             allowScriptAccess="always"
             type="application/x-shockwave-flash"
             pluginspage="http://www.macromedia.com/go/getflashplayer"
             FlashVars="id=clippy_132&amp;copied=copied!&amp;copyto=copy to clipboard"
             bgcolor="#FFFFFF"
             wmode="opaque"
      />
      </object>
      

    </div>

    <div class="frames">
      <div class="frame frame-center" data-path="json2.js/" data-canonical-url="/douglascrockford/JSON-js/blob/8e0b15cb492f63067a88ad786e4d5fc0fa89a241/json2.js">
        
          <ul class="big-actions">
            
            <li><a class="file-edit-link minibutton" href="/douglascrockford/JSON-js/file-edit/__current_ref__/json2.js"><span>Edit this file</span></a></li>
          </ul>
        

        <div id="files">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><img alt="Txt" height="16" src="https://d3nwyuy0nl342s.cloudfront.net/images/icons/txt.png" width="16" /></span>
                <span class="mode" title="File Mode">100755</span>
                
                  <span>481 lines (363 sloc)</span>
                
                <span>17.413 kb</span>
              </div>
              <ul class="actions">
                <li><a href="/douglascrockford/JSON-js/raw/master/json2.js" id="raw-url">raw</a></li>
                
                  <li><a href="/douglascrockford/JSON-js/blame/master/json2.js">blame</a></li>
                
                <li><a href="/douglascrockford/JSON-js/commits/master/json2.js">history</a></li>
              </ul>
            </div>
            
  <div class="data type-javascript">
    
      <table cellpadding="0" cellspacing="0">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
</pre>
          </td>
          <td width="100%">
            
              
                <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*</span></div><div class='line' id='LC2'><span class="cm">    http://www.JSON.org/json2.js</span></div><div class='line' id='LC3'><span class="cm">    2011-02-23</span></div><div class='line' id='LC4'><br/></div><div class='line' id='LC5'><span class="cm">    Public Domain.</span></div><div class='line' id='LC6'><br/></div><div class='line' id='LC7'><span class="cm">    NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.</span></div><div class='line' id='LC8'><br/></div><div class='line' id='LC9'><span class="cm">    See http://www.JSON.org/js.html</span></div><div class='line' id='LC10'><br/></div><div class='line' id='LC11'><br/></div><div class='line' id='LC12'><span class="cm">    This code should be minified before deployment.</span></div><div class='line' id='LC13'><span class="cm">    See http://javascript.crockford.com/jsmin.html</span></div><div class='line' id='LC14'><br/></div><div class='line' id='LC15'><span class="cm">    USE YOUR OWN COPY. IT IS EXTREMELY UNWISE TO LOAD CODE FROM SERVERS YOU DO</span></div><div class='line' id='LC16'><span class="cm">    NOT CONTROL.</span></div><div class='line' id='LC17'><br/></div><div class='line' id='LC18'><br/></div><div class='line' id='LC19'><span class="cm">    This file creates a global JSON object containing two methods: stringify</span></div><div class='line' id='LC20'><span class="cm">    and parse.</span></div><div class='line' id='LC21'><br/></div><div class='line' id='LC22'><span class="cm">        JSON.stringify(value, replacer, space)</span></div><div class='line' id='LC23'><span class="cm">            value       any JavaScript value, usually an object or array.</span></div><div class='line' id='LC24'><br/></div><div class='line' id='LC25'><span class="cm">            replacer    an optional parameter that determines how object</span></div><div class='line' id='LC26'><span class="cm">                        values are stringified for objects. It can be a</span></div><div class='line' id='LC27'><span class="cm">                        function or an array of strings.</span></div><div class='line' id='LC28'><br/></div><div class='line' id='LC29'><span class="cm">            space       an optional parameter that specifies the indentation</span></div><div class='line' id='LC30'><span class="cm">                        of nested structures. If it is omitted, the text will</span></div><div class='line' id='LC31'><span class="cm">                        be packed without extra whitespace. If it is a number,</span></div><div class='line' id='LC32'><span class="cm">                        it will specify the number of spaces to indent at each</span></div><div class='line' id='LC33'><span class="cm">                        level. If it is a string (such as &#39;\t&#39; or &#39;&amp;nbsp;&#39;),</span></div><div class='line' id='LC34'><span class="cm">                        it contains the characters used to indent at each level.</span></div><div class='line' id='LC35'><br/></div><div class='line' id='LC36'><span class="cm">            This method produces a JSON text from a JavaScript value.</span></div><div class='line' id='LC37'><br/></div><div class='line' id='LC38'><span class="cm">            When an object value is found, if the object contains a toJSON</span></div><div class='line' id='LC39'><span class="cm">            method, its toJSON method will be called and the result will be</span></div><div class='line' id='LC40'><span class="cm">            stringified. A toJSON method does not serialize: it returns the</span></div><div class='line' id='LC41'><span class="cm">            value represented by the name/value pair that should be serialized,</span></div><div class='line' id='LC42'><span class="cm">            or undefined if nothing should be serialized. The toJSON method</span></div><div class='line' id='LC43'><span class="cm">            will be passed the key associated with the value, and this will be</span></div><div class='line' id='LC44'><span class="cm">            bound to the value</span></div><div class='line' id='LC45'><br/></div><div class='line' id='LC46'><span class="cm">            For example, this would serialize Dates as ISO strings.</span></div><div class='line' id='LC47'><br/></div><div class='line' id='LC48'><span class="cm">                Date.prototype.toJSON = function (key) {</span></div><div class='line' id='LC49'><span class="cm">                    function f(n) {</span></div><div class='line' id='LC50'><span class="cm">                        // Format integers to have at least two digits.</span></div><div class='line' id='LC51'><span class="cm">                        return n &lt; 10 ? &#39;0&#39; + n : n;</span></div><div class='line' id='LC52'><span class="cm">                    }</span></div><div class='line' id='LC53'><br/></div><div class='line' id='LC54'><span class="cm">                    return this.getUTCFullYear()   + &#39;-&#39; +</span></div><div class='line' id='LC55'><span class="cm">                         f(this.getUTCMonth() + 1) + &#39;-&#39; +</span></div><div class='line' id='LC56'><span class="cm">                         f(this.getUTCDate())      + &#39;T&#39; +</span></div><div class='line' id='LC57'><span class="cm">                         f(this.getUTCHours())     + &#39;:&#39; +</span></div><div class='line' id='LC58'><span class="cm">                         f(this.getUTCMinutes())   + &#39;:&#39; +</span></div><div class='line' id='LC59'><span class="cm">                         f(this.getUTCSeconds())   + &#39;Z&#39;;</span></div><div class='line' id='LC60'><span class="cm">                };</span></div><div class='line' id='LC61'><br/></div><div class='line' id='LC62'><span class="cm">            You can provide an optional replacer method. It will be passed the</span></div><div class='line' id='LC63'><span class="cm">            key and value of each member, with this bound to the containing</span></div><div class='line' id='LC64'><span class="cm">            object. The value that is returned from your method will be</span></div><div class='line' id='LC65'><span class="cm">            serialized. If your method returns undefined, then the member will</span></div><div class='line' id='LC66'><span class="cm">            be excluded from the serialization.</span></div><div class='line' id='LC67'><br/></div><div class='line' id='LC68'><span class="cm">            If the replacer parameter is an array of strings, then it will be</span></div><div class='line' id='LC69'><span class="cm">            used to select the members to be serialized. It filters the results</span></div><div class='line' id='LC70'><span class="cm">            such that only members with keys listed in the replacer array are</span></div><div class='line' id='LC71'><span class="cm">            stringified.</span></div><div class='line' id='LC72'><br/></div><div class='line' id='LC73'><span class="cm">            Values that do not have JSON representations, such as undefined or</span></div><div class='line' id='LC74'><span class="cm">            functions, will not be serialized. Such values in objects will be</span></div><div class='line' id='LC75'><span class="cm">            dropped; in arrays they will be replaced with null. You can use</span></div><div class='line' id='LC76'><span class="cm">            a replacer function to replace those with JSON values.</span></div><div class='line' id='LC77'><span class="cm">            JSON.stringify(undefined) returns undefined.</span></div><div class='line' id='LC78'><br/></div><div class='line' id='LC79'><span class="cm">            The optional space parameter produces a stringification of the</span></div><div class='line' id='LC80'><span class="cm">            value that is filled with line breaks and indentation to make it</span></div><div class='line' id='LC81'><span class="cm">            easier to read.</span></div><div class='line' id='LC82'><br/></div><div class='line' id='LC83'><span class="cm">            If the space parameter is a non-empty string, then that string will</span></div><div class='line' id='LC84'><span class="cm">            be used for indentation. If the space parameter is a number, then</span></div><div class='line' id='LC85'><span class="cm">            the indentation will be that many spaces.</span></div><div class='line' id='LC86'><br/></div><div class='line' id='LC87'><span class="cm">            Example:</span></div><div class='line' id='LC88'><br/></div><div class='line' id='LC89'><span class="cm">            text = JSON.stringify([&#39;e&#39;, {pluribus: &#39;unum&#39;}]);</span></div><div class='line' id='LC90'><span class="cm">            // text is &#39;[&quot;e&quot;,{&quot;pluribus&quot;:&quot;unum&quot;}]&#39;</span></div><div class='line' id='LC91'><br/></div><div class='line' id='LC92'><br/></div><div class='line' id='LC93'><span class="cm">            text = JSON.stringify([&#39;e&#39;, {pluribus: &#39;unum&#39;}], null, &#39;\t&#39;);</span></div><div class='line' id='LC94'><span class="cm">            // text is &#39;[\n\t&quot;e&quot;,\n\t{\n\t\t&quot;pluribus&quot;: &quot;unum&quot;\n\t}\n]&#39;</span></div><div class='line' id='LC95'><br/></div><div class='line' id='LC96'><span class="cm">            text = JSON.stringify([new Date()], function (key, value) {</span></div><div class='line' id='LC97'><span class="cm">                return this[key] instanceof Date ?</span></div><div class='line' id='LC98'><span class="cm">                    &#39;Date(&#39; + this[key] + &#39;)&#39; : value;</span></div><div class='line' id='LC99'><span class="cm">            });</span></div><div class='line' id='LC100'><span class="cm">            // text is &#39;[&quot;Date(---current time---)&quot;]&#39;</span></div><div class='line' id='LC101'><br/></div><div class='line' id='LC102'><br/></div><div class='line' id='LC103'><span class="cm">        JSON.parse(text, reviver)</span></div><div class='line' id='LC104'><span class="cm">            This method parses a JSON text to produce an object or array.</span></div><div class='line' id='LC105'><span class="cm">            It can throw a SyntaxError exception.</span></div><div class='line' id='LC106'><br/></div><div class='line' id='LC107'><span class="cm">            The optional reviver parameter is a function that can filter and</span></div><div class='line' id='LC108'><span class="cm">            transform the results. It receives each of the keys and values,</span></div><div class='line' id='LC109'><span class="cm">            and its return value is used instead of the original value.</span></div><div class='line' id='LC110'><span class="cm">            If it returns what it received, then the structure is not modified.</span></div><div class='line' id='LC111'><span class="cm">            If it returns undefined then the member is deleted.</span></div><div class='line' id='LC112'><br/></div><div class='line' id='LC113'><span class="cm">            Example:</span></div><div class='line' id='LC114'><br/></div><div class='line' id='LC115'><span class="cm">            // Parse the text. Values that look like ISO date strings will</span></div><div class='line' id='LC116'><span class="cm">            // be converted to Date objects.</span></div><div class='line' id='LC117'><br/></div><div class='line' id='LC118'><span class="cm">            myData = JSON.parse(text, function (key, value) {</span></div><div class='line' id='LC119'><span class="cm">                var a;</span></div><div class='line' id='LC120'><span class="cm">                if (typeof value === &#39;string&#39;) {</span></div><div class='line' id='LC121'><span class="cm">                    a =</span></div><div class='line' id='LC122'><span class="cm">/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);</span></div><div class='line' id='LC123'><span class="cm">                    if (a) {</span></div><div class='line' id='LC124'><span class="cm">                        return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4],</span></div><div class='line' id='LC125'><span class="cm">                            +a[5], +a[6]));</span></div><div class='line' id='LC126'><span class="cm">                    }</span></div><div class='line' id='LC127'><span class="cm">                }</span></div><div class='line' id='LC128'><span class="cm">                return value;</span></div><div class='line' id='LC129'><span class="cm">            });</span></div><div class='line' id='LC130'><br/></div><div class='line' id='LC131'><span class="cm">            myData = JSON.parse(&#39;[&quot;Date(09/09/2001)&quot;]&#39;, function (key, value) {</span></div><div class='line' id='LC132'><span class="cm">                var d;</span></div><div class='line' id='LC133'><span class="cm">                if (typeof value === &#39;string&#39; &amp;&amp;</span></div><div class='line' id='LC134'><span class="cm">                        value.slice(0, 5) === &#39;Date(&#39; &amp;&amp;</span></div><div class='line' id='LC135'><span class="cm">                        value.slice(-1) === &#39;)&#39;) {</span></div><div class='line' id='LC136'><span class="cm">                    d = new Date(value.slice(5, -1));</span></div><div class='line' id='LC137'><span class="cm">                    if (d) {</span></div><div class='line' id='LC138'><span class="cm">                        return d;</span></div><div class='line' id='LC139'><span class="cm">                    }</span></div><div class='line' id='LC140'><span class="cm">                }</span></div><div class='line' id='LC141'><span class="cm">                return value;</span></div><div class='line' id='LC142'><span class="cm">            });</span></div><div class='line' id='LC143'><br/></div><div class='line' id='LC144'><br/></div><div class='line' id='LC145'><span class="cm">    This is a reference implementation. You are free to copy, modify, or</span></div><div class='line' id='LC146'><span class="cm">    redistribute.</span></div><div class='line' id='LC147'><span class="cm">*/</span></div><div class='line' id='LC148'><br/></div><div class='line' id='LC149'><span class="cm">/*jslint evil: true, strict: false, regexp: false */</span></div><div class='line' id='LC150'><br/></div><div class='line' id='LC151'><span class="cm">/*members &quot;&quot;, &quot;\b&quot;, &quot;\t&quot;, &quot;\n&quot;, &quot;\f&quot;, &quot;\r&quot;, &quot;\&quot;&quot;, JSON, &quot;\\&quot;, apply,</span></div><div class='line' id='LC152'><span class="cm">    call, charCodeAt, getUTCDate, getUTCFullYear, getUTCHours,</span></div><div class='line' id='LC153'><span class="cm">    getUTCMinutes, getUTCMonth, getUTCSeconds, hasOwnProperty, join,</span></div><div class='line' id='LC154'><span class="cm">    lastIndex, length, parse, prototype, push, replace, slice, stringify,</span></div><div class='line' id='LC155'><span class="cm">    test, toJSON, toString, valueOf</span></div><div class='line' id='LC156'><span class="cm">*/</span></div><div class='line' id='LC157'><br/></div><div class='line' id='LC158'><br/></div><div class='line' id='LC159'><span class="c1">// Create a JSON object only if one does not already exist. We create the</span></div><div class='line' id='LC160'><span class="c1">// methods in a closure to avoid creating global variables.</span></div><div class='line' id='LC161'><br/></div><div class='line' id='LC162'><span class="kd">var</span> <span class="nx">JSON</span><span class="p">;</span></div><div class='line' id='LC163'><span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">JSON</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC164'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">JSON</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC165'><span class="p">}</span></div><div class='line' id='LC166'><br/></div><div class='line' id='LC167'><span class="p">(</span><span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC168'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;use strict&quot;</span><span class="p">;</span></div><div class='line' id='LC169'><br/></div><div class='line' id='LC170'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">f</span><span class="p">(</span><span class="nx">n</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC171'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// Format integers to have at least two digits.</span></div><div class='line' id='LC172'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">n</span> <span class="o">&lt;</span> <span class="mi">10</span> <span class="o">?</span> <span class="s1">&#39;0&#39;</span> <span class="o">+</span> <span class="nx">n</span> <span class="o">:</span> <span class="nx">n</span><span class="p">;</span></div><div class='line' id='LC173'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC174'><br/></div><div class='line' id='LC175'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nb">Date</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toJSON</span> <span class="o">!==</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC176'><br/></div><div class='line' id='LC177'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">Date</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toJSON</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC178'><br/></div><div class='line' id='LC179'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nb">isFinite</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">valueOf</span><span class="p">())</span> <span class="o">?</span></div><div class='line' id='LC180'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">getUTCFullYear</span><span class="p">()</span>     <span class="o">+</span> <span class="s1">&#39;-&#39;</span> <span class="o">+</span></div><div class='line' id='LC181'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">f</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getUTCMonth</span><span class="p">()</span> <span class="o">+</span> <span class="mi">1</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;-&#39;</span> <span class="o">+</span></div><div class='line' id='LC182'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">f</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getUTCDate</span><span class="p">())</span>      <span class="o">+</span> <span class="s1">&#39;T&#39;</span> <span class="o">+</span></div><div class='line' id='LC183'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">f</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getUTCHours</span><span class="p">())</span>     <span class="o">+</span> <span class="s1">&#39;:&#39;</span> <span class="o">+</span></div><div class='line' id='LC184'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">f</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getUTCMinutes</span><span class="p">())</span>   <span class="o">+</span> <span class="s1">&#39;:&#39;</span> <span class="o">+</span></div><div class='line' id='LC185'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">f</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">getUTCSeconds</span><span class="p">())</span>   <span class="o">+</span> <span class="s1">&#39;Z&#39;</span> <span class="o">:</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC186'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC187'><br/></div><div class='line' id='LC188'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">String</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toJSON</span>      <span class="o">=</span></div><div class='line' id='LC189'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">Number</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toJSON</span>  <span class="o">=</span></div><div class='line' id='LC190'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nb">Boolean</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toJSON</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC191'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">valueOf</span><span class="p">();</span></div><div class='line' id='LC192'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC193'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC194'><br/></div><div class='line' id='LC195'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">cx</span> <span class="o">=</span> <span class="sr">/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g</span><span class="p">,</span></div><div class='line' id='LC196'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">escapable</span> <span class="o">=</span> <span class="sr">/[\\\&quot;\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g</span><span class="p">,</span></div><div class='line' id='LC197'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">gap</span><span class="p">,</span></div><div class='line' id='LC198'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">indent</span><span class="p">,</span></div><div class='line' id='LC199'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">meta</span> <span class="o">=</span> <span class="p">{</span>    <span class="c1">// table of character substitutions</span></div><div class='line' id='LC200'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;\b&#39;</span><span class="o">:</span> <span class="s1">&#39;\\b&#39;</span><span class="p">,</span></div><div class='line' id='LC201'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;\t&#39;</span><span class="o">:</span> <span class="s1">&#39;\\t&#39;</span><span class="p">,</span></div><div class='line' id='LC202'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;\n&#39;</span><span class="o">:</span> <span class="s1">&#39;\\n&#39;</span><span class="p">,</span></div><div class='line' id='LC203'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;\f&#39;</span><span class="o">:</span> <span class="s1">&#39;\\f&#39;</span><span class="p">,</span></div><div class='line' id='LC204'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;\r&#39;</span><span class="o">:</span> <span class="s1">&#39;\\r&#39;</span><span class="p">,</span></div><div class='line' id='LC205'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;&quot;&#39;</span> <span class="o">:</span> <span class="s1">&#39;\\&quot;&#39;</span><span class="p">,</span></div><div class='line' id='LC206'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;\\&#39;</span><span class="o">:</span> <span class="s1">&#39;\\\\&#39;</span></div><div class='line' id='LC207'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC208'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rep</span><span class="p">;</span></div><div class='line' id='LC209'><br/></div><div class='line' id='LC210'><br/></div><div class='line' id='LC211'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">quote</span><span class="p">(</span><span class="nx">string</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC212'><br/></div><div class='line' id='LC213'><span class="c1">// If the string contains no control characters, no quote characters, and no</span></div><div class='line' id='LC214'><span class="c1">// backslash characters, then we can safely slap some quotes around it.</span></div><div class='line' id='LC215'><span class="c1">// Otherwise we must also replace the offending characters with safe escape</span></div><div class='line' id='LC216'><span class="c1">// sequences.</span></div><div class='line' id='LC217'><br/></div><div class='line' id='LC218'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">escapable</span><span class="p">.</span><span class="nx">lastIndex</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC219'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">escapable</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">string</span><span class="p">)</span> <span class="o">?</span> <span class="s1">&#39;&quot;&#39;</span> <span class="o">+</span> <span class="nx">string</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">escapable</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">a</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC220'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">c</span> <span class="o">=</span> <span class="nx">meta</span><span class="p">[</span><span class="nx">a</span><span class="p">];</span></div><div class='line' id='LC221'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">typeof</span> <span class="nx">c</span> <span class="o">===</span> <span class="s1">&#39;string&#39;</span> <span class="o">?</span> <span class="nx">c</span> <span class="o">:</span></div><div class='line' id='LC222'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;\\u&#39;</span> <span class="o">+</span> <span class="p">(</span><span class="s1">&#39;0000&#39;</span> <span class="o">+</span> <span class="nx">a</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="mi">0</span><span class="p">).</span><span class="nx">toString</span><span class="p">(</span><span class="mi">16</span><span class="p">)).</span><span class="nx">slice</span><span class="p">(</span><span class="o">-</span><span class="mi">4</span><span class="p">);</span></div><div class='line' id='LC223'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">})</span> <span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span> <span class="o">:</span> <span class="s1">&#39;&quot;&#39;</span> <span class="o">+</span> <span class="nx">string</span> <span class="o">+</span> <span class="s1">&#39;&quot;&#39;</span><span class="p">;</span></div><div class='line' id='LC224'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC225'><br/></div><div class='line' id='LC226'><br/></div><div class='line' id='LC227'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">str</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">holder</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC228'><br/></div><div class='line' id='LC229'><span class="c1">// Produce a string from holder[key].</span></div><div class='line' id='LC230'><br/></div><div class='line' id='LC231'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">i</span><span class="p">,</span>          <span class="c1">// The loop counter.</span></div><div class='line' id='LC232'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">k</span><span class="p">,</span>          <span class="c1">// The member key.</span></div><div class='line' id='LC233'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">v</span><span class="p">,</span>          <span class="c1">// The member value.</span></div><div class='line' id='LC234'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">length</span><span class="p">,</span></div><div class='line' id='LC235'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">mind</span> <span class="o">=</span> <span class="nx">gap</span><span class="p">,</span></div><div class='line' id='LC236'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">partial</span><span class="p">,</span></div><div class='line' id='LC237'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span> <span class="o">=</span> <span class="nx">holder</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></div><div class='line' id='LC238'><br/></div><div class='line' id='LC239'><span class="c1">// If the value has a toJSON method, call it to obtain a replacement value.</span></div><div class='line' id='LC240'><br/></div><div class='line' id='LC241'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">value</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">value</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC242'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">typeof</span> <span class="nx">value</span><span class="p">.</span><span class="nx">toJSON</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC243'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">toJSON</span><span class="p">(</span><span class="nx">key</span><span class="p">);</span></div><div class='line' id='LC244'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC245'><br/></div><div class='line' id='LC246'><span class="c1">// If we were called with a replacer function, then call the replacer to</span></div><div class='line' id='LC247'><span class="c1">// obtain a replacement value.</span></div><div class='line' id='LC248'><br/></div><div class='line' id='LC249'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">rep</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC250'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span> <span class="o">=</span> <span class="nx">rep</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">holder</span><span class="p">,</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC251'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC252'><br/></div><div class='line' id='LC253'><span class="c1">// What happens next depends on the value&#39;s type.</span></div><div class='line' id='LC254'><br/></div><div class='line' id='LC255'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">switch</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC256'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;string&#39;</span><span class="o">:</span></div><div class='line' id='LC257'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">quote</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC258'><br/></div><div class='line' id='LC259'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;number&#39;</span><span class="o">:</span></div><div class='line' id='LC260'><br/></div><div class='line' id='LC261'><span class="c1">// JSON numbers must be finite. Encode non-finite numbers as null.</span></div><div class='line' id='LC262'><br/></div><div class='line' id='LC263'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nb">isFinite</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="o">?</span> <span class="nb">String</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="o">:</span> <span class="s1">&#39;null&#39;</span><span class="p">;</span></div><div class='line' id='LC264'><br/></div><div class='line' id='LC265'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;boolean&#39;</span><span class="o">:</span></div><div class='line' id='LC266'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;null&#39;</span><span class="o">:</span></div><div class='line' id='LC267'><br/></div><div class='line' id='LC268'><span class="c1">// If the value is a boolean or null, convert it to a string. Note:</span></div><div class='line' id='LC269'><span class="c1">// typeof null does not produce &#39;null&#39;. The case is included here in</span></div><div class='line' id='LC270'><span class="c1">// the remote chance that this gets fixed someday.</span></div><div class='line' id='LC271'><br/></div><div class='line' id='LC272'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nb">String</span><span class="p">(</span><span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC273'><br/></div><div class='line' id='LC274'><span class="c1">// If the type is &#39;object&#39;, we might be dealing with an object or an array or</span></div><div class='line' id='LC275'><span class="c1">// null.</span></div><div class='line' id='LC276'><br/></div><div class='line' id='LC277'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;object&#39;</span><span class="o">:</span></div><div class='line' id='LC278'><br/></div><div class='line' id='LC279'><span class="c1">// Due to a specification blunder in ECMAScript, typeof null is &#39;object&#39;,</span></div><div class='line' id='LC280'><span class="c1">// so watch out for that case.</span></div><div class='line' id='LC281'><br/></div><div class='line' id='LC282'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC283'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;null&#39;</span><span class="p">;</span></div><div class='line' id='LC284'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC285'><br/></div><div class='line' id='LC286'><span class="c1">// Make an array to hold the partial results of stringifying this object value.</span></div><div class='line' id='LC287'><br/></div><div class='line' id='LC288'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">gap</span> <span class="o">+=</span> <span class="nx">indent</span><span class="p">;</span></div><div class='line' id='LC289'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">partial</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC290'><br/></div><div class='line' id='LC291'><span class="c1">// Is the value an array?</span></div><div class='line' id='LC292'><br/></div><div class='line' id='LC293'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toString</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="o">===</span> <span class="s1">&#39;[object Array]&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC294'><br/></div><div class='line' id='LC295'><span class="c1">// The value is an array. Stringify every element. Use null as a placeholder</span></div><div class='line' id='LC296'><span class="c1">// for non-JSON values.</span></div><div class='line' id='LC297'><br/></div><div class='line' id='LC298'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">length</span> <span class="o">=</span> <span class="nx">value</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC299'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC300'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">partial</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">=</span> <span class="nx">str</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="nx">value</span><span class="p">)</span> <span class="o">||</span> <span class="s1">&#39;null&#39;</span><span class="p">;</span></div><div class='line' id='LC301'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC302'><br/></div><div class='line' id='LC303'><span class="c1">// Join all of the elements together, separated with commas, and wrap them in</span></div><div class='line' id='LC304'><span class="c1">// brackets.</span></div><div class='line' id='LC305'><br/></div><div class='line' id='LC306'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">v</span> <span class="o">=</span> <span class="nx">partial</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span> <span class="o">?</span> <span class="s1">&#39;[]&#39;</span> <span class="o">:</span> <span class="nx">gap</span> <span class="o">?</span></div><div class='line' id='LC307'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;[\n&#39;</span> <span class="o">+</span> <span class="nx">gap</span> <span class="o">+</span> <span class="nx">partial</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;,\n&#39;</span> <span class="o">+</span> <span class="nx">gap</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;\n&#39;</span> <span class="o">+</span> <span class="nx">mind</span> <span class="o">+</span> <span class="s1">&#39;]&#39;</span> <span class="o">:</span></div><div class='line' id='LC308'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;[&#39;</span> <span class="o">+</span> <span class="nx">partial</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;,&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;]&#39;</span><span class="p">;</span></div><div class='line' id='LC309'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">gap</span> <span class="o">=</span> <span class="nx">mind</span><span class="p">;</span></div><div class='line' id='LC310'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">v</span><span class="p">;</span></div><div class='line' id='LC311'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC312'><br/></div><div class='line' id='LC313'><span class="c1">// If the replacer is an array, use it to select the members to be stringified.</span></div><div class='line' id='LC314'><br/></div><div class='line' id='LC315'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">rep</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">rep</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC316'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">length</span> <span class="o">=</span> <span class="nx">rep</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC317'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC318'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">rep</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">===</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC319'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">k</span> <span class="o">=</span> <span class="nx">rep</span><span class="p">[</span><span class="nx">i</span><span class="p">];</span></div><div class='line' id='LC320'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">v</span> <span class="o">=</span> <span class="nx">str</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span> <span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC321'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">v</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC322'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">partial</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">quote</span><span class="p">(</span><span class="nx">k</span><span class="p">)</span> <span class="o">+</span> <span class="p">(</span><span class="nx">gap</span> <span class="o">?</span> <span class="s1">&#39;: &#39;</span> <span class="o">:</span> <span class="s1">&#39;:&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="nx">v</span><span class="p">);</span></div><div class='line' id='LC323'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC324'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC325'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC326'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC327'><br/></div><div class='line' id='LC328'><span class="c1">// Otherwise, iterate through all of the keys in the object.</span></div><div class='line' id='LC329'><br/></div><div class='line' id='LC330'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">k</span> <span class="k">in</span> <span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC331'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">k</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC332'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">v</span> <span class="o">=</span> <span class="nx">str</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span> <span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC333'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">v</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC334'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">partial</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">quote</span><span class="p">(</span><span class="nx">k</span><span class="p">)</span> <span class="o">+</span> <span class="p">(</span><span class="nx">gap</span> <span class="o">?</span> <span class="s1">&#39;: &#39;</span> <span class="o">:</span> <span class="s1">&#39;:&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="nx">v</span><span class="p">);</span></div><div class='line' id='LC335'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC336'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC337'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC338'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC339'><br/></div><div class='line' id='LC340'><span class="c1">// Join all of the member texts together, separated with commas,</span></div><div class='line' id='LC341'><span class="c1">// and wrap them in braces.</span></div><div class='line' id='LC342'><br/></div><div class='line' id='LC343'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">v</span> <span class="o">=</span> <span class="nx">partial</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span> <span class="o">?</span> <span class="s1">&#39;{}&#39;</span> <span class="o">:</span> <span class="nx">gap</span> <span class="o">?</span></div><div class='line' id='LC344'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;{\n&#39;</span> <span class="o">+</span> <span class="nx">gap</span> <span class="o">+</span> <span class="nx">partial</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;,\n&#39;</span> <span class="o">+</span> <span class="nx">gap</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;\n&#39;</span> <span class="o">+</span> <span class="nx">mind</span> <span class="o">+</span> <span class="s1">&#39;}&#39;</span> <span class="o">:</span></div><div class='line' id='LC345'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;{&#39;</span> <span class="o">+</span> <span class="nx">partial</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;,&#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;}&#39;</span><span class="p">;</span></div><div class='line' id='LC346'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">gap</span> <span class="o">=</span> <span class="nx">mind</span><span class="p">;</span></div><div class='line' id='LC347'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">v</span><span class="p">;</span></div><div class='line' id='LC348'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC349'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC350'><br/></div><div class='line' id='LC351'><span class="c1">// If the JSON object does not yet have a stringify method, give it one.</span></div><div class='line' id='LC352'><br/></div><div class='line' id='LC353'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span> <span class="o">!==</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC354'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">JSON</span><span class="p">.</span><span class="nx">stringify</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">replacer</span><span class="p">,</span> <span class="nx">space</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC355'><br/></div><div class='line' id='LC356'><span class="c1">// The stringify method takes a value and an optional replacer, and an optional</span></div><div class='line' id='LC357'><span class="c1">// space parameter, and returns a JSON text. The replacer can be a function</span></div><div class='line' id='LC358'><span class="c1">// that can replace values, or an array of strings that will select the keys.</span></div><div class='line' id='LC359'><span class="c1">// A default replacer method can be provided. Use of the space parameter can</span></div><div class='line' id='LC360'><span class="c1">// produce text that is more easily readable.</span></div><div class='line' id='LC361'><br/></div><div class='line' id='LC362'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">i</span><span class="p">;</span></div><div class='line' id='LC363'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">gap</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC364'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">indent</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC365'><br/></div><div class='line' id='LC366'><span class="c1">// If the space parameter is a number, make an indent string containing that</span></div><div class='line' id='LC367'><span class="c1">// many spaces.</span></div><div class='line' id='LC368'><br/></div><div class='line' id='LC369'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">space</span> <span class="o">===</span> <span class="s1">&#39;number&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC370'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">space</span><span class="p">;</span> <span class="nx">i</span> <span class="o">+=</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC371'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">indent</span> <span class="o">+=</span> <span class="s1">&#39; &#39;</span><span class="p">;</span></div><div class='line' id='LC372'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC373'><br/></div><div class='line' id='LC374'><span class="c1">// If the space parameter is a string, it will be used as the indent string.</span></div><div class='line' id='LC375'><br/></div><div class='line' id='LC376'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">space</span> <span class="o">===</span> <span class="s1">&#39;string&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC377'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">indent</span> <span class="o">=</span> <span class="nx">space</span><span class="p">;</span></div><div class='line' id='LC378'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC379'><br/></div><div class='line' id='LC380'><span class="c1">// If there is a replacer, it must be a function or an array.</span></div><div class='line' id='LC381'><span class="c1">// Otherwise, throw an error.</span></div><div class='line' id='LC382'><br/></div><div class='line' id='LC383'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">rep</span> <span class="o">=</span> <span class="nx">replacer</span><span class="p">;</span></div><div class='line' id='LC384'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">replacer</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">replacer</span> <span class="o">!==</span> <span class="s1">&#39;function&#39;</span> <span class="o">&amp;&amp;</span></div><div class='line' id='LC385'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="k">typeof</span> <span class="nx">replacer</span> <span class="o">!==</span> <span class="s1">&#39;object&#39;</span> <span class="o">||</span></div><div class='line' id='LC386'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">typeof</span> <span class="nx">replacer</span><span class="p">.</span><span class="nx">length</span> <span class="o">!==</span> <span class="s1">&#39;number&#39;</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC387'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;JSON.stringify&#39;</span><span class="p">);</span></div><div class='line' id='LC388'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC389'><br/></div><div class='line' id='LC390'><span class="c1">// Make a fake root object containing our value under the key of &#39;&#39;.</span></div><div class='line' id='LC391'><span class="c1">// Return the result of stringifying the value.</span></div><div class='line' id='LC392'><br/></div><div class='line' id='LC393'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">str</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">,</span> <span class="p">{</span><span class="s1">&#39;&#39;</span><span class="o">:</span> <span class="nx">value</span><span class="p">});</span></div><div class='line' id='LC394'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC395'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC396'><br/></div><div class='line' id='LC397'><br/></div><div class='line' id='LC398'><span class="c1">// If the JSON object does not yet have a parse method, give it one.</span></div><div class='line' id='LC399'><br/></div><div class='line' id='LC400'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="k">typeof</span> <span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span> <span class="o">!==</span> <span class="s1">&#39;function&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC401'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">JSON</span><span class="p">.</span><span class="nx">parse</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">text</span><span class="p">,</span> <span class="nx">reviver</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC402'><br/></div><div class='line' id='LC403'><span class="c1">// The parse method takes a text and an optional reviver function, and returns</span></div><div class='line' id='LC404'><span class="c1">// a JavaScript value if the text is a valid JSON text.</span></div><div class='line' id='LC405'><br/></div><div class='line' id='LC406'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">j</span><span class="p">;</span></div><div class='line' id='LC407'><br/></div><div class='line' id='LC408'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">walk</span><span class="p">(</span><span class="nx">holder</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC409'><br/></div><div class='line' id='LC410'><span class="c1">// The walk method is used to recursively walk the resulting structure so</span></div><div class='line' id='LC411'><span class="c1">// that modifications can be made.</span></div><div class='line' id='LC412'><br/></div><div class='line' id='LC413'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">k</span><span class="p">,</span> <span class="nx">v</span><span class="p">,</span> <span class="nx">value</span> <span class="o">=</span> <span class="nx">holder</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></div><div class='line' id='LC414'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">value</span> <span class="o">&amp;&amp;</span> <span class="k">typeof</span> <span class="nx">value</span> <span class="o">===</span> <span class="s1">&#39;object&#39;</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC415'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="nx">k</span> <span class="k">in</span> <span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC416'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">k</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC417'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">v</span> <span class="o">=</span> <span class="nx">walk</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">k</span><span class="p">);</span></div><div class='line' id='LC418'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">v</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC419'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="p">[</span><span class="nx">k</span><span class="p">]</span> <span class="o">=</span> <span class="nx">v</span><span class="p">;</span></div><div class='line' id='LC420'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC421'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="nx">value</span><span class="p">[</span><span class="nx">k</span><span class="p">];</span></div><div class='line' id='LC422'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC423'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC424'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC425'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC426'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">reviver</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">holder</span><span class="p">,</span> <span class="nx">key</span><span class="p">,</span> <span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC427'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC428'><br/></div><div class='line' id='LC429'><br/></div><div class='line' id='LC430'><span class="c1">// Parsing happens in four stages. In the first stage, we replace certain</span></div><div class='line' id='LC431'><span class="c1">// Unicode characters with escape sequences. JavaScript handles many characters</span></div><div class='line' id='LC432'><span class="c1">// incorrectly, either silently deleting them, or treating them as line endings.</span></div><div class='line' id='LC433'><br/></div><div class='line' id='LC434'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">text</span> <span class="o">=</span> <span class="nb">String</span><span class="p">(</span><span class="nx">text</span><span class="p">);</span></div><div class='line' id='LC435'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cx</span><span class="p">.</span><span class="nx">lastIndex</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC436'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">cx</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">text</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC437'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">text</span> <span class="o">=</span> <span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">cx</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">a</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC438'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="s1">&#39;\\u&#39;</span> <span class="o">+</span></div><div class='line' id='LC439'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="s1">&#39;0000&#39;</span> <span class="o">+</span> <span class="nx">a</span><span class="p">.</span><span class="nx">charCodeAt</span><span class="p">(</span><span class="mi">0</span><span class="p">).</span><span class="nx">toString</span><span class="p">(</span><span class="mi">16</span><span class="p">)).</span><span class="nx">slice</span><span class="p">(</span><span class="o">-</span><span class="mi">4</span><span class="p">);</span></div><div class='line' id='LC440'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC441'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC442'><br/></div><div class='line' id='LC443'><span class="c1">// In the second stage, we run the text against regular expressions that look</span></div><div class='line' id='LC444'><span class="c1">// for non-JSON patterns. We are especially concerned with &#39;()&#39; and &#39;new&#39;</span></div><div class='line' id='LC445'><span class="c1">// because they can cause invocation, and &#39;=&#39; because it can cause mutation.</span></div><div class='line' id='LC446'><span class="c1">// But just to be safe, we want to reject all unexpected forms.</span></div><div class='line' id='LC447'><br/></div><div class='line' id='LC448'><span class="c1">// We split the second stage into 4 regexp operations in order to work around</span></div><div class='line' id='LC449'><span class="c1">// crippling inefficiencies in IE&#39;s and Safari&#39;s regexp engines. First we</span></div><div class='line' id='LC450'><span class="c1">// replace the JSON backslash pairs with &#39;@&#39; (a non-JSON character). Second, we</span></div><div class='line' id='LC451'><span class="c1">// replace all simple value tokens with &#39;]&#39; characters. Third, we delete all</span></div><div class='line' id='LC452'><span class="c1">// open brackets that follow a colon or comma or that begin the text. Finally,</span></div><div class='line' id='LC453'><span class="c1">// we look to see that the remaining characters are only whitespace or &#39;]&#39; or</span></div><div class='line' id='LC454'><span class="c1">// &#39;,&#39; or &#39;:&#39; or &#39;{&#39; or &#39;}&#39;. If that is so, then the text is safe for eval.</span></div><div class='line' id='LC455'><br/></div><div class='line' id='LC456'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="sr">/^[\],:{}\s]*$/</span></div><div class='line' id='LC457'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">text</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/\\(?:[&quot;\\\/bfnrt]|u[0-9a-fA-F]{4})/g</span><span class="p">,</span> <span class="s1">&#39;@&#39;</span><span class="p">)</span></div><div class='line' id='LC458'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/&quot;[^&quot;\\\n\r]*&quot;|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g</span><span class="p">,</span> <span class="s1">&#39;]&#39;</span><span class="p">)</span></div><div class='line' id='LC459'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="sr">/(?:^|:|,)(?:\s*\[)+/g</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">)))</span> <span class="p">{</span></div><div class='line' id='LC460'><br/></div><div class='line' id='LC461'><span class="c1">// In the third stage we use the eval function to compile the text into a</span></div><div class='line' id='LC462'><span class="c1">// JavaScript structure. The &#39;{&#39; operator is subject to a syntactic ambiguity</span></div><div class='line' id='LC463'><span class="c1">// in JavaScript: it can begin a block or an object literal. We wrap the text</span></div><div class='line' id='LC464'><span class="c1">// in parens to eliminate the ambiguity.</span></div><div class='line' id='LC465'><br/></div><div class='line' id='LC466'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">j</span> <span class="o">=</span> <span class="nb">eval</span><span class="p">(</span><span class="s1">&#39;(&#39;</span> <span class="o">+</span> <span class="nx">text</span> <span class="o">+</span> <span class="s1">&#39;)&#39;</span><span class="p">);</span></div><div class='line' id='LC467'><br/></div><div class='line' id='LC468'><span class="c1">// In the optional fourth stage, we recursively walk the new structure, passing</span></div><div class='line' id='LC469'><span class="c1">// each name/value pair to a reviver function for possible transformation.</span></div><div class='line' id='LC470'><br/></div><div class='line' id='LC471'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">typeof</span> <span class="nx">reviver</span> <span class="o">===</span> <span class="s1">&#39;function&#39;</span> <span class="o">?</span></div><div class='line' id='LC472'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">walk</span><span class="p">({</span><span class="s1">&#39;&#39;</span><span class="o">:</span> <span class="nx">j</span><span class="p">},</span> <span class="s1">&#39;&#39;</span><span class="p">)</span> <span class="o">:</span> <span class="nx">j</span><span class="p">;</span></div><div class='line' id='LC473'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC474'><br/></div><div class='line' id='LC475'><span class="c1">// If the text is not JSON parseable, then a SyntaxError is thrown.</span></div><div class='line' id='LC476'><br/></div><div class='line' id='LC477'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nx">SyntaxError</span><span class="p">(</span><span class="s1">&#39;JSON.parse&#39;</span><span class="p">);</span></div><div class='line' id='LC478'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC479'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC480'><span class="p">}());</span></div><div class='line' id='LC481'><br/></div></pre></div>
              
            
          </td>
        </tr>
      </table>
    
  </div>


          </div>
        </div>
      </div>
    </div>
  

  </div>


<div class="frame frame-loading" style="display:none;">
  <img src="https://d3nwyuy0nl342s.cloudfront.net/images/modules/ajax/big_spinner_336699.gif" height="32" width="32">
</div>

    </div>
  
      
    </div>

    <div id="footer" class="clearfix">
      <div class="site">
        
          <div class="sponsor">
            <a href="http://www.rackspace.com" class="logo">
              <img alt="Dedicated Server" height="36" src="https://d3nwyuy0nl342s.cloudfront.net/images/modules/footer/rackspace_logo.png?v2" width="38" />
            </a>
            Powered by the <a href="http://www.rackspace.com ">Dedicated
            Servers</a> and<br/> <a href="http://www.rackspacecloud.com">Cloud
            Computing</a> of Rackspace Hosting<span>&reg;</span>
          </div>
        

        <ul class="links">
          
            <li class="blog"><a href="https://github.com/blog">Blog</a></li>
            <li><a href="https://github.com/contact">Contact &amp; Support</a></li>
            <li><a href="https://github.com/training">Training</a></li>
            <li><a href="http://jobs.github.com">Job Board</a></li>
            <li><a href="http://shop.github.com">Shop</a></li>
            <li><a href="http://developer.github.com">API</a></li>
            <li><a href="http://status.github.com">Status</a></li>
          
        </ul>
        <ul class="sosueme">
          <li class="main">&copy; 2011 <span id="_rrt" title="0.05261s from fe3.rs.github.com">GitHub</span> Inc. All rights reserved.</li>
          <li><a href="/site/terms">Terms of Service</a></li>
          <li><a href="/site/privacy">Privacy</a></li>
          <li><a href="https://github.com/security">Security</a></li>
        </ul>
      </div>
    </div><!-- /#footer -->

    <script>window._auth_token = "42922c7e1e1286b90bb10b3fd96c6d5572c6abfd"</script>
    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus site search</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selected down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selected up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>t</dt>
        <dd>Open tree</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>p</dt>
        <dd>Open parent</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selected down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selected up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selected down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selected up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle select target</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column middle">
        <dl class="keyboard-mappings">
          <dt>I</dt>
          <dd>Mark selected as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>U</dt>
          <dd>Mark selected as unread</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>e</dt>
          <dd>Close selected</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Remove selected from view</dd>
        </dl>
      </div><!-- /.column.middle -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>
</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:
> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>
    

    <!--[if IE 8]>
    <script type="text/javascript" charset="utf-8">
      $(document.body).addClass("ie8")
    </script>
    <![endif]-->

    <!--[if IE 7]>
    <script type="text/javascript" charset="utf-8">
      $(document.body).addClass("ie7")
    </script>
    <![endif]-->

    
    
    
    <script>(function(){var d=document;var e=d.createElement("script");e.async=true;e.src="https://d1ros97qkrwjf5.cloudfront.net/10/eum/rum.js	";var s=d.getElementsByTagName("script")[0];s.parentNode.insertBefore(e,s);})();NREUMQ.push(["nrf2","beacon-3.newrelic.com","2f94e4d8c2",64799,"dw1bEBZcX1RWRhoHFl1NUg0QbFxaWVFWEhUbAFkLBmxAUFxDahUOVQ==",0,253,new Date().getTime()])</script>
  </body>
</html>

