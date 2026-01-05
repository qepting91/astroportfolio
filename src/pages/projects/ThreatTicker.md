---
layout: ../../layouts/MarkdownWorksLayout.astro
title: 'RansomStat CTI v2.0'
description: 'Real-time ransomware threat intelligence dashboard aggregating leak sites, dark web forums, and offensive dorks for proactive threat hunting.'
image:
    url: '/ransomstat.webp'
    alt: 'RansomStat CTI v2.0'
platform: Web
stack: Python, Streamlit, DuckDB, MotherDuck
website: https://threat-ticker.streamlit.app/
github: https://github.com/qepting91/streamlitransomware
---

RansomStat CTI provides analysts, researchers, and defenders with a real-time, consolidated view of the ransomware landscape. By aggregating high-fidelity data from leak sites, dark web forums, and offensive dorks, it enables proactive threat hunting and infrastructure monitoring.

## Key Capabilities

**Threat Ticker**: Real-time feed of confirmed victims from the RansomLook API.

**Dork Generator**: Automated offensive search queries from the Google Hacking Database to discover exposed assets.

**Intelligence Graph**: Visual correlation between Threat Groups and their Dark Web infrastructure (Tor sites, mirrors, chat panels).

**Wiki**: Curated knowledge base of ransomware families and TTPs.

**Voice Logs**: In-session voice note recording for analyst documentation with automatic privacy-focused clearing.

**Data Sync**: Configurable lookback window with live MotherDuck connection status.

## Architecture

- **Frontend**: Streamlit 1.52 (Python 3.13)
- **Database**: MotherDuck (Serverless DuckDB) / Local DuckDB
- **Ingestion**: Custom AsyncIO Crawler (etl_engine.py)
- **Data Sources**: RansomLook, DeepDarkCTI, Exploit-DB

## Disclaimer

This tool is intended for educational and defensive research purposes only.
