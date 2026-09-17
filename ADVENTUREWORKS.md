# AdventureWorks Interactive Dashboard

A single navigation hub for ten pages of the AdventureWorks Power BI report, covering sales, products, markets and customer RFM analysis.

## Access

The report currently uses secure Power BI embedding. Visitors must sign in with a Microsoft account that has access to the report and satisfies Power BI licensing requirements. Hosting this website does not grant access to the report. No underlying sales or customer data is included in this repository.

The original report provides slicers, tooltips and chart interactions. The sidebar opens each report page; changing pages reloads the embedded report, so temporary selections may reset. Open report provides a direct Power BI fallback.

## Report pages

1. Sales Summary
2. Sales Trend
3. Sales Heatmap
4. Growth Drivers
5. Product Portfolio
6. Purchase Affinity
7. Cost & Profitability
8. Market Overview
9. Country Correlation
10. Customer RFM (source page: Page 1)

## Files

- `index.html`: responsive dashboard shell and navigation.
- `report-config.js`: report access mode, embed URL and source page IDs.

The embedded report is maintained in Power BI; this project does not recreate or validate its measures. Saved changes in Power BI are reflected by the embedded report according to Power BI behaviour.
