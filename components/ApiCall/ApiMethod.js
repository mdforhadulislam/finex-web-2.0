// export const ROOT_API = `http://localhost:5000/`;
export const ROOT_API = `https://finex-server.onrender.com/`;
export const ROOT_API_V1 = `${ROOT_API}api/v1/`;


export const LOGIN_API = `${ROOT_API_V1}auth/login/`
export const REGISTER_API = `${ROOT_API_V1}auth/register/`
export const LOGOUT_API = `${ROOT_API_V1}auth/logout/`

export const USER_ACCOUNT_API = (phone)=> `${ROOT_API_V1}account/${phone}`

export const PUBLIC_TRACKING_API = (id) => `${ROOT_API_V1}track/${id}`;
export const VISITOR_POST_API = `${ROOT_API_V1}utils/visitor/`


export const RATE_CHART_API = `${ROOT_API_V1}price/`

export const GET_SHIPPING_PRICE_QUOTE = (fromID, toID)=> `${RATE_CHART_API}${fromID}/${toID}/`

export const COUNTRY_API = `${ROOT_API_V1}utils/country/`
export const COUNTRY_SINGLE_API =(id)=> `${COUNTRY_API}${id}`


export const CONTACT_API = `${ROOT_API_V1}utils/contact/`



const apiKey = `finex157705771418342144011930631910`


export const getRequestSend = async (url, header) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'finex': apiKey,
        ...header,
      },
    });
    const data = await response.json();
    return { data: data?.data, message: data?.message, status: data?.status };
  } catch (error) {
    return { message: "Error", status: 200, data: "Error" };
  }
};

export const postRequestSend = async (url, header, dataSend) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'finex': apiKey,
        ...header,
      },
      body: JSON.stringify(dataSend),
    });
    const data = await response.json();
    return { data: data?.data, message: data?.message, status: data?.status };
  } catch (error) {
    return { message: "Error", status: 200, data: "Error" };
  }
};

export const putRequestSend = async (url, header, dataSend) => {
  try {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        'finex': apiKey,
        ...header,
      },
      body: JSON.stringify(dataSend),
    });
    const data = await response.json();
    return { data: data?.data, message: data?.message, status: data?.status };
  } catch (error) {
    return { message: "Error", status: 200, data: "Error" };
  }
};

export const deleteRequestSend = async (url, header) => {
  try {
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        'finex': apiKey,
        ...header,
      },
    });
    const data = await response.json();
    return { data: data?.data, message: data?.message, status: data?.status };
  } catch (error) {
    return { message: "Error", status: 200, data: "Error" };
  }
};
