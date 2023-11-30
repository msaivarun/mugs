
import React, { useState, useEffect } from 'react';
import Header from './Header';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState('id');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [filteredData, setFilteredData] = useState([]);
  // const [totalPages, setTotalPages] = useState(0);
  // Dummy data
  const dummyData = [
    {
      "id": 1,
      "name": "John Doe",
      "age": 25,
      "contact": "9293479500",
      "address": "US",
      "course": "Computer Science",
      "email": "johndoe@example.com"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "age": 28,
      "contact": "8745632190",
      "address": "UK",
      "course": "Mathematics",
      "email": "janesmith@example.com"
    },
    {
      "id": 3,
      "name": "Peter Jones",
      "age": 30,
      "contact": "7654321089",
      "address": "Canada",
      "course": "Physics",
      "email": "peterjones@example.com"
    },
    {
      "id": 4,
      "name": "Mary Williams",
      "age": 22,
      "contact": "9876543210",
      "address": "Australia",
      "course": "Biology",
      "email": "marywilliams@example.com"
    },
    {
      "id": 5,
      "name": "David Brown",
      "age": 35,
      "contact": "6543210987",
      "address": "New Zealand",
      "course": "Chemistry",
      "email": "davidbrown@example.com"
    },
    {
      "id": 6,
      "name": "Elizabeth Wilson",
      "age": 26,
      "contact": "5432109876",
      "address": "South Africa",
      "course": "History",
      "email": "elizabethwilson@example.com"
    },
    {
      "id": 7,
      "name": "Mark Miller",
      "age": 34,
      "contact": "4321098765",
      "address": "India",
      "course": "English",
      "email": "markmiller@example.com"
    },
    {
      "id": 8,
      "name": "Susan Thomas",
      "age": 24,
      "contact": "3210987654",
      "address": "China",
      "course": "Art",
      "email": "susanthomas@example.com"
    },
    {
      "id": 9,
      "name": "James Johnson",
      "age": 31,
      "contact": "2109876543",
      "address": "Japan",
      "course": "Music",
      "email": "jamesjohnson@example.com"
    },
    {
      "id": 10,
      "name": "Barbara Walker",
      "age": 27,
      "contact": "1098765432",
      "address": "Korea",
      "course": "French",
      "email": "barbarawalker@example.com"
    },
    {
      "id": 11,
      "name": "Olivia Jones",
      "age": 24,
      "contact": "9876543210",
      "address": "Italy",
      "course": "Italian",
      "email": "oliviajones@example.com"
    },
    {
      "id": 12,
      "name": "Emma Miller",
      "age": 27,
      "contact": "8765432109",
      "address": "Spain",
      "course": "Spanish",
      "email": "emmamiller@example.com"
    },
    {
      "id": 13,
      "name": "Noah Brown",
      "age": 29,
      "contact": "7654321098",
      "address": "France",
      "course": "French",
      "email": "noahbrown@example.com"
    },
    {
      "id": 14,
      "name": "Ava Williams",
      "age": 22,
      "contact": "6543210987",
      "address": "Germany",
      "course": "German",
      "email": "avawilliams@example.com"
    },
    {
      "id": 15,
      "name": "Liam Wilson",
      "age": 34,
      "contact": "5432109876",
      "address": "Italy",
      "course": "Italian",
      "email": "liamwilson@example.com"
    },
    {
      "id": 16,
      "name": "Sophia Taylor",
      "age": 26,
      "contact": "4321098765",
      "address": "Spain",
      "course": "Spanish",
      "email": "sophiataylor@example.com"
    },
    {
      "id": 17,
      "name": "William Johnson",
      "age": 31,
      "contact": "3210987654",
      "address": "France",
      "course": "French",
      "email": "williamjohnson@example.com"
    },
    {
      "id": 18,
      "name": "Isabella Garcia",
      "age": 28,
      "contact": "2109876543",
      "address": "Germany",
      "course": "German",
      "email": "isabellagarcia@example.com"
    },
    {
      "id": 19,
      "name": "Lucas Smith",
      "age": 30,
      "contact": "1098765432",
      "address": "Italy",
      "course": "Italian",
      "email": "lucas@example.com"
    },
    {
      "id": 20,
      "name": "Mia Thompson",
      "age": 25,
      "contact": "9876543210",
      "address": "Spain",
      "course": "Spanish",
      "email": "miathompson@example.com"
    },
    {
      "id": 21,
      "name": "John Doe",
      "age": 25,
      "contact": "9293479500",
      "address": "US",
      "course": "Computer Science",
      "email": "johndoe@example.com"
    },
    {
      "id": 22,
      "name": "Jane Smith",
      "age": 32,
      "contact": "8745632190",
      "address": "UK",
      "course": "Mathematics",
      "email": "janesmith@example.com"
    },
    {
      "id": 23,
      "name": "Peter Jones",
      "age": 28,
      "contact": "7654321089",
      "address": "Canada",
      "course": "Physics",
      "email": "peterjones@example.com"
    },
    {
      "id": 24,
      "name": "Mary Williams",
      "age": 22,
      "contact": "9876543210",
      "address": "Australia",
      "course": "Biology",
      "email": "marywilliams@example.com"
    },
    {
      "id": 25,
      "name": "David Brown",
      "age": 30,
      "contact": "6543210987",
      "address": "New Zealand",
      "course": "Chemistry",
      "email": "davidbrown@example.com"
    },
    {
      "id": 26,
      "name": "Elizabeth Wilson",
      "age": 26,
      "contact": "5432109876",
      "address": "South Africa",
      "course": "History",
      "email": "elizabethwilson@example.com"
    },
    {
      "id": 27,
      "name": "Mark Miller",
      "age": 34,
      "contact": "4321098765",
      "address": "India",
      "course": "English",
      "email": "markmiller@example.com"
    },
    {
      "id": 28,
      "name": "Susan Thomas",
      "age": 24,
      "contact": "3210987654",
      "address": "China",
      "course": "Art",
      "email": "susanthomas@example.com"
    },
    {
      "id": 29,
      "name": "James Johnson",
      "age": 31,
      "contact": "2109876543",
      "address": "Japan",
      "course": "Music",
      "email": "jamesjohnson@example.com"
    },
    {
      "id": 30,
      "name": "Barbara Walker",
      "age": 27,
      "contact": "1098765432",
      "address": "Korea",
      "course": "French",
      "email": "barbarawalker@example.com"
    },
    {
      "id": 31,
      "name": "Michael Anderson",
      "age": 33,
      "contact": "9876543210",
      "address": "Germany",
      "course": "Spanish",
      "email": "michaelanderson@example.com"
    },
    {
      "id": 32,
      "name": "Sarah Taylor",
      "age": 23,
      "contact": "8765432109",
      "address": "France",
      "course": "German",
      "email": "sarahtaylor@example.com"
    },
    {
      "id": 33,
      "name": "Jacob Brown",
      "age": 29,
      "contact": "7654321098",
      "address": "Germany",
      "course": "Italian",
      "email": "jacobrown@example.com"
    },
    {
      "id": 34,
      "name": "Amelia Miller",
      "age": 22,
      "contact": "6543210987",
      "address": "Italy",
      "course": "Spanish",
      "email": "ameliamiller@example.com"
    },
    {
      "id": 35,
      "name": "Oliver Jones",
      "age": 34,
      "contact": "5432109876",
      "address": "Spain",
      "course": "French",
      "email": "oliverjones@example.com"
    },
    {
      "id": 36,
      "name": "Eleanor Wilson",
      "age": 26,
      "contact": "4321098765",
      "address": "France",
      "course": "German",
      "email": "eleanorwilson@example.com"
    },
    {
      "id": 37,
      "name": "Benjamin Garcia",
      "age": 31,
      "contact": "3210987654",
      "address": "Germany",
      "course": "Italian",
      "email": "benjamingarcia@example.com"
    },
    {
      "id": 38,
      "name": "Emily Davis",
      "age": 24,
      "contact": "2109876543",
      "address": "Korea",
      "course": "Arabic",
      "email": "emildavis@example.com"
    },
    {
      "id": 39,
      "name": "Richard Brown",
      "age": 30,
      "contact": "1098765432",
      "address": "Hindi",
      "course": "Hindi",
      "email": "richardbrown@example.com"
    },
    {
      "id": 40,
      "name": "Louise Wilson",
      "age": 26,
      "contact": "9876543210",
      "address": "Portuguese",
      "course": "Portuguese",
      "email": "louisewilson@example.com"
    },
    {
      "id": 41,
      "name": "David Taylor",
      "age": 32,
      "contact": "8765432109",
      "address": "Russia",
      "course": "Russian",
      "email": "davidtaylor@example.com"
    },
    {
      "id": 42,
      "name": "Sarah Miller",
      "age": 28,
      "contact": "7654321098",
      "address": "China",
      "course": "Chinese",
      "email": "sarahmiller@example.com"
    },
    {
      "id": 43,
      "name": "Michael Jones",
      "age": 22,
      "contact": "6543210987",
      "address": "Japan",
      "course": "Japanese",
      "email": "michaeljones@example.com"
    },
    {
      "id": 44,
      "name": "Jessica Brown",
      "age": 30,
      "contact": "5432109876",
      "address": "Korea",
      "course": "Korean",
      "email": "jessicabrown@example.com"
    },
    {
      "id": 45,
      "name": "Daniel Garcia",
      "age": 35,
      "contact": "4321098765",
      "address": "Arab",
      "course": "Arabic",
      "email": "danielgarcia@example.com"
    }
    // Add more dummy data here
  ];

  useEffect(() => {
    // Set the initial data and filtered data
    setData(dummyData);
    setFilteredData(dummyData);
  }, []);

  // Handle search functionality
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    const filteredData = data.filter((item) =>
      Object.values(item).some((value) =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredData(filteredData);
  };

  // Handle sort functionality
  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortOrder('asc');
    }
    const sortedData = filteredData.slice();
    sortedData.sort((a, b) => {
      if (a[column] < b[column]) {
        return -1;
      }
      if (a[column] > b[column]) {
        return 1;
      }
      return 0;
    });
    setFilteredData(sortedData);

  };
  // Handle pagination functionality
  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate pagination variables
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  // Render the table with the data, search input, sort buttons, and pagination
  return (
    <div style={{ margin: '0px', padding: '0px'}}>
      <Header />
      <nav>
        <div className='container'>
          <div className='row'>
              <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search leads" />
              <select value={sortColumn} onChange={(e) => handleSort(e.target.value)}>
                <option value="id">ID</option>
                <option value="name">Name</option>
                <option value="age">Age</option>
                <option value="contact">Contact</option>
                <option value="address">Address</option>
                <option value="course">Course</option>
                <option value="email">Email</option>
              </select>
          </div>
          <table>
            <thead>
              <tr>
                <th onClick={() => handleSort('id')}>ID</th>
                <th onClick={() => handleSort('name')}>Name</th>
                <th onClick={() => handleSort('age')}>Age</th>
                <th onClick={() => handleSort('contact')}>Contact</th>
                <th onClick={() => handleSort('address')}>Address</th>
                <th onClick={() => handleSort('course')}>Course</th>
                <th onClick={() => handleSort('email')}>Email</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.contact}</td>
                  <td>{item.address}</td>
                  <td>{item.course}</td>
                  <td>{item.email}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </nav>
      <h4>Total {filteredData.length}</h4>
      <div className="pagination">
      {
        currentPage > 1 && (
          <button className="previous" onClick={() => handlePagination(currentPage - 1)}>&lt;</button>
        )
      }
      Page
      <button key={currentPage} onClick={() => handlePagination(currentPage)}>
        {currentPage} 
      </button>
      of {totalPages}
      {
        currentPage < totalPages && (
          <button className="next" onClick={() => handlePagination(currentPage + 1)}>&gt;</button>
        )
      }
  </div>
    </div>
  );
};

export default App;
