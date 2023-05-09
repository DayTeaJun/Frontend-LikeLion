const docmContainer = document.querySelector("#root");
const root = ReactDOM.createRoot(docmContainer);

async function setUp() {
  const response = await loadData();
  wenivPost(response);
  // console.log(response);
}

async function loadData() {
  try {
    const response = await fetch("http://test.api.weniv.co.kr/mall");
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  } catch (error) {
    console.log(error);
  }
}

function wenivPost(data) {
  const dataEnd = [];
  data.map((el) => {
    dataEnd.push(body(el));
  });
  root.render(dataEnd);
}

function body(data) {
  return (
    <div>
      <h1>{data.productName}</h1>
      <p>{data.price}</p>
    </div>
  );
}

setUp();
