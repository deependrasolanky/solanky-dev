<script>
    let agent = navigator.userAgent;
    console.log(agent);
    let agentClientHints = navigator.userAgentData;
    console.log(agentClientHints);
</script>
<p>{agent}</p>
<p>{JSON.stringify(agentClientHints)}</p>
