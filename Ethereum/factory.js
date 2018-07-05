import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x9DA967E1E6D592DAb16F67D349078C156de4ebed'
);

export default instance;
