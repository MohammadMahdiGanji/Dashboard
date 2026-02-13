// import type
import type { JSX } from "react";

// import component
import AddUser from "../../components/add-user";

import { Table } from "../../components/table/index";

export default function Users(): JSX.Element {
  return (
    <div>
      <AddUser />
      <div className="bg-[#323232] mt-6 rounded-lg p-4 @3xl:text-xl italic">
        <h3 className="mb-4 font-bold text-">Show Info user:</h3>
        <Table>
          <Table.Head>
            <Table.Row>
              <Table.Title>Full Name</Table.Title>
              <Table.Title>Email</Table.Title>
              <Table.Title>Type</Table.Title>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Col>Full Name</Table.Col>
              <Table.Col>Email</Table.Col>
              <Table.Col>Type</Table.Col>
            </Table.Row>
            <Table.Row>
              <Table.Col>Full Name</Table.Col>
              <Table.Col>Email</Table.Col>
              <Table.Col>Type</Table.Col>
            </Table.Row>
            <Table.Row>
              <Table.Col>Full Name</Table.Col>
              <Table.Col>Email</Table.Col>
              <Table.Col>Type</Table.Col>
            </Table.Row>
            <Table.Row>
              <Table.Col>Full Name</Table.Col>
              <Table.Col>Email</Table.Col>
              <Table.Col>Type</Table.Col>
            </Table.Row>
            <Table.Row>
              <Table.Col>Full Name</Table.Col>
              <Table.Col>Email</Table.Col>
              <Table.Col>Type</Table.Col>
            </Table.Row><Table.Row>
              <Table.Col>Full Name</Table.Col>
              <Table.Col>Email</Table.Col>
              <Table.Col>Type</Table.Col>
            </Table.Row>
            <Table.Row>
              <Table.Col>Full Name</Table.Col>
              <Table.Col>Email</Table.Col>
              <Table.Col>Type</Table.Col>
            </Table.Row>
            <Table.Row>
              <Table.Col>Full Name</Table.Col>
              <Table.Col>Email</Table.Col>
              <Table.Col>Type</Table.Col>
            </Table.Row>
            <Table.Row>
              <Table.Col>Full Name</Table.Col>
              <Table.Col>Email</Table.Col>
              <Table.Col>Type</Table.Col>
            </Table.Row><Table.Row>
              <Table.Col>Full Name</Table.Col>
              <Table.Col>Email</Table.Col>
              <Table.Col>Type</Table.Col>
            </Table.Row>
            <Table.Row>
              <Table.Col>Full Name</Table.Col>
              <Table.Col>Email</Table.Col>
              <Table.Col>Type</Table.Col>
            </Table.Row>

            <Table.Row>
              <Table.Col>Full Name</Table.Col>
              <Table.Col>Email</Table.Col>
              <Table.Col>Type</Table.Col>
            </Table.Row>

            <Table.Row>
              <Table.Col>Full Name</Table.Col>
              <Table.Col>Email</Table.Col>
              <Table.Col>Type</Table.Col>
            </Table.Row>
            <Table.Row>
              <Table.Col>Full Name</Table.Col>
              <Table.Col>Email</Table.Col>
              <Table.Col>Type</Table.Col>
            </Table.Row>
            <Table.Row>
              <Table.Col>Full Name</Table.Col>
              <Table.Col>Email</Table.Col>
              <Table.Col>Type</Table.Col>
            </Table.Row>


            <Table.Row>
              <Table.Col>Full Name</Table.Col>
              <Table.Col>Email</Table.Col>
              <Table.Col>Type</Table.Col>
            </Table.Row>
            <Table.Row>
              <Table.Col>Full Name</Table.Col>
              <Table.Col>Email</Table.Col>
              <Table.Col>Type</Table.Col>
            </Table.Row>
            <Table.Row>
              <Table.Col>Full Name</Table.Col>
              <Table.Col>Email</Table.Col>
              <Table.Col>Type</Table.Col>
            </Table.Row>
            <Table.Row>
              <Table.Col>Full Name</Table.Col>
              <Table.Col>Email</Table.Col>
              <Table.Col>Type</Table.Col>
            </Table.Row>
            <Table.Row>
              <Table.Col>Full Name</Table.Col>
              <Table.Col>Email</Table.Col>
              <Table.Col>Type</Table.Col>
            </Table.Row>
            
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
