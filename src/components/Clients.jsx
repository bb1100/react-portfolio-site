import React from "react";
import { Fade } from "react-awesome-reveal";
import { yourData } from "../yourdata";

const Clients = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="clients-container">
          <Fade>
            <h1></h1>
          </Fade>
          <div className="clients-grid">
            {yourData.clients.map((client, index) => (
              <div className="client" key={index}>
                <Fade>
                  <img loading="lazy" src={client.img} alt="css"></img>
                  <h3>{client.title}</h3>
                  <p>{client.para} {client.url ? <a className="link" href={client.url}>view &rsaquo;</a> : null}</p>
                </Fade>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clients
