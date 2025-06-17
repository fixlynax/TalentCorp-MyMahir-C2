// let promise = fetch("https://jsonplaceholder.typicode.com/users/1");
 
// promise.then(response => {
//    console.log("Response received:", response);
//  });


//  fetch("https://jsonplaceholder.typicode.com/posts/1")
//    .then(response => response.json()) // parse JSON from response
//    .then(data => {
//      console.log(data);
//    });


//    fetch("https://jsonplaceholder.typicode.com/users")
//    .then(res => res.json())
//    .then(users => {
//      users.forEach(user => {
//        console.log(`${user.name} (${user.email})`);
//      });
//    });

// console.log("Before fetch");
 
//  fetch("https://jsonplaceholder.typicode.com/posts/1")
//    .then(res => res.json())
//    .then(data => console.log("Fetched:", data));
 
// console.log("After fetch");

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//    .then(response => response.json())
//    .then(data => {
//      console.log("Title:", data.title);
//    });

// async function fetchData() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//   const data = await response.json();
//     console.log("Fetched data:", data);
  
// fetchData();
// }

// async function getPost() {
//     //try ctach is used to handle errors in async functions
//     // if the fetch fails or the response is not ok, it will throw an error
//     //Catch will catch the error and log it
//     // throw new Error will create a new error object with the message "Post not found."
//     let title = document.getElementById("title");
//    try {
//      const res = await fetch("https://jsonplaceholder.typicode.com/posts/100");
//     //  if (!res.ok) throw new Error("Post not found.");
//      const data = await res.json();

//     //  let title = document.getElementById("title");
//      title.innerHTML = data.title;
//      console.log(data);
//    } catch (err) {
//     //  console.error("Error fetching post:", err.message);
//     // let title = document.getElementById("title")
//      title.innerHTML = err.message
//     //  console.log(data);
//     console.error("Error fetching post:", err.message);
//    }
// }
// getPost();

document.getElementById("getPostBtn").addEventListener("click", async () => {
  const postId = document.getElementById("postIdInput").value;
  const output = document.getElementById("postTitle");

  output.textContent = "Loading...";

  try {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );

    if (!res.ok) throw new Error("Post not found");

    const data = await res.json();
    const { userId, title, body } = data;

    output.innerHTML = `
      <h3>User ID: ${userId}</h3>
      <p><strong>Title:</strong> ${title}</p>
      <p><strong>Body:</strong> ${body}</p>
    `;
  } catch (err) {
    output.textContent = err.message;
  }
});
