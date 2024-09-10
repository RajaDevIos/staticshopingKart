import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardSubtitle, Button, CardTitle, CardBody } from 'reactstrap';

function App() {
  const cardDetails = [
    {
      title: 'FREE',
      price: '$0/month',
      feature: [
        'Single User',
        '50GB Storage',
        'Unlimited Public Projects',
        'Community Access',
      ],
      unavailable: [
        'Unlimited Private Projects',
        'Dedicated Phone Support',
        'Free Subdomain',
        'Monthly Status Reports',
      ],
    },
    {
      title: 'PLUS',
      price: '$9/month',
      feature: [
        '5 Users',
        '50GB Storage',
        'Unlimited Public Projects',
        'Community Access',
        'Dedicated Phone Support',
        'Free Subdomain',
      ],
      unavailable: ['Monthly Status Reports'],
    },
    {
      title: 'PRO',
      price: '$49/month',
      feature: [
        'Unlimited Users',
        '50GB Storage',
        'Unlimited Public Projects',
        'Community Access',
        'Dedicated Phone Support',
        'Free Subdomain',
        'Monthly Status Reports',
      ],
      unavailable: [],
    },
  ];

  return (
    <div className='back-container'>
    <div className='container '>

    {cardDetails.map((card,index)=>(
      <Card key={index}>
        <CardBody className='card-design'>
          <CardTitle tag="h5" className='title' >{card.title}</CardTitle>
          <CardSubtitle className='sub-title'>{card.price}</CardSubtitle>
          <ul>
            {card.feature.map((feature, index)=>(
              <li key={index}>{feature}</li> ))}
          </ul>
          <ul className='strick'>
            {card.unavailable.map((unavailable,index)=>(
              <li key={index}>{unavailable}</li>  ))}
          </ul>
          
        </CardBody>
        <Button className='btn' color="primary" >BUTTON</Button>
      </Card>
    ))}
    </div>
    </div>
  
  );
}

export default App;
