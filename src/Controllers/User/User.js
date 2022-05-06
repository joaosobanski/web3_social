import axios from "axios";

export async function signin(email, pass, name, birthDay) {
  try {
    let res = await axios.post(`${process.env.REACT_APP_URL_API}/user/signin`, {
      email,
      pass,
      name,
      birthDay,
    });
    if (res.status === 201) {
      return res.data;
    }
    if (res.status === 200) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
  }
}

export async function login(email, pass) {
  try {
    let res = await axios.get(
      `${process.env.REACT_APP_URL_API}/user/login`,
      {
        params: {
          email,
          pass
        }
      }
    );
    console.log('res.data', res)
    if (res.status === 200 || res.status === 400) {
      return res.data;
    } else if (res.status === 400 && !res.data) {
      throw new Error("Bad request");
    }
  } catch (error) {
    console.log(error);
  }
}
