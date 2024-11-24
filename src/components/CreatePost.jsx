import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
          type="text"
          className="form-control"
          name="userId"
          id="userId"
          placeholder="Your user id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input type="text" className="form-control" id="title" name="title" />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          className="form-control"
          id="body"
          rows={5}
          name="body"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="likes" className="form-label">
          Number of likes
        </label>
        <input
          type="text"
          className="form-control"
          id="likes"
          placeholder="How many people reacted to this post"
          name="likes"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="dislikes" className="form-label">
          Number of dislikes
        </label>
        <input
          type="text"
          className="form-control"
          id="dislikes"
          placeholder="How many people reacted to this post"
          name="dislike"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          className="form-control"
          id="tags"
          placeholder="Please enter tags using space"
          name="tags"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  postData.reactions = {
    likes: postData.likes,
    dislikes: postData.dislike,
  };
  console.log(postData);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((resObj) => {
      console.log(resObj);
    });
  return redirect("/");
}
export default CreatePost;
