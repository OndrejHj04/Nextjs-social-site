export const getUsers = async () => {
  const res = await fetch("http://localhost:3000/api/users/get", {
    cache: "no-store",
  });
  const data = await res.json();

  return data;
};

export const getUserDetail = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/user/${id}/get`, {
    cache: "no-store",
  });
  const data = await res.json();

  return data;
};

export const deleteUser = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/user/${id}/delete`, {
    method: "POST",
    cache: "no-store",
  });
  const data = await res.json();

  return data;
};

export const createUser = async (user) => {
  const res = await fetch(`http://localhost:3000/api/users/create`, {
    method: "POST",
    cache: "no-store",
    body: JSON.stringify(user),
  });
  const data = await res.json();

  return data;
};

export const editUser = async (user, id: string) => {
  const res = await fetch(`http://localhost:3000/api/user/${id}/edit`, {
    method: "POST",
    cache: "no-store",
    body: JSON.stringify(user),
  });
  const data = await res.json();

  return data;
};
