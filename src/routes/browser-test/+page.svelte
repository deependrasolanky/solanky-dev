<script>
    let agent = navigator.userAgent;
    console.log(agent);
    let agentClientHints = "";
    navigator.userAgentData
.getHighEntropyValues(['architecture', 'bitness', 'brands', 'mobile', 'model', 'platform', 'platformVersion', 'uaFullVersion', 'fullVersionList', 'wow64'])
.then(ua => { agentClientHints = ua });
    console.log(agentClientHints);
</script>
<p>{agent}</p>
<p>{JSON.stringify(agentClientHints)}</p>
