import React, { useState } from "react";
import DefaultLayout from "./DefaultLayout";
import { Table, Input, Button, Space } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
function Tables() {
  var studentsData = [
    {
      firstName: "sathya",
      lastName: "reddy",
      gender: "male",
      dob: "08-07-2000",
      marks: 94,
      country: "United States",
    },
    {
      firstName: "john",
      lastName: "bas",
      gender: "male",
      dob: "01-07-2000",
      marks: 75,
      country: "United States",
    },
    {
      firstName: "dany",
      lastName: "malp",
      gender: "female",
      dob: "05-11-1999",
      marks: 72,
      country: "India",
    },
    {
      firstName: "beemla",
      lastName: "nayak",
      gender: "male",
      dob: "05-14-1999",
      marks: 62,
      country: "India",
    },
    {
      firstName: "sneha",
      lastName: "latha",
      gender: "female",
      dob: "11-10-2000",
      marks: 62,
      country: "India",
    },
    {
      firstName: "indra",
      lastName: "sena",
      gender: "male",
      dob: "05-10-1999",
      marks: 88,
      country: "Australia",
    },

    {
      firstName: "samara",
      lastName: "simha",
      gender: "male",
      dob: "05-10-2000",
      marks: 88,
      country: "Australia",
    },
  ];

  var studentsColumns = [
    {
      title: "FirstName",
      dataIndex: "firstName",
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
    },
    {
      title: "LastName",
      dataIndex: "lastName",
      sorter: (a, b) => a.lastName.localeCompare(b.lastName),
    },
    {
      title: "Gender",
      dataIndex: "gender",
      filters: [
        {
          text: "male",
          value: "male",
        },
        {
          text: "female",
          value: "female",
        },
      ],
      onFilter: (value, record) => record.gender === value,
    },
    {
      title: "Date Of Birth",
      dataIndex: "dob",
    },
    {
      title: "Marks",
      dataIndex: "marks",
      sorter: (a, b) => a.marks - b.marks,
    },
    {
      title: "Country",
      dataIndex: "country",
    },
  ];

  const [tableData, setTableData] = useState(studentsData);

  function searchTable(searchKey) {
    var tempData = studentsData;

    var filteredData = tempData.filter((data) =>
      JSON.stringify(data).toLowerCase().includes(searchKey.toLowerCase())
    );

    setTableData(filteredData);
  }
  return (
    <DefaultLayout>
      <div className='register-form'>
      <h3>AntD Table</h3>
      <Input
        onKeyUp={(e) => {
          searchTable(e.target.value);
        }}
        className="mb-3"
        style={{ width: 350 }}
        placeholder="search students"
      />
      <Table dataSource={tableData} columns={studentsColumns} bordered/>
      </div>
     
    </DefaultLayout>
  );
}

export default Tables;
