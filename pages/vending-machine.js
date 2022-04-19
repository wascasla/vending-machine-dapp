import Head from "next/head";
import "bulma/css/bulma.css";
import styles from "../styles/VendingMachine.module.css";

const VendingMachine = () => {
  return (
    <div>
      <Head>
        <title>Vending VendingMachine App</title>
        <meta name="description" content="A blockchain vending app" />
      </Head>
      <navbar className="navbar">
          <div className="container">
            <div className="navbar-brand">
                <h1>vending-machine</h1>
            </div>
            <div className="navbar-end">
                <button className="button is-primary">Connect wallet</button>
            </div>
          </div>
      </navbar>
    </div>
  );
};

export default VendingMachine;
