// OceanScope B-region comparison. Propose edits to this file on a branch.
// Each definition receives the same native-grid row used by the case figure.
// Elevations and signed differences are in source length units.
export const metrics = [
  { id: 'centre', en: 'Centre height difference', zh: '中心高度差', read: row => row.centre?.difference },
  { id: 'bias', en: 'ROI mean signed error', zh: 'ROI 平均有符号误差', read: row => row.stats.bias },
  { id: 'mae', en: 'ROI mean absolute error', zh: 'ROI 平均绝对误差', read: row => row.stats.mae },
  { id: 'maximum', en: 'ROI maximum absolute error', zh: 'ROI 最大绝对误差', read: row => row.stats.maximum?.absolute },
  { id: 'rmse', en: 'ROI height RMSE', zh: 'ROI 高度均方根误差', read: row => row.stats.rmse },
];
