# Corelai SECTOR — Development Ports Convention

This document defines the port usage conventions for Corelai SECTOR development environments.

Port ranges are reserved by functional class to ensure clarity, predictability, and future scalability.

---

## Port Ranges Allocation

| Port Range | Purpose | Notes |
|------------|---------|-------|
| 3000-3999  | Frontend / UI Services | All Vite / Next.js / Blazor / Angular / Vue Dev Servers |
| 4000-4999  | Backend / API Services | REST, gRPC, GraphQL, Internal APIs |
| 5000-5999  | Infrastructure / Admin Tools | Reverse Proxy, Admin Panel, Monitoring, Internal Tools |
| 6000+      | Experimental / DevOps / Testing | Sandbox environments, Mock Servers, Edge Cases |

---

## Assigned Ports — Corelai Prime Project

### Frontend / UI Services

| Service | Technology | Port |
|---------|-------------|------|
| Corelai Prime UI | React (Vite) | 3000 |
| EDEN UI | Vue.js | 3001 |
| PYRA UI | Angular | 3002 |
| NEBULA UI | Next.js | 3003 |
| AXIS UI | Blazor | 3004 |
| EXOSKULL UI | TBD (Terminal / Mixed UI) | 3005 |

---

### Backend / API Services

| Service | Purpose | Port |
|---------|---------|------|
| Corelai API Gateway | Main API Proxy / Routing | 4000 |
| EDEN API | Terraformation API | 4001 |
| PYRA API | Industrial / Energy API | 4002 |
| NEBULA API | Research / Tech API | 4003 |
| AXIS API | Trade / Market API | 4004 |
| EXOSKULL API | Security / Operations API | 4005 |

---

### Infrastructure / Admin Tools

| Tool | Purpose | Port |
|------|---------|------|
| Traefik / NGINX Dev Reverse Proxy | Routing Dev Environment | 5000 |
| Portainer / Infra Admin Tools | Docker / Infra Management | 5001 |
| Internal Monitoring | Metrics / Logs | 5002 |

---

## Notes

- Ports should not overlap unless specifically documented.
- Future systems will inherit the same convention.
- Production ports will be mapped and managed via reverse proxy and infrastructure configuration (see `infra/`).

---

Glory to the Build.  
Strength to the Lore.  
Control to Corelai SECTOR.