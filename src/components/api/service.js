const baseUrl = process.env.REACT_APP_URL;

export const handleApiResponse = async (url, formdata) => {
  try {
    const response = await fetch(`${baseUrl}${url}`, {
      method: "POST",
      body: formdata,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};
