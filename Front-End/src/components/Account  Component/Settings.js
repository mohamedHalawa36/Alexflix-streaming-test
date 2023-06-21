import { Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./account.css";
import ChangePassword from "../../pages/AccountPages/ChangePassword";
function Settings() {
  return (
    <div id="account" className="w-75 mx-auto text-capitalize p-5 px-0">
      <Accordion className="text-light">
        <Accordion.Item eventKey="0">
          <Accordion.Header className=" fw-bold">
            change password
          </Accordion.Header>
          <Accordion.Body className="p-0 text-capitalize">
            {ChangePassword()}
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className=" fw-bold text-capitalize">
            deactivate account
          </Accordion.Header>
          <Accordion.Body className="p-3">
            <Button className="bg-danger text-capitalize">deactivate account</Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Settings;
