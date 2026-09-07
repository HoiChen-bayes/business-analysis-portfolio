# Hoi Chun Chen | Business Analysis Portfolio

**London, UK · Business analysis · Process improvement · Business intelligence**

I turn business questions into requirements, analytical checks and reporting that supports decisions. This guide brings together my work on furniture operations and earnings-event research, with links to the contribution, deliverables and results behind each case.

[Notion portfolio](https://superficial-carob-4a3.notion.site/Hoi-Chun-Chen-Business-Analysis-Portfolio-3d419219729a800ba58ede758a0f0c50) · [LinkedIn](https://www.linkedin.com/in/hoichun-chen)

## Contents

- [Business Analysis](#business-analysis)
- [Power BI](#power-bi)
- [Tableau](#tableau)
- [Python and Excel](#python-and-excel)
- [SQL](#sql)
- [About and evidence](#about-and-evidence)

## Business Analysis

| Project | Skills and tools | My work and published outputs | Results |
| --- | --- | --- | --- |
| [Preventing invalid furniture orders](02-furniture-ordering.md) | Requirements elicitation, process mapping, business rules; Excel, Confluence, Jira | Gathered manufacturing constraints and handed requirements to the technical team. Published: reconstructed workflow, rule table, 3 user stories and 10 designed test scenarios. [Supporting examples](02-furniture-evidence.md). | In the original work, non-manufacturable orders fell from about 45 per month to fewer than 5 after implementation. The public examples use synthetic products and rules. |
| [Making earnings analysis traceable](01-earnings-workflow.md) | Requirements, data quality, exception handling, traceability; Python, Excel | Defined timing and eligibility rules and checked calculations. Published: workflow, selected requirements, acceptance criteria and validation examples. [Supporting examples](01-earnings-evidence.md). | 193 collected events; 192 eligible; 13 review flags. The retained report records zero maximum Excel/Python reconciliation difference. Operating-model design is simulated. |

## Power BI

| Project | Tools and techniques | Business contribution and result | Available to review |
| --- | --- | --- | --- |
| [Furniture bundle conversion analysis](03-bundle-funnel-power-bi.md) | SQL, parameterised reporting, Power Query, Power BI, period and product-line selection | Analysed about 35 bundle combinations over a 30-day conversion window. The analysis supported a bundle-discount change; full-set conversion subsequently rose from about 19% to 26%. | Written experience case study, reporting flow and metric definitions. The original dashboard and PBIX are not published here. |

**Certification:** Microsoft Certified: Power BI Data Analyst Associate (PL-300), 2026.

## Tableau

Tableau is part of my analytical toolkit. A public Tableau workbook has not yet been added to this portfolio; there is currently no live dashboard link in this section.

## Python and Excel

| Project | Area of analysis | Work and validation | Available to review |
| --- | --- | --- | --- |
| [Earnings-event research](01-earnings-workflow.md) | Date alignment, return calculation, missing-data handling and reconciliation | Applied explicit before-open/after-close rules across 25 companies. Retained extreme observations for review; 3 of 3 independent spot checks were within one percentage point. | [Rules and validation examples](01-earnings-evidence.md). This is the analytical component of the earnings case above, not a separate project. |

## SQL

| Project | Application | Available to review |
| --- | --- | --- |
| [Furniture bundle conversion analysis](03-bundle-funnel-power-bi.md) | Segmented complete-set and individually combined purchases; turned repeated queries into a reusable reporting view connected through Power Query. | Written method and metric definitions. Employer queries and data are not published. |

## About and evidence

MSc Business Analytics, Distinction — Bayes Business School. My background combines research, business analytics and part-time custom-furniture operations.

- **Historical work:** employment and research results are described in their original context. Observed changes are not presented as proof of sole causation.
- **Public artefacts:** the earnings examples explain retained research controls; the furniture rules and test scenarios are newly reconstructed with synthetic values.
- **Publication status:** this edition contains case studies, tables and process diagrams. Native Power BI/Tableau dashboards, SQL files and the original research workbook are not included. Designed tests are distinguished from executed checks.

Portfolio edition: September 2026. Project-directory structure inspired by [Katie Huang's Portfolio Guide](https://github.com/katiehuangx/Portfolio-Guide/blob/main/README.md); case content and experience are my own.
