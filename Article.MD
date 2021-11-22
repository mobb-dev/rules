### Vulnerability Type
I now know the vulnerability type I'm after: `SQL Injection`. 

### CWE
The second thing you'll want is the CWE value. Head over to [CWE](https://cwe.mitre.org/) and look for the vulnerability type and you'll quickly find the number you are after. You'll find that for SQLi the value is 89. If you're unsure don't fill in the CWE Value. 

### Explain the Vulnerability you are tring to find
After a bit of research about how SQL Injection looks like in NodeJS.

`[Important]` Do not plagiarise other sources. While it's useful to read blogs and look at what others are doing, plagiarism will not be accepted. 

After you explained birefly the vulnerability, explain how someone could find this vulnerability. 

### How can we find the vulnerable code? 
Explain for what someone should look for if they want to find this vulnerability. Be as explicit as you can and include some code samples.

```javascript
con.query("SELECT privateData FROM my_table WHERE last_name = "+req.body.lastName,function(error, results){});

```
### How can we fix this vulnerability?
Now that we know about how the vulnerability looks in code, we will want to understand how someone can fix this vulnerability.

This step is not mandatory, but having a strong fix (and a way to fix automatically) will strongly improve the addoption and usage of the rule. 


I can now write a snippet of code which shows how to fix the vulnerability:
```javascript
con.query("SELECT privateData FROM my_table WHERE last_name = ?",[req.body.lastName],function(error, results){});
```

If you want to be more explicit you can use some placeholder like so:
```javascript
con.query("SELECT privateData FROM my_table WHERE last_name = :lastName",[lastName: req.body.lastName],function(error, results){});
```


### Further reading 
In this section you will want to add links ot external sources.
In our case there's intheresting information about this in places like OWASP, the CWE article, and links to other blogs.
