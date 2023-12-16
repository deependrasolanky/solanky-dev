<script>
    let agent = navigator.userAgent;
    console.log(agent);
    let agentClientHints = "";
    navigator.userAgentData
.getHighEntropyValues(['architecture', 'bitness', 'brands', 'mobile', 'model', 'platform', 'platformVersion', 'uaFullVersion', 'fullVersionList', 'wow64'])
.then(ua => { agentClientHints = ua });
    console.log(agentClientHints);
</script>
<h1 class="text-3xl font-bold">Brand and Model : {agentClientHints.model ? agentClientHints.model :"Not Found!"}</h1>
<br>
<h2 class="text-2xl font-bold">Other Details</h2>
<h3 class="text-xl font-bold">Old Method:</h3>
<div class="inline-block">{agent}</div>
<h3 class="text-xl font-bold">New Method:</h3>
<div class="inline-block">{JSON.stringify(agentClientHints)}</div>
