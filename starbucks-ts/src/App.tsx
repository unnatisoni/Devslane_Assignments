import React from 'react';
import logo from './logo.svg';
import './App.css';
import HeroSection from './HeroSection';
import Header from './Header';
import Nav from "./Nav"
import Steps from './Steps';
import TopHeading from './TopHeading';
import COFFEE from "./coffee.webp";
import Form from './Form';
import ConfirmationDialog from './ConfirmationDialog';
import { useState } from 'react';
import { Popover, Transition} from '@headlessui/react';
import Tabs from './Tabs';
import Tab from './Tab';

function App() {
const [rederCount, setRenderCount ] = useState(0);

  return (
    <div className="font-sans">
      <Nav />
       <Header />
      <HeroSection />
      
      <div className="">
        <TopHeading
          align="text-center"
          getHead="Getting started is easy"
          getPara="Earn Stars and get rewarded in a few easy steps."
        ></TopHeading>
        <div className="flex flex-col md:flex-row lg:flex-row">
        <Steps
          size="h-12"
          imglink="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-1@2x.jpg"
          headingText="Download the Starbucks® app"
          paraText="To get started, join now. You can also join in the app to get access to the full range of Starbucks® Rewards benefits."
        ></Steps>
        <Steps
          size ="h-12"
          imglink="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-2@2x.jpg"
          headingText="Order and pay how you’d like"
          paraText="Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. "
        ></Steps>
        <Steps
          size="h-12"
          imglink="https://www.starbucks.com/weblx/images/rewards/getting-started/getting-started-3@2x.jpg"
          headingText="Earn Stars, get Rewards"
          paraText="As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!"
        ></Steps>
        </div>
      </div>
   
      <Popover className="relative">
      <Popover.Button className="w-24 bg-green rounded-lg text-white p-2">Delete</Popover.Button>

      <Popover.Panel className="absolute z-10">
        <div className="">
        <ConfirmationDialog title="Are You Sure ?" description="Do you really want to delete this records? This process cannot be undone " cancelText="Cancel" okText="Delete"></ConfirmationDialog>

        </div>
      </Popover.Panel>
    </Popover>
  


   

      <div className="bg-primary-200  text-center my-20 px-6.4">
        <img src={COFFEE} />
        <TopHeading
          align = "text-center"
          getHead="Customize your drink"
          getPara="Make your drink just right with an extra espresso shot, dairy substitute or a dash of your favorite syrup."
        />
      </div>

      <div className="mb-72">
        <TopHeading
          align="text-center"
          getHead="Endless Extras"
          getPara="Joining Starbucks® Rewards means unlocking access to exclusive benefits. Say hello to easy ordering, tasty Rewards and—yes, free coffee."
        ></TopHeading>
        <Steps
          size="h-28"
          imglink="https://www.starbucks.com/weblx/images/rewards/benefits/1-fun-freebies.jpg"
          headingText="Fun freebies"
          paraText="Not only can you earn free coffee, look forward to a birthday treat plus coffee and tea refills."
        />
        <a className="text-primary-300 ">
          Learn More
        </a>
        <Steps
          size="h-28"
          imglink="https://www.starbucks.com/weblx/images/rewards/benefits/2-order-and-pay-ahead.jpg"
          headingText="Order & pay ahead"
          paraText="Enjoy the convenience of in-store, curbside or drive-thru pickup at select stores."
        />
        <a className="text-primary-300">
          Learn More
        </a>
        <Steps
          size="h-28"
          imglink="https://www.starbucks.com/weblx/images/rewards/benefits/3-get-to-free-faster.jpg"
          headingText="Get to free faster"
          paraText="Earn Stars even quicker with Bonus Star challenges, Double Star Days and exciting games."
        />
        <a className="text-primary-300">
          Learn More
        </a>
      </div>

      <div className="bg-pink pt-16 px-3 py-7 mb-72">
        <TopHeading
          align="text-center"
          getHead="Cash or card, you earn Stars"
          getPara="No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards."
        />
        <TopHeading
          align="text-left"
          getHead= "1 per dollar"
          getPara="Pay as you go"
        />
        <Steps
          size = "h-28"
          imglink="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1A.png"
          headingText="Scan and pay separately"
          paraText="Use cash or credit/debit card at the register."
        />
        <Steps
        size = "h-28"
          imglink="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/1B.png"
          headingText="Save payment in the app"
          paraText="Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step."
        />

       

        <TopHeading
          align = "text-left"
          getHead="2 per dollar"
          getPara="Add funds in the app"
        />
        <Steps
          size= "h-28"
          imglink="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2A.png"
          headingText="Preload"
          paraText="To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app."
        />

        <Steps
        size = "h-28"
          imglink="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/2B.png"
          headingText="Register your gift card"
          paraText="Then use it to pay through the app. You can even consolidate balances from multiple cards in one place."
        />

        <TopHeading
         align = "text-left"
          getHead="Up to 3 per dollar"
          getPara="With Starbucks® Rewards Visa® Card"
        />
        <Steps
          size = "h-28"
          imglink="https://www.starbucks.com/weblx/images/rewards/ways-to-pay/3A.png"
          headingText="Earn Stars even faster"
          paraText="Earn Stars on all purchases you make with our 
        credit card
        opens in new window in and outside of Starbucks. Earn 1 Star per $1 when you digitally preload your Starbucks Card with your Starbucks® Rewards Visa® Card, and earn 2 Stars per $1 when you pay with that preloaded Starbucks Card."
        />
      </div>

      <div className="px-4 mb-72">
      <Form />
      </div>
      <div className="p-3 mb-72">
        <TopHeading
          align = "text-left"
          getHead="Questions?"
          getPara="We want to help in any way we can. You can ask your barista anytime or we’ve answered the most commonly asked questions right over here "
        ></TopHeading>
      </div>
      
      <Tabs>
        <Tab title="25 "> tab 1 content</Tab>
        <Tab title="50 ">Tab 2 content</Tab>
        <Tab title="150 ">Tab 3 content</Tab>
        <Tab title = "200 ">Tab 4 content</Tab>
        <Tab title = "400 ">Tab 5 content</Tab>
      </Tabs>
     
    


    </div>
  );
}

export default App;

const AllStateData = {
  "1_App" : [0]
}



// //  <button onClick = {() = > setRenderCount(rederCount+1)}  ></button>