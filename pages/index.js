import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../Ethereum/factory';



class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return { campaigns };
  }


renderCampaigns(){
  const items = this.props.campaigns.map(address => {
    return {
      header: address,
      description: <a> View Campaign </a>,
      fluid: true
  };
});

return <Card.Group items={items} />;
}


render() {
  return (

      <div>

       <link rel="stylesheet"
       href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css"></link>

      />
        <h3>Open Campaigns</h3>
          <a>
            <Button
              floated="right"
              content="Create Campaign"
              icon="add circle"
              primary
            />
          </a>


        {this.renderCampaigns()}
      </div>

  );
}
}

export default CampaignIndex;
