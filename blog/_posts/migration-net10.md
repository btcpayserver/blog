---
title: Migrating from .NET 8 to .NET 10
author: NicolasDorier
date: 2026-02-21
category: guides
tags:
  - "migration"
  - "dotnet"
  - "plugins"
coverImage: /images/migration-dotnet10.png
permalink: /migrating-to-net10
---

# Migrating from .NET 8 to .NET 10

This blog post is mainly intended for plugin developers and anyone building BTCPay Server from source. Normal users or merchants will not be impacted and can safely ignore this post.

As we focus on delivering a stable experience to our users, we generally avoid major migrations and dependency updates unless needed to address vulnerabilities or when a dependency reaches end of life (EOL).

This is soon to be the case for .NET 8.0 (LTS), which reaches end of support in November 2026 ([support policy](https://dotnet.microsoft.com/en-us/platform/support/policy)).

If you are building BTCPay Server from source, you will now need to use [the .NET 10 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/10.0).

## Plugin developers

You will need to update your plugin's .csproj like this:

```diff
- <TargetFramework>net8.0</TargetFramework>
+ <TargetFramework>net10.0</TargetFramework>
```

Check whether you are referencing Microsoft packages and bump their versions. For example:

```diff
- <PackageReference Include="Microsoft.EntityFrameworkCore" Version="8.0.11" />
- <PackageReference Include="Npgsql.EntityFrameworkCore.PostgreSQL" Version="8.0.11" />
+ <PackageReference Include="Microsoft.EntityFrameworkCore" Version="10.0.4" />
+ <PackageReference Include="Npgsql.EntityFrameworkCore.PostgreSQL" Version="10.0.0" />
```

Then, when you are running BTCPay Server for plugin development, you usually have a file in `submodules/btcpayserver/BTCPayServer/appsettings.dev.json` which indicates the location of the plugin to load when you debug.

Do not forget to update the path to net10.0, as indicated below.

```diff
{
-  "DEBUG_PLUGINS": "../../BTCPayServer.Plugins.Boltcards/bin/Debug/net8.0/BTCPayServer.Plugins.Boltcards.dll"
+  "DEBUG_PLUGINS": "../../BTCPayServer.Plugins.Boltcards/bin/Debug/net10.0/BTCPayServer.Plugins.Boltcards.dll"
}
```

After the migration, we experienced problems with Hot Reload on Rider. A simple restart of Rider fixed the issue.

In your `XXXPlugin.cs` file, bump the minimum required BTCPay Server version.

```diff
- new() { Identifier = nameof(BTCPayServer), Condition = ">=2.1.0" }
+ new() { Identifier = nameof(BTCPayServer), Condition = ">=2.3.6" }
```

Do not forget to pull the latest version of BTCPay Server in your submodule. (typically `submodules/btcpayserver`)

If your plugin repo uses `global.json`, update the SDK version to 10 as well.

While no other change should be required, if you need official Microsoft migration guidance, see the [.NET 10 breaking changes](https://learn.microsoft.com/en-us/dotnet/core/compatibility/10.0).

## FAQ

### Hot reload doesn't work

If you are developing a plugin, make sure that `appsettings.dev.json` is pointing to the right path.

Rebuild and restart your IDE. That resolved it for us.

### Can a plugin on .NET 8.0 run on a BTCPay Server instance on .NET 10.0?

Yes. Plugins targeting .NET 8.0 should continue to work on a BTCPay Server instance running .NET 10.0.

As a result, plugin developers don't have to update their plugin just to bump to .NET 10.0.

### Can a plugin on .NET 10.0 run on a BTCPay Server instance on .NET 8.0?

No. This is why it is important to change the minimum BTCPay Server version requirement as shown above, to avoid users running older versions of BTCPay Server from downloading an incompatible version of your plugin.

### What is new in dotnet 10.0?

We invite you to read the [blog post announcement of .NET 9.0](https://devblogs.microsoft.com/dotnet/announcing-dotnet-9/) and [of .NET 10.0](https://devblogs.microsoft.com/dotnet/announcing-dotnet-10/) for more details.

Our personal experience is that running BTCPay Server in Debug is now starting significantly faster.
