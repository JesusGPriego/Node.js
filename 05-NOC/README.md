## Description

NOC project - Network Operation center

## Topics 

- Clean arch introduction
- DI
- JSON-server
- Use cases
- CRON tasks 

### Scripts


```
  "dev": "tsnd --respawn --clear src/app.ts",
  "build": "rimraf ./dist && tsc",
  "start": "npm run build && node dist/app.js"
```