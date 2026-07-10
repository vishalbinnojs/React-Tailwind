import { useState, useEffect, useRef } from "react";

const Fetch = () => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editUser, setEditUser] = useState("");
  const ipRef = useRef(null);

  useEffect(() => {
    ipRef.current?.focus();
  }, [editingId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data from API");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Failed to fetch data....! ", error);
      }
    };
    
    // const fetchData = ()=>fetch("https://jsonplaceholder.typicode.com/users")
    // .then(res => res.json())
    // .then(data => setUsers(data));

    fetchData();
  }, []);
  const addDetails = async () => {
    const payload = {
      name: newUser.trim(),
      body: "New User Added",
    };

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to add user");
      }
      const data = await response.json();

      setUsers([data, ...users]);
      setNewUser("");
    } catch (error) {
      console.error("Unable to post data.....!", error);
    }
  };

  const updateDetails = async (id) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: editUser.trim(),
            body: "Updated Content",
          }),
        },
      );

      if (!response.ok) {
        throw new Error("Response Status....", response.status);
      }

      const updatedUser = await response.json();
      console.log(updatedUser);

      setUsers(() => {
        return users.map((user) => (user.id === id ? updatedUser : user));
      });
      setNewUser("");
      setEditingId(null);
    } catch (error) {
      console.error("self added data cannot be added.....!", error);
    }
  };
  const deleteDetails = async (id, name) => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        {
          method: "DELETE",
        },
      );
      console.log(response);

      if (!response.ok) {
        throw new Error(`Response Status: ${response.status}`);
      }

      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Unable to delete data.....!", error);
    }
  };

  if (!users) return <p>Loading.....</p>;

  return (
    <>
      <div>
        <h1 className="text-4xl text-center p-2 bg-violet-600">CRUD</h1>
        <div className="mt-6 m-2 flex justify-center items-center ">
          <input
            className="text-black bg-zinc-200 p-2 outline-none"
            type="text"
            placeholder="Enter Name"
            id="name"
            name="name"
            value={newUser}
            onChange={(e) => setNewUser(e.target.value)}
          />
          <button
            className="bg-green-500 p-2 rounded-r-box  cursor-pointer"
            onClick={addDetails}
          >
            Add
          </button>
        </div>
        <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {users.map((user, i) => (
            <div
              key={i}
              className="bg-violet-400 p-4 rounded-lg shadow-md sm:max-w-96 min-h-24"
            >
              {editingId === user.id ? (
                <input
                  type="text"
                  className="mb-3 bg-zinc-100 text-zinc-900 ouline-none px-2 py-1 border-zinc-100 border-2"
                  name="editName"
                  id="editName"
                  value={editUser}
                  onChange={(e) => setEditUser(e.target.value)}
                  ref={ipRef}
                />
              ) : (
                <h2 className="text-xl font-bold mb-2">{user.name}</h2>
              )}

              <div className="flex justify-center gap-3">
                <button
                  onClick={() =>
                    editingId
                      ? updateDetails(user.id)
                      : (setEditingId(user.id), setEditUser(user.name))
                  }
                  className="bg-yellow-500 p-2 rounded cursor-pointer"
                >
                  {editingId === user.id ? "update" : "Edit"}
                </button>
                <button
                  onClick={() => {
                    if (confirm("Are you sure you want to delete this....!")) {
                      deleteDetails(user.id, user.name);
                    }
                  }}
                  className="bg-red-500 p-2 rounded  cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Fetch;