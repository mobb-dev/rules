# How to contribute

Before you contribute start with a bit of research. Check if there are any rules for what you're about to add. 
You can see the entire rules set under `/rules/<engine>/<language>/<framework>/`, If no rule is found, let's get started. 

`[Important]` Do not plagiarise other sources. While it's useful to read blogs and look at what others are doing, plagiarism will not be accepted. 

### 1. Select a rule name and its folder
Our rules repo is set to hold rules to multiple different open-source engines. As such, the hierarchy we use to store the rules starts on the engine, followed by langauge, and framework (when applicable) each rule should be located in the folder of the framework it is written for. 
Make sure the name you pick for the rule is as descriptive as possible, this will make it easier for others to find that such a rule already exists.

e.g. for a detailed rule name, if you want to create rules for insecure issues related to the `httponly` attribute from a cookie when using `cookie-parser` in the `express` `javascript` framework using the `semgrep` engine one of your rule names can be `nodejs-express-cookie-parser-cookie-no-httponly` and it should be located under  
```
|-- rules
|   -- semgrep                              <-- Same as the engine you chose
|       -- javascript                       <-- The language you're writting the rule for
|          -- express                       <-- The framework you're writting the rule for
```

as we encourage contributors to write rules that not only detect issues but can also fix them, you may have multiple rules for similar vulnerabilities to address different contexts and formatting styles. In these cases, you should re-use the message and metadata in the different rules. 

### 2. Create your rule 
When creating the rule, follow the guidelines provided for the open-source engine you want to use. It is very important to include a description of the problem and how to fix it with references to external resources such as a [`CWE`](https://cwe.mitre.org/) and [`OWASP`](https://owasp.org/Top10/) categorization.

Each rule should also incldue at least one good and bad code samples for testing. You can take a look at this [rule](./semgrep/javascript/express/nodejs-express-cookie-parser-cookie-not-httponly-no-options.yml) and [code](./semgrep/javascript/express/nodejs-express-cookie-parser-cookie-not-httponly-options-no-httponly.js) for example.
