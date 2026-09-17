window.ADVENTUREWORKS_CONFIG = {
  mode: 'private',
  embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=bd9efc55-801f-4164-8a90-043f83788085&autoAuth=true',
  pages: [
    ['5d99d204450b8636a836','Sales Summary','01 Sales Summary','Sales','Explore sales, volume and profitability across the business.'],
    ['f4d36ac8d0200733933e','Sales Trend','01 Sales Trend','Sales','Examine sales performance over time and compare reporting periods.'],
    ['637daa6303572b254940','Sales Heatmap','01 Sales Heatmap','Sales','Explore daily activity through heatmaps and calendar views.'],
    ['bd72f1f9657dccb60cbc','Growth Drivers','01 Sales Driver','Sales','Compare sales performance across product and channel dimensions.'],
    ['872c84f60285e74399b0','Product Portfolio','02 Product Portfolio','Products','Explore product contribution and portfolio concentration.'],
    ['4660de31d50edc551ad7','Purchase Affinity','02 Product Correlation','Products','Compare purchase probabilities and identify product associations.'],
    ['955ab78909c5021150e7','Cost & Profitability','02 Product Cost','Products','Compare unit costs, selling prices and product profitability.'],
    ['f203324900709095d7a9','Market Overview','03 Market Overview','Markets','Explore geographic sales distribution and market trends.'],
    ['e0cc0e441c02dab07b4a','Country Correlation','Country Correlation','Markets','Explore the relationship between sales and profitability by location.'],
    ['8aa30b35c11e4247c418','Customer RFM','Page 1','Customers','Explore customer recency, purchase frequency and monetary value.']
  ].map(([id,title,sourceName,group,description])=>({id,title,sourceName,group,description,sourceUrl:'https://app.powerbi.com/groups/me/reports/bd9efc55-801f-4164-8a90-043f83788085/'+id+'?language=en-US&experience=power-bi'}))
};
