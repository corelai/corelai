# 📜 SqlHydra Configuration Guide

This guide explains how to configure **SqlHydra** for the **PrimeBff** project.

---

## 🛠️ 1. Install SqlHydra CLI

If you haven't installed the local SqlHydra CLI yet:

```bash

dotnet new tool-manifest
dotnet tool install SqlHydra.Cli

```

This makes `sqlhydra` available locally for the project without installing it globally.

---

## 🧩 2. Create the Configuration File

Check the toml configuration under the project:  
`sqlhydra-npsql.toml`

---

## 🏗️ 3. Generate the Code

Once configured, generate the F# types launching from local/scripts:

```bash
hydra-prime-bff-db.sh
```

This command reads the `sqlhydra-npgsql.toml` file and generates the F# code at the path specified by `output_file`.

---

## 📎 4. Required NuGet Packages

Make sure to install the following NuGet packages in the project:

```bash

dotnet add package Npgsql
dotnet add package SqlHydra.Query

```

These libraries provide PostgreSQL connectivity and typesafe query capabilities.

---


