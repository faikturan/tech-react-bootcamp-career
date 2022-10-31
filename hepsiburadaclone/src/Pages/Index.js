import React from 'react';
import { Slider, SuperOffers } from "../Components/Index";

const Index = () => {
  document.title = "Hepsiburada Clone";
  return (
   <>
    <main>
      <Slider />
      <SuperOffers />
    </main>
   </>
  );
};

export default Index;