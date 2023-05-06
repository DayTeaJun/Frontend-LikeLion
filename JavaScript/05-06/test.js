async function message() {
  let hello = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("hello");
    }, 100);
  });

  let world = await new Promise((resolve) => {
    setTimeout(() => {
      resolve("world");
    }, 100);
  });

  console.log(`${hello} ${world}`);
}