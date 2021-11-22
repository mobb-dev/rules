# How to contribute

Before you contribute start with a bit of research. Check if there are any rules for what you're about to add. 
You can see the entire rules set under `/rules/<engine>/<language>/`, If no rule is found, let's get started. 

### 1. Select a rule name and create your contribution folder
In the "rules" folder, under the engine & langauge you want to write the rules for, create a folder with the name of your new rule.

e.g. if you want to create a rule to detect `SQL Injection` in the `NodeJS` framework using the `semgrep` engine, your rule name may be called: `NodeJS_SQL_Injection` and the created folder will be `/rules/semgrep/JavaScript/NodeJS_SQL_Injection`

Then create a .yaml file with your semgrep rule and an Article.MD file that will be the article explaining your rule. 

Your final folder structure should look something like this: 
```
|-- rules
|   `-- semgrep                               <-- Same as the engine you chose
|       `-- JavaScript                        <-- The language you're writting the rule for
|          |-- NodeJS_SQL_Injection.yaml      <-- This is your rule 
|          |-- Article.MD                     <-- This is the article for your rule.   
```

### 2. Create your rule 

[Semgrep rule overview](https://semgrep.dev/docs/writing-rules/overview/)

### 3. Create your fix 

[Semgrep rule fix](https://semgrep.dev/docs/writing-rules/rule-syntax/#fix) 

### 4. Write the article 

Check out the [Article.MD](/Article.MD) for a sample.

