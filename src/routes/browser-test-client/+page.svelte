<script>
    let agent = navigator.userAgent;
    let agentClientHints = "";
    if (navigator.userAgentData)
    {
    navigator.userAgentData
        .getHighEntropyValues([
            "architecture",
            "bitness",
            "brands",
            "mobile",
            "model",
            "platform",
            "platformVersion",
            "uaFullVersion",
            "fullVersionList",
            "wow64",
        ])
        .then((ua) => {
            agentClientHints = ua;
        });
    }
  </script>
<div class="m-5">
<h1 class="text-3xl font-bold">
    Mobile Phone Model : {agentClientHints.model
        ? agentClientHints.model
        : "Not Found!"}
</h1>
<br />
<h2 class="text-2xl font-bold">Other Details</h2>
<h3 class="text-xl font-bold">Old Method:</h3>
<div class="inline-block">{agent}</div>
<h3 class="text-xl font-bold">New Method:</h3>
<div class="inline-block">{JSON.stringify(agentClientHints)}</div>
</div>