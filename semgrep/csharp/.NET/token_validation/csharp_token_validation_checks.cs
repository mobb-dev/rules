using System;
using Microsoft.IdentityModel.Tokens;

// Example of bad usage.
class BadUsageExample
{
    public void ExampleMethod()
    {
        TokenValidationParameters parameters = new TokenValidationParameters();
        parameters.RequireExpirationTime = false;
        parameters.ValidateAudience = false;
        parameters.ValidateIssuer = false;
        parameters.ValidateLifetime = false;
    }
}

// Solution with the fix applied.
class SolutionFixForExampleAbove
{
    public void SolutionMethod()
    {
        TokenValidationParameters parameters = new TokenValidationParameters();
        parameters.RequireExpirationTime = true;
        parameters.ValidateAudience = true;
        parameters.ValidateIssuer = true;
        parameters.ValidateLifetime = true;
    }
}