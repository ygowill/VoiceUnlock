// JS script for quantumult x to rewrite chatgpt request, enable voice to voice feature

var body = $response.body;
var obj = JSON.parse(body);
if ("feature_gates" in obj) {
    for (var key in obj["feature_gates"]) {
        if (("rule_id" in obj["feature_gates"][key]) && (obj["feature_gates"][key]["rule_id"] in ["3yqcjHol8kM4fbypFkzhxC:50.00:3"])) {
            obj["feature_gates"][key]["value"] = true;
        }
    }
}
body = JSON.stringify(obj);
$done(body);