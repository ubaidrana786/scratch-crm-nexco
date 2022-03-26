import React, { useState } from "react";
import "./AdminTable.css";
import Model from "./Model";
import {
  Row,
  Col,
  Card,
  CardBody,
  Modal,
  Container,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";

export const AdminTable = () => {
  const [showModel, setShowModel] = useState(false);

  return (
    <div>
      <table class="table table-striped mt-5">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Customer</th>
            <th scope="col">Date</th>
            <th scope="col">Citizenship</th>
            <th scope="col">Email</th>
            <th scope="col">Payment Status</th>
            <th scope="col">Fulfilment Status</th>
            <th scope="col">Document</th>
            {/* <th scope="col">Action</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Ubaid</td>
            <td>14-03-2022</td>
            <td>Pakistan</td>
            <td>ubaidrana755@gmail.com</td>
            <td>Pending</td>
            <td>
              <span className=" fulfilStatus">
                <i class=" fas fa-circle-notch"></i> Processing
              </span>
            </td>

            <td>Not Required</td>
            {/* <td ><Model/></td> */}
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Obaid Shah</td>
            <td>14-03-2022</td>
            <td>Pakistan</td>
            <td>Obaid@gmail.com</td>
            <td>
              <span className=" fulfilStatus">
                <i class=" fas fa-circle-notch"></i> Pending
              </span>
            </td>
            <td>
              <span className=" failedStatus">
                <i class=" fas fa-circle-notch"></i> Failed
              </span>
            </td>
            <td>Not Required</td>
            {/* <td ><Model/></td> */}
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Ali Ahmad</td>
            <td>14-03-2022</td>
            <td>Pakistan</td>
            <td>ali@gmail.com</td>
            <td>
              <span className=" successStatus">
                <i class=" fas fa-circle-notch"></i> Complete
              </span>
            </td>
            <td>
              <span className=" successStatus">
                <i class=" fas fa-circle-notch"></i> Success
              </span>
            </td>
            <td>Not Required</td>
            {/* <td ><Model/></td> */}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
