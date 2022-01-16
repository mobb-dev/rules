using System.Web;

// Example of bad usage.
using System.Web;

class ExampleClass
{
    public void ExampleMethod()
    {
        HttpCookie httpCookie = new HttpCookie("cookieName");
        httpCookie.HttpOnly = false;
    }
}

// Solution with the fix applied.
using System.Web;

class ExampleClass
{
    public void ExampleMethod()
    {
        HttpCookie httpCookie = new HttpCookie("cookieName");
        httpCookie.HttpOnly = true;
    }
}