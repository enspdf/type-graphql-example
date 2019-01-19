import { testConn } from "../../../test-utils/testConn";
import { Connection } from "typeorm";
import { gCall } from "../../../test-utils/gCall";

let conn: Connection;

beforeAll(async () => {
  conn = await testConn();
});

afterAll(async () => {
  await conn.close();
});

const registerMutation = `
    mutarion Register($data: RegisterInput!) {
        register(
            data: $data
        ) {
            id
            firstName
            lastName
            email
            name
        }
    }
`;

describe("Registe", () => {
  it("Create User", async () => {
    console.log(
      await gCall({
        source: registerMutation,
        variableValues: {
          data: {
            firstName: "Bob",
            lastName: "Bob2",
            email: "bob@bob.com",
            password: "bob@bob.com"
          }
        }
      })
    );
  });
});
