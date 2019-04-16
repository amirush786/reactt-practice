import React from 'react';
import ContactCard from "./ContactCard"

function App(){
    return (
      <div className="Contacts">
        <ContactCard 
            name="MR. Bhola" imgUrl="https://placekitten.com/300/200"
            phone="8668896563"
            email="amirush@gmail.com"/>

        <ContactCard
              name="Auti"
              imgUrl="https://placekitten.com/400/200"
              phone="8668890798"
              email="auti@gmail.com"/>

        <ContactCard
              name="Ruchi" imgUrl="https://placekitten.com/400/300"
              phone="9404226079"
              email="ruchi@gmail.com"/>

        <ContactCard
              name="MR. Kapish" imgUrl="https://placekitten.com/300/200"
              phone="552525545"
              email="k@gmail.com"/>


          </div>
    )
}
export default App
