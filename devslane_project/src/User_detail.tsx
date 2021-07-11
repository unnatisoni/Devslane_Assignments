import React, {
  useEffect,
  useState,
} from "react";
import axios from "axios";

interface Props {
  page: number;
  title: string;
}
const User_detail: React.FC<Props> = ({
  page,
  title,
}) => {
  const [users, setUsers] = useState<any>([]);
  console.log(
    "UserList rendering with page : " +
      page +
      " and title : " +
      title
  );

  useEffect(() => {
    console.log("before trigger");
    axios
      .get(
        "https://randomuser.me/api/?inc=id,name,gender,email&page=" +
          page +
          "&results=20"
      )
      .then((response) => {
        console.log("After response arrival");
        console.log(response.data.results);
        setUsers(response.data.results);
      });
    console.log("after request trigger");
  }, [page]);

  console.log("After effect ");

  return (
    <div className="pt-12">
      <div className="pb-8 text-3xl font-bold text-center">
        {" "}
        {title}
      </div>
      <table className="w-full border border-black border-collapse">
        <tr className="border border-black p-4">
          <th className="border-black border p-4">
            Firstname
          </th>
          <th className="border border-black p-4">
            Lastname
          </th>
          <th className="border border-black p-4">
            E-mail
          </th>
          <th className="border border-black p-4">
            Gender
          </th>
        </tr>

        {users.map((u: any) => (
          <tr className="border border-black p-4">
            <td className="border border-black p-4">
              {u.name.first}{" "}
            </td>
            <td className="border border-black p-4">
              {u.name.last}
            </td>
            <td className="border border-black p-4">
              {u.email}
            </td>
            <td className="border border-black p-4">
              {u.gender}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

User_detail.defaultProps = {};

export default User_detail;
