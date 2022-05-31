import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Alert from "./components/Alert";

function App() {
  const [isOpenAlert, setOpenAlert] = useState(false);

  const handleOpen = () => setOpenAlert(true);

  const handleClose = () => setOpenAlert(false);
  return (
    <div>
      <div>
        <Button color="primary">Primary default button</Button>
        <Button color="primary" size="large">
          Primary large button
        </Button>
        <Button color="primary" size="medium">
          Primary medium button
        </Button>
        <Button color="primary" size="small">
          Primary small button
        </Button>
        <Button color="primary" disabled>
          Primary default disabled button
        </Button>
      </div>
      <div>
        <Button color="secondary">Secondary default button</Button>
        <Button color="secondary" size="large">
          Secondary large button
        </Button>
        <Button color="secondary" size="medium">
          Secondary medium button
        </Button>
        <Button color="secondary" size="small">
          Secondary small button
        </Button>
        <Button color="secondary" disabled>
          Secondary default disabled button
        </Button>
      </div>
      <>
        <button onClick={handleOpen}>Open alert</button>
        {isOpenAlert && (
          <Alert color="error" onClose={handleClose}>
            Join Tripma today and save up to 20% on your flight using code
            TRAVEL at checkout. Promotion valid for new users only.
          </Alert>
        )}
      </>
    </div>
  );
}

export default App;
