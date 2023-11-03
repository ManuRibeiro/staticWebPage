import React from 'react';
import Navbar from './components/header';
import Footer from './components/footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <p>In a climate where extreme weather events are becoming more frequent and more intense, the risk of fires is expected to increase.

Portugal continues to be the European country most affected by forest fires.

84 per cent of the Portuguese forest is privately owned and the causes of forest fires are related to various factors, including:

 - Lack of forest clearance; 

 - The lack of buffer zones such as agricultural land; 

 - The presence of highly combustible forest species (such as eucalyptus); 

 - The lack of surveillance and lookout posts; 

 - Failure to compartmentalise wooded areas; 

 - The lack of a fuel management zone; 

 - Steep terrain and others.



In the context of outlining a strategy to combat, mitigate and prevent this problem, the aim is to develop an application that makes it easier to monitor the current state of the forests, predict (based on calculations and the data collected) which areas are most at risk of fire and suggest the implementation of practices to the respective owners in order to avoid the enormous impacts that this entails.</p>
      <Footer/>
    </div>
  );
}

export default App;
