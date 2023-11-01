const getNews = async () => {
  const response = await fetch(
    "https://newsapi.org/v2/everything?q=apple&from=2023-10-30&to=2023-10-30&sortBy=popularity&apiKey=75db485818634770832ab328071289d4"
  );
  if (!response.ok) {
    throw new Error(`${response.status}`);
  }
  return await response.json();
};

export default getNews

